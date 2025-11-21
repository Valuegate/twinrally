/**
 * NotificationItem.jsx - Individual Notification Display Component
 *
 * Displays a single notification with proper styling, actions, and metadata.
 * Handles different notification types and interactive elements.
 *
 * @author Kilo Code - TwinRally Team
 * @version 1.0.0
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  UserPlus,
  Calendar,
  MessageCircle,
  CheckCircle,
  X,
  ExternalLink,
  Users,
  Settings
} from 'lucide-react';

const NotificationItem = ({
  notification,
  onMarkAsRead,
  onAction,
  className = ""
}) => {
  const navigate = useNavigate();
  const {
    id,
    type,
    title,
    message,
    timestamp,
    read,
    actionable,
    actions,
    metadata
  } = notification;

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInMinutes = Math.floor((now - date) / (1000 * 60));

    if (diffInMinutes < 1) return 'now';
    if (diffInMinutes < 60) return `${diffInMinutes}m`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h`;
    if (diffInMinutes < 10080) return `${Math.floor(diffInMinutes / 1440)}d`;
    return date.toLocaleDateString();
  };

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'connection_request':
      case 'connection_accepted':
        return <UserPlus className="w-5 h-5 text-blue-400" />;
      case 'event_invite':
      case 'event_registration':
      case 'event_reminder':
      case 'event_update':
        return <Calendar className="w-5 h-5 text-green-400" />;
      case 'message':
        return <MessageCircle className="w-5 h-5 text-purple-400" />;
      case 'system':
        return <Settings className="w-5 h-5 text-orange-400" />;
      default:
        return <CheckCircle className="w-5 h-5 text-gray-400" />;
    }
  };

  const handleAction = (action) => {
    if (onAction) {
      onAction(id, action);
    }

    // Handle specific actions
    switch (action) {
      case 'accept':
        // Handle connection acceptance
        console.log('Accepted connection request');
        break;
      case 'decline':
        // Handle connection decline
        console.log('Declined connection request');
        break;
      case 'view':
        // Navigate to relevant page
        if (metadata?.eventId) {
          navigate(`/events/${metadata.eventId}`);
        }
        break;
      case 'reply':
        // Navigate to messages
        if (metadata?.conversationId) {
          navigate('/messages');
        }
        break;
      case 'message':
        // Navigate to messages with specific user
        navigate('/messages');
        break;
      case 'explore':
        // Navigate to events
        navigate('/events');
        break;
      case 'join':
        // Handle event join (could navigate to event)
        if (metadata?.eventId) {
          navigate(`/events/${metadata.eventId}`);
        }
        break;
      default:
        console.log('Action:', action);
    }
  };

  const handleMarkAsRead = (e) => {
    e.stopPropagation();
    if (onMarkAsRead) {
      onMarkAsRead(id);
    }
  };

  return (
    <div className={`
      p-4 border-b border-white/10 hover:bg-white/5 transition-all duration-200
      ${!read ? 'bg-blue-500/5 border-l-4 border-l-blue-400' : ''}
      ${className}
    `}>
      <div className="flex items-start space-x-3">
        {/* Icon */}
        <div className="flex-shrink-0 mt-1">
          {getNotificationIcon(type)}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h4 className={`text-sm font-medium ${read ? 'text-gray-300' : 'text-white'}`}>
                {title}
              </h4>
              <p className={`text-sm mt-1 ${read ? 'text-gray-400' : 'text-gray-200'}`}>
                {message}
              </p>
            </div>

            {/* Timestamp and mark as read */}
            <div className="flex items-center space-x-2 ml-4">
              <span className="text-xs text-gray-500 flex-shrink-0">
                {formatTime(timestamp)}
              </span>
              {!read && (
                <button
                  onClick={handleMarkAsRead}
                  className="p-1 hover:bg-white/10 rounded transition-colors"
                  title="Mark as read"
                >
                  <X className="w-3 h-3 text-gray-400" />
                </button>
              )}
            </div>
          </div>

          {/* Actions */}
          {actionable && actions && actions.length > 0 && (
            <div className="flex space-x-2 mt-3">
              {actions.map((action, index) => (
                <button
                  key={index}
                  onClick={() => handleAction(action.action)}
                  className={`
                    px-3 py-1 text-xs rounded transition-all duration-200 flex items-center space-x-1
                    ${action.style === 'primary'
                      ? 'bg-gradient-to-r from-[color:var(--pink)] to-[color:var(--blue)] text-white hover:scale-105'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }
                  `}
                >
                  {action.action === 'view' && <ExternalLink className="w-3 h-3" />}
                  {action.action === 'reply' && <MessageCircle className="w-3 h-3" />}
                  {action.action === 'message' && <MessageCircle className="w-3 h-3" />}
                  {action.action === 'explore' && <Calendar className="w-3 h-3" />}
                  {action.action === 'join' && <Users className="w-3 h-3" />}
                  <span>{action.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotificationItem;