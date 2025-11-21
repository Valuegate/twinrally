/**
 * Mock User Profiles - TwinRally Profile Data
 *
 * Sample user profile data for Profile System development and testing.
 * Extends our existing auth data with rich twin-specific profiles.
 *
 * Data Architecture:
 * - Twin verification and family relationships
 * - Rich user stories and interests
 * - Connection networks (followers/following)
 * - Photo galleries and media handling
 * - Activity data and hosted events integration
 *
 * Mindful Design:
 * - Privacy-aware default settings
 * - Inclusive representation across cultures
 * - Realistic connection patterns
 * - Twin-specific content and contexts
 *
 * Future Integration:
 * - Replace with user API endpoints (GET /api/profile/:id)
 * - Add dynamic connection systems
 * - Enable photo upload management
 * - Support multiple twin relationships
 *
 * @author Wasiu - TwinRally Team
 * @version 1.0.0
 */

export const mockProfiles = [
  {
    id: "user_sarah_johnson",
    createdAt: "2024-03-15T10:30:00Z",
    lastActive: "2025-01-19T08:45:00Z",

    // Personal Information
    firstName: "Sarah",
    lastName: "Johnson",
    email: "sarah.johnson@outlook.com",
    phone: "+1-555-0123",

    // Twin Identity
    isTwin: true,
    twinType: "identical", // identical, fraternal, unknown
    twinName: "Jessica Johnson",
    twinRelationship: "older_sister", // older_sister, younger_sister, twin_brother, twin_sibling
    verifiedTwin: true, // verified through twin matching process

    // Profile Media
    avatar: "/public/twinrally_lg_01.png",
    coverPhoto: "/public/twinrally_lg_08.png",
    photoGallery: [
      {
        id: "photo_1",
        url: "/public/twinrally_lg_08.png",
        caption: "Jessica and I at our first community event together ♡",
        eventId: null,
        eventName: null,
        date: "2024-01-15T00:00:00Z",
        tags: ["memories", "community"]
      },
      {
        id: "photo_2",
        url: "/public/twinrally_lg_01.png",
        caption: "Planning the Global Twin Festival with our core team",
        eventId: "evt_festival_001",
        eventName: "Global Twin Festival 2025",
        date: "2024-11-10T00:00:00Z",
        tags: ["festival", "work", "team"]
      },
      {
        id: "photo_3",
        url: "/public/twinrally_lg_10.png",
        caption: "Sunset in Vienna after organizing our European twin meetup",
        eventId: null,
        eventName: null,
        date: "2024-08-20T00:00:00Z",
        tags: ["travel", "europe", "organizing"]
      }
    ],

    // Personal Story & Bio
    bio: "Twin sisters passionate about building twin communities and celebrating twin culture. We've organized 15+ twin events across 8 countries and created connections that last a lifetime.",
    twinStory: `Born 5 minutes apart, we discovered our telepathic connection during elementary school. That first day Jessica knew I'd forgotten my lunch before I even walked into the classroom. We've been inseparable ever since.

As we grew older, we realized how special our bond truly is. Moving to different countries for university, we felt the distance more than most siblings. That's when we started searching for ways to connect with other twins. That's how TwinRally began - from two sisters who missed their built-in best friend.

Now we travel the world organizing twin festivals, support groups, and cultural celebrations. Every twin we meet becomes family. Every story we hear reminds us why this matters.`,

    // Location & Travel
    location: {
      city: "Seattle",
      state: "Washington",
      country: "United States",
      coordinates: { lat: 47.6062, lng: -122.3321 },
    },
    bornIn: {
      city: "Portland",
      state: "Oregon",
      country: "United States",
    },

    // Interests & Activities
    interests: [
      "twin_research",
      "community_building",
      "cultural_events",
      "photography",
      "travel",
      "support_groups",
      "music_festivals",
    ],

    // Professional
    occupation: "Community Organizer & Twin Advocate",
    education: {
      degree: "B.A. Cultural Anthropology",
      university: "University of Washington",
    },

    // Social Links
    socialLinks: {
      twinrally: "sarah_j_johnson",
      linkedin: "sarah-johnson-twins",
      instagram: "@johnson_twins_organizers",
    },

    // Connection Network
    connections: {
      followers: 1247,
      following: 856,
      mutualConnections: 234, // Friends/connections on platform
      followedByViewer: false, // Does this user follow the viewer?
      viewerFollowing: false, // Is viewer following this user?
    },

    // Platform Activity
    stats: {
      eventsHosted: 15,
      eventsAttended: 89,
      postsCount: 156,
      communitiesJoined: 12,
    },

    // Recent Activity (for profile feed)
    recentActivity: [
      {
        type: "event_hosted",
        data: {
          eventId: "evt_festival_001",
          eventTitle: "Global Twin Festival 2025",
        },
        timestamp: "2024-12-15T09:00:00Z",
      },
      {
        type: "post_shared",
        data: { content: "So happy to see the TwinRally community growing!" },
        timestamp: "2024-12-14T16:30:00Z",
      },
      {
        type: "connection_made",
        data: { connectionName: "Michael & David Chen", mutualFriends: 3 },
        timestamp: "2024-12-12T14:20:00Z",
      },
    ],

    // Upcoming Events Hosted
    upcomingEvents: [
      {
        id: "evt_european_003",
        title: "European Twin Festival 2025",
        date: "2025-03-22T16:00:00Z",
        location: "Vienna, Austria",
        type: "festival",
      },
    ],

    // Privacy & Preferences
    privacy: {
      profileVisible: "public", // public, twins_only, private
      showLocation: true,
      showEmail: false,
      showConnections: true,
      allowMessages: true,
      emailNotifications: true,
    },

    // Twin Verification
    verification: {
      verified: true,
      verifiedDate: "2024-03-20T10:00:00Z",
      verificationMethod: "dna_test", // dna_test, photo_comparison, testimony, unknown
      verificationDetails:
        "DNA verified identical twins through TwinRally partner lab",
    },
  },

  {
    id: "user_michael_david_chen",
    createdAt: "2024-07-08T14:45:00Z",
    lastActive: "2025-01-18T11:20:00Z",

    // Business-focused twin entrepreneurs
    firstName: "Michael",
    lastName: "Chen",
    email: "michael.chen@gmail.com",
    phone: "+65-9876-5432",

    // Twin Identity
    isTwin: true,
    twinType: "identical",
    twinName: "David Chen",
    twinRelationship: "twin_brother",
    verifiedTwin: true,

    // Media
    avatar: "/public/twinrally_lg_10.png",
    coverPhoto: "/public/twinrally_lg_11.png",
    photoGallery: [
      {
        id: "photo_1",
        url: "/public/twinrally_lg_08.png",
        caption: "Our first twin festival together!",
        eventId: "evt_festival_001",
        eventName: "Global Twin Festival 2025",
        date: "2024-12-10T00:00:00Z",
        tags: ["festival", "memories"]
      },
      {
        id: "photo_2",
        url: "/public/twinrally_lg_01.png",
        caption: "Twin entrepreneurs brainstorming our next venture",
        eventId: null,
        eventName: null,
        date: "2024-11-15T00:00:00Z",
        tags: ["work", "entrepreneurship"]
      },
      {
        id: "photo_3",
        url: "/public/twinrally_lg_10.png",
        caption: "Presenting at Twin Research Conference",
        eventId: "evt_conference_002",
        eventName: "International Twin Research Conference",
        date: "2024-10-20T00:00:00Z",
        tags: ["research", "presentation", "professional"]
      },
      {
        id: "photo_4",
        url: "/public/twinrally_lg_11.png",
        caption: "Family reunion at the park! ♡",
        eventId: null,
        eventName: null,
        date: "2024-09-05T00:00:00Z",
        tags: ["family", "outdoors", "reunion"]
      }
    ],

    // Business Bio
    bio: "Twin brothers and founder of ChenTech Solutions. Leveraging our unique perspectives to build better software and stronger twin networks worldwide.",
    twinStory: `Being identical twins means we literally see the world through the same eyes, yet process information differently. David is the visionary dreamer; I'm the pragmatic builder. Together, we've built a tech company that thrives on our complementary strengths.

Our twin bond goes beyond genetics. We finish each other's sentences, know when something's wrong without speaking, and have an innate trust that only comes from shared DNA and 30+ years of experiences. When we decided to start a company, it was natural to build something that celebrates and connects twins like us.`,

    // Location
    location: {
      city: "Singapore",
      country: "Singapore",
      coordinates: { lat: 1.3521, lng: 103.8198 },
    },
    bornIn: {
      city: "Taipei",
      country: "Taiwan",
    },

    // Interests
    interests: [
      "entrepreneurship",
      "technology",
      "twin_studies",
      "innovation",
      "community_growth",
      "mentorship",
    ],

    // Professional
    occupation: "Co-Founder & CTO, ChenTech Solutions",
    education: {
      degree: "M.S. Computer Science",
      university: "National University of Singapore",
    },

    // Connections
    connections: {
      followers: 892,
      following: 567,
      mutualConnections: 156,
      followedByViewer: true, // Sarah follows them
      viewerFollowing: false, // They're not following Sarah
    },

    // Activity Stats
    stats: {
      eventsHosted: 8,
      eventsAttended: 34,
      postsCount: 92,
      communitiesJoined: 15,
    },

    // Preferences focused on business networking
    privacy: {
      profileVisible: "public",
      showLocation: true,
      showEmail: true,
      showConnections: true,
      allowMessages: true,
      emailNotifications: true,
    },

    verification: {
      verified: true,
      verifiedDate: "2024-07-12T09:00:00Z",
      verificationMethod: "dna_test",
    },
  },

  {
    id: "user_amanda_researcher",
    createdAt: "2024-01-10T16:30:00Z",
    lastActive: "2025-01-17T07:15:00Z",

    // Research-focused single twin
    firstName: "Dr. Amanda",
    lastName: "Kensington",
    email: "amanda.kensington@research.ac.uk",
    phone: "+44-20-7946-0123",

    // Single Twin
    isTwin: true,
    twinType: "fraternal",
    twinName: "",
    twinRelationship: "surviving_twin", // deceased sibling
    verifiedTwin: true,

    // Academic styling
    avatar: "/public/twinrally_lg_08.png",
    coverPhoto: "/public/twinrally_lg_01.png",
    photoGallery: [
      {
        id: "photo_1",
        url: "/public/twinrally_lg_01.png",
        caption: "Presenting twin research findings at Cambridge University",
        eventId: "evt_conference_002",
        eventName: "International Twin Research Conference",
        date: "2024-11-05T00:00:00Z",
        tags: ["research", "academy", "presentation"]
      },
      {
        id: "photo_2",
        url: "/public/twinrally_lg_10.png",
        caption: "My twin Emma and I during our last summer together ♡",
        eventId: null,
        eventName: null,
        date: "2015-07-15T00:00:00Z",
        tags: ["memories", "family", "tribute"]
      },
      {
        id: "photo_3",
        url: "/public/twinrally_lg_11.png",
        caption: "Leading a twin bereavement support group meeting",
        eventId: null,
        eventName: null,
        date: "2024-10-12T00:00:00Z",
        tags: ["support", "community", "bereavement"]
      }
    ],

    // Research Bio
    bio: "Professor of Developmental Psychology specializing in twin research. Using science to understand and celebrate twin bonds. Organizer of academic twin events and public education initiatives.",
    twinStory: `I lost my twin sister to cancer when we were 16. Emma was more than my sister - she was my built-in best friend, my other half. After five surgeries and countless treatments, we held hands as she said her final goodbye. That day changed everything.

But my twin bond remained, albeit different. Now I dedicate my research to understanding what makes twin relationships so special, hoping to support others through the unique challenges and joys we face. Every twin I meet reminds me of Emma and inspires me to continue our mission of connection.`,

    // Academic base
    location: {
      city: "London",
      country: "United Kingdom",
      coordinates: { lat: 51.5074, lng: -0.1278 },
    },
    bornIn: {
      city: "Oxford",
      country: "United Kingdom",
    },

    // Academic & Research Interests
    interests: [
      "twin_research",
      "developmental_psychology",
      "bereavement",
      "academic_events",
      "mental_health",
      "genetics",
      "support_groups",
    ],

    // Professional
    occupation: "Professor of Developmental Psychology, University of London",
    education: {
      degree: "PhD Developmental Psychology",
      university: "University of Oxford",
    },

    // Large academic network
    connections: {
      followers: 2156,
      following: 343,
      mutualConnections: 89,
      followedByViewer: false, // Sarah doesn't follow them
      viewerFollowing: true, // Sarah follows them
    },

    // Event-focused activity
    stats: {
      eventsHosted: 22,
      eventsAttended: 67,
      postsCount: 234,
      communitiesJoined: 8,
    },

    // Private but engaged
    privacy: {
      profileVisible: "twins_only", // More private for personal family loss
      showLocation: true,
      showEmail: false,
      showConnections: false,
      allowMessages: true,
      emailNotifications: true,
    },

    verification: {
      verified: true,
      verifiedDate: "2024-01-15T12:00:00Z",
      verificationMethod: "dna_test",
    },
  },
];

