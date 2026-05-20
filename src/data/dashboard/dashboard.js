import { Users, Calendar, MessageCircle } from 'lucide-react'

export const quickStats = [
    { label: 'Connections', value: '247', icon: Users, change: '+12', color: 'blue' },
    { label: 'Events Joined', value: '18', icon: Calendar, change: '+3', color: 'green' },
    { label: 'Messages', value: '23', icon: MessageCircle, change: '+5', color: 'purple' }
];

export const upcomingEvents = [
    {
        id: 1,
        title: 'Tech Community Meetup',
        date: 'Today, 6:00 PM',
        location: 'San Francisco, CA',
        attendees: 124,
        type: 'tech'
    },
    {
        id: 2,
        title: 'Social Media Workshop',
        date: 'Tomorrow, 2:00 PM',
        location: 'Online Event',
        attendees: 67,
        type: 'workshop'
    },
    {
        id: 3,
        title: 'Networking Mixer',
        date: 'Dec 18, 7:00 PM',
        location: 'New York, NY',
        attendees: 89,
        type: 'networking'
    }
];

export const activityFeed = [
    {
        id: 1,
        user: 'Sarah Johnson',
        avatar: 'https://i.pravatar.cc/40?img=1',
        action: 'created a new event',
        target: 'Tech Community Meetup',
        time: '2 hours ago',
        type: 'event'
    },
    {
        id: 2,
        user: 'Mike Chen',
        avatar: 'https://i.pravatar.cc/40?img=2',
        action: 'joined your community',
        target: 'Digital Creators',
        time: '4 hours ago',
        type: 'join'
    },
    {
        id: 3,
        user: 'Emma Wilson',
        avatar: 'https://i.pravatar.cc/40?img=6',
        action: 'commented on your post',
        target: 'Future of Social Media',
        time: '6 hours ago',
        type: 'comment'
    },
    {
        id: 4,
        user: 'Alex Rivera',
        avatar: 'https://i.pravatar.cc/40?img=7',
        action: 'liked your photo',
        time: '8 hours ago',
        type: 'like'
    }
];

export const reminders = [
    {
        id: 1,
        title: 'RSVP for Tech Meetup',
        due: 'Today, 5:00 PM',
        type: 'event'
    },
    {
        id: 2,
        title: 'Send follow-up messages',
        due: 'Tomorrow',
        type: 'message'
    },
    {
        id: 3,
        title: 'Community moderation',
        due: 'Ongoing',
        type: 'community'
    }
];

////////

export const currentUser = {
    name: 'Faith',
    username: '@faith_connector',
    avatar: 'https://i.pravatar.cc/100?img=5',
    coverPhoto: 'https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    bio: 'Community builder and social enthusiast. Love connecting people and creating meaningful relationships.',
    location: 'San Francisco, CA',
    joined: 'January 2024',
    stats: {
        friends: 247,
        events: 18,
        communities: 12
    },
    interests: ['Technology', 'Travel', 'Photography', 'Food', 'Music', 'Art']
};

export const friends = [
    {
        id: 1,
        name: 'Sarah Johnson',
        avatar: 'https://i.pravatar.cc/80?img=1',
        username: '@sarahj',
        mutualFriends: 12,
        location: 'San Francisco, CA',
        lastActive: '2 hours ago',
        status: 'online',
        bio: 'Tech enthusiast and community organizer',
        interests: ['AI', 'Startups', 'Hiking']
    },
    {
        id: 2,
        name: 'Mike Chen',
        avatar: 'https://i.pravatar.cc/80?img=2',
        username: '@mikechen',
        mutualFriends: 8,
        location: 'New York, NY',
        lastActive: '30 minutes ago',
        status: 'online',
        bio: 'Digital creator and social media expert',
        interests: ['Photography', 'Design', 'Coffee']
    },
    {
        id: 3,
        name: 'Emma Wilson',
        avatar: 'https://i.pravatar.cc/80?img=6',
        username: '@emmaw',
        mutualFriends: 5,
        location: 'Chicago, IL',
        lastActive: '1 day ago',
        status: 'offline',
        bio: 'Art director and community manager',
        interests: ['Art', 'Museums', 'Brunch']
    },
    {
        id: 4,
        name: 'Alex Rivera',
        avatar: 'https://i.pravatar.cc/80?img=7',
        username: '@alexr',
        mutualFriends: 15,
        location: 'Miami, FL',
        lastActive: '3 hours ago',
        status: 'online',
        bio: 'Event planner and network builder',
        interests: ['Music', 'Dancing', 'Beaches']
    }
];


export const pendingInvites = [
    {
        id: 1,
        name: 'Lisa Wang',
        avatar: 'https://i.pravatar.cc/80?img=9',
        mutualFriends: 7,
        location: 'Seattle, WA',
        type: 'received',
        time: '1 day ago',
        bio: 'Software engineer and open source contributor'
    },
    {
        id: 2,
        name: 'David Kim',
        avatar: 'https://i.pravatar.cc/80?img=10',
        mutualFriends: 4,
        location: 'Boston, MA',
        type: 'sent',
        time: '2 days ago',
        bio: 'Product manager and startup advisor'
    }
];

export const suggestedFriends = [
    {
        id: 1,
        name: 'Taylor Swift',
        avatar: 'https://i.pravatar.cc/80?img=12',
        mutualFriends: 18,
        location: 'Nashville, TN',
        commonInterests: ['Music', 'Travel', 'Photography'],
        bio: 'Music lover and adventure seeker'
    },
    {
        id: 2,
        name: 'Chris Evans',
        avatar: 'https://i.pravatar.cc/80?img=13',
        mutualFriends: 6,
        location: 'Los Angeles, CA',
        commonInterests: ['Fitness', 'Movies', 'Technology'],
        bio: 'Fitness enthusiast and tech geek'
    }
];

export   const communityEvents = [
    {
      id: 1,
      title: 'Tech Meetup: Future of Web3',
      community: 'Tech Innovators SF',
      date: 'Tomorrow, 6:00 PM',
      location: 'San Francisco, CA',
      attendees: 89,
      interested: 156,
      type: 'in-person'
    },
    {
      id: 2,
      title: 'Content Creator Workshop',
      community: 'Digital Creators Hub',
      date: 'Dec 15, 2:00 PM',
      location: 'Online Event',
      attendees: 45,
      interested: 78,
      type: 'online'
    },
    {
      id: 3,
      title: 'Mindfulness Meditation Session',
      community: 'Wellness Warriors',
      date: 'Dec 12, 7:00 PM',
      location: 'Golden Gate Park',
      attendees: 23,
      interested: 34,
      type: 'in-person'
    }
  ];