import React, { useState } from 'react'
import { Users, Search, Plus, Filter } from 'lucide-react'
import { renderCommunityCard, renderEventCard, renderDiscussionCard } from '../renderComp/Community';
import { myCommunities, discoverCommunities, discussions, communityEvents } from '@/data/dashboard/myCommunty';

// Same colors used across the rest of TwinRally dashboard
const THEME = {
    dark: {
        bg: '#040e29',
        surface: 'rgba(255,255,255,0.04)',
        surface2: 'rgba(255,255,255,0.07)',
        border: 'rgba(255,255,255,0.08)',
        border2: 'rgba(251,194,235,0.18)',
        text: '#f0ecff',
        textSub: 'rgba(240,236,255,0.55)',
        textMuted: 'rgba(240,236,255,0.35)',
        pink: '#fbc2eb',
        blue: '#a6c0ee',
        darkText: '#040e29',
    },
    light: {
        bg: '#f6f4fb',
        surface: '#ffffff',
        surface2: 'rgba(4,14,41,0.03)',
        border: 'rgba(4,14,41,0.08)',
        border2: 'rgba(199,84,160,0.25)',
        text: '#12152a',
        textSub: 'rgba(18,21,42,0.6)',
        textMuted: 'rgba(18,21,42,0.4)',
        pink: '#c754a0',
        blue: '#5b7fd4',
        darkText: '#ffffff',
    },
};

// `dark` is now controlled by the dashboard topbar toggle, passed in as a prop
export const CommPage = ({ dark = true }) => {
    const [activeTab, setActiveTab] = useState('discover');
    const [searchQuery, setSearchQuery] = useState('');

    const t = dark ? THEME.dark : THEME.light;

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

    const tabs = [
        { id: 'my', label: 'My Communities', count: filteredMyCommunities.length },
        { id: 'discover', label: 'Discover', count: filteredDiscoverCommunities.length },
        { id: 'events', label: 'Events', count: communityEvents.length },
        { id: 'discussions', label: 'Discussions', count: discussions.length }
    ];

    const panelStyle = {
        borderRadius: 20,
        border: `1px solid ${t.border}`,
        background: t.surface,
    };

    return (
        <div style={{ background: t.bg, color: t.text, minHeight: '100%' }} className="space-y-6 -m-6 p-6">

            {/* Header */}
            <div
                style={{
                    borderRadius: 20,
                    border: `1px solid ${t.border2}`,
                    background: `linear-gradient(135deg, ${t.pink}14 0%, ${t.blue}0f 100%)`,
                    padding: '2rem',
                }}
            >
                <div className="flex justify-between items-start flex-wrap gap-4">
                    <div>
                        <h1 style={{ color: t.text }} className="text-3xl font-bold mb-2">Communities</h1>
                        <p style={{ color: t.textSub }} className="text-lg">
                            Find your tribe, share interests, and build meaningful connections.
                        </p>
                    </div>
                    <div style={{ background: `linear-gradient(135deg, ${t.pink}, ${t.blue})`, color: t.darkText }} className="rounded-lg p-3">
                        <Users className="w-6 h-6" />
                    </div>
                </div>
            </div>

            {/* Search */}
            <div style={panelStyle} className="p-6">
                <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
                    <h2 style={{ color: t.text }} className="text-xl font-bold flex items-center">
                        <Search className="w-5 h-5 mr-2" style={{ color: t.pink }} />
                        Find Communities
                    </h2>
                    <button
                        style={{ background: `linear-gradient(135deg, ${t.pink}, ${t.blue})`, color: t.darkText }}
                        className="px-4 py-2 rounded-lg text-sm font-semibold flex items-center"
                    >
                        <Plus className="w-4 h-4 mr-2" />
                        Create Community
                    </button>
                </div>
                <div className="relative">
                    <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2" style={{ color: t.textMuted }} />
                    <input
                        type="text"
                        placeholder="Search communities by name, category, or interest..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        style={{ background: t.surface2, border: `1px solid ${t.border}`, color: t.text }}
                        className="w-full pl-10 pr-4 py-3 rounded-lg outline-none"
                    />
                </div>
            </div>

            {/* Tabs */}
            <div style={{ ...panelStyle, borderRadius: 14 }} className="p-1">
                <div className="flex space-x-1 overflow-x-auto">
                    {tabs.map((tab) => {
                        const active = activeTab === tab.id;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                style={{
                                    background: active ? `linear-gradient(135deg, ${t.pink}, ${t.blue})` : 'transparent',
                                    color: active ? t.darkText : t.textSub,
                                }}
                                className="flex-shrink-0 py-3 px-4 rounded-lg text-sm font-semibold whitespace-nowrap"
                            >
                                {tab.label}
                                <span
                                    style={{
                                        background: active ? 'rgba(4,14,41,0.18)' : t.surface2,
                                        color: active ? t.darkText : t.textMuted,
                                    }}
                                    className="ml-2 text-xs px-2 py-1 rounded-full"
                                >
                                    {tab.count}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
                {activeTab === 'my' && (
                    <>
                        <h3 style={{ color: t.text }} className="text-xl font-bold">My Communities ({filteredMyCommunities.length})</h3>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {filteredMyCommunities.map(community => renderCommunityCard(community, t))}
                        </div>
                    </>
                )}

                {activeTab === 'discover' && (
                    <>
                        <div className="flex items-center justify-between">
                            <h3 style={{ color: t.text }} className="text-xl font-bold">Discover Communities ({filteredDiscoverCommunities.length})</h3>
                            <button style={{ color: t.textSub }} className="flex items-center text-sm">
                                <Filter className="w-4 h-4 mr-1" />
                                Filter
                            </button>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {filteredDiscoverCommunities.map(community => renderCommunityCard(community, t))}
                        </div>
                    </>
                )}

                {activeTab === 'events' && (
                    <>
                        <h3 style={{ color: t.text }} className="text-xl font-bold">Community Events ({communityEvents.length})</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {communityEvents.map(event => renderEventCard(event, t))}
                        </div>
                    </>
                )}

                {activeTab === 'discussions' && (
                    <>
                        <h3 style={{ color: t.text }} className="text-xl font-bold">Popular Discussions ({discussions.length})</h3>
                        <div className="space-y-4">
                            {discussions.map(discussion => renderDiscussionCard(discussion, t))}
                        </div>
                    </>
                )}
            </div>

            {/* Empty state */}
            {(activeTab === 'my' && filteredMyCommunities.length === 0) ||
                (activeTab === 'discover' && filteredDiscoverCommunities.length === 0) ||
                (activeTab === 'events' && communityEvents.length === 0) ||
                (activeTab === 'discussions' && discussions.length === 0) ? (
                <div style={{ border: `1px dashed ${t.border}`, background: t.surface2, borderRadius: 20 }} className="text-center py-12">
                    <Users className="w-16 h-16 mx-auto mb-4" style={{ color: t.textMuted }} />
                    <h3 style={{ color: t.text }} className="text-lg font-semibold mb-2">Nothing here yet</h3>
                    <p style={{ color: t.textSub }} className="mb-4">Try a different search or tab.</p>
                </div>
            ) : null}
        </div>
    )
}