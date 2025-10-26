import React, { useState } from 'react'
import { Users, UserPlus, Search, MapPin } from 'lucide-react'
import { currentUser, friends, pendingInvites, suggestedFriends } from '@/data/dashboard/dashboard';
import { renderFriendProfileCard, renderPendingInviteCard } from '../renderComp/RenderComp';

export const Friend = () => {
    const [activeTab, setActiveTab] = useState('friends');
    const [searchQuery, setSearchQuery] = useState('');


    const filteredFriends = friends.filter(friend =>
        friend.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        friend.bio.toLowerCase().includes(searchQuery.toLowerCase()) ||
        friend.interests.some(interest => interest.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    const filteredPending = pendingInvites.filter(invite =>
        invite.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const filteredSuggested = suggestedFriends.filter(friend =>
        friend.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold text-gray-900 flex items-center">
                        <Search className="w-5 h-5 mr-2 text-blue-500" />
                        Twin Finder
                    </h2>
                    <div className="text-sm text-gray-500">
                        {filteredFriends.length} friends • {filteredPending.length} pending
                    </div>
                </div>
                <div className="relative">
                    <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                    <input
                        type="text"
                        placeholder="Search friends by name, bio, or interests..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>
            </div>
            {/* User Profile Header */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mt-7">

                {/* Profile Info */}
                <div className="px-6 pb-6">
                    <div className="flex items-end justify-between mt-16 mb-4">
                        <div className="flex items-end space-x-4">
                            <img
                                src={currentUser.avatar}
                                alt={currentUser.name}
                                className="w-32 h-32 rounded-full border-4 border-white"
                            />
                            <div>
                                <h1 className="text-2xl font-bold text-gray-900">{currentUser.name}</h1>
                                <p className="text-gray-500">{currentUser.username}</p>
                            </div>
                        </div>

                    </div>

                    {/* <p className="text-gray-600 mb-4">{currentUser.bio}</p> */}

                    <div className="flex items-center space-x-6 text-sm text-gray-600 mb-4">
                        <span className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {currentUser.location}
                        </span>
                        <span>Joined {currentUser.joined}</span>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-4">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-gray-900">{currentUser.stats.friends}</div>
                            <div className="text-sm text-gray-500">Friends</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-gray-900">{currentUser.stats.events}</div>
                            <div className="text-sm text-gray-500">Events</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-gray-900">{currentUser.stats.communities}</div>
                            <div className="text-sm text-gray-500">Communities</div>
                        </div>
                    </div>

                    {/* Interests */}
                    <div className="flex flex-wrap gap-2">
                        {currentUser.interests.map((interest, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
                            >
                                {interest}
                            </span>
                        ))}
                    </div>
                </div>
                {/* Navigation Tabs */}
                <div className="bg-white rounded-xl p-1 shadow-sm border border-gray-200">
                    <div className="flex space-x-1">
                        {[
                            { id: 'friends', label: 'My Friends', count: filteredFriends.length },
                            { id: 'pending', label: 'Pending', count: filteredPending.length },
                            { id: 'suggested', label: 'Suggestions', count: filteredSuggested.length }
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-colors ${activeTab === tab.id
                                    ? 'bg-blue-600 text-white'
                                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                                    }`}
                            >
                                {tab.label}
                                <span className="ml-2 bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                                    {tab.count}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Content Based on Active Tab */}
            <div className="space-y-4">
                {activeTab === 'friends' && (
                    <>
                        <h3 className="text-lg font-semibold text-gray-900">My Friends ({filteredFriends.length})</h3>
                        <div className="grid grid-cols-1 gap-4">
                            {filteredFriends.map(friend => renderFriendProfileCard(friend))}
                        </div>
                    </>
                )}

                {activeTab === 'pending' && (
                    <>
                        <h3 className="text-lg font-semibold text-gray-900">Pending Connections ({filteredPending.length})</h3>
                        <div className="grid grid-cols-1 gap-4">
                            {filteredPending.map(invite => renderPendingInviteCard(invite))}
                        </div>
                    </>
                )}

                {activeTab === 'suggested' && (
                    <>
                        <h3 className="text-lg font-semibold text-gray-900">Friend Suggestions ({filteredSuggested.length})</h3>
                        <div className="grid grid-cols-1 gap-4">
                            {filteredSuggested.map(friend => renderFriendProfileCard(friend, false))}
                        </div>
                        <div className="flex space-x-2">
                            <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center">
                                <UserPlus className="w-5 h-5 mr-2" />
                                Connect with All
                            </button>
                            <button className="flex-1 border border-gray-300 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                                Refresh Suggestions
                            </button>
                        </div>
                    </>
                )}
            </div>

            {/* Empty State */}
            {(activeTab === 'friends' && filteredFriends.length === 0) ||
                (activeTab === 'pending' && filteredPending.length === 0) ||
                (activeTab === 'suggested' && filteredSuggested.length === 0) ? (
                <div className="text-center py-12">
                    <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        No {activeTab === 'friends' ? 'friends' : activeTab === 'pending' ? 'pending connections' : 'suggestions'} found
                    </h3>
                    <p className="text-gray-600 mb-4">
                        {searchQuery ? 'Try adjusting your search terms' : `You don't have any ${activeTab === 'friends' ? 'friends' : activeTab === 'pending' ? 'pending connections' : 'suggestions'} yet`}
                    </p>
                    {searchQuery && (
                        <button
                            onClick={() => setSearchQuery('')}
                            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Clear Search
                        </button>
                    )}
                </div>
            ) : null}
        </div>
    )
}