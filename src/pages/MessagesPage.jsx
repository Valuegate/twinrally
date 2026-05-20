/**
 * MessagesPage - TwinRally Messages Hub Page
 *
 * Main messaging interface combining ChatList and ChatWindow components.
 * Provides a full-featured messaging experience with conversation management.
 *
 * Route: /messages
 *
 * @author Kilo Code - TwinRally Team
 * @version 1.0.0
 */

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/layout/Footer";
import ChatList from "@/components/messages/ChatList";
import ChatWindow from "@/components/messages/ChatWindow";
import { MessageCircle, Users } from "lucide-react";
import {
  mockConversations,
  getMessagesByConversationId,
  getConversationById,
  markConversationAsRead,
} from "@/data/mockMessages";

const MessagesPage = () => {
  const navigate = useNavigate();
  const [conversations, setConversations] = useState([]);
  const [selectedConversationId, setSelectedConversationId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  /**
   * Load conversations on component mount
   */
  useEffect(() => {
    const loadConversations = async () => {
      setLoading(true);

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Sort conversations by last message timestamp
      const sortedConversations = [...mockConversations].sort(
        (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
      );

      setConversations(sortedConversations);

      // Auto-select first conversation if available
      if (sortedConversations.length > 0 && !selectedConversationId) {
        setSelectedConversationId(sortedConversations[0].id);
      }

      setLoading(false);
    };

    loadConversations();
  }, []);

  /**
   * Load messages when conversation changes
   */
  useEffect(() => {
    if (selectedConversationId) {
      const conversationMessages = getMessagesByConversationId(
        selectedConversationId
      );
      setMessages(conversationMessages);

      // Mark conversation as read
      markConversationAsRead(selectedConversationId);

      // Update conversations list to reflect read status
      setConversations((prevConversations) =>
        prevConversations.map((conv) =>
          conv.id === selectedConversationId
            ? { ...conv, unreadCount: 0 }
            : conv
        )
      );
    }
  }, [selectedConversationId]);

  /**
   * Handle conversation selection
   */
  const handleConversationSelect = (conversationId) => {
    setSelectedConversationId(conversationId);
  };

  /**
   * Handle sending a new message
   */
  const handleSendMessage = (content) => {
    if (!selectedConversationId) return;

    const newMessage = {
      id: `msg_${Date.now()}`,
      conversationId: selectedConversationId,
      senderId: "user_sarah_johnson",
      senderName: "Sarah Johnson",
      content,
      timestamp: new Date().toISOString(),
      type: "text",
      read: true,
    };

    // Add message to current messages
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    // Update conversation's last message
    setConversations((prevConversations) =>
      prevConversations.map((conv) =>
        conv.id === selectedConversationId
          ? {
              ...conv,
              lastMessage: {
                id: newMessage.id,
                senderId: newMessage.senderId,
                senderName: newMessage.senderName,
                content: newMessage.content,
                timestamp: newMessage.timestamp,
                type: newMessage.type,
              },
              updatedAt: newMessage.timestamp,
            }
          : conv
      )
    );

    // Simulate reply after a delay (for demo purposes)
    setTimeout(() => {
      const conversation = getConversationById(selectedConversationId);
      if (conversation) {
        const otherParticipant = conversation.participants.find(
          (p) => p.id !== "user_sarah_johnson"
        );
        const replies = [
          "Thanks for your message! I'll get back to you soon.",
          "That sounds great! Let's discuss the details.",
          "I appreciate you reaching out. How can I help?",
          "Interesting! Tell me more about that.",
          "Perfect! I'm looking forward to it.",
        ];

        const replyMessage = {
          id: `msg_reply_${Date.now()}`,
          conversationId: selectedConversationId,
          senderId: otherParticipant.id,
          senderName: otherParticipant.name,
          content: replies[Math.floor(Math.random() * replies.length)],
          timestamp: new Date().toISOString(),
          type: "text",
          read: false,
        };

        setMessages((prevMessages) => [...prevMessages, replyMessage]);

        // Update conversation with reply
        setConversations((prevConversations) =>
          prevConversations.map((conv) =>
            conv.id === selectedConversationId
              ? {
                  ...conv,
                  lastMessage: {
                    id: replyMessage.id,
                    senderId: replyMessage.senderId,
                    senderName: replyMessage.senderName,
                    content: replyMessage.content,
                    timestamp: replyMessage.timestamp,
                    type: replyMessage.type,
                  },
                  updatedAt: replyMessage.timestamp,
                  unreadCount: conv.unreadCount + 1,
                }
              : conv
          )
        );
      }
    }, 2000 + Math.random() * 3000); // Random delay between 2-5 seconds
  };

  /**
   * Handle back navigation (for mobile)
   */
  const handleBack = () => {
    setSelectedConversationId(null);
  };

  const selectedConversation = selectedConversationId
    ? getConversationById(selectedConversationId)
    : null;

  return (
    <div className="h-screen bg-[color:var(--bg)] flex flex-col overflow-hidden">
      {/* Header - Fixed at top */}
      <div className="py-4 border-b border-white/10 flex-shrink-0 bg-[color:var(--bg)] z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white mb-1">
              <span className="bg-gradient-to-r from-[color:var(--pink)] to-[color:var(--blue)] bg-clip-text text-transparent">
                Messages
              </span>
            </h1>
            <p className="text-gray-300 text-sm">
              Connect and chat with the twin community
            </p>
          </div>
        </div>
      </div>

      {/* Main Content - Flex container that takes remaining height */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <div className="max-w-7xl mx-auto w-full h-full px-4 py-4">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden h-full flex flex-col md:flex-row">
            {/* Chat List - Scrollable */}
            <div
              className={`${
                selectedConversationId ? "hidden md:flex" : "flex"
              } flex-col w-full md:w-1/3 border-r border-white/10 h-full`}
            >
              <div className="flex-shrink-0 p-4 border-b border-white/10">
                <h2 className="text-lg font-semibold text-white">
                  Conversations
                </h2>
              </div>
              <div className="flex-1 overflow-y-auto">
                <ChatList
                  conversations={conversations}
                  selectedConversationId={selectedConversationId}
                  onSelectConversation={handleConversationSelect}
                  loading={loading}
                />
              </div>
            </div>

            {/* Chat Window - Scrollable */}
            {selectedConversationId ? (
              <div className="flex-1 flex flex-col h-full">
                <ChatWindow
                  conversation={selectedConversation}
                  messages={messages}
                  onSendMessage={handleSendMessage}
                  onBack={handleBack}
                  className="h-full"
                />
              </div>
            ) : (
              <div className="hidden md:flex flex-1 items-center justify-center p-8">
                <div className="text-center">
                  <MessageCircle className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Select a conversation
                  </h3>
                  <p className="text-gray-400">
                    Choose an existing chat or start a new one
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* No conversations state */}
      {conversations.length === 0 && (
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-12 text-center">
          <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4 mx-auto">
            <MessageCircle className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">
            No messages yet
          </h3>
          <p className="text-gray-400 mb-6">
            Start connecting with twins to begin conversations and build
            relationships
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/connections")}
              className="px-6 py-3 bg-gradient-to-r from-[color:var(--pink)] to-[color:var(--blue)] text-white rounded-lg hover:scale-105 transition-all duration-300"
            >
              <Users className="w-4 h-4 mr-2 inline" />
              Browse Connections
            </button>
            <button
              onClick={() => navigate("/events")}
              className="px-6 py-3 bg-white/10 text-gray-300 rounded-lg hover:bg-white/20 transition-all duration-300"
            >
              Discover Events
            </button>
          </div>
        </div>
      )}

      {/* Footer - Only show when no conversations */}
      {conversations.length === 0 && <Footer />}
    </div>
  );
};

export default MessagesPage;
