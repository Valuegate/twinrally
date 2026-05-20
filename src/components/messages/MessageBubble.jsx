/**
 * MessageBubble.jsx - Individual Message Display Component
 *
 * Displays a single message in a conversation with proper styling,
 * timestamps, and sender information.
 *
 * @author Kilo Code - TwinRally Team
 * @version 1.0.0
 */

import React from 'react';
import { format } from 'date-fns';

const MessageBubble = ({
  message,
  isOwnMessage = false,
  showAvatar = true,
  showTimestamp = true,
  className = ""
}) => {
  const { senderName, content, timestamp, read } = message;

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInDays = Math.floor((now - date) / (1000 * 60 * 60 * 24));

    if (diffInDays === 0) {
      return format(date, 'HH:mm');
    } else if (diffInDays === 1) {
      return 'Yesterday ' + format(date, 'HH:mm');
    } else if (diffInDays < 7) {
      return format(date, 'EEE HH:mm');
    } else {
      return format(date, 'MMM d, HH:mm');
    }
  };

  const bubbleClasses = `
    max-w-xs lg:max-w-md xl:max-w-lg px-4 py-2 rounded-2xl text-sm
    ${isOwnMessage
      ? 'bg-gradient-to-r from-[color:var(--pink)] to-[color:var(--blue)] text-white ml-auto'
      : 'bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300'
    }
    ${className}
  `;

  return (
    <div className={`flex items-end space-x-2 mb-4 ${isOwnMessage ? 'justify-end' : 'justify-start'}`}>
      {/* Avatar for other users */}
      {!isOwnMessage && showAvatar && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-[color:var(--pink)] to-[color:var(--blue)] flex items-center justify-center text-white text-xs font-bold">
          {senderName.charAt(0).toUpperCase()}
        </div>
      )}

      {/* Message bubble */}
      <div className={bubbleClasses}>
        {/* Sender name for group chats */}
        {!isOwnMessage && (
          <div className="text-xs font-medium text-gray-400 mb-1">
            {senderName}
          </div>
        )}

        {/* Message content */}
        <div className="break-words">
          {content}
        </div>

        {/* Timestamp and read status */}
        {showTimestamp && (
          <div className={`text-xs mt-1 flex items-center justify-end space-x-1 ${
            isOwnMessage ? 'text-white/70' : 'text-gray-500'
          }`}>
            <span>{formatTime(timestamp)}</span>
            {isOwnMessage && read && (
              <div className="flex space-x-0.5">
                <div className="w-1 h-1 bg-white/70 rounded-full"></div>
                <div className="w-1 h-1 bg-white/70 rounded-full"></div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Spacer for own messages to align properly */}
      {isOwnMessage && showAvatar && (
        <div className="flex-shrink-0 w-8 h-8"></div>
      )}
    </div>
  );
};

export default MessageBubble;