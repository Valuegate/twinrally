/**
 * EventsPage - TwinRally Events Discovery Page
 *
 * Main events discovery and browsing page.
 * Displays all available events using the EventsGrid component.
 * Establishes page structure pattern for all main feature pages.
 *
 * Route: /events
 *
 * Responsibilities:
 * - Display events from mock data
 * - Handle event click interactions
 * - Manage page loading states
 * - SEO and meta information for events
 *
 * Architecture:
 * - Follows FeaturesPage layout pattern
 * - Uses EventsGrid for content display
 * - Page-specific header section
 * - Footer integration
 * - Ready for routing and navigation updates
 *
 * @author Wasiu - TwinRally Team
 * @version 1.0.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import EventsGrid from '@/components/events/EventsGrid';
import EventFilters from '@/components/events/EventFilters';
import Footer from '@/components/layout/Footer';
import { mockEvents } from '@/data/mockEvents';
import { Calendar, Search, MapPin, X } from 'lucide-react';

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    search: '',
    type: 'all',
    locationType: 'all',
    ticketingType: 'all',
    dateRange: 'all'
  });

  /**
   * Load events on component mount
   * Simulates API call with loading delay
   */
  useEffect(() => {
    const loadEvents = async () => {
      setLoading(true);

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500));

      // In a real app, this would be: const response = await fetch('/api/events');
      // setEvents(await response.json());
      setEvents(mockEvents);
      setLoading(false);
    };

    loadEvents();
  }, []);

  /**
   * Handle filter changes from EventFilters component
   */
  const handleFiltersChange = (newFilters) => {
    setFilters(newFilters);
  };

  /**
   * Filter events based on all active filters
   */
  const filteredEvents = useMemo(() => {
    let filtered = events;

    // Search filter
    if (filters.search.trim()) {
      const searchLower = filters.search.toLowerCase();
      filtered = filtered.filter(event =>
        event.title.toLowerCase().includes(searchLower) ||
        event.description.toLowerCase().includes(searchLower) ||
        event.host.name.toLowerCase().includes(searchLower) ||
        event.location.address.toLowerCase().includes(searchLower)
      );
    }

    // Type filter
    if (filters.type !== 'all') {
      filtered = filtered.filter(event => event.type === filters.type);
    }

    // Location type filter
    if (filters.locationType !== 'all') {
      filtered = filtered.filter(event => event.location.type === filters.locationType);
    }

    // Ticketing type filter
    if (filters.ticketingType !== 'all') {
      filtered = filtered.filter(event => event.ticketing.type === filters.ticketingType);
    }

    // Date range filter
    if (filters.dateRange !== 'all') {
      const now = new Date();
      filtered = filtered.filter(event => {
        const eventDate = new Date(event.date);
        let weekFromNow, nextMonth, nextMonthEnd;

        switch (filters.dateRange) {
          case 'this_week':
            weekFromNow = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
            return eventDate >= now && eventDate <= weekFromNow;
          case 'this_month':
            return eventDate.getMonth() === now.getMonth() && eventDate.getFullYear() === now.getFullYear();
          case 'next_month':
            nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);
            nextMonthEnd = new Date(now.getFullYear(), now.getMonth() + 2, 0);
            return eventDate >= nextMonth && eventDate <= nextMonthEnd;
          case 'this_year':
            return eventDate.getFullYear() === now.getFullYear();
          default:
            return true;
        }
      });
    }

    return filtered;
  }, [events, filters]);

  /**
   * Handle event card clicks
   * Future: Navigate to event detail page or open modal
   */
  const handleEventClick = (event) => {
    console.log('Event clicked:', event.title, event.id);

    // For now, show alert with event details (fallback)
    alert(`${event.ticketing.type === 'free' ? '📝 Click "Register for Free" below to join!' : event.ticketing.type === 'rsvp' ? '📝 Click "Send RSVP" below to join!' : `💳 Click "Purchase Ticket - ${event.ticketing.currency} ${event.ticketing.price.toLocaleString()}" below!`}\n\nEvent: ${event.title}\nType: ${event.type}\nDate: ${new Date(event.date).toLocaleDateString()}\nRegistered: ${event.ticketing.registered} people\nCapacity: ${event.ticketing.capacity}`);
  };

  /**
   * Handle successful event registration
   */
  const handleRegistrationSuccess = (updatedEvent, registrationData) => {
    console.log('Registration successful:', registrationData);

    // Update the events array with the new registration count
    setEvents(prevEvents =>
      prevEvents.map(event =>
        event.id === updatedEvent.id ? updatedEvent : event
      )
    );

    // Show success feedback (could be a toast in the future)
    alert(`🎉 Registration Successful!\n\nYou've been registered for "${updatedEvent.title}"!\n\nCheck your email (${registrationData.email}) for confirmation details.\n\n📧 Creator Notification: The event organizer has been notified of your registration.`);

    // Simulate creator notification (what they'd see in real app)
    console.log(`🔔 CREATOR NOTIFICATION: Someone just registered for "${updatedEvent.title}"!\n\n✅ New registration: ${registrationData.name} - ${registrationData.email}\n📊 Current registrations: ${updatedEvent.ticketing.registered}/${updatedEvent.ticketing.capacity}\n💰 Revenue: ${updatedEvent.ticketing.type === 'paid' ? `₦${(updatedEvent.ticketing.price * updatedEvent.ticketing.registered).toLocaleString()}` : 'Free event'}`);
  };



  return (
    <div className="min-h-screen bg-[color:var(--bg)]">

      {/* Header Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          {/* Title with gradient effect */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[color:var(--pink)] to-[color:var(--blue)] bg-clip-text text-transparent">
              Discover Events
            </span>
          </h1>

          {/* Event Filters */}
          <div className="mb-12 animate-slide-up-delay-1">
            <div className="max-w-4xl mx-auto">
              <EventFilters
                onFiltersChange={handleFiltersChange}
                initialFilters={filters}
              />
            </div>
          </div>

          {/* UX-Focused Action Section */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-400 mb-12">

            {/* Upcoming Events - Engagement Focus */}
            <div className="flex items-center gap-3 cursor-pointer hover:text-[color:var(--pink)] transition-colors duration-300 group" onClick={() => alert('📅 Coming soon: Sort by upcoming dates!\n\nAll events will be re-organized to show the soonest first.')}>
              <div className="p-2 bg-[color:var(--pink)]/20 rounded-lg group-hover:bg-[color:var(--pink)]/30 transition-colors">
                <Calendar className="w-4 h-4 text-[color:var(--pink)]" />
              </div>
              <div className="text-center">
                <div className="font-medium text-white group-hover:text-[color:var(--pink)] transition-colors">9 Upcoming Events</div>
                <div className="text-xs opacity-75">Next: Global Twin Festival</div>
              </div>
            </div>

            {/* Global Communities - Connection Focus */}
            <div className="flex items-center gap-3 cursor-pointer hover:text-[color:var(--blue)] transition-colors duration-300 group" onClick={() => alert('🌍 TwinRally Community:\n\n• 🇳🇬 Nigeria (3 events)\n• 🇦🇹 Austria (1 event)\n• 🇸🇬 Singapore (1 event)\n• 🇰🇪 Kenya (1 event)\n• 🇿🇦 South Africa (1 event)\n• 🇺🇸 Virtual (2 events)\n\nJoin twin community groups worldwide!')}>
              <div className="p-2 bg-[color:var(--blue)]/20 rounded-lg group-hover:bg-[color:var(--blue)]/30 transition-colors">
                <MapPin className="w-4 h-4 text-[color:var(--blue)]" />
              </div>
              <div className="text-center">
                <div className="font-medium text-white group-hover:text-[color:var(--blue)] transition-colors">6+ Countries</div>
                <div className="text-xs opacity-75">Twin Communities</div>
              </div>
            </div>

            {/* Easy Discovery - Quick Actions */}
            <div className="flex items-center gap-3">
              <div className="flex gap-2">
                <span
                  className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border border-purple-500/30 rounded-full cursor-pointer hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300 text-xs font-medium"
                  onClick={() => alert('📸 Festivals: Cultural celebrations, photo sessions, performances')}
                  title="Browse Festival Events"
                >
                  Festivals (2)
                </span>
                <span
                  className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 border border-blue-500/30 rounded-full cursor-pointer hover:from-blue-500/30 hover:to-cyan-500/30 transition-all duration-300 text-xs font-medium"
                  onClick={() => alert('🤝 Meetups: Social gatherings, support groups, networking')}
                  title="Browse Meetup Events"
                >
                  Meetups (3)
                </span>
                <span
                  className="px-3 py-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 border border-green-500/30 rounded-full cursor-pointer hover:from-green-500/30 hover:to-emerald-500/30 transition-all duration-300 text-xs font-medium"
                  onClick={() => alert('🎓 Workshops: Skill sharing, presentations, learning sessions')}
                  title="Browse Workshop Events"
                >
                  Workshops (2)
                </span>
                <span
                  className="px-3 py-1 bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-300 border border-orange-500/30 rounded-full cursor-pointer hover:from-orange-500/30 hover:to-red-500/30 transition-all duration-300 text-xs font-medium"
                  onClick={() => alert('💻 Virtual: Online events, webinars, gaming sessions')}
                  title="Browse Virtual Events"
                >
                  Virtual (2)
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Events Grid Section */}
      <div className="pb-20">
        {!loading && filteredEvents.length !== events.length && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
            <div className="text-left">
              <p className="text-gray-300">
                Found <span className="text-[color:var(--pink)] font-semibold">{filteredEvents.length}</span> events
                {filters.search && ` matching "${filters.search}"`}
                {filters.type !== 'all' && ` of type "${filters.type}"`}
                {filters.locationType !== 'all' && ` in "${filters.locationType}" locations`}
                {filters.ticketingType !== 'all' && ` with "${filters.ticketingType}" pricing`}
                {filters.dateRange !== 'all' && ` within "${filters.dateRange.replace('_', ' ')}"`}
              </p>
            </div>
          </div>
        )}

        <EventsGrid
          events={filteredEvents}
          loading={loading}
          onEventClick={handleEventClick}
          onRegistrationSuccess={handleRegistrationSuccess}
        />
      </div>

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default EventsPage;
