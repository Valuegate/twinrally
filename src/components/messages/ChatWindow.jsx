/**
 * ChatWindow.jsx - Individual Chat Interface Component
 *
 * Displays messages for a selected conversation with input for sending new messages.
 * Handles message display, scrolling, and real-time-like interactions.
 *
 * @author Kilo Code - TwinRally Team
 * @version 1.0.0
 */

import React, { useState, useEffect, useRef } from "react";
import { Send, Phone, Video, MoreVertical, ArrowLeft } from "lucide-react";
import MessageBubble from "./MessageBubble";

const ChatWindow = ({
  conversation,
  messages = [],
  onSendMessage,
  onBack,
  className = "",
}) => {
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Add padding to account for fixed header and input
  useEffect(() => {
    const messagesContainer = document.querySelector(".messages-container");
    if (messagesContainer) {
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      onSendMessage?.(newMessage.trim());
      setNewMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(e);
    }
  };

  const getConversationDisplayName = () => {
    if (conversation.type === "group") {
      return conversation.name;
    }
    return (
      conversation.participants.find((p) => p.id !== "user_sarah_johnson")
        ?.name || "Unknown"
    );
  };

  const getConversationAvatar = () => {
    if (conversation.type === "group") {
      return (
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[color:var(--pink)] to-[color:var(--blue)] flex items-center justify-center">
          <span className="text-white font-bold text-sm">
            {conversation.participants.length}
          </span>
        </div>
      );
    }
    const otherParticipant = conversation.participants.find(
      (p) => p.id !== "user_sarah_johnson"
    );
    return (
      <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/20">
        <img
          src={otherParticipant?.avatar}
          alt={otherParticipant?.name}
          className="w-full h-full object-cover"
        />
      </div>
    );
  };

  const isOnline = conversation?.isOnline;

  return (
    <div
      className={`relative bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden h-full flex flex-col ${className}`}
    >
      {/* Chat Header - Fixed at top */}
      <div className="p-4 border-b border-white/10 flex items-center justify-between flex-shrink-0 bg-[color:var(--bg)]/80 backdrop-blur-sm z-10">
        <div className="flex items-center space-x-3">
          {/* Back button for mobile */}
          <button
            onClick={onBack}
            className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-gray-400" />
          </button>

          {/* Avatar with online indicator */}
          <div className="relative">
            {getConversationAvatar()}
            {isOnline && (
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-gray-900 rounded-full"></div>
            )}
          </div>

          {/* Conversation info */}
          <div>
            <h3 className="text-lg font-bold text-white">
              {getConversationDisplayName()}
            </h3>
            <p className="text-sm text-gray-400">
              {conversation.type === "group"
                ? `${conversation.participants.length} members`
                : isOnline
                ? "Online"
                : "Offline"}
            </p>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex items-center space-x-2">
          <button className="p-2 hover:bg-white/10 rounded-lg transition-colors text-gray-400 hover:text-white">
            <Phone className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-white/10 rounded-lg transition-colors text-gray-400 hover:text-white">
            <Video className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-white/10 rounded-lg transition-colors text-gray-400 hover:text-white">
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Messages Area - Takes remaining space and scrolls independently */}
      <div
        className="flex-1 overflow-y-auto overflow-x-hidden p-4 space-y-2 mt-16 mb-20"
        style={{ minHeight: "0" }}
      >
        {messages.length > 0 ? (
          messages.map((message) => (
            <MessageBubble
              key={message.id}
              message={message}
              isOwnMessage={message.senderId === "user_sarah_johnson"}
            />
          ))
        ) : (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Send className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Start a conversation
              </h3>
              <p className="text-gray-400 text-sm">
                Send a message to begin chatting with{" "}
                {getConversationDisplayName()}
              </p>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Message Input - Fixed at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10 bg-[color:var(--bg)]/80 backdrop-blur-sm">
        <form
          onSubmit={handleSendMessage}
          className="flex items-end space-x-3 h-full"
        >
          <div className="flex-1">
            <textarea
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={`Message ${getConversationDisplayName()}...`}
              rows={1}
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-[color:var(--pink)]/50 focus:border-transparent transition-all duration-300 max-h-32"
              style={{ minHeight: "48px" }}
            />
          </div>
          <button
            type="submit"
            disabled={!newMessage.trim()}
            className="p-3 bg-gradient-to-r from-[color:var(--pink)] to-[color:var(--blue)] text-white rounded-2xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatWindow;
