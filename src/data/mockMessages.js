/**
 * Mock Messages - TwinRally Messaging Data
 *
 * Sample message data for Messages System development and testing.
 * Includes conversations, direct messages, and group chats.
 *
 * Data Architecture:
 * - Conversations with participants and metadata
 * - Individual messages with timestamps and types
 * - Message types: text, image, system
 * - Read/unread status tracking
 *
 * Future Integration:
 * - Replace with real-time messaging API
 * - Add message encryption
 * - Support for file attachments
 * - Typing indicators and read receipts
 *
 * @author Kilo Code - TwinRally Team
 * @version 1.0.0
 */

export const mockConversations = [
  {
    id: "conv_001",
    type: "direct", // direct, group
    participants: [
      { id: "user_sarah_johnson", name: "Sarah Johnson", avatar: "/public/twinrally_lg_01.png" },
      { id: "user_michael_david_chen", name: "Michael & David Chen", avatar: "/public/twinrally_lg_10.png" }
    ],
    lastMessage: {
      id: "msg_001",
      senderId: "user_michael_david_chen",
      senderName: "Michael Chen",
      content: "Thanks for the festival invite! We're definitely interested in sponsoring next year.",
      timestamp: "2025-01-19T14:30:00Z",
      type: "text"
    },
    unreadCount: 2,
    updatedAt: "2025-01-19T14:30:00Z",
    isOnline: true
  },
  {
    id: "conv_002",
    type: "group",
    name: "Twin Festival Organizers",
    participants: [
      { id: "user_sarah_johnson", name: "Sarah Johnson", avatar: "/public/twinrally_lg_01.png" },
      { id: "user_amanda_researcher", name: "Dr. Amanda Kensington", avatar: "/public/twinrally_lg_08.png" },
      { id: "user_alex_twin", name: "Alex Rodriguez", avatar: "/public/twinrally_lg_01.png" },
      { id: "user_lisa_twin", name: "Lisa Thompson", avatar: "/public/twinrally_lg_08.png" }
    ],
    lastMessage: {
      id: "msg_002",
      senderId: "user_amanda_researcher",
      senderName: "Dr. Amanda",
      content: "I've updated the research presentation schedule for tomorrow",
      timestamp: "2025-01-18T09:15:00Z",
      type: "text"
    },
    unreadCount: 0,
    updatedAt: "2025-01-18T09:15:00Z",
    isOnline: false
  },
  {
    id: "conv_003",
    type: "direct",
    participants: [
      { id: "user_sarah_johnson", name: "Sarah Johnson", avatar: "/public/twinrally_lg_01.png" },
      { id: "user_alex_twin", name: "Alex Rodriguez", avatar: "/public/twinrally_lg_01.png" }
    ],
    lastMessage: {
      id: "msg_003",
      senderId: "user_alex_twin",
      senderName: "Alex",
      content: "Hey Sarah! How was the European twin meetup? We saw your photos!",
      timestamp: "2025-01-17T16:45:00Z",
      type: "text"
    },
    unreadCount: 1,
    updatedAt: "2025-01-17T16:45:00Z",
    isOnline: false
  },
  {
    id: "conv_004",
    type: "direct",
    participants: [
      { id: "user_sarah_johnson", name: "Sarah Johnson", avatar: "/public/twinrally_lg_01.png" },
      { id: "user_emma_twin", name: "Emma & Sophia Williams", avatar: "/public/twinrally_lg_08.png" }
    ],
    lastMessage: {
      id: "msg_004",
      senderId: "user_emma_twin",
      senderName: "Emma",
      content: "We'd love to join the virtual twin meetup this weekend!",
      timestamp: "2025-01-16T12:00:00Z",
      type: "text"
    },
    unreadCount: 0,
    updatedAt: "2025-01-16T12:00:00Z",
    isOnline: true
  },
  {
    id: "conv_005",
    type: "group",
    name: "European Twins Network",
    participants: [
      { id: "user_sarah_johnson", name: "Sarah Johnson", avatar: "/public/twinrally_lg_01.png" },
      { id: "user_marco_twin", name: "Marco & Luca", avatar: "/public/twinrally_lg_10.png" },
      { id: "user_freya_twin", name: "Freya & Astrid", avatar: "/public/twinrally_lg_01.png" },
      { id: "user_viktor_twin", name: "Viktor & Dmitri", avatar: "/public/twinrally_lg_08.png" },
      { id: "user_claire_twin", name: "Claire & Marie", avatar: "/public/twinrally_lg_01.png" }
    ],
    lastMessage: {
      id: "msg_005",
      senderId: "user_freya_twin",
      senderName: "Freya",
      content: "The Stockholm meetup was amazing! Looking forward to the next one.",
      timestamp: "2025-01-15T18:30:00Z",
      type: "text"
    },
    unreadCount: 3,
    updatedAt: "2025-01-15T18:30:00Z",
    isOnline: false
  },
  {
    id: "conv_006",
    type: "direct",
    participants: [
      { id: "user_sarah_johnson", name: "Sarah Johnson", avatar: "/public/twinrally_lg_01.png" },
      { id: "user_james_twin", name: "James & Oliver Mills", avatar: "/public/twinrally_lg_10.png" }
    ],
    lastMessage: {
      id: "msg_006",
      senderId: "user_james_twin",
      senderName: "James",
      content: "Thanks for the platform recommendations! We'll definitely check them out.",
      timestamp: "2025-01-14T14:20:00Z",
      type: "text"
    },
    unreadCount: 0,
    updatedAt: "2025-01-14T14:20:00Z",
    isOnline: true
  },
  {
    id: "conv_007",
    type: "group",
    name: "Twin Rally Beta Testers",
    participants: [
      { id: "user_sarah_johnson", name: "Sarah Johnson", avatar: "/public/twinrally_lg_01.png" },
      { id: "user_tech_twin", name: "Rachel & Sam", avatar: "/public/twinrally_lg_08.png" },
      { id: "user_creative_twin", name: "Aria & Luna", avatar: "/public/twinrally_lg_01.png" },
      { id: "user_creative_twin2", name: "Zoe & Maya", avatar: "/public/twinrally_lg_10.png" }
    ],
    lastMessage: {
      id: "msg_007",
      senderId: "user_creative_twin",
      senderName: "Aria",
      content: "The new messaging system works great! Love the floating animations.",
      timestamp: "2025-01-13T10:45:00Z",
      type: "text"
    },
    unreadCount: 1,
    updatedAt: "2025-01-13T10:45:00Z",
    isOnline: false
  },
  {
    id: "conv_008",
    type: "direct",
    participants: [
      { id: "user_sarah_johnson", name: "Sarah Johnson", avatar: "/public/twinrally_lg_01.png" },
      { id: "user_international_twin", name: "Kiran & Arjun Sharma", avatar: "/public/twinrally_lg_08.png" }
    ],
    lastMessage: {
      id: "msg_008",
      senderId: "user_international_twin",
      senderName: "Kiran",
      content: "Namaste! We discovered TwinRally through the festival website. Amazing work!",
      timestamp: "2025-01-12T16:00:00Z",
      type: "text"
    },
    unreadCount: 0,
    updatedAt: "2025-01-12T16:00:00Z",
    isOnline: false
  }
];

