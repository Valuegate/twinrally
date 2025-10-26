import { Heart, MapPin, MessageCircle, MoreHorizontal, UserCheck, Users, UserX } from "lucide-react";

export const renderFriendProfileCard = (friend, showActions = true) => (
    <div key={friend.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
        <div className="flex items-start justify-between mb-4">
            <div className="flex items-start space-x-4">
                <div className="relative">
                    <img
                        src={friend.avatar}
                        alt={friend.name}
                        className="w-16 h-16 rounded-full"
                    />
                    {friend.status && (
                        <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${friend.status === 'online' ? 'bg-green-500' : 'bg-gray-400'
                            }`} />
                    )}
                </div>
                <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                        <h3 className="text-lg font-semibold text-gray-900">{friend.name}</h3>
                        {friend.username && (
                            <span className="text-gray-500 text-sm">{friend.username}</span>
                        )}
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{friend.bio}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                        <span className="flex items-center">
                            <Users className="w-4 h-4 mr-1" />
                            {friend.mutualFriends} mutual friends
                        </span>
                        <span className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {friend.location}
                        </span>
                    </div>
                    {friend.lastActive && (
                        <p className="text-xs text-gray-500">Active {friend.lastActive}</p>
                    )}
                </div>
            </div>
            {showActions && (
                <div className="flex items-center space-x-2">
                    <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                        <MoreHorizontal className="w-4 h-4" />
                    </button>
                </div>
            )}
        </div>

        {friend.interests && (
            <div className="flex flex-wrap gap-2 mb-4">
                {friend.interests.map((interest, index) => (
                    <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
                    >
                        {interest}
                    </span>
                ))}
            </div>
        )}

        {showActions && (
            <div className="flex space-x-3">
                <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Message
                </button>
                <button className="flex-1 border border-gray-300 py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                    View Profile
                </button>
                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <Heart className="w-4 h-4" />
                </button>
            </div>
        )}
    </div>
);

export const renderPendingInviteCard = (invite) => (
    <div key={invite.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <div className="flex items-start justify-between mb-4">
            <div className="flex items-start space-x-4">
                <img
                    src={invite.avatar}
                    alt={invite.name}
                    className="w-16 h-16 rounded-full"
                />
                <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{invite.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{invite.bio}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span className="flex items-center">
                            <Users className="w-4 h-4 mr-1" />
                            {invite.mutualFriends} mutual friends
                        </span>
                        <span className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {invite.location}
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex items-center justify-between">
            <span className={`px-3 py-1 text-sm rounded-full ${invite.type === 'received'
                ? 'bg-green-100 text-green-700'
                : 'bg-blue-100 text-blue-700'
                }`}>
                {invite.type === 'received' ? 'Received Invite' : 'Sent Invite'} • {invite.time}
            </span>
            <div className="flex gap-4">
                {invite.type === 'received' ? (
                    <>
                        <button className="bg-blue-600 h-10 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center">
                            <UserCheck className="w-4 h-4 mr-2" />
                            Accept
                        </button>
                        <button className="flex gap-2 items-center border border-gray-300 py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                            <UserX className="w-4 h-4" />
                            Decline
                        </button>
                    </>
                ) : (
                    <button className="flex gap-1 items-center border h-10 border-gray-300 py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                        <UserX className="w-4 h-4 mr-2" />
                        Cancel Request
                    </button>
                )}
            </div>
        </div>
    </div>
);