import { Bell, Calendar, Calendar1, Eye, EyeClosed, Globe, Heart, Lock, MapPin, MessageCircle, MessageCircleCode, Star, TrendingUp, Users, Users2 } from "lucide-react";

export const renderCommunityCard = (community, showActions = true) => (
    <div key={community.id} className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow overflow-hidden">
        <div className="h-32 bg-gradient-to-r from-blue-500 to-purple-600 relative">
            <img
                src={community.image}
                alt={community.name}
                className="w-full h-full object-cover"
            />
            <div className="absolute top-3 right-3 flex space-x-2">
                {community.privacy === 'private' ? (
                    <span className="bg-gray-800 text-white px-2 py-1 text-xs rounded-full flex items-center">
                        <Lock className="w-3 h-3 mr-1" />
                        Private
                    </span>
                ) : (
                    <span className="bg-green-600 text-white px-2 py-1 text-xs rounded-full flex items-center">
                        <Globe className="w-3 h-3 mr-1" />
                        Public
                    </span>
                )}
                {community.trending && (
                    <span className="bg-orange-500 text-white px-2 py-1 text-xs rounded-full flex items-center">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        Trending
                    </span>
                )}
            </div>
        </div>

        <div className="p-6">
            <div className="flex items-start justify-between mb-3">
                <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{community.name}</h3>
                    <p className="text-gray-600 text-sm mb-2">{community.description}</p>
                </div>
                {community.role && (
                    <span className={`px-2 py-1 text-xs rounded-full ${community.role === 'admin' ? 'bg-red-100 text-red-700' :
                        community.role === 'moderator' ? 'bg-blue-100 text-blue-700' :
                            'bg-gray-100 text-gray-700'
                        }`}>
                        {community.role}
                    </span>
                )}
            </div>

            <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                <div className="flex items-center space-x-4">
                    <span className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {community.members.toLocaleString()} members
                    </span>
                    <span className="flex items-center text-green-600">
                        ● {community.online} online
                    </span>
                </div>
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                    {community.category}
                </span>
            </div>

            {community.similarity && (
                <div className="mb-4">
                    <div className="flex items-center justify-between text-sm mb-1">
                        <span className="text-gray-600">Match with your interests</span>
                        <span className="font-semibold text-blue-600">{community.similarity}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                            className="bg-blue-600 h-2 rounded-full"
                            style={{ width: `${community.similarity}%` }}
                        ></div>
                    </div>
                </div>
            )}

            {community.joined && (
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <div className="flex items-center space-x-4">
                        <span className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {community.upcomingEvents} upcoming events
                        </span>
                        <span className="flex items-center">
                            <MessageCircle className="w-4 h-4 mr-1" />
                            {community.newPosts} new posts
                        </span>
                    </div>
                </div>
            )}

            {showActions && (
                <div className="flex space-x-2">
                    {community.joined ? (
                        <>
                            <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                                Enter Community
                            </button>
                            <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                                <Bell className="w-4 h-4" />
                            </button>
                        </>
                    ) : (
                        <>
                            <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                                Join Community
                            </button>
                            <button className="flex-1 border border-gray-300 py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                                Learn More
                            </button>
                        </>
                    )}
                </div>
            )}
        </div>
    </div>
);

export const renderEventCard = (event) => (
    <div key={event.id} className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
        <div className="flex items-start justify-between mb-3">
            <div>
                <h4 className="font-semibold text-gray-900 mb-1">{event.title}</h4>
                <p className="text-sm text-gray-600 mb-2">{event.community}</p>
            </div>
            <span className={`px-2 py-1 text-xs rounded-full ${event.type === 'online' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                }`}>
                {event.type === 'online' ? 'Online' : 'In Person'}
            </span>
        </div>

        <div className="space-y-2 text-sm text-gray-600 mb-4">
            <div className="flex items-center">
                <Calendar1 className="w-4 h-4 mr-2" />
                {event.date}
            </div>
            <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                {event.location}
            </div>
        </div>

        <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 text-xs text-gray-500">
                <span className="flex items-center">
                    <Users2 className="w-3 h-3 mr-1" />
                    {event.attendees} attending
                </span>
                <span className="flex items-center">
                    <Eye className="w-3 h-3 mr-1" />
                    {event.interested} interested
                </span>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                RSVP
            </button>
        </div>
    </div>
);

export const renderDiscussionCard = (discussion) => (
    <div key={discussion.id} className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
        <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                    <h4 className="font-semibold text-gray-900">{discussion.title}</h4>
                    {discussion.pinned && (
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    )}
                </div>
                <p className="text-sm text-gray-600 mb-2">in {discussion.community} • by {discussion.author}</p>
            </div>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center space-x-4">
                <span className="flex items-center">
                    <MessageCircleCode className="w-4 h-4 mr-1" />
                    {discussion.replies} replies
                </span>
                <span className="flex items-center">
                    <Heart className="w-4 h-4 mr-1" />
                    {discussion.likes} likes
                </span>
                <span className="flex items-center">
                    <EyeClosed className="w-4 h-4 mr-1" />
                    {discussion.views} views
                </span>
            </div>
            <span className="text-xs">{discussion.time}</span>
        </div>
    </div>
);