export const mockMessages = [
  // Conversation 1: Sarah & Michael/David
  {
    id: "msg_001_1",
    conversationId: "conv_001",
    senderId: "user_sarah_johnson",
    senderName: "Sarah Johnson",
    content: "Hi Michael! I hope this message finds you well. I wanted to follow up on our conversation about the Global Twin Festival sponsorship.",
    timestamp: "2025-01-19T10:00:00Z",
    type: "text",
    read: true
  },
  {
    id: "msg_001_2",
    conversationId: "conv_001",
    senderId: "user_michael_david_chen",
    senderName: "Michael Chen",
    content: "Hi Sarah! Yes, we're very interested. David and I were just discussing how we could contribute to the twin community through our tech platform.",
    timestamp: "2025-01-19T10:15:00Z",
    type: "text",
    read: true
  },
  {
    id: "msg_001_3",
    conversationId: "conv_001",
    senderId: "user_sarah_johnson",
    senderName: "Sarah Johnson",
    content: "That's wonderful to hear! We have several sponsorship tiers available, from basic logo placement to featured speaking slots. Would you like me to send over the sponsorship package?",
    timestamp: "2025-01-19T10:20:00Z",
    type: "text",
    read: true
  },
  {
    id: "msg_001_4",
    conversationId: "conv_001",
    senderId: "user_michael_david_chen",
    senderName: "Michael Chen",
    content: "Thanks for the festival invite! We're definitely interested in sponsoring next year.",
    timestamp: "2025-01-19T14:30:00Z",
    type: "text",
    read: false
  },
  {
    id: "msg_001_5",
    conversationId: "conv_001",
    senderId: "user_michael_david_chen",
    senderName: "Michael Chen",
    content: "Please send the sponsorship details when you can. We're excited about the possibilities!",
    timestamp: "2025-01-19T14:32:00Z",
    type: "text",
    read: false
  },

  // Conversation 2: Twin Festival Organizers Group
  {
    id: "msg_002_1",
    conversationId: "conv_002",
    senderId: "user_sarah_johnson",
    senderName: "Sarah Johnson",
    content: "Good morning everyone! Just a quick reminder that our planning meeting is tomorrow at 2 PM UTC. We'll be discussing the final details for the research presentation.",
    timestamp: "2025-01-17T08:00:00Z",
    type: "text",
    read: true
  },
  {
    id: "msg_002_2",
    conversationId: "conv_002",
    senderId: "user_alex_twin",
    senderName: "Alex Rodriguez",
    content: "Thanks Sarah! I'll be there. Should I prepare the venue layout slides?",
    timestamp: "2025-01-17T08:30:00Z",
    type: "text",
    read: true
  },
  {
    id: "msg_002_3",
    conversationId: "conv_002",
    senderId: "user_lisa_twin",
    senderName: "Lisa Thompson",
    content: "Morning! Yes, the venue slides would be great. I can handle the catering arrangements discussion.",
    timestamp: "2025-01-17T09:00:00Z",
    type: "text",
    read: true
  },
  {
    id: "msg_002_4",
    conversationId: "conv_002",
    senderId: "user_amanda_researcher",
    senderName: "Dr. Amanda",
    content: "I've updated the research presentation schedule for tomorrow. Please review the changes when you have a chance.",
    timestamp: "2025-01-18T09:15:00Z",
    type: "text",
    read: true
  },

  // Conversation 3: Sarah & Alex
  {
    id: "msg_003_1",
    conversationId: "conv_003",
    senderId: "user_alex_twin",
    senderName: "Alex",
    content: "Hey Sarah! How was the European twin meetup? We saw your photos!",
    timestamp: "2025-01-17T16:45:00Z",
    type: "text",
    read: true
  },
  {
    id: "msg_003_2",
    conversationId: "conv_003",
    senderId: "user_sarah_johnson",
    senderName: "Sarah Johnson",
    content: "Hi Alex! It was amazing! Vienna was such a beautiful host city. We had over 200 twins attend from 15 different countries. The connections made there will last a lifetime.",
    timestamp: "2025-01-17T17:00:00Z",
    type: "text",
    read: true
  },
  {
    id: "msg_003_3",
    conversationId: "conv_003",
    senderId: "user_alex_twin",
    senderName: "Alex",
    content: "That sounds incredible! We're planning something similar in Spain next year. Any advice for first-time organizers?",
    timestamp: "2025-01-17T17:15:00Z",
    type: "text",
    read: true
  },

  // More messages for scrolling test
  {
    id: "msg_001_6",
    conversationId: "conv_001",
    senderId: "user_sarah_johnson",
    senderName: "Sarah Johnson",
    content: "Great! I've just sent the sponsorship package to your email. It includes all the details about our tiered sponsorship options, from Silver to Platinum levels.",
    timestamp: "2025-01-19T15:00:00Z",
    type: "text",
    read: false
  },
  {
    id: "msg_001_7",
    conversationId: "conv_001",
    senderId: "user_michael_david_chen",
    senderName: "Michael Chen",
    content: "Received! We're reviewing the options. The Platinum level looks perfect for our company's goals. David and I will discuss it tonight.",
    timestamp: "2025-01-19T16:30:00Z",
    type: "text",
    read: false
  },
  {
    id: "msg_001_8",
    conversationId: "conv_001",
    senderId: "user_sarah_johnson",
    senderName: "Sarah Johnson",
    content: "Excellent! The Platinum level gives you great visibility and includes a keynote speaking slot. I should mention we also have some special benefits for tech companies like yours.",
    timestamp: "2025-01-19T17:15:00Z",
    type: "text",
    read: false
  },

  // Group conversation with more messages
  {
    id: "msg_005_1",
    conversationId: "conv_005",
    senderId: "user_sarah_johnson",
    senderName: "Sarah Johnson",
    content: "Hello European Twin Network! I hope everyone is doing well. I'm excited to announce our upcoming virtual meetup series.",
    timestamp: "2025-01-15T10:00:00Z",
    type: "text",
    read: true
  },
  {
    id: "msg_005_2",
    conversationId: "conv_005",
    senderId: "user_marco_twin",
    senderName: "Marco",
    content: "Ciao Sarah! This sounds exciting. What topics will the meetups cover?",
    timestamp: "2025-01-15T10:30:00Z",
    type: "text",
    read: true
  },
  {
    id: "msg_005_3",
    conversationId: "conv_005",
    senderId: "user_sarah_johnson",
    senderName: "Sarah Johnson",
    content: "Great question! We're planning sessions on cultural heritage, entrepreneurship, mental health, and community building. Each meetup will focus on a specific theme.",
    timestamp: "2025-01-15T11:00:00Z",
    type: "text",
    read: true
  },
  {
    id: "msg_005_4",
    conversationId: "conv_005",
    senderId: "user_freya_twin",
    senderName: "Freya",
    content: "The Stockholm meetup was amazing! Looking forward to the next one.",
    timestamp: "2025-01-15T18:30:00Z",
    type: "text",
    read: false
  },
  {
    id: "msg_005_5",
    conversationId: "conv_005",
    senderId: "user_viktor_twin",
    senderName: "Viktor",
    content: "Agreed! The networking was incredible. I made connections that have already turned into collaboration opportunities.",
    timestamp: "2025-01-15T19:00:00Z",
    type: "text",
    read: false
  },
  {
    id: "msg_005_6",
    conversationId: "conv_005",
    senderId: "user_claire_twin",
    senderName: "Claire",
    content: "Yes! I'm so grateful for this community. The Paris meetup was my first in-person twin event, and it was life-changing.",
    timestamp: "2025-01-15T19:30:00Z",
    type: "text",
    read: false
  },
  {
    id: "msg_005_7",
    conversationId: "conv_005",
    senderId: "user_sarah_johnson",
    senderName: "Sarah Johnson",
    content: "This is exactly why we created TwinRally! The connections and support within our community are what make it so special.",
    timestamp: "2025-01-15T20:00:00Z",
    type: "text",
    read: false
  }
];

// Helper functions
export const getConversationById = (conversationId) => {
  return mockConversations.find(conv => conv.id === conversationId);
};

export const getMessagesByConversationId = (conversationId) => {
  return mockMessages.filter(msg => msg.conversationId === conversationId)
    .sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
};

export const getUnreadCount = () => {
  return mockConversations.reduce((total, conv) => total + conv.unreadCount, 0);
};

export const markConversationAsRead = (conversationId) => {
  const conversation = mockConversations.find(conv => conv.id === conversationId);
  if (conversation) {
    conversation.unreadCount = 0;
    // In real app, this would update the backend
  }
};

export default mockMessages;