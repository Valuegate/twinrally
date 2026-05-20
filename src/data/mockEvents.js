/**
 * Mock Events Data - TwinRally Development Data
 *
 * Sample event data for development and testing.
 * Prepares for future backend integration with real API endpoints.
 *
 * Data Structure:
 * - Follows Event data structure from PLAN.md
 * - Includes various event types (festival, meetup, workshop, virtual)
 * - Mock ticketing, location, and user registration data
 * - Realistic dates and content for testing components
 *
 * Future Integration:
 * - Replace with API calls (GET /api/events)
 * - Add realtime updates via WebSocket
 * - Implement filtering and search
 *
 * @author Wasiu - TwinRally Team
 * @version 1.0.0
 */

export const mockEvents = [
  {
    id: "evt_festival_001",
    title: "Global Twin Festival 2025",
    type: "festival",
    description: "The largest celebration of twinhood worldwide! Join thousands of twins and their families for music, workshops, cultural performances, and unforgettable memories. Special twin photo sessions, charity events, and networking opportunities.",
    date: "2025-12-15T18:00:00Z",
    location: {
      type: "physical",
      address: "National Theater, Lagos, Nigeria",
      coordinates: { lat: 6.4380, lng: 3.4292 }
    },
    host: {
      id: "user_host_001",
      name: "John & Jane TwinFest Organizers",
      avatar: "/path/to/avatar.jpg"
    },
    ticketing: {
      type: "paid",
      price: 15000,
      currency: "NGN",
      capacity: 5000,
      registered: 624
    },
    coverImage: "/public/twinrally_lg_01.png",
    tags: ["festival", "cultural", "networking", "music"],
    isLive: false,
    streamUrl: null
  },
  {
    id: "evt_meetup_001",
    title: "Twin Parents Support Meetup",
    type: "meetup",
    description: "A cozy gathering for twin parents to share experiences, ask questions, and build lasting friendships. Topics include parenting tips, school challenges, and celebrating twin milestones together.",
    date: "2025-01-25T14:00:00Z",
    location: {
      type: "physical",
      address: "TwinRally Community Center, Lagos",
      coordinates: { lat: 6.5244, lng: 3.3792 }
    },
    host: {
      id: "user_host_002",
      name: "Sarah & Michael Jones",
      avatar: "/path/to/avatar2.jpg"
    },
    ticketing: {
      type: "rsvp",
      price: 0,
      currency: "NGN",
      capacity: 50,
      registered: 23
    },
    coverImage: "/public/twinrally_lg_08.png",
    tags: ["parenting", "support", "family"],
    isLive: false,
    streamUrl: null
  },
  {
    id: "evt_workshop_001",
    title: "Twin Communication Workshop",
    type: "workshop",
    description: "Learn effective communication techniques for twins! This interactive workshop covers twin telepathy myths, secret language development, and maintaining strong bonds through all life stages.",
    date: "2025-02-08T10:00:00Z",
    location: {
      type: "physical",
      address: "University Conference Hall, Abuja",
      coordinates: { lat: 9.0765, lng: 7.3986 }
    },
    host: {
      id: "user_host_003",
      name: "Dr. Amanda Chen, Twin Researcher",
      avatar: "/path/to/avatar3.jpg"
    },
    ticketing: {
      type: "paid",
      price: 5000,
      currency: "NGN",
      capacity: 100,
      registered: 67
    },
    coverImage: "/public/twinrally_lg_10.png",
    tags: ["communication", "psychology", "education"],
    isLive: false,
    streamUrl: null
  },
  {
    id: "evt_virtual_001",
    title: "Global Virtual Twin Games",
    type: "virtual",
    description: "Participate in fun online games and challenges designed specifically for twins! Connect with twins from around the world while competing in twin trivia, virtual escape rooms, and collaborative puzzles.",
    date: "2025-01-18T20:00:00Z",
    location: {
      type: "virtual",
      address: "TwinRally Online Platform",
      coordinates: null
    },
    host: {
      id: "user_host_004",
      name: "TwinRally Gaming Team",
      avatar: "/path/to/avatar4.jpg"
    },
    ticketing: {
      type: "free",
      price: 0,
      currency: "NGN",
      capacity: 200,
      registered: 89
    },
    coverImage: "/public/twinrally_lg_11.png",
    tags: ["gaming", "virtual", "fun", "social"],
    isLive: true,
    streamUrl: "https://twinrally.live/games"
  },
  {
    id: "evt_festival_002",
    title: "European Twin Festival",
    type: "festival",
    description: "Join twins across Europe for our annual festival celebrating twin culture! Experience multicultural performances, delicious food from around Europe, and unique traditions from different European countries.",
    date: "2025-03-22T16:00:00Z",
    location: {
      type: "physical",
      address: "Central Park, Vienna, Austria",
      coordinates: { lat: 48.2082, lng: 16.3738 }
    },
    host: {
      id: "user_host_005",
      name: "European Twin Association",
      avatar: "/path/to/avatar5.jpg"
    },
    ticketing: {
      type: "paid",
      price: 25,
      currency: "EUR",
      capacity: 1500,
      registered: 342
    },
    coverImage: "/public/twinrally_lg_01.png",
    tags: ["festival", "european", "cultural", "food"],
    isLive: false,
    streamUrl: null
  },
  {
    id: "evt_workshop_002",
    title: "Twin Business Networking",
    type: "workshop",
    description: "Professional development workshop for twin entrepreneurs! Connect with successful twin business owners, learn about unique challenges and opportunities in twin-led businesses, and build your professional network.",
    date: "2025-02-15T09:00:00Z",
    location: {
      type: "physical",
      address: "Business Center, Nairobi, Kenya",
      coordinates: { lat: -1.2864, lng: 36.8172 }
    },
    host: {
      id: "user_host_006",
      name: "Michael & David Business Twins",
      avatar: "/path/to/avatar6.jpg"
    },
    ticketing: {
      type: "paid",
      price: 7500,
      currency: "KES",
      capacity: 75,
      registered: 45
    },
    coverImage: "/public/twinrally_lg_08.png",
    tags: ["business", "networking", "entrepreneurship"],
    isLive: false,
    streamUrl: null
  },
  {
    id: "evt_meetup_002",
    title: "Young Twins Social Mixer",
    type: "meetup",
    description: "Social gathering for young twins aged 18-25! Meet other young twins in your area, share life experiences, make new friends, and create memories that will last a lifetime. All backgrounds welcome!",
    date: "2025-01-14T19:00:00Z",
    location: {
      type: "physical",
      address: "Downtown Lounge, Cape Town",
      coordinates: { lat: -33.9249, lng: 18.4241 }
    },
    host: {
      id: "user_host_007",
      name: "Alex & Jamie Young Twins",
      avatar: "/path/to/avatar7.jpg"
    },
    ticketing: {
      type: "rsvp",
      price: 0,
      currency: "ZAR",
      capacity: 40,
      registered: 18
    },
    coverImage: "/public/twinrally_lg_11.png",
    tags: ["young-adults", "social", "music", "dancing"],
    isLive: false,
    streamUrl: null
  },
  {
    id: "evt_virtual_002",
    title: "Twin Language & Culture Webinar",
    type: "virtual",
    description: "Fascinating webinar exploring twin languages, special words, and cultural phenomena unique to twins! Learn about twin communication patterns, cultural differences, and research insights from experts worldwide.",
    date: "2025-03-05T15:00:00Z",
    location: {
      type: "virtual",
      address: "Zoom Webinar Platform",
      coordinates: null
    },
    host: {
      id: "user_host_008",
      name: "Dr. Linguistics Research Team",
      avatar: "/path/to/avatar8.jpg"
    },
    ticketing: {
      type: "free",
      price: 0,
      currency: "USD",
      capacity: 1000,
      registered: 234
    },
    coverImage: "/public/twinrally_lg_10.png",
    tags: ["language", "culture", "research", "webinar"],
    isLive: false,
    streamUrl: null
  },
  {
    id: "evt_festival_003",
    title: "Asian Twin Celebration",
    type: "festival",
    description: "Cultural celebration of Asian twin traditions and modern expressions! Experience traditional ceremonies, contemporary performances, fusion cuisine, and celebrations of Asian twin folklore and mythology.",
    date: "2025-04-12T17:00:00Z",
    location: {
      type: "physical",
      address: "Cultural Center, Singapore",
      coordinates: { lat: 1.3521, lng: 103.8198 }
    },
    host: {
      id: "user_host_009",
      name: "Asian Twin Cultural Society",
      avatar: "/path/to/avatar9.jpg"
    },
    ticketing: {
      type: "paid",
      price: 35,
      currency: "SGD",
      capacity: 800,
      registered: 156
    },
    coverImage: "/public/twinrally_lg_01.png",
    tags: ["asian", "cultural", "tradition", "performance"],
    isLive: false,
    streamUrl: null
  }
];

export default mockEvents;
