/**
 * EventShare.jsx - Event Sharing Component
 *
 * Provides multiple ways to share events: copy link, social media sharing,
 * and calendar integration. Works entirely in the frontend.
 *
 * @author Kilo Code - TwinRally Team
 * @version 1.0.0
 */

import React, { useState } from 'react';
import { Share2, Copy, Calendar, Facebook, Twitter, MessageCircle, Mail } from 'lucide-react';
import { useToast } from '../hooks/useToast';

const EventShare = ({ event, className = "" }) => {
  const { success, error } = useToast();
  const [isOpen, setIsOpen] = useState(false);

  const eventUrl = `${window.location.origin}/events/${event.id}`;
  const eventTitle = event.title;
  const eventDescription = event.description || `Join me for ${eventTitle} on TwinRally!`;
  const eventDate = new Date(event.date).toLocaleDateString();

  const shareOptions = [
    {
      name: 'Copy Link',
      icon: Copy,
      action: async () => {
        try {
          await navigator.clipboard.writeText(eventUrl);
          success('Event link copied to clipboard!');
        } catch {
          // Fallback for older browsers
          const textArea = document.createElement('textarea');
          textArea.value = eventUrl;
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand('copy');
          document.body.removeChild(textArea);
          success('Event link copied to clipboard!');
        }
      }
    },
    {
      name: 'Add to Calendar',
      icon: Calendar,
      action: () => addToCalendar()
    },
    {
      name: 'Facebook',
      icon: Facebook,
      action: () => shareToSocial('facebook')
    },
    {
      name: 'Twitter',
      icon: Twitter,
      action: () => shareToSocial('twitter')
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      action: () => shareToSocial('whatsapp')
    },
    {
      name: 'Email',
      icon: Mail,
      action: () => shareToSocial('email')
    }
  ];

  const addToCalendar = () => {
    try {
      const startDate = new Date(event.date);
      const endDate = new Date(startDate.getTime() + (event.duration || 2) * 60 * 60 * 1000); // Default 2 hours

      // Create Google Calendar URL
      const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventTitle)}&dates=${formatDateForCalendar(startDate)}/${formatDateForCalendar(endDate)}&details=${encodeURIComponent(eventDescription)}&location=${encodeURIComponent(event.location || 'Online')}`;

      window.open(googleCalendarUrl, '_blank');
      success('Event added to Google Calendar!');
    } catch {
      error('Failed to add event to calendar');
    }
  };

  const formatDateForCalendar = (date) => {
    return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  };

  const shareToSocial = (platform) => {
    const shareText = `Check out this event: ${eventTitle} on ${eventDate}`;
    const shareUrl = eventUrl;

    let shareLink = '';

    switch (platform) {
      case 'facebook':
        shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`;
        break;
      case 'twitter':
        shareLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
        break;
      case 'whatsapp':
        shareLink = `https://wa.me/?text=${encodeURIComponent(`${shareText} ${shareUrl}`)}`;
        break;
      case 'email':
        shareLink = `mailto:?subject=${encodeURIComponent(`Event Invitation: ${eventTitle}`)}&body=${encodeURIComponent(`${shareText}\n\n${eventDescription}\n\nEvent Link: ${shareUrl}`)}`;
        break;
      default:
        return;
    }

    window.open(shareLink, '_blank');
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: eventTitle,
          text: eventDescription,
          url: eventUrl,
        });
        success('Event shared successfully!');
      } catch {
        error('Failed to share event');
      }
    } else {
      setIsOpen(true);
    }
  };

  return (
    <div className={`relative ${className}`}>
      {/* Share Button */}
      <button
        onClick={handleNativeShare}
        className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-[color:var(--pink)] to-[color:var(--blue)] text-white rounded-lg hover:scale-105 transition-all duration-300"
        aria-label="Share event"
      >
        <Share2 className="w-4 h-4" />
        <span>Share Event</span>
      </button>

      {/* Share Options Dropdown */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Dropdown */}
          <div className="absolute right-0 top-12 w-64 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-2xl z-50 p-4 animate-slide-up">
            <h3 className="text-white font-bold mb-3 text-center">Share Event</h3>

            <div className="space-y-2">
              {shareOptions.map((option, index) => (
                <button
                  key={index}
                  onClick={() => {
                    option.action();
                    setIsOpen(false);
                  }}
                  className="w-full flex items-center space-x-3 p-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 group"
                >
                  <option.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">{option.name}</span>
                </button>
              ))}
            </div>

            {/* Event Info */}
            <div className="mt-4 pt-4 border-t border-white/10">
              <div className="text-xs text-gray-400 text-center">
                <div className="font-medium text-white">{eventTitle}</div>
                <div>{eventDate}</div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default EventShare;