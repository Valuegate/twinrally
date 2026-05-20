/**
 * EventDetails Component - TwinRally Events Feature
 *
 * Comprehensive event detail view with full information, registration, and interactions.
 * Core component for Events CRUD - completes the browse → detail user journey.
 *
 * Usage: <EventDetails event={eventData} onBack={handleBack} loading={false} />
 *
 * Features:
 * - Hero section with cover image and overlay
 * - Complete event metadata (date, location, host)
 * - Registration system with capacity tracking
 * - Social actions (like, share, save)
 * - Related events suggestions
 * - Error and loading state handling
 *
 * @author Wasiu - TwinRally Team
 * @version 1.0.0
 */

import React, { useState } from 'react';
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Clock,
  Users,
  Ticket,
  Heart,
  Share2,
  Flag,
  CalendarDays,
  CheckCircle,
  XCircle,
  ExternalLink,
  Video
} from 'lucide-react';

const EventDetails = ({
  event,
  onBack,
  loading = false
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  /**
   * Handle event registration
   */
  const handleRegistration = () => {
    if (event.ticketing.type === 'rsvp') {
      setIsRegistered(!isRegistered);
      alert(isRegistered
        ? 'Registration cancelled! Hope to see you at another event.'
        : `Successfully RSVP'd for "${event.title}"!\n\nWe'll send you a reminder before the event.`
      );
    } else {
      // Mock payment flow
      alert(`Payment Flow: ${event.title}\nPrice: ${event.ticketing.currency} ${event.ticketing.price}\n\nMock payment processing... ✅ Complete!`);
      setIsRegistered(true);
    }
  };

  /**
   * Handle social actions
   */
  const handleLike = () => {
    setIsLiked(!isLiked);
    console.log(`${isLiked ? 'Unliked' : 'Liked'} event:`, event.id);
  };


  const handleSave = () => {
    const eventTitle = event.title;
    const eventDate = new Date(event.date);
    const endDate = new Date(eventDate.getTime() + (event.duration || 2) * 60 * 60 * 1000);

    // Create Google Calendar URL
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventTitle)}&dates=${formatDateForCalendar(eventDate)}/${formatDateForCalendar(endDate)}&details=${encodeURIComponent(event.description || '')}&location=${encodeURIComponent(event.location?.address || 'Online')}`;

    window.open(googleCalendarUrl, '_blank');
  };

  const formatDateForCalendar = (date) => {
    return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  };

  const handleReport = () => {
    alert('Report Event\n\nOptions:\n• Spam/Inappropriate content\n• Offensive material\n• Incorrect information\n\nThank you for keeping TwinRally safe for all twins!');
  };

  /**
   * Format date and time
   */
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  /**
   * Loading state render
   */
  if (loading) {
    return (
      <div className="min-h-screen bg-[color:var(--bg)] animate-pulse">
        <div className="h-96 bg-white/10"></div>
        <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
          <div className="h-8 bg-white/10 rounded w-3/4"></div>
          <div className="h-4 bg-white/10 rounded w-1/2"></div>
          <div className="h-32 bg-white/10 rounded"></div>
          <div className="h-12 bg-white/10 rounded w-32"></div>
        </div>
      </div>
    );
  }

  /**
   * Error state (no event found)
   */
  if (!event) {
    return (
      <div className="min-h-screen bg-[color:var(--bg)] flex items-center justify-center">
        <div className="text-center animate-slide-up">
          <div className="p-6 bg-white/10 rounded-2xl backdrop-blur-lg border border-white/10 mb-6">
            <XCircle className="w-16 h-16 text-red-400 mx-auto mb-4" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Event Not Found</h2>
          <p className="text-gray-400 mb-6 max-w-md">
            This event doesn't exist or has been removed. Check out other amazing twin events!
          </p>
          <button
            onClick={onBack}
            className="px-6 py-3 bg-gradient-to-r from-[color:var(--pink)] to-[color:var(--blue)] text-white rounded-lg hover:scale-105 transition-all duration-300"
          >
            Back to Events
          </button>
        </div>
      </div>
    );
  }

  const eventTypeStyles = {
    festival: { gradient: 'from-purple-500/30 to-blue-500/30', accent: 'purple', text: 'Festival' },
    meetup: { gradient: 'from-blue-500/30 to-cyan-500/30', accent: 'blue', text: 'Meetup' },
    workshop: { gradient: 'from-green-500/30 to-emerald-500/30', accent: 'green', text: 'Workshop' },
    virtual: { gradient: 'from-orange-500/30 to-red-500/30', accent: 'orange', text: 'Virtual' }
  };

  const typeStyle = eventTypeStyles[event.type] || eventTypeStyles.meetup;

  return (
    <div className="min-h-screen bg-[color:var(--bg)] animate-page-enter">
      {/* Hero Section */}
      <div className="relative">
        <div className="h-96 relative overflow-hidden">
          <img
            src={event.coverImage || '/public/twinrally_lg_01.png'}
            alt={event.title}
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${typeStyle.gradient} opacity-80`}></div>

          {/* Back Button */}
          <button
            onClick={onBack}
            className="absolute top-6 left-6 p-3 bg-black/20 backdrop-blur-md rounded-full text-white hover:bg-black/30 transition-all duration-300 hover:scale-105 focus-ring"
            aria-label="Back to events"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          {/* Event Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <span className={`inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-white text-sm font-medium mb-4 capitalize border border-${typeStyle.accent}-400/30`}>
              {typeStyle.text}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
              {event.title}
            </h1>
            {event.isLive && (
              <div className="flex items-center text-red-300 font-medium">
                <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse mr-2"></div>
                LIVE NOW
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">

          {/* Event Information */}
          <div className="md:col-span-2 space-y-8">

            {/* Event Metadata */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 animate-slide-up animate-card-lift">
              <h2 className="text-xl font-bold text-white mb-4">Event Details</h2>
              <div className="space-y-4">

                {/* Date & Time */}
                <div className="flex items-start space-x-3">
                  <Calendar className={`w-5 h-5 mt-0.5 text-${typeStyle.accent}-400`} />
                  <div>
                    <div className="font-medium text-white">{formatDate(event.date)}</div>
                    <div className="text-gray-400">{formatTime(event.date)}</div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start space-x-3">
                  {event.location.type === 'virtual' ? (
                    <>
                      <Video className={`w-5 h-5 mt-0.5 text-${typeStyle.accent}-400`} />
                      <div>
                        <div className="font-medium text-white">Virtual Event</div>
                        <div className="text-gray-400">Join online via {event.location.address}</div>
                      </div>
                    </>
                  ) : (
                    <>
                      <MapPin className={`w-5 h-5 mt-0.5 text-${typeStyle.accent}-400`} />
                      <div>
                        <div className="font-medium text-white">{event.location.address}</div>
                        <div className="text-gray-400">Physical location</div>
                      </div>
                    </>
                  )}
                </div>

                {/* Host */}
                <div className="flex items-start space-x-3">
                  <Users className={`w-5 h-5 mt-0.5 text-${typeStyle.accent}-400`} />
                  <div>
                    <div className="font-medium text-white">Hosted by {event.host.name}</div>
                    <div className="text-gray-400">Verified twin community organizer</div>
                  </div>
                </div>

              </div>
            </div>

            {/* Event Description */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <h2 className="text-xl font-bold text-white mb-4">About This Event</h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                  {event.description}
                </p>
              </div>

              {/* Tags */}
              {event.tags && event.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-6">
                  {event.tags.map((tag, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 bg-${typeStyle.accent}-500/20 text-${typeStyle.accent}-300 rounded-full text-sm border border-${typeStyle.accent}-500/30`}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Related Events (Mock) */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-xl font-bold text-white mb-4">More Twin Events</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-white/5 rounded-lg border border-white/10 cursor-pointer hover:bg-white/10 transition-colors">
                  <div className="font-medium text-white mb-1">Twin Business Networking</div>
                  <div className="text-sm text-gray-400">Feb 15 • Nairobi, Kenya</div>
                </div>
                <div className="p-4 bg-white/5 rounded-lg border border-white/10 cursor-pointer hover:bg-white/10 transition-colors">
                  <div className="font-medium text-white mb-1">European Twin Festival</div>
                  <div className="text-sm text-gray-400">Mar 22 • Vienna, Austria</div>
                </div>
              </div>
              <button className="mt-4 text-[color:var(--pink)] hover:text-white transition-colors text-sm font-medium">
                View All Events →
              </button>
            </div>

          </div>

          {/* Sidebar */}
          <div className="space-y-6">

            {/* Registration Card */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-lg font-bold text-white mb-4">Registration</h3>

              {event.ticketing.type === 'free' ? (
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400 mb-1">Free Event</div>
                  <div className="text-gray-400 text-sm mb-4">No registration required</div>
                </div>
              ) : event.ticketing.type === 'paid' ? (
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-white mb-1">
                    {event.ticketing.currency} {event.ticketing.price.toLocaleString()}
                  </div>
                  <div className="text-gray-400 text-sm">per person</div>
                </div>
              ) : (
                <div className="text-center mb-4">
                  <div className="text-lg font-bold text-blue-400">RSVP Required</div>
                  <div className="text-gray-400 text-sm">Free to attend</div>
                </div>
              )}

              {/* Capacity Info */}
              <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                <span>
                  <Ticket className="w-4 h-4 inline mr-1" />
                  {event.ticketing.registered} registered
                </span>
                <span>{Math.max(0, event.ticketing.capacity - event.ticketing.registered)} spots left</span>
              </div>

              {/* Registration Button */}
              <button
                onClick={handleRegistration}
                disabled={isRegistered && event.ticketing.type === 'rsvp'}
                className={`
                  w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 focus-ring
                  ${isRegistered
                    ? 'bg-gray-600 text-gray-300 cursor-not-allowed'
                    : 'bg-gradient-to-r from-[color:var(--pink)] to-[color:var(--blue)] text-white hover:scale-105 hover:shadow-lg animate-button-hover'
                  }
                `}
                aria-label={isRegistered ? 'Already registered' : `Register for ${event.title}`}
              >
                {isRegistered ? (
                  <div className="flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    {event.ticketing.type === 'paid' ? 'Purchased' : 'Registered'}
                  </div>
                ) : (
                  event.ticketing.type === 'paid' ? 'Purchase Ticket' :
                  event.ticketing.type === 'rsvp' ? 'RSVP Now' : 'Register'
                )}
              </button>

              {event.ticketing.capacity - event.ticketing.registered <= 5 && !isRegistered && (
                <div className="text-center text-sm text-orange-400 mt-2">
                  Only {event.ticketing.capacity - event.ticketing.registered} spots remaining!
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-lg font-bold text-white mb-4">Actions</h3>
              <div className="space-y-3">
                <button
                  onClick={handleLike}
                  className={`flex items-center w-full p-3 rounded-lg transition-all duration-300 focus-ring ${
                    isLiked
                      ? 'bg-red-500/20 text-red-300 border border-red-500/30'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white animate-button-hover'
                  }`}
                  aria-label={isLiked ? 'Unlike event' : 'Like event'}
                  aria-pressed={isLiked}
                >
                  <Heart className={`w-5 h-5 mr-3 ${isLiked ? 'fill-current' : ''}`} />
                  {isLiked ? 'Liked' : 'Like Event'}
                </button>

                <div className="flex items-center justify-center">
                  <EventShare event={event} />
                </div>

                <button
                  onClick={handleSave}
                  className="flex items-center w-full p-3 bg-white/10 text-gray-300 rounded-lg hover:bg-white/20 hover:text-white transition-all duration-300 focus-ring animate-button-hover"
                  aria-label="Add event to calendar"
                >
                  <CalendarDays className="w-5 h-5 mr-3" />
                  Save to Calendar
                </button>

                <button
                  onClick={handleReport}
                  className="flex items-center w-full p-3 bg-red-500/10 text-red-300 rounded-lg hover:bg-red-500/20 transition-all duration-300"
                >
                  <Flag className="w-5 h-5 mr-3" />
                  Report Event
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
