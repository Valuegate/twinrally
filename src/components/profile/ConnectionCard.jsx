/**
 * ConnectionCard.jsx - Individual Connection Display Component
 *
 * Displays a single user connection with profile info, connection type,
 * and interaction options. Used in ConnectionsPage for managing relationships.
 *
 * @author Kilo Code - TwinRally Team
 * @version 1.0.0
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Users, MessageCircle, UserMinus, UserPlus, Heart } from 'lucide-react';

const ConnectionCard = ({
  connection,
  onMessage,
  onUnfollow,
  onFollow,
  className = ""
}) => {
  const navigate = useNavigate();
  const { profile, connectionType, mutualFriends, lastInteraction, interactionType } = connection;

  const handleProfileClick = () => {
    navigate(`/profile/${profile.id}`);
  };

  const handleMessage = (e) => {
    e.stopPropagation();
    onMessage?.(profile);
  };

  const handleUnfollow = (e) => {
    e.stopPropagation();
    onUnfollow?.(profile);
  };

  const handleFollow = (e) => {
    e.stopPropagation();
    onFollow?.(profile);
  };

  const getConnectionTypeColor = (type) => {
    switch (type) {
      case 'mutual': return 'text-green-400 bg-green-500/20';
      case 'following': return 'text-blue-400 bg-blue-500/20';
      case 'follower': return 'text-orange-400 bg-orange-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  const getInteractionIcon = (type) => {
    switch (type) {
      case 'liked_post': return <Heart className="w-3 h-3" />;
      case 'commented_on_event': return <MessageCircle className="w-3 h-3" />;
      case 'attended_event': return <Users className="w-3 h-3" />;
      case 'followed_back': return <UserPlus className="w-3 h-3" />;
      case 'messaged': return <MessageCircle className="w-3 h-3" />;
      default: return null;
    }
  };

  const formatLastInteraction = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) return 'Today';
    if (diffDays === 2) return 'Yesterday';
    if (diffDays <= 7) return `${diffDays - 1} days ago`;
    return date.toLocaleDateString();
  };

  return (
    <div
      className={`
        bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10
        hover:bg-white/10 hover:border-white/20 transition-all duration-300
        cursor-pointer group animate-slide-up
        ${className}
      `}
      onClick={handleProfileClick}
    >
      <div className="flex items-start space-x-4">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/20 group-hover:border-white/40 transition-colors">
            <img
              src={profile.avatar}
              alt={`${profile.firstName} ${profile.lastName}`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="text-lg font-bold text-white truncate">
                {profile.firstName} {profile.lastName}
              </h3>
              {profile.isTwin && profile.twinName && (
                <p className="text-sm text-gray-400 truncate">
                  & {profile.twinName}
                </p>
              )}
            </div>

            {/* Connection Type Badge */}
            <span className={`
              px-3 py-1 rounded-full text-xs font-medium capitalize
              ${getConnectionTypeColor(connectionType)}
            `}>
              {connectionType}
            </span>
          </div>

          {/* Bio */}
          {profile.bio && (
            <p className="text-gray-300 text-sm mb-3 line-clamp-2">
              {profile.bio}
            </p>
          )}

          {/* Location */}
          {profile.location && (
            <div className="flex items-center text-gray-400 text-sm mb-2">
              <MapPin className="w-4 h-4 mr-1" />
              {profile.location.city}, {profile.location.country}
            </div>
          )}

          {/* Connection Info */}
          <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
            <div className="flex items-center space-x-4">
              <span>{profile.connections?.followers || 0} followers</span>
              {mutualFriends > 0 && (
                <span className="text-[color:var(--blue)]">
                  {mutualFriends} mutual
                </span>
              )}
            </div>
          </div>

          {/* Last Interaction */}
          {lastInteraction && (
            <div className="flex items-center text-xs text-gray-500 mb-3">
              {getInteractionIcon(interactionType)}
              <span className="ml-1">
                {interactionType.replace(/_/g, ' ')} • {formatLastInteraction(lastInteraction)}
              </span>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex space-x-2">
            {connectionType === 'mutual' && (
              <button
                onClick={handleMessage}
                className="flex-1 px-4 py-2 bg-gradient-to-r from-[color:var(--pink)] to-[color:var(--blue)] text-white text-sm rounded-lg hover:scale-105 transition-all duration-300 flex items-center justify-center"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Message
              </button>
            )}

            {connectionType === 'following' && (
              <button
                onClick={handleUnfollow}
                className="flex-1 px-4 py-2 bg-white/10 text-gray-300 text-sm rounded-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
              >
                <UserMinus className="w-4 h-4 mr-2" />
                Unfollow
              </button>
            )}

            {connectionType === 'follower' && (
              <button
                onClick={handleFollow}
                className="flex-1 px-4 py-2 bg-gradient-to-r from-[color:var(--pink)] to-[color:var(--blue)] text-white text-sm rounded-lg hover:scale-105 transition-all duration-300 flex items-center justify-center"
              >
                <UserPlus className="w-4 h-4 mr-2" />
                Follow Back
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectionCard;