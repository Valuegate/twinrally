/**
 * Mock Notifications - TwinRally Notification Data
 *
 * Sample notification data for Notifications System development and testing.
 * Includes various notification types and states.
 *
 * Data Architecture:
 * - Different notification types (connection, event, message, system)
 * - Read/unread status tracking
 * - Actionable notifications with buttons
 * - Timestamps and metadata
 *
 * Future Integration:
 * - Replace with real notification API
 * - Add push notification support
 * - Real-time notification delivery
 * - User preference filtering
 *
 * @author Kilo Code - TwinRally Team
 * @version 1.0.0
 */

export const mockNotifications = [
  {
    id: "notif_001",
    type: "connection_request",
    title: "New Connection Request",
    message: "Alex Rodriguez wants to connect with you",
    timestamp: "2025-01-19T15:30:00Z",
    read: false,
    actionable: true,
    actions: [
      { label: "Accept", action: "accept", style: "primary" },
      { label: "Decline", action: "decline", style: "secondary" }
    ],
    metadata: {
      requesterId: "user_alex_twin",
      requesterName: "Alex Rodriguez",
      requesterAvatar: "/public/twinrally_lg_01.png"
    }
  },
  {
    id: "notif_002",
    type: "event_invite",
    title: "Event Invitation",
    message: "You've been invited to 'Twin Festival 2025' by Sarah Johnson",
    timestamp: "2025-01-19T14:15:00Z",
    read: false,
    actionable: true,
    actions: [
      { label: "View Event", action: "view", style: "primary" },
      { label: "Maybe Later", action: "dismiss", style: "secondary" }
    ],
    metadata: {
      eventId: "evt_festival_001",
      eventTitle: "Twin Festival 2025",
      inviterId: "user_sarah_johnson",
      inviterName: "Sarah Johnson"
    }
  },
  {
    id: "notif_003",
    type: "message",
    title: "New Message",
    message: "Michael Chen: Thanks for the festival invite!",
    timestamp: "2025-01-19T10:45:00Z",
    read: false,
    actionable: true,
    actions: [
      { label: "Reply", action: "reply", style: "primary" }
    ],
    metadata: {
      conversationId: "conv_001",
      senderId: "user_michael_david_chen",
      senderName: "Michael Chen",
      messagePreview: "Thanks for the festival invite! We're definitely interested..."
    }
  },
  {
    id: "notif_004",
    type: "event_registration",
    title: "Registration Confirmed",
    message: "Your registration for 'European Twin Festival' has been confirmed",
    timestamp: "2025-01-18T16:20:00Z",
    read: true,
    actionable: true,
    actions: [
      { label: "View Details", action: "view", style: "primary" }
    ],
    metadata: {
      eventId: "evt_european_003",
      eventTitle: "European Twin Festival",
      registrationId: "reg_12345"
    }
  },
  {
    id: "notif_005",
    type: "system",
    title: "Welcome to TwinRally!",
    message: "Thanks for joining the twin community. Start by exploring events and connecting with fellow twins.",
    timestamp: "2025-01-15T09:00:00Z",
    read: true,
    actionable: true,
    actions: [
      { label: "Explore Events", action: "explore", style: "primary" }
    ],
    metadata: {
      systemType: "welcome",
      priority: "normal"
    }
  },
  {
    id: "notif_006",
    type: "event_reminder",
    title: "Event Reminder",
    message: "Don't forget: 'Twin Research Conference' starts in 2 hours",
    timestamp: "2025-01-17T08:00:00Z",
    read: true,
    actionable: true,
    actions: [
      { label: "Join Now", action: "join", style: "primary" },
      { label: "View Event", action: "view", style: "secondary" }
    ],
    metadata: {
      eventId: "evt_conference_002",
      eventTitle: "Twin Research Conference",
      startTime: "2025-01-17T10:00:00Z"
    }
  },
  {
    id: "notif_007",
    type: "connection_accepted",
    title: "Connection Accepted",
    message: "Dr. Amanda Kensington accepted your connection request",
    timestamp: "2025-01-16T11:30:00Z",
    read: true,
    actionable: true,
    actions: [
      { label: "Send Message", action: "message", style: "primary" }
    ],
    metadata: {
      connectionId: "user_amanda_researcher",
      connectionName: "Dr. Amanda Kensington",
      connectionAvatar: "/public/twinrally_lg_08.png"
    }
  },
  {
    id: "notif_008",
    type: "event_update",
    title: "Event Update",
    message: "The venue for 'Global Twin Festival 2025' has been changed",
    timestamp: "2025-01-14T14:45:00Z",
    read: true,
    actionable: true,
    actions: [
      { label: "View Changes", action: "view", style: "primary" }
    ],
    metadata: {
      eventId: "evt_festival_001",
      eventTitle: "Global Twin Festival 2025",
      updateType: "venue_change"
    }
  }
];

// Helper functions
export const getUnreadCount = () => {
  return mockNotifications.filter(notification => !notification.read).length;
};

export const markAsRead = (notificationId) => {
  const notification = mockNotifications.find(n => n.id === notificationId);
  if (notification) {
    notification.read = true;
  }
};

export const markAllAsRead = () => {
  mockNotifications.forEach(notification => {
    notification.read = true;
  });
};

export const getNotificationsByType = (type) => {
  if (type === 'all') return mockNotifications;
  return mockNotifications.filter(notification => notification.type === type);
};

export const getRecentNotifications = (limit = 10) => {
  return mockNotifications
    .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
    .slice(0, limit);
};

export default mockNotifications;