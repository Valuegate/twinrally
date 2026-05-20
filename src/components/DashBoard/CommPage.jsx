import React, { useState } from 'react'
import { Users, Search, Plus, Filter } from 'lucide-react'
import { renderCommunityCard, renderEventCard, renderDiscussionCard } from '../renderComp/Community';
import { myCommunities, discoverCommunities, discussions, communityEvents } from '@/data/dashboard/myCommunty';

export const CommPage = () => {
    const [activeTab, setActiveTab] = useState('discover');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredMyCommunities = myCommunities.filter(community =>
        community.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        community.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        community.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const filteredDiscoverCommunities = discoverCommunities.filter(community =>
        community.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        community.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        community.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="space-y-6">
            {/* Header Section */}
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white">
                <div className="flex justify-between items-start">
                    <div>
                        <h1 className="text-3xl font-bold mb-2">Communities</h1>
                        <p className="text-green-100 text-lg">
                            Find your tribe, share interests, and build meaningful connections.
                        </p>
                    </div>
                    <div className="bg-white/20 rounded-lg p-3">
                        <Users className="w-6 h-6" />
                    </div>
                </div>
            </div>

            {/* Community Search */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold text-gray-900 flex items-center">
                        <Search className="w-5 h-5 mr-2 text-green-500" />
                        Find Communities
                    </h2>
                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors flex items-center">
                        <Plus className="w-4 h-4 mr-2" />
                        Create Community
                    </button>
                </div>
                <div className="relative">
                    <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                    <input
                        type="text"
                        placeholder="Search communities by name, category, or interest..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                </div>
            </div>

            {/* Navigation Tabs */}
            <div className="bg-white rounded-xl p-1 shadow-sm border border-gray-200">
                <div className="bg-white rounded-xl p-1 shadow-sm border border-gray-200">
                    <div className="flex space-x-1 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                        {[
                            { id: 'my', label: 'My Communities', count: filteredMyCommunities.length },
                            { id: 'discover', label: 'Discover', count: filteredDiscoverCommunities.length },
                            { id: 'events', label: 'Events', count: communityEvents.length },
                            { id: 'discussions', label: 'Discussions', count: discussions.length }
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex-shrink-0 py-3 px-4 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${activeTab === tab.id
                                    ? 'bg-green-600 text-white'
                                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                                    }`}
                            >
                                {tab.label}
                                <span className={`ml-2 text-xs px-2 py-1 rounded-full ${activeTab === tab.id ? 'bg-white/20 text-white' : 'bg-green-100 text-green-800'
                                    }`}>
                                    {tab.count}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Content Based on Active Tab */}
            <div className="space-y-6">
                {activeTab === 'my' && (
                    <>
                        <h3 className="text-xl font-bold text-gray-900">My Communities ({filteredMyCommunities.length})</h3>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {filteredMyCommunities.map(community => renderCommunityCard(community))}
                        </div>
                    </>
                )}

                {activeTab === 'discover' && (
                    <>
                        <div className="flex items-center justify-between">
                            <h3 className="text-xl font-bold text-gray-900">Discover Communities ({filteredDiscoverCommunities.length})</h3>
                            <button className="flex items-center text-sm text-gray-600 hover:text-gray-900">
                                <Filter className="w-4 h-4 mr-1" />
                                Filter
                            </button>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {filteredDiscoverCommunities.map(community => renderCommunityCard(community))}
                        </div>
                    </>
                )}

                {activeTab === 'events' && (
                    <>
                        <h3 className="text-xl font-bold text-gray-900">Community Events ({communityEvents.length})</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {communityEvents.map(event => renderEventCard(event))}
                        </div>
                    </>
                )}

                {activeTab === 'discussions' && (
                    <>
                        <h3 className="text-xl font-bold text-gray-900">Popular Discussions ({discussions.length})</h3>
                        <div className="space-y-4">
                            {discussions.map(discussion => renderDiscussionCard(discussion))}
                        </div>
                    </>
                )}
            </div>

            {/* Empty State */}
            {(activeTab === 'my' && filteredMyCommunities.length === 0) ||
                (activeTab === 'discover' && filteredDiscoverCommunities.length === 0) ||
                (activeTab === 'events' && communityEvents.length === 0) ||
                (activeTab === 'discussions' && discussions.length === 0) ? (
                <div className="text-center py-12">
                    <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {activeTab === 'my' ? 'No communities joined yet' :
                            activeTab === 'discover' ? 'No communities found' :
                                activeTab === 'events' ? 'No upcoming events' :
                                    'No discussions found'}
                    </h3>
                    <p className="text-gray-600 mb-4">
                        {searchQuery ? 'Try adjusting your search terms' :
                            activeTab === 'my' ? 'Join some communities to get started!' :
                                activeTab === 'discover' ? 'Explore and discover amazing communities' :
                                    activeTab === 'events' ? 'Check back later for upcoming events' :
                                        'Be the first to start a discussion!'}
                    </p>
                    {searchQuery && (
                        <button
                            onClick={() => setSearchQuery('')}
                            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
                        >
                            Clear Search
                        </button>
                    )}
                    {activeTab === 'discover' && !searchQuery && (
                        <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                            Explore Communities
                        </button>
                    )}
                </div>
            ) : null}
        </div>
    )
}