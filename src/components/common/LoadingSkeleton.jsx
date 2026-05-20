/**
 * LoadingSkeleton.jsx - Reusable Loading Skeleton Components
 *
 * Provides various skeleton loading states for different content types.
 * Helps improve perceived performance and user experience.
 *
 * @author Kilo Code - TwinRally Team
 * @version 1.0.0
 */

import React from 'react';

// Base skeleton component with shimmer animation
const Skeleton = ({ className = "", variant = "default" }) => {
  const baseClasses = "animate-pulse bg-gradient-to-r from-gray-700/50 via-gray-600/50 to-gray-700/50";
  const variantClasses = {
    default: "bg-gray-700/30",
    card: "bg-white/5 rounded-lg",
    text: "bg-gray-600/40 rounded",
    avatar: "bg-gray-600/40 rounded-full",
    button: "bg-gray-600/40 rounded-lg"
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`} />
  );
};

// Profile Header Skeleton
export const ProfileHeaderSkeleton = () => (
  <div className="py-20">
    <div className="max-w-4xl mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
        {/* Avatar */}
        <Skeleton variant="avatar" className="w-32 h-32 flex-shrink-0" />

        {/* Content */}
        <div className="flex-1 text-center md:text-left space-y-4">
          {/* Name */}
          <Skeleton variant="text" className="h-8 w-48 mx-auto md:mx-0" />

          {/* Twin Name */}
          <Skeleton variant="text" className="h-6 w-40 mx-auto md:mx-0" />

          {/* Bio */}
          <div className="space-y-2">
            <Skeleton variant="text" className="h-4 w-full max-w-md mx-auto md:mx-0" />
            <Skeleton variant="text" className="h-4 w-3/4 max-w-sm mx-auto md:mx-0" />
          </div>

          {/* Stats */}
          <div className="flex justify-center md:justify-start space-x-6 mt-6">
            <div className="text-center">
              <Skeleton variant="text" className="h-6 w-12 mb-1" />
              <Skeleton variant="text" className="h-4 w-16" />
            </div>
            <div className="text-center">
              <Skeleton variant="text" className="h-6 w-12 mb-1" />
              <Skeleton variant="text" className="h-4 w-16" />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-center md:justify-start space-x-3 mt-6">
            <Skeleton variant="button" className="h-10 w-24" />
            <Skeleton variant="button" className="h-10 w-20" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Event Card Skeleton
export const EventCardSkeleton = () => (
  <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 animate-slide-up">
    {/* Cover Image */}
    <Skeleton className="w-full h-48 rounded-xl mb-4" />

    {/* Title */}
    <Skeleton variant="text" className="h-6 w-3/4 mb-2" />

    {/* Date & Location */}
    <div className="flex items-center space-x-4 mb-4">
      <Skeleton variant="text" className="h-4 w-24" />
      <Skeleton variant="text" className="h-4 w-32" />
    </div>

    {/* Description */}
    <div className="space-y-2 mb-4">
      <Skeleton variant="text" className="h-4 w-full" />
      <Skeleton variant="text" className="h-4 w-5/6" />
    </div>

    {/* Tags */}
    <div className="flex space-x-2 mb-4">
      <Skeleton variant="text" className="h-6 w-16 rounded-full" />
      <Skeleton variant="text" className="h-6 w-20 rounded-full" />
    </div>

    {/* Button */}
    <Skeleton variant="button" className="h-10 w-full" />
  </div>
);

// Events Grid Skeleton
export const EventsGridSkeleton = ({ count = 6 }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {Array.from({ length: count }, (_, i) => (
      <div key={i} style={{ animationDelay: `${i * 0.1}s` }}>
        <EventCardSkeleton />
      </div>
    ))}
  </div>
);

// Connection Card Skeleton
export const ConnectionCardSkeleton = () => (
  <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 animate-slide-up">
    <div className="flex items-start space-x-4">
      {/* Avatar */}
      <Skeleton variant="avatar" className="w-12 h-12 flex-shrink-0" />

      {/* Content */}
      <div className="flex-1 min-w-0 space-y-3">
        {/* Header */}
        <div className="flex items-center justify-between">
          <Skeleton variant="text" className="h-5 w-32" />
          <Skeleton variant="text" className="h-6 w-16 rounded-full" />
        </div>

        {/* Bio */}
        <div className="space-y-2">
          <Skeleton variant="text" className="h-4 w-full" />
          <Skeleton variant="text" className="h-4 w-3/4" />
        </div>

        {/* Location & Stats */}
        <div className="flex items-center justify-between">
          <Skeleton variant="text" className="h-4 w-24" />
          <Skeleton variant="text" className="h-4 w-20" />
        </div>

        {/* Buttons */}
        <div className="flex space-x-2">
          <Skeleton variant="button" className="h-8 w-20" />
          <Skeleton variant="button" className="h-8 w-16" />
        </div>
      </div>
    </div>
  </div>
);

// Message Bubble Skeleton
export const MessageBubbleSkeleton = ({ isOwn = false }) => (
  <div className={`flex items-end space-x-2 mb-4 ${isOwn ? 'justify-end' : 'justify-start'}`}>
    {!isOwn && <Skeleton variant="avatar" className="w-8 h-8 flex-shrink-0" />}
    <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${isOwn ? 'bg-gray-600/40' : 'bg-white/10'}`}>
      <Skeleton variant="text" className="h-4 w-32 mb-2" />
      <Skeleton variant="text" className="h-3 w-16" />
    </div>
    {isOwn && <Skeleton variant="avatar" className="w-8 h-8 flex-shrink-0" />}
  </div>
);

