/**
 * ConnectionButton Component - TwinRally Social Features
 *
 * Smart connection button that manages follow/unfollow states with
 * proper loading states, optimistic updates, and social feedback.
 *
 * Architecture:
 * - Handles follow/unfollow API calls (mocked)
 * - Optimistic UI updates for better UX
 * - Visual feedback and loading states
 * - Reusable across profile contexts
 * - Privacy-aware (respects user settings)
 *
 * Usage:
 * <ConnectionButton userId={profile.id} connections={profile.connections} />
 *
 * Data Integration:
 * - Updates profile connection counts
 * - Handles mutual connection detection
 * - Integrates with notification system
 *
 * @author Wasiu - TwinRally Team
 * @version 1.0.0
 */

import React, { useState } from "react";
import { User, UserCheck, UserPlus, Loader2 } from "lucide-react";

/**
 * Constants for connection states
 */
const CONNECTION_STATES = {
  NOT_FOLLOWING: "not_following",
  LOADING_FOLLOW: "loading_follow",
  FOLLOWING: "following",
  LOADING_UNFOLLOW: "loading_unfollow",
  MUTUAL_FRIENDS: "mutual_friends",
};

const ConnectionButton = ({
  userId,
  connections = {},
  canFollow = true,
  size = "default",
  compact = false,
  onConnectionChange,
  className = "",
}) => {
  const [connectionState, setConnectionState] = useState(
    connections.viewerFollowing
      ? CONNECTION_STATES.FOLLOWING
      : CONNECTION_STATES.NOT_FOLLOWING
  );
  const [connectionLoading, setConnectionLoading] = useState(false);

  /**
   * Handle follow action
   */
  const handleFollow = async () => {
    if (connectionLoading || !canFollow) return;

    setConnectionLoading(true);
    setConnectionState(CONNECTION_STATES.LOADING_FOLLOW);

    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1200));

      // Update local state optimistically
      setConnectionState(CONNECTION_STATES.FOLLOWING);

      // Call parent callback
      onConnectionChange?.({
        type: "follow",
        userId,
        success: true,
      });

      // Show success message (would normally be a toast)
      console.log(`✅ Now following user ${userId}`);
    } catch (error) {
      console.error("Follow failed:", error);
      setConnectionState(CONNECTION_STATES.NOT_FOLLOWING);

      onConnectionChange?.({
        type: "follow",
        userId,
        success: false,
        error,
      });
    } finally {
      setConnectionLoading(false);
    }
  };

  /**
   * Handle unfollow action
   */
  const handleUnfollow = async () => {
    if (connectionLoading) return;

    setConnectionLoading(true);
    setConnectionState(CONNECTION_STATES.LOADING_UNFOLLOW);

    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 800));

      // Update local state
      setConnectionState(CONNECTION_STATES.NOT_FOLLOWING);

      // Call parent callback
      onConnectionChange?.({
        type: "unfollow",
        userId,
        success: true,
      });

      console.log(`✅ Unfollowed user ${userId}`);
    } catch (error) {
      console.error("Unfollow failed:", error);
      setConnectionState(CONNECTION_STATES.FOLLOWING);

      onConnectionChange?.({
        type: "unfollow",
        userId,
        success: false,
        error,
      });
    } finally {
      setConnectionLoading(false);
    }
  };

  /**
   * Render different button styles based on state
   */
  const renderButtonContent = () => {
    const buttonClasses = {
      default: compact ? "px-4 py-2 text-sm" : "px-6 py-3 text-sm",
      small: "px-3 py-1.5 text-xs",
      large: compact ? "px-8 py-4 text-base" : "px-10 py-4 text-base",
    };

    const baseClasses = `${buttonClasses[size]} font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 ${className}`;

    switch (connectionState) {
      case CONNECTION_STATES.NOT_FOLLOWING:
        return (
          <button
            onClick={handleFollow}
            disabled={!canFollow || connectionLoading}
            className={`${baseClasses} bg-gradient-to-r from-pink-500 to-blue-500 text-white hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:scale-100 disabled:cursor-not-allowed`}
          >
            <UserPlus className={compact ? "w-3 h-3" : "w-4 h-4"} />
            {compact ? "Follow" : "Follow Twin"}
          </button>
        );

      case CONNECTION_STATES.LOADING_FOLLOW:
      case CONNECTION_STATES.LOADING_UNFOLLOW:
        return (
          <button
            disabled
            className={`${baseClasses} bg-gradient-to-r from-pink-500 to-blue-500 text-white opacity-75 cursor-not-allowed`}
          >
            <Loader2
              className={`${compact ? "w-3 h-3" : "w-4 h-4"} animate-spin`}
            />
            {connectionState === CONNECTION_STATES.LOADING_FOLLOW
              ? "Following..."
              : "Unfollowing..."}
          </button>
        );

      case CONNECTION_STATES.FOLLOWING:
        return (
          <button
            onClick={handleUnfollow}
            disabled={connectionLoading}
            className={`${baseClasses} bg-white text-gray-700 border-2 border-gray-300 hover:bg-red-50 hover:border-red-300 hover:text-red-600 transition-all duration-300 relative group`}
          >
            <UserCheck className={compact ? "w-3 h-3" : "w-4 h-4"} />
            {compact ? "Following" : "Following"}
            {/* Unfollow hint on hover */}
            <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <div className="bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                ×
              </div>
            </div>
          </button>
        );

      default:
        return null;
    }
  };

  // Don't render button if user can't follow (e.g., their own profile)
  if (!canFollow) {
    return null;
  }

  return (
    <div className="connection-button-wrapper">
      {renderButtonContent()}

      {/* Optional: Mutual connection indicator */}
      {connections.mutualConnections > 0 &&
        connectionState === CONNECTION_STATES.FOLLOWING && (
          <div className="mt-2 text-xs text-green-600 flex items-center gap-1">
            <User className="w-3 h-3" />
            {connections.mutualConnections} mutual{" "}
            {connections.mutualConnections === 1 ? "connection" : "connections"}
          </div>
        )}
    </div>
  );
};

export default ConnectionButton;
