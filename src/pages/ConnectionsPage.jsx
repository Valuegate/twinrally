/**
 * ConnectionsPage - TwinRally Connections Management Page
 *
 * Displays and manages user connections including followers, following,
 * and mutual connections. Provides filtering and interaction options.
 *
 * Route: /connections
 *
 * @author Kilo Code - TwinRally Team
 * @version 1.0.0
 */

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '@/components/layout/Footer';
import ConnectionCard from '@/components/profile/ConnectionCard';
import { Users, UserPlus, UserMinus, Search, Filter } from 'lucide-react';
import { getUserConnections, getConnectionStats, currentUserProfile } from '@/data/mockProfiles';

const ConnectionsPage = () => {
  const navigate = useNavigate();
  const [connections, setConnections] = useState([]);
  const [filteredConnections, setFilteredConnections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [stats, setStats] = useState({ total: 0, following: 0, followers: 0, mutual: 0 });

  /**
   * Load connections data
   */
  useEffect(() => {
    const loadConnections = async () => {
      setLoading(true);

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      try {
        const userConnections = getUserConnections(currentUserProfile.id);
        const connectionStats = getConnectionStats(currentUserProfile.id);

        setConnections(userConnections);
        setFilteredConnections(userConnections);
        setStats(connectionStats);
      } catch (error) {
        console.error('Error loading connections:', error);
      } finally {
        setLoading(false);
      }
    };

    loadConnections();
  }, []);

  /**
   * Filter connections based on active filter and search term
   */
  useEffect(() => {
    let filtered = connections;

    // Apply type filter
    if (activeFilter !== 'all') {
      filtered = filtered.filter(conn => conn.connectionType === activeFilter);
    }

    // Apply search filter
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(conn =>
        conn.profile.firstName.toLowerCase().includes(term) ||
        conn.profile.lastName.toLowerCase().includes(term) ||
        (conn.profile.twinName && conn.profile.twinName.toLowerCase().includes(term)) ||
        (conn.profile.bio && conn.profile.bio.toLowerCase().includes(term)) ||
        (conn.profile.location && (
          conn.profile.location.city.toLowerCase().includes(term) ||
          conn.profile.location.country.toLowerCase().includes(term)
        ))
      );
    }

    setFilteredConnections(filtered);
  }, [connections, activeFilter, searchTerm]);

  /**
   * Handle connection actions
   */
  const handleMessage = (profile) => {
    // Mock message action - could navigate to messages or show modal
    alert(`Message ${profile.firstName} ${profile.lastName}`);
  };

  const handleUnfollow = (profile) => {
    // Mock unfollow action
    alert(`Unfollowed ${profile.firstName} ${profile.lastName}`);
    // In real app, this would update the connection status
  };

  const handleFollow = (profile) => {
    // Mock follow action
    alert(`Followed ${profile.firstName} ${profile.lastName}`);
    // In real app, this would update the connection status
  };

  const filterOptions = [
    { key: 'all', label: 'All', count: stats.total, icon: Users },
    { key: 'mutual', label: 'Mutual', count: stats.mutual, icon: Users },
    { key: 'following', label: 'Following', count: stats.following, icon: UserPlus },
    { key: 'follower', label: 'Followers', count: stats.followers, icon: UserMinus },
  ];

  return (
    <div className="min-h-screen bg-[color:var(--bg)]">
      {/* Header */}
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">
              My <span className="bg-gradient-to-r from-[color:var(--pink)] to-[color:var(--blue)] bg-clip-text text-transparent">Connections</span>
            </h1>
            <p className="text-gray-300 text-lg">
              Manage your twin community and connections
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {filterOptions.map((option) => {
              const Icon = option.icon;
              return (
                <div
                  key={option.key}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center animate-slide-up"
                >
                  <Icon className="w-8 h-8 text-[color:var(--pink)] mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{option.count}</div>
                  <div className="text-gray-400 text-sm">{option.label}</div>
                </div>
              );
            })}
          </div>

          {/* Search and Filters */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search connections..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[color:var(--pink)] transition-colors"
                />
              </div>

              {/* Filter Tabs */}
              <div className="flex gap-2">
                {filterOptions.map((option) => {
                  const Icon = option.icon;
                  return (
                    <button
                      key={option.key}
                      onClick={() => setActiveFilter(option.key)}
                      className={`
                        px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2
                        ${activeFilter === option.key
                          ? 'bg-gradient-to-r from-[color:var(--pink)] to-[color:var(--blue)] text-white'
                          : 'bg-white/10 text-gray-300 hover:bg-white/20'
                        }
                      `}
                    >
                      <Icon className="w-4 h-4" />
                      {option.label}
                      <span className="text-xs opacity-75">({option.count})</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Connections Grid */}
      <div className="max-w-6xl mx-auto px-4 pb-20">
        {loading ? (
          // Loading State
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 animate-pulse"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full"></div>
                  <div className="flex-1 space-y-3">
                    <div className="h-4 bg-white/20 rounded w-3/4"></div>
                    <div className="h-3 bg-white/20 rounded w-1/2"></div>
                    <div className="h-3 bg-white/20 rounded w-2/3"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : filteredConnections.length > 0 ? (
          // Connections Grid
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredConnections.map((connection, index) => (
              <div
                key={connection.id}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <ConnectionCard
                  connection={connection}
                  onMessage={handleMessage}
                  onUnfollow={handleUnfollow}
                  onFollow={handleFollow}
                />
              </div>
            ))}
          </div>
        ) : (
          // Empty State
          <div className="text-center py-20">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Users className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              {searchTerm ? 'No connections found' : 'No connections yet'}
            </h3>
            <p className="text-gray-400 mb-6">
              {searchTerm
                ? 'Try adjusting your search or filter criteria'
                : 'Start connecting with fellow twins to build your community'
              }
            </p>
            {!searchTerm && (
              <button
                onClick={() => navigate('/events')}
                className="px-6 py-3 bg-gradient-to-r from-[color:var(--pink)] to-[color:var(--blue)] text-white rounded-lg hover:scale-105 transition-all duration-300"
              >
                Discover Events
              </button>
            )}
          </div>
        )}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ConnectionsPage;