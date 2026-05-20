/**
 * NotificationDropdown.jsx - Notification Dropdown Panel
 *
 * Displays a dropdown panel with scrollable notifications list.
 * Includes header with mark all as read and view all options.
 *
 * @author Kilo Code - TwinRally Team
 * @version 1.0.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCheck, Settings, X } from 'lucide-react';
import NotificationItem from './NotificationItem';
import { mockNotifications, getUnreadCount, markAsRead, markAllAsRead } from '@/data/mockNotifications';

const NotificationDropdown = ({
  isOpen,
  onClose,
  className = ""
}) => {
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const [notifications, setNotifications] = useState([]);

  // Load notifications on mount
  useEffect(() => {
    setNotifications([...mockNotifications]);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  // Prevent body scroll when dropdown is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleMarkAsRead = (notificationId) => {
    markAsRead(notificationId);
    setNotifications(prev => prev.map(notif =>
      notif.id === notificationId ? { ...notif, read: true } : notif
    ));
  };

  const handleMarkAllAsRead = () => {
    markAllAsRead();
    setNotifications(prev => prev.map(notif => ({ ...notif, read: true })));
  };

  const handleNotificationAction = (notificationId, action) => {
    // Handle specific actions and close dropdown
    console.log('Notification action:', notificationId, action);
    onClose();
  };

  const handleViewAll = () => {
    navigate('/notifications'); // Future notifications page
    onClose();
  };

  const handleSettings = () => {
    navigate('/settings'); // Future settings page
    onClose();
  };

  const unreadCount = getUnreadCount();
  const recentNotifications = notifications
    .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
    .slice(0, 10); // Show only 10 most recent

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" onClick={onClose} />

      {/* Dropdown */}
      <div
        ref={dropdownRef}
        className={`
          fixed top-20 right-4 w-96 max-w-[calc(100vw-2rem)] max-h-[calc(100vh-6rem)]
          bg-white/5 backdrop-blur-lg rounded-2xl border border-white/20
          shadow-2xl z-50 overflow-hidden animate-slide-up
          ${className}
        `}
      >
        {/* Header */}
        <div className="p-4 border-b border-white/10">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-white">Notifications</h3>
              {unreadCount > 0 && (
                <p className="text-sm text-gray-400">{unreadCount} unread</p>
              )}
            </div>

            <div className="flex items-center space-x-2">
              {unreadCount > 0 && (
                <button
                  onClick={handleMarkAllAsRead}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  title="Mark all as read"
                >
                  <CheckCheck className="w-4 h-4 text-gray-400" />
                </button>
              )}

              <button
                onClick={handleSettings}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                title="Notification settings"
              >
                <Settings className="w-4 h-4 text-gray-400" />
              </button>

              <button
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                title="Close"
              >
                <X className="w-4 h-4 text-gray-400" />
              </button>
            </div>
          </div>
        </div>

        {/* Notifications List */}
        <div className="max-h-96 overflow-y-auto">
          {recentNotifications.length > 0 ? (
            recentNotifications.map((notification) => (
              <NotificationItem
                key={notification.id}
                notification={notification}
                onMarkAsRead={handleMarkAsRead}
                onAction={handleNotificationAction}
              />
            ))
          ) : (
            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <CheckCheck className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">All caught up!</h3>
              <p className="text-gray-400 text-sm">
                No new notifications at the moment.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        {notifications.length > 10 && (
          <div className="p-4 border-t border-white/10">
            <button
              onClick={handleViewAll}
              className="w-full py-2 text-center text-[color:var(--pink)] hover:text-[color:var(--blue)] transition-colors text-sm font-medium"
            >
              View all notifications
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default NotificationDropdown;