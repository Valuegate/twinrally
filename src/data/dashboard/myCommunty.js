export const myCommunities = [
    {
        id: 1,
        name: 'Tech Innovators SF',
        description: 'A community for technology enthusiasts, developers, and innovators in San Francisco.',
        members: 1247,
        online: 89,
        image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        category: 'Technology',
        privacy: 'public',
        joined: true,
        role: 'member',
        upcomingEvents: 3,
        newPosts: 12
    },
    {
        id: 2,
        name: 'Digital Creators Hub',
        description: 'Connect with fellow content creators, share tips, and collaborate on projects.',
        members: 856,
        online: 45,
        image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        category: 'Creative',
        privacy: 'public',
        joined: true,
        role: 'admin',
        upcomingEvents: 1,
        newPosts: 5
    },
    {
        id: 3,
        name: 'Wellness Warriors',
        description: 'Support group for mental health, mindfulness, and personal growth journeys.',
        members: 543,
        online: 23,
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        category: 'Health & Wellness',
        privacy: 'private',
        joined: true,
        role: 'moderator',
        upcomingEvents: 2,
        newPosts: 8
    }
];

export const discoverCommunities = [
    {
        id: 4,
        name: 'Startup Founders Network',
        description: 'Exclusive community for startup founders to share experiences and get mentorship.',
        members: 2341,
        online: 156,
        image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        category: 'Business',
        privacy: 'private',
        joined: false,
        trending: true,
        similarity: 92
    },
    {
        id: 5,
        name: 'AI & Machine Learning',
        description: 'Discuss the latest in artificial intelligence, machine learning, and data science.',
        members: 1876,
        online: 134,
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        category: 'Technology',
        privacy: 'public',
        joined: false,
        trending: true,
        similarity: 88
    },
    {
        id: 6,
        name: 'Sustainable Living',
        description: 'Share tips and ideas for eco-friendly living and sustainable practices.',
        members: 932,
        online: 67,
        image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        category: 'Lifestyle',
        privacy: 'public',
        joined: false,
        similarity: 85
    },
    {
        id: 7,
        name: 'Remote Workers United',
        description: 'Connect with fellow remote workers, share workspace tips, and combat isolation.',
        members: 1567,
        online: 112,
        image: 'https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        category: 'Professional',
        privacy: 'public',
        joined: false,
        similarity: 78
    }
];

export const discussions = [
    {
        id: 1,
        title: 'Best practices for remote team collaboration?',
        community: 'Remote Workers United',
        author: 'Sarah Johnson',
        replies: 24,
        likes: 45,
        views: 156,
        time: '2 hours ago',
        pinned: true
    },
    {
        id: 2,
        title: 'AI tools that actually save time?',
        community: 'AI & Machine Learning',
        author: 'Mike Chen',
        replies: 18,
        likes: 32,
        views: 89,
        time: '5 hours ago',
        pinned: false
    },
    {
        id: 3,
        title: 'Sustainable alternatives to everyday products',
        community: 'Sustainable Living',
        author: 'Emma Wilson',
        replies: 12,
        likes: 28,
        views: 67,
        time: '1 day ago',
        pinned: false
    }
];

export const communityEvents = [
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
