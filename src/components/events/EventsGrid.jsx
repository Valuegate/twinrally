/**
 * EventsGrid Component - TwinRally Events Feature
 *
 * Responsive grid layout component for displaying EventCard components.
 * Establishes the master grid pattern for all list views in the application.
 *
 * Architecture:
 * - Responsive grid: 1 col mobile → 2 col tablet → 3+ col desktop
 * - Staggered animations for card entrance
 * - Follows FeaturesSection layout patterns
 * - Supports empty states and loading
 * - Reusable for Messages, Profile, and other list views
 *
 * Usage:
 * <EventsGrid events={events} loading={false} onEventClick={handleClick} />
 *
 * Dependencies:
 * - EventCard component
 * - TwinRally animations (@keyframes slideUp)
 * - Tailwind responsive utilities
 *
 * @author Wasiu - TwinRally Team
 * @version 1.0.0
 */

import React from 'react';
import EventCard from './EventCard';
import { Search, Calendar, AlertCircle } from 'lucide-react';

const EventsGrid = ({
  events = [],
  loading = false,
  onEventClick,
  onRegistrationSuccess,
  onEventEdit,
  onEventDelete,
  managementMode = false,
  searchTerm = '',
  filters = {},
  className = ''
}) => {
  /**
   * Handle event card click
   */
  const handleEventClick = (event) => {
    onEventClick?.(event);
  };

  /**
   * Render loading skeleton
   */
  const renderLoadingSkeleton = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="p-6 rounded-2xl backdrop-blur-lg bg-white/5 border border-white/10 animate-pulse"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="h-40 bg-white/10 rounded-lg mb-4"></div>
          <div className="h-6 bg-white/10 rounded mb-2"></div>
          <div className="h-4 bg-white/10 rounded mb-1"></div>
          <div className="h-4 bg-white/10 rounded w-3/4"></div>
        </div>
      ))}
    </div>
  );

  /**
   * Render empty state
   */
  const renderEmptyState = () => (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="p-6 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 mb-6">
        <Calendar className="w-12 h-12 text-gray-400" />
      </div>
      <h3 className="text-2xl font-bold text-white mb-2">No Events Found</h3>
      <p className="text-gray-400 max-w-md leading-relaxed">
        {searchTerm || Object.keys(filters).length > 0
          ? "No events match your search criteria. Try adjusting your filters."
          : "There are no events available right now. Check back later for upcoming twin events!"}
      </p>
      {(searchTerm || Object.keys(filters).length > 0) && (
        <button
          onClick={() => window.location.reload()} // Mock reset
          className="mt-4 px-6 py-2 bg-gradient-to-r from-[color:var(--pink)] to-[color:var(--blue)] text-white rounded-lg hover:scale-105 transition-all duration-300"
        >
          Reset Filters
        </button>
      )}
    </div>
  );

  /**
   * Render grid with events
   */
  const renderEventsGrid = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map((event, index) => (
        <div
          key={event.id}
          className="animate-slide-up"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <EventCard
            event={event}
            onEventClick={handleEventClick}
            onRegistrationSuccess={onRegistrationSuccess}
            managementMode={managementMode}
            onEventEdit={onEventEdit}
            onEventDelete={onEventDelete}
          />
        </div>
      ))}
    </div>
  );

  return (
    <div className={`w-full max-w-7xl mx-auto ${className}`}>

      {/* Loading state */}
      {loading && renderLoadingSkeleton()}

      {/* Empty state */}
      {!loading && events.length === 0 && renderEmptyState()}

      {/* Events grid */}
      {!loading && events.length > 0 && renderEventsGrid()}

      {/* Load more (future enhancement) */}
      {!loading && events.length > 0 && events.length >= 12 && (
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-gradient-to-r from-[color:var(--pink)] to-[color:var(--blue)] text-white rounded-lg hover:scale-105 transition-all duration-300 font-medium">
            Load More Events
          </button>
        </div>
      )}

    </div>
  );
};

export default EventsGrid;
