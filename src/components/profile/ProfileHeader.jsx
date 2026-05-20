/**
 * ProfileHeader Component - TwinRally Profile System
 *
 * Reusable header component displaying user profile information and key stats.
 * Foundation component for ProfilePage and other profile displays.
 *
 * Architecture:
 * - Clean separation of display logic
 * - Consistent with TwinRally design system
 * - Responsive layout with mobile considerations
 * - Supports various user states and privacy settings
 *
 * Usage: <ProfileHeader profile={profile} onEdit={handleEdit} editable={true} />
 *
 * @author Wasiu - TwinRally Team
 * @version 1.0.0
 */

import React from "react";
import {
  MapPin,
  Calendar,
  ShieldCheck,
  Edit3,
  Mail,
  MessageCircle,
} from "lucide-react";
import ConnectionButton from "./ConnectionButton";

const ProfileHeader = ({
  profile,
  onEdit,
  editable = false,
  showActions = true,
}) => {
  if (!profile) {
    return (
      <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 animate-pulse">
        <div className="flex items-center space-x-6">
          <div className="w-24 h-24 bg-white/10 rounded-full"></div>
          <div className="flex-1 space-y-3">
            <div className="h-6 bg-white/10 rounded w-48"></div>
            <div className="h-4 bg-white/10 rounded w-32"></div>
          </div>
        </div>
      </div>
    );
  }

  const handleMessage = () => {
    alert(
      `Messaging feature coming soon! Connect with ${profile.firstName} through your mutual twin communities.`
    );
  };

  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden">
      {/* Cover Photo Section */}
      <div className="relative h-48 md:h-56 overflow-hidden">
        <img
          src={profile.coverPhoto || "/public/twinrally_lg_01.png"}
          alt={`${profile.firstName} ${profile.lastName} - Cover`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

        {/* Action Buttons (top right) */}
        {showActions && (
          <div className="absolute top-4 right-4 flex space-x-3">
            {editable ? (
              // Own profile - Edit button
              <button
                onClick={onEdit}
                className="flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg text-white hover:bg-white/30 transition-all duration-300 text-sm font-medium"
                aria-label="Edit profile"
              >
                <Edit3 className="w-4 h-4" />
                <span className="hidden sm:inline">Edit Profile</span>
              </button>
            ) : (
              // Other profile - Connection and message buttons
              <div className="flex space-x-2">
                <ConnectionButton
                  userId={profile.id}
                  connections={profile.connections}
                  canFollow={true}
                  size="small"
                  compact={true}
                  className="text-sm"
                />
                {profile.privacy?.allowMessages && (
                  <button
                    onClick={handleMessage}
                    className="flex items-center space-x-1.5 px-3 py-2 bg-white/20 backdrop-blur-md rounded-lg text-white hover:bg-white/30 transition-all duration-300 text-sm font-medium"
                    aria-label="Send message"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Message</span>
                  </button>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Profile Content */}
      <div className="p-6">
        {/* Avatar and Basic Info */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 -mt-16 sm:-mt-12 relative z-10">
          {/* Avatar */}
          <div className="relative">
            <img
              src={profile.avatar || "/public/twinrally_lg_01.png"}
              alt={`${profile.firstName} ${profile.lastName}`}
              className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-[color:var(--bg)] bg-[color:var(--bg)] object-cover"
            />
            {profile.verification?.verified && (
              <div className="absolute bottom-0 right-0 bg-green-500 text-white rounded-full p-1.5 border-2 border-[color:var(--bg)]">
                <ShieldCheck className="w-4 h-4" />
              </div>
            )}
          </div>

          {/* Name and Status */}
          <div className="flex-1 text-center sm:text-left">
            {/* Name and Verification */}
            <div className="flex items-center justify-center sm:justify-start space-x-2 mb-2">
              <h1 className="text-2xl sm:text-3xl font-bold text-white">
                {profile.firstName} {profile.lastName}
              </h1>
              {profile.verification?.verified && (
                <span className="inline-flex items-center px-2 py-1 rounded-full bg-green-500/20 text-green-300 text-xs font-medium">
                  Verified Twin
                </span>
              )}
            </div>

            {/* Twin Identity */}
            {profile.isTwin && (
              <div className="text-gray-300 text-lg mb-2">
                {profile.twinName ? (
                  <>with {profile.twinName}</>
                ) : (
                  <span className="text-orange-400 italic">
                    Finding my twin...
                  </span>
                )}
              </div>
            )}

            {/* Location and Occupation */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-1 sm:space-y-0 sm:space-x-3 text-gray-400 text-sm mb-4">
              {/* Location */}
              {profile.privacy?.showLocation && (
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>
                    {profile.location?.city}, {profile.location?.country}
                  </span>
                </div>
              )}

              {/* Separator for desktop */}
              {profile.privacy?.showLocation && profile.occupation && (
                <span className="hidden sm:inline text-gray-600">•</span>
              )}

              {/* Occupation */}
              {profile.occupation && <span>{profile.occupation}</span>}
            </div>

            {/* Bio/Summary */}
            <p className="text-gray-300 text-sm leading-relaxed max-w-2xl">
              {profile.bio}
            </p>
          </div>
        </div>

        {/* Stats Row */}
        {(profile.privacy?.showConnections || profile.stats) && (
          <div className="flex items-center justify-center sm:justify-start space-x-8 mt-6 pt-6 border-t border-white/10">
            {/* Followers/Following */}
            {profile.privacy?.showConnections && (
              <div className="text-center">
                <div className="text-xl font-bold text-white">
                  {profile.connections?.followers?.toLocaleString() || 0}
                </div>
                <div className="text-gray-400 text-sm">Followers</div>
              </div>
            )}

            {profile.privacy?.showConnections && (
              <div className="text-center">
                <div className="text-xl font-bold text-white">
                  {profile.connections?.following?.toLocaleString() || 0}
                </div>
                <div className="text-gray-400 text-sm">Following</div>
              </div>
            )}

            {/* Events Hosted */}
            {profile.stats?.eventsHosted > 0 && (
              <div className="text-center">
                <div className="text-xl font-bold text-white">
                  {profile.stats.eventsHosted}
                </div>
                <div className="text-gray-400 text-sm">Events Hosted</div>
              </div>
            )}

            {/* Events Attended */}
            {profile.stats?.eventsAttended > 0 && (
              <div className="text-center">
                <div className="text-xl font-bold text-white">
                  {profile.stats.eventsAttended}
                </div>
                <div className="text-gray-400 text-sm">Events Attended</div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileHeader;