// Default/current user for demonstration
export const currentUserProfile = mockProfiles[0];

// Helper functions
export const getProfileById = (id) => {
  return mockProfiles.find((profile) => profile.id === id) || null;
};

export const getRandomProfiles = (count) => {
  const shuffled = [...mockProfiles].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

// Mock connections data for ConnectionsPage
export const mockConnections = [
  {
    id: "conn_001",
    userId: "user_michael_david_chen",
    profile: mockProfiles[1], // Michael & David Chen
    connectionType: "following", // following, follower, mutual
    connectedDate: "2024-08-15T10:30:00Z",
    mutualFriends: 3,
    lastInteraction: "2024-12-14T16:45:00Z",
    interactionType: "liked_post",
  },
  {
    id: "conn_002",
    userId: "user_amanda_researcher",
    profile: mockProfiles[2], // Dr. Amanda Kensington
    connectionType: "mutual",
    connectedDate: "2024-04-20T14:15:00Z",
    mutualFriends: 12,
    lastInteraction: "2024-12-12T09:20:00Z",
    interactionType: "commented_on_event",
  },
  {
    id: "conn_003",
    userId: "user_sarah_johnson",
    profile: mockProfiles[0], // Sarah Johnson (current user)
    connectionType: "follower",
    connectedDate: "2024-06-10T11:45:00Z",
    mutualFriends: 0,
    lastInteraction: "2024-12-10T13:30:00Z",
    interactionType: "followed_back",
  },
  // Additional mock connections for demonstration
  {
    id: "conn_004",
    userId: "user_alex_twin",
    profile: {
      id: "user_alex_twin",
      firstName: "Alex",
      lastName: "Rodriguez",
      isTwin: true,
      twinName: "Jordan Rodriguez",
      avatar: "/public/twinrally_lg_01.png",
      location: { city: "Madrid", country: "Spain" },
      bio: "Twin brothers exploring the world and connecting with fellow twins.",
      connections: { followers: 234, following: 189 },
      interests: ["travel", "photography", "sports"],
    },
    connectionType: "following",
    connectedDate: "2024-09-05T08:20:00Z",
    mutualFriends: 5,
    lastInteraction: "2024-11-28T15:10:00Z",
    interactionType: "attended_event",
  },
  {
    id: "conn_005",
    userId: "user_lisa_twin",
    profile: {
      id: "user_lisa_twin",
      firstName: "Lisa",
      lastName: "Thompson",
      isTwin: true,
      twinName: "Anna Thompson",
      avatar: "/public/twinrally_lg_08.png",
      location: { city: "Sydney", country: "Australia" },
      bio: "Twin sisters and community organizers passionate about twin culture.",
      connections: { followers: 456, following: 312 },
      interests: ["community", "events", "art"],
    },
    connectionType: "mutual",
    connectedDate: "2024-07-12T16:40:00Z",
    mutualFriends: 8,
    lastInteraction: "2024-12-08T12:15:00Z",
    interactionType: "messaged",
  },
];

// Helper function to get connections for a user
export const getUserConnections = (userId, type = 'all') => {
  let connections = mockConnections.filter(conn => conn.userId !== userId);

  if (type === 'following') {
    connections = connections.filter(conn => conn.connectionType === 'following');
  } else if (type === 'followers') {
    connections = connections.filter(conn => conn.connectionType === 'follower');
  } else if (type === 'mutual') {
    connections = connections.filter(conn => conn.connectionType === 'mutual');
  }

  return connections;
};

// Get connection stats for a user
export const getConnectionStats = (userId) => {
  const connections = mockConnections.filter(conn => conn.userId !== userId);
  return {
    total: connections.length,
    following: connections.filter(c => c.connectionType === 'following').length,
    followers: connections.filter(c => c.connectionType === 'follower').length,
    mutual: connections.filter(c => c.connectionType === 'mutual').length,
  };
};
export default mockProfiles;