// Chat Window Skeleton
export const ChatWindowSkeleton = () => (
  <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden flex flex-col h-full">
    {/* Header */}
    <div className="p-4 border-b border-white/10">
      <div className="flex items-center space-x-3">
        <Skeleton variant="avatar" className="w-10 h-10" />
        <div className="space-y-2">
          <Skeleton variant="text" className="h-5 w-32" />
          <Skeleton variant="text" className="h-4 w-20" />
        </div>
      </div>
    </div>

    {/* Messages */}
    <div className="flex-1 p-4 space-y-4">
      <MessageBubbleSkeleton />
      <MessageBubbleSkeleton isOwn />
      <MessageBubbleSkeleton />
      <MessageBubbleSkeleton isOwn />
      <MessageBubbleSkeleton />
    </div>

    {/* Input */}
    <div className="p-4 border-t border-white/10">
      <Skeleton variant="text" className="h-10 w-full rounded-2xl" />
    </div>
  </div>
);

// Generic Content Skeleton
export const ContentSkeleton = ({ lines = 3 }) => (
  <div className="space-y-3">
    {Array.from({ length: lines }, (_, i) => (
      <Skeleton key={i} variant="text" className={`h-4 ${i === lines - 1 ? 'w-3/4' : 'w-full'}`} />
    ))}
  </div>
);

// Table Row Skeleton
export const TableRowSkeleton = ({ columns = 4 }) => (
  <div className="flex items-center space-x-4 p-4 border-b border-white/10">
    {Array.from({ length: columns }, (_, i) => (
      <Skeleton key={i} variant="text" className="h-4 flex-1" />
    ))}
  </div>
);

// Form Skeleton
export const FormSkeleton = () => (
  <div className="space-y-6">
    <div>
      <Skeleton variant="text" className="h-4 w-24 mb-2" />
      <Skeleton variant="text" className="h-10 w-full" />
    </div>
    <div>
      <Skeleton variant="text" className="h-4 w-32 mb-2" />
      <Skeleton variant="text" className="h-10 w-full" />
    </div>
    <div>
      <Skeleton variant="text" className="h-4 w-20 mb-2" />
      <Skeleton variant="text" className="h-24 w-full" />
    </div>
    <Skeleton variant="button" className="h-12 w-32" />
  </div>
);

export default Skeleton;