/**
 * EventFilters.jsx - Advanced Event Filtering Component
 *
 * Provides comprehensive filtering options for events including:
 * - Search by text
 * - Filter by event type (festival, meetup, workshop, virtual)
 * - Filter by location type (physical, virtual, hybrid)
 * - Filter by date range
 * - Filter by price/ticketing type
 *
 * @author Kilo Code - TwinRally Team
 * @version 1.0.0
 */

import React, { useState, useEffect } from 'react';
import { Search, X, Calendar, MapPin, DollarSign, Filter } from 'lucide-react';

const EventFilters = ({
  onFiltersChange,
  initialFilters = {},
  className = ""
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [filters, setFilters] = useState({
    search: initialFilters.search || '',
    type: initialFilters.type || 'all',
    locationType: initialFilters.locationType || 'all',
    ticketingType: initialFilters.ticketingType || 'all',
    dateRange: initialFilters.dateRange || 'all',
    ...initialFilters
  });

  // Event types for filtering
  const eventTypes = [
    { value: 'all', label: 'All Types', count: null },
    { value: 'festival', label: 'Festivals', count: 2 },
    { value: 'meetup', label: 'Meetups', count: 3 },
    { value: 'workshop', label: 'Workshops', count: 2 },
    { value: 'virtual', label: 'Virtual', count: 2 }
  ];

  // Location types
  const locationTypes = [
    { value: 'all', label: 'All Locations', count: null },
    { value: 'physical', label: 'Physical', count: 6 },
    { value: 'virtual', label: 'Virtual', count: 2 },
    { value: 'hybrid', label: 'Hybrid', count: 1 }
  ];

  // Ticketing types
  const ticketingTypes = [
    { value: 'all', label: 'All Pricing', count: null },
    { value: 'free', label: 'Free', count: 4 },
    { value: 'paid', label: 'Paid', count: 3 },
    { value: 'rsvp', label: 'RSVP Only', count: 2 }
  ];

  // Date ranges
  const dateRanges = [
    { value: 'all', label: 'All Dates', count: null },
    { value: 'this_week', label: 'This Week', count: 3 },
    { value: 'this_month', label: 'This Month', count: 6 },
    { value: 'next_month', label: 'Next Month', count: 2 },
    { value: 'this_year', label: 'This Year', count: 9 }
  ];

  // Update parent component when filters change
  useEffect(() => {
    onFiltersChange?.(filters);
  }, [filters, onFiltersChange]);

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const clearAllFilters = () => {
    setFilters({
      search: '',
      type: 'all',
      locationType: 'all',
      ticketingType: 'all',
      dateRange: 'all'
    });
  };

  const hasActiveFilters = filters.search ||
    filters.type !== 'all' ||
    filters.locationType !== 'all' ||
    filters.ticketingType !== 'all' ||
    filters.dateRange !== 'all';

  const activeFilterCount = [
    filters.search ? 1 : 0,
    filters.type !== 'all' ? 1 : 0,
    filters.locationType !== 'all' ? 1 : 0,
    filters.ticketingType !== 'all' ? 1 : 0,
    filters.dateRange !== 'all' ? 1 : 0
  ].reduce((sum, count) => sum + count, 0);

  return (
    <div className={`bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden ${className}`}>
      {/* Main Search Bar */}
      <div className="p-6">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
            <Search className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="text"
            value={filters.search}
            onChange={(e) => handleFilterChange('search', e.target.value)}
            placeholder="Search events, hosts, or locations..."
            className="w-full pl-14 pr-12 py-4 text-lg rounded-xl bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[color:var(--pink)]/50 focus:border-transparent transition-all duration-300"
            autoComplete="off"
          />
          {filters.search && (
            <button
              onClick={() => handleFilterChange('search', '')}
              className="absolute inset-y-0 right-0 pr-6 flex items-center text-gray-400 hover:text-white transition-colors duration-200"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Filter Toggle Button */}
        <div className="flex items-center justify-between mt-4">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 text-sm font-medium"
          >
            <Filter className="w-4 h-4" />
            Advanced Filters
            {activeFilterCount > 0 && (
              <span className="bg-[color:var(--pink)] text-white text-xs px-2 py-0.5 rounded-full">
                {activeFilterCount}
              </span>
            )}
          </button>

          {hasActiveFilters && (
            <button
              onClick={clearAllFilters}
              className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
            >
              Clear all
            </button>
          )}
        </div>
      </div>

      {/* Expanded Filters */}
      {isExpanded && (
        <div className="px-6 pb-6 border-t border-white/10 animate-slide-up">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">

            {/* Event Type Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">
                Event Type
              </label>
              <div className="space-y-2">
                {eventTypes.map((type) => (
                  <label key={type.value} className="flex items-center">
                    <input
                      type="radio"
                      name="eventType"
                      value={type.value}
                      checked={filters.type === type.value}
                      onChange={(e) => handleFilterChange('type', e.target.value)}
                      className="w-4 h-4 text-[color:var(--pink)] bg-white/10 border-white/20 focus:ring-[color:var(--pink)] focus:ring-2"
                    />
                    <span className="ml-2 text-sm text-gray-300">
                      {type.label}
                      {type.count !== null && (
                        <span className="text-gray-500 ml-1">({type.count})</span>
                      )}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Location Type Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">
                Location Type
              </label>
              <div className="space-y-2">
                {locationTypes.map((location) => (
                  <label key={location.value} className="flex items-center">
                    <input
                      type="radio"
                      name="locationType"
                      value={location.value}
                      checked={filters.locationType === location.value}
                      onChange={(e) => handleFilterChange('locationType', e.target.value)}
                      className="w-4 h-4 text-[color:var(--pink)] bg-white/10 border-white/20 focus:ring-[color:var(--pink)] focus:ring-2"
                    />
                    <span className="ml-2 text-sm text-gray-300">
                      {location.label}
                      {location.count !== null && (
                        <span className="text-gray-500 ml-1">({location.count})</span>
                      )}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Ticketing Type Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">
                Pricing
              </label>
              <div className="space-y-2">
                {ticketingTypes.map((ticketing) => (
                  <label key={ticketing.value} className="flex items-center">
                    <input
                      type="radio"
                      name="ticketingType"
                      value={ticketing.value}
                      checked={filters.ticketingType === ticketing.value}
                      onChange={(e) => handleFilterChange('ticketingType', e.target.value)}
                      className="w-4 h-4 text-[color:var(--pink)] bg-white/10 border-white/20 focus:ring-[color:var(--pink)] focus:ring-2"
                    />
                    <span className="ml-2 text-sm text-gray-300">
                      {ticketing.label}
                      {ticketing.count !== null && (
                        <span className="text-gray-500 ml-1">({ticketing.count})</span>
                      )}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Date Range Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">
                Date Range
              </label>
              <div className="space-y-2">
                {dateRanges.map((range) => (
                  <label key={range.value} className="flex items-center">
                    <input
                      type="radio"
                      name="dateRange"
                      value={range.value}
                      checked={filters.dateRange === range.value}
                      onChange={(e) => handleFilterChange('dateRange', e.target.value)}
                      className="w-4 h-4 text-[color:var(--pink)] bg-white/10 border-white/20 focus:ring-[color:var(--pink)] focus:ring-2"
                    />
                    <span className="ml-2 text-sm text-gray-300">
                      {range.label}
                      {range.count !== null && (
                        <span className="text-gray-500 ml-1">({range.count})</span>
                      )}
                    </span>
                  </label>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default EventFilters;