/**
 * NotificationBell.jsx - Notification Bell Icon with Badge
 *
 * Displays a bell icon with unread notification count badge.
 * Provides visual indicator for new notifications.
 *
 * @author Kilo Code - TwinRally Team
 * @version 1.0.0
 */

import React from 'react';
import { Bell } from 'lucide-react';

const NotificationBell = ({
  unreadCount = 0,
  onClick,
  className = "",
  size = "w-6 h-6"
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        relative p-2 rounded-lg
        bg-white/5 backdrop-blur-md border border-white/10
        hover:bg-white/10 hover:border-white/20
        transition-all duration-300 ease-in-out
        group
        ${className}
      `}
      aria-label={`Notifications ${unreadCount > 0 ? `(${unreadCount} unread)` : ''}`}
      title={`Notifications ${unreadCount > 0 ? `(${unreadCount} unread)` : ''}`}
    >
      <Bell className={`${size} text-gray-300 group-hover:text-white transition-colors`} />

      {/* Unread badge */}
      {unreadCount > 0 && (
        <div className="absolute -top-1 -right-1 bg-[color:var(--pink)] text-white text-xs rounded-full min-w-[18px] h-[18px] flex items-center justify-center font-medium animate-pulse">
          {unreadCount > 99 ? '99+' : unreadCount}
        </div>
      )}

      {/* Subtle glow effect for unread notifications */}
      {unreadCount > 0 && (
        <div className="absolute inset-0 rounded-lg bg-[color:var(--pink)]/20 animate-pulse pointer-events-none" />
      )}
    </button>
  );
};

export default NotificationBell;