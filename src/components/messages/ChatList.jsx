/**
 * ChatList.jsx - Conversations Sidebar Component
 *
 * Displays a list of conversations with search, filtering, and selection.
 * Shows conversation previews, unread counts, and online status.
 *
 * @author Kilo Code - TwinRally Team
 * @version 1.0.0
 */

import React, { useState } from 'react';
import { Search, MessageCircle, Users, X } from 'lucide-react';

const ChatList = ({
  conversations = [],
  selectedConversationId,
  onConversationSelect,
  className = ""
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredConversations = conversations.filter(conversation => {
    if (!searchTerm.trim()) return true;

    const searchLower = searchTerm.toLowerCase();
    const conversationName = conversation.type === 'group' ? conversation.name : conversation.participants.find(p => p.id !== 'user_sarah_johnson')?.name || '';
    const lastMessage = conversation.lastMessage?.content || '';

    return conversationName.toLowerCase().includes(searchLower) ||
           lastMessage.toLowerCase().includes(searchLower);
  });

  const formatLastMessageTime = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInMinutes = Math.floor((now - date) / (1000 * 60));

    if (diffInMinutes < 1) return 'now';
    if (diffInMinutes < 60) return `${diffInMinutes}m`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h`;
    if (diffInMinutes < 10080) return `${Math.floor(diffInMinutes / 1440)}d`;
    return date.toLocaleDateString();
  };

  const getConversationDisplayName = (conversation) => {
    if (conversation.type === 'group') {
      return conversation.name;
    }
    // For direct messages, show the other participant's name
    return conversation.participants.find(p => p.id !== 'user_sarah_johnson')?.name || 'Unknown';
  };

  const getConversationAvatar = (conversation) => {
    if (conversation.type === 'group') {
      return (
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[color:var(--pink)] to-[color:var(--blue)] flex items-center justify-center">
          <Users className="w-6 h-6 text-white" />
        </div>
      );
    }
    // For direct messages, show the other participant's avatar
    const otherParticipant = conversation.participants.find(p => p.id !== 'user_sarah_johnson');
    return (
      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/20">
        <img
          src={otherParticipant?.avatar}
          alt={otherParticipant?.name}
          className="w-full h-full object-cover"
        />
      </div>
    );
  };

  return (
    <div className={`bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 h-full flex flex-col ${className}`}>
      {/* Header - Fixed Height */}
      <div className="p-4 border-b border-white/10 flex-shrink-0" style={{ height: '100px' }}>
        <h2 className="text-lg font-bold text-white mb-3">Messages</h2>

        {/* Search */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="w-4 h-4 text-gray-400" />
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search conversations..."
            className="w-full pl-10 pr-8 py-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--pink)]/50 focus:border-transparent"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Conversations List - Scrollable with proper height */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden" style={{ minHeight: '0' }}>
        {filteredConversations.length > 0 ? (
          filteredConversations.map((conversation) => (
            <div
              key={conversation.id}
              onClick={() => onConversationSelect(conversation.id)}
              className={`
                p-4 border-b border-white/5 cursor-pointer transition-all duration-200 hover:bg-white/5
                ${selectedConversationId === conversation.id ? 'bg-white/10 border-l-4 border-l-[color:var(--pink)]' : ''}
              `}
            >
              <div className="flex items-start space-x-3">
                {/* Avatar with online indicator */}
                <div className="relative flex-shrink-0">
                  {getConversationAvatar(conversation)}
                  {conversation.isOnline && (
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-gray-900 rounded-full"></div>
                  )}
                </div>

                {/* Conversation Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-sm font-medium text-white truncate">
                      {getConversationDisplayName(conversation)}
                    </h3>
                    <span className="text-xs text-gray-400 flex-shrink-0">
                      {formatLastMessageTime(conversation.lastMessage?.timestamp)}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <p className="text-xs text-gray-400 truncate flex-1 mr-2">
                      {conversation.lastMessage?.content || 'No messages yet'}
                    </p>

                    {conversation.unreadCount > 0 && (
                      <div className="bg-[color:var(--pink)] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0">
                        {conversation.unreadCount > 9 ? '9+' : conversation.unreadCount}
                      </div>
                    )}
                  </div>

                  {/* Group participants count */}
                  {conversation.type === 'group' && (
                    <div className="text-xs text-gray-500 mt-1">
                      {conversation.participants.length} members
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="p-8 text-center">
            <MessageCircle className="w-12 h-12 text-gray-400 mx-auto mb-3" />
            <p className="text-gray-400 text-sm">
              {searchTerm ? 'No conversations found' : 'No conversations yet'}
            </p>
            <p className="text-gray-500 text-xs mt-1">
              {searchTerm ? 'Try a different search term' : 'Start a conversation to connect with twins'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatList;