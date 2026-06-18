/**
 * EventCard Component - TwinRally Events Feature
 *
 * Reusable card component for displaying event information.
 * Establishes the master card pattern for all future card-based components.
 *
 * Architecture:
 * - Follows FeaturesSection card patterns (glassmorphism, hover effects)
 * - Consistent with TwinRally design system
 * - Reusable across Events, Messages, Profile features
 * - Supports different event types and states
 *
 * Usage:
 * <EventCard event={eventData} onEventClick={handleClick} />
 *
 * Dependencies:
 * - Lucide React icons
 * - TwinRally animations (animate-slide-up)
 * - TwinRally color variables
 *
 * @author Wasiu - TwinRally Team
 * @version 1.0.0
 */

import React, { useState } from "react";
import EventRegistrationModal from "./EventRegistrationModal";
import {
  Calendar,
  MapPin,
  Users,
  Clock,
  Ticket,
  Video,
  ExternalLink,
  Edit,
  Trash2,
  BarChart3,
} from "lucide-react";

const EventCard = ({
  event,
  onEventClick,
  onRegistrationSuccess,
  managementMode = false,
  onEventEdit,
  onEventDelete,
  className = "",
}) => {
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);

  /**
   * Format date for display
   */
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  /**
   * Format time for display
   */
  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  /**
   * Get event type styling
   */
  const getEventTypeStyles = (type) => {
    const styles = {
      festival: {
        gradient:
          "from-purple-500/10 to-pink-500/10 hover:from-purple-500/15 hover:to-pink-500/15",
        iconColor: "text-purple-400",
        badge: "bg-purple-500/20 text-purple-300",
        border: "border-purple-500/20 hover:border-purple-500/30",
      },
      meetup: {
        gradient:
          "from-blue-500/10 to-cyan-500/10 hover:from-blue-500/15 hover:to-cyan-500/15",
        iconColor: "text-blue-400",
        badge: "bg-blue-500/20 text-blue-300",
        border: "border-blue-500/20 hover:border-blue-500/30",
      },
      workshop: {
        gradient:
          "from-emerald-500/10 to-teal-500/10 hover:from-emerald-500/15 hover:to-teal-500/15",
        iconColor: "text-emerald-400",
        badge: "bg-emerald-500/20 text-emerald-300",
        border: "border-emerald-500/20 hover:border-emerald-500/30",
      },
      virtual: {
        gradient:
          "from-amber-500/10 to-orange-500/10 hover:from-amber-500/15 hover:to-orange-500/15",
        iconColor: "text-amber-400",
        badge: "bg-amber-500/20 text-amber-300",
        border: "border-amber-500/20 hover:border-amber-500/30",
      },
    };
    return styles[type] || styles.meetup;
  };

  const typeStyles = getEventTypeStyles(event.type);

  /**
   * Handle card click - Open registration modal (only in non-management mode)
   */
  const handleClick = () => {
    if (managementMode) {
      // In management mode, don't open registration modal
      return;
    }

    // Preserve any existing onEventClick for compatibility
    if (onEventClick) {
      onEventClick(event);
    } else {
      // Open registration modal instead of navigation
      setShowRegistrationModal(true);
    }
  };

  /**
   * Handle edit event
   */
  const handleEdit = (e) => {
    e.stopPropagation(); // Prevent card click
    onEventEdit?.(event);
  };

  /**
   * Handle delete event - REMOVED CONFIRM DIALOG
   */
  const handleDelete = (e) => {
    e.stopPropagation(); // Prevent card click
    // Directly call onEventDelete without confirmation dialog
    onEventDelete?.(event);
  };

  /**
   * Handle view analytics - REMOVED ALERT
   */
  const handleAnalytics = (e) => {
    e.stopPropagation(); // Prevent card click
    // Analytics data - will be handled by parent component instead of alert
    if (onEventEdit) {
      // Pass analytics data to parent to handle appropriately
      console.log(`Analytics for "${event.title}"`, {
        registrations: event.ticketing.registered,
        capacity: event.ticketing.capacity,
        revenue: event.ticketing.type === "paid" 
          ? event.ticketing.price * event.ticketing.registered 
          : null
      });
    }
  };

  /**
   * Handle registration success
   */
  const handleRegistrationSuccess = (updatedEvent, registrationData) => {
    if (onRegistrationSuccess) {
      onRegistrationSuccess(updatedEvent, registrationData);
    }
    setShowRegistrationModal(false);
  };

  /**
   * Close modal
   */
  const closeModal = () => {
    setShowRegistrationModal(false);
  };

  return (
    <div
      className={`relative rounded-xl overflow-hidden ${typeStyles.gradient} ${typeStyles.border} bg-opacity-10 backdrop-blur-sm border border-white/5 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 group ${className}`}
      onClick={handleClick}
    >
      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Content */}
      <div className="relative">
        {/* Event type badge & Live indicator */}
        <div className="flex items-center justify-between mb-4">
          <span
            className={`text-xs font-semibold px-3 py-1 rounded-full ${typeStyles.badge} capitalize`}
          >
            {event.type}
          </span>
          {event.isLive && (
            <div className="flex items-center gap-1 text-red-400 text-xs font-medium">
              <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
              LIVE
            </div>
          )}
        </div>

        {/* Event cover image */}
        {event.coverImage && (
          <div className="mb-4 rounded-lg overflow-hidden">
            <img
              src={event.coverImage}
              alt={event.title}
              className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        )}

        {/* Event title */}
        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[color:var(--pink)] transition-colors duration-300">
          {event.title}
        </h3>

        {/* Event description */}
        <p className="text-gray-300 text-sm mb-4 line-clamp-2 leading-relaxed">
          {event.description}
        </p>

        {/* Event details */}
        <div className="space-y-2 mb-4">
          {/* Date & Time */}
          <div className="flex items-center text-gray-300 text-sm">
            <Calendar className={`w-4 h-4 mr-2 ${typeStyles.iconColor}`} />
            <span>{formatDate(event.date)}</span>
            <Clock className={`w-4 h-4 ml-3 mr-2 ${typeStyles.iconColor}`} />
            <span>{formatTime(event.date)}</span>
          </div>

          {/* Location */}
          <div className="flex items-center text-gray-300 text-sm">
            {event.location.type === "virtual" ? (
              <>
                <Video className={`w-4 h-4 mr-2 ${typeStyles.iconColor}`} />
                <span>Virtual Event</span>
              </>
            ) : (
              <>
                <MapPin className={`w-4 h-4 mr-2 ${typeStyles.iconColor}`} />
                <span>{event.location.address}</span>
              </>
            )}
          </div>

          {/* Host info */}
          <div className="flex items-center text-gray-300 text-sm">
            <div className="flex items-center">
              <Users className={`w-4 h-4 mr-2 ${typeStyles.iconColor}`} />
              <span>Hosted by {event.host.name}</span>
            </div>
          </div>
        </div>

        {/* Ticketing info */}
        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          {/* Price/RSVP */}
          <div className="flex items-center text-sm">
            <Ticket className={`w-4 h-4 mr-2 ${typeStyles.iconColor}`} />
            {event.ticketing.type === "free" ? (
              <span className="text-green-400 font-semibold">Free Event</span>
            ) : event.ticketing.type === "rsvp" ? (
              <span className="text-blue-400 font-semibold">RSVP Required</span>
            ) : (
              <span className="text-white font-semibold">
                {event.ticketing.currency}{" "}
                {event.ticketing.price.toLocaleString()}
              </span>
            )}
          </div>

          {/* Attendance count */}
          <div className="flex items-center text-gray-400 text-xs">
            <Users className="w-3 h-3 mr-1" />
            <span>{event.ticketing.registered} registered</span>
          </div>
        </div>

        {/* View details or management actions */}
        {managementMode ? (
          <div className="mt-4 flex gap-2">
            <button
              onClick={handleEdit}
              className="flex items-center gap-1 px-3 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 hover:text-blue-200 rounded-lg transition-all duration-300 text-xs font-medium"
            >
              <Edit className="w-4 h-4" />
              Edit
            </button>
            <button
              onClick={handleAnalytics}
              className="flex items-center gap-1 px-3 py-2 bg-green-500/20 hover:bg-green-500/30 text-green-300 hover:text-green-200 rounded-lg transition-all duration-300 text-xs font-medium"
            >
              <BarChart3 className="w-4 h-4" />
              Analytics
            </button>
            <button
              onClick={handleDelete}
              className="flex items-center gap-1 px-3 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-300 hover:text-red-200 rounded-lg transition-all duration-300 text-xs font-medium"
            >
              <Trash2 className="w-4 h-4" />
              Delete
            </button>
          </div>
        ) : (
          <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center text-sm font-medium text-[color:var(--pink)] hover:text-white cursor-pointer">
              View Details
              <ExternalLink className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" />
            </div>
          </div>
        )}
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[color:var(--pink)] to-[color:var(--blue)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl"></div>

      {/* Registration Modal */}
      <EventRegistrationModal
        event={event}
        isOpen={showRegistrationModal}
        onClose={closeModal}
        onRegistrationSuccess={handleRegistrationSuccess}
      />
    </div>
  );
};

export default EventCard;