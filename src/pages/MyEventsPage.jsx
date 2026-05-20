/**
 * MyEventsPage - TwinRally User Events Dashboard
 *
 * Personal dashboard for managing created events.
 * Displays events created by the current user with management options.
 *
 * Route: /my-events
 *
 * Responsibilities:
 * - Display user's created events
 * - Show event statistics and metrics
 * - Provide event management actions (future)
 * - Handle loading and empty states
 *
 * Architecture:
 * - Follows EventsPage layout pattern
 * - Uses EventsGrid for displaying events
 * - Dashboard-style header with stats
 * - Empty state for when no events exist
 * - Ready for user authentication integration
 *
 * @author Wasiu - TwinRally Team
 * @version 1.0.0
 */

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import EventsGrid from '@/components/events/EventsGrid';
import Footer from '@/components/layout/Footer';
import { mockEvents } from '@/data/mockEvents';
import {
  Calendar,
  Users,
  TrendingUp,
  Plus,
  ArrowLeft,
  Star,
  Clock,
  MapPin
} from 'lucide-react';

const MyEventsPage = () => {
  const navigate = useNavigate();
  const [userEvents, setUserEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [recentNotifications, setRecentNotifications] = useState([]);

  /**
   * Load user events on component mount
   * Phase 1: Filter mock events (simulate current user's events)
   * Future: API call filtered by current user ID
   */
  useEffect(() => {
    const loadUserEvents = async () => {
      setLoading(true);

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Phase 1: Filter some mock events as "user created" events
      // In a real app, this would be: await fetch('/api/events?createdBy=user_id');
      const myEvents = mockEvents.filter(event =>
        ['festival', 'workshop'].includes(event.type) // Simulate user's events
      );

      setUserEvents(myEvents);
      setLoading(false);
    };

    loadUserEvents();
  }, []);

  /**
   * Handle event edit - Navigate to create page in edit mode
   */
  const handleEventEdit = (event) => {
    console.log('Edit event:', event.title, event.id);
    // For now, alert - future: navigate to edit mode
    alert(`Edit Mode: Opening "${event.title}" for editing.\n\nThis will redirect to the create form pre-filled with current event data.`);
    // Future: navigate(`/create-event?edit=${event.id}`);
  };

  /**
   * Handle event delete - Remove from user's events
   */
  const handleEventDelete = (event) => {
    console.log('Delete event:', event.title, event.id);
    // Remove from local state (simulating backend deletion)
    setUserEvents(prevEvents => prevEvents.filter(e => e.id !== event.id));
    alert(`✅ Deleted: "${event.title}" has been removed from your events.`);
  };

  /**
   * Handle event clicks - Analytics view in management mode (no navigation)
   */
  const handleEventClick = (event) => {
    console.log('My Event clicked:', event.title, event.id);

    // In management mode, this is mostly for analytics - no navigation needed
    alert(`Event Overview: ${event.title}\n\n📊 Registrations: ${event.ticketing.registered}/${event.ticketing.capacity}\n💰 Revenue: ${event.ticketing.type === 'paid' ? `₦${(event.ticketing.price * event.ticketing.registered).toLocaleString()}` : 'N/A'}\n\nUse the Edit, Analytics, or Delete buttons for management actions.`);
  };

  /**
   * Navigate to create new event
   */
  const handleCreateEvent = () => {
    navigate('/create-event');
  };

  /**
   * Navigate back to events
   */
  const handleBackToEvents = () => {
    navigate('/events');
  };

  /**
   * Calculate stats for display
   */
  const stats = {
    totalEvents: userEvents.length,
    totalAttendees: userEvents.reduce((sum, event) => sum + event.ticketing.registered, 0),
    upcoming: userEvents.filter(event => new Date(event.date) > new Date()).length,
    totalRevenue: userEvents
      .filter(event => event.ticketing.type === 'paid')
      .reduce((sum, event) => sum + (event.ticketing.price * event.ticketing.registered), 0)
  };

  return (
    <div className="min-h-screen bg-[color:var(--bg)]">

      {/* Header Section */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Back Navigation */}
          <button
            onClick={handleBackToEvents}
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
            Back to Events
          </button>

          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[color:var(--pink)] to-[color:var(--blue)] bg-clip-text text-transparent">
                My Events
              </span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Manage your created events, track registrations, and connect with your twin community.
            </p>
          </div>

          {/* Stats Cards */}
          {!loading && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 text-center hover:border-white/20 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[color:var(--pink)]/20 to-[color:var(--blue)]/20 mb-4">
                  <Calendar className="w-6 h-6 text-[color:var(--pink)]" />
                </div>
                <div className="text-2xl font-bold text-white">{stats.totalEvents}</div>
                <div className="text-sm text-gray-400">Total Events</div>
              </div>

              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 text-center hover:border-white/20 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[color:var(--pink)]/20 to-[color:var(--blue)]/20 mb-4">
                  <Users className="w-6 h-6 text-[color:var(--pink)]" />
                </div>
                <div className="text-2xl font-bold text-white">{stats.totalAttendees}</div>
                <div className="text-sm text-gray-400">Total Registrations</div>
              </div>

              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 text-center hover:border-white/20 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[color:var(--pink)]/20 to-[color:var(--blue)]/20 mb-4">
                  <Clock className="w-6 h-6 text-[color:var(--pink)]" />
                </div>
                <div className="text-2xl font-bold text-white">{stats.upcoming}</div>
                <div className="text-sm text-gray-400">Upcoming</div>
              </div>

              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 text-center hover:border-white/20 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[color:var(--pink)]/20 to-[color:var(--blue)]/20 mb-4">
                  <TrendingUp className="w-6 h-6 text-[color:var(--pink)]" />
                </div>
                <div className="text-2xl font-bold text-white">
                  {stats.totalRevenue > 0 ? `₦${stats.totalRevenue.toLocaleString()}` : 'N/A'}
                </div>
                <div className="text-sm text-gray-400">Revenue</div>
              </div>
            </div>
          )}

          {/* Create New Event Button */}
          <div className="text-center">
            <button
              onClick={handleCreateEvent}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[color:var(--pink)] to-[color:var(--blue)] text-white font-semibold rounded-xl hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              <Plus className="w-5 h-5" />
              Create New Event
            </button>
          </div>

        </div>
      </div>

      {/* Events Section */}
      <div className="pb-20">
        {userEvents.length > 0 ? (
          <>
            {/* Section Header */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">Your Events</h2>
              <p className="text-gray-400">
                Click on any event to manage registrations, edit details, or view analytics.
              </p>
            </div>

            <EventsGrid
              events={userEvents}
              loading={loading}
              onEventClick={handleEventClick}
              managementMode={true}
              onEventEdit={handleEventEdit}
              onEventDelete={handleEventDelete}
            />

            {/* Creator Notifications Preview */}
            <div className="mt-12 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="relative">
                  <div className="w-2 h-2 bg-[color:var(--pink)] rounded-full animate-pulse"></div>
                </div>
                <h3 className="text-lg font-semibold text-white">Activity Notifications</h3>
                <span className="text-xs bg-[color:var(--pink)] text-[color:var(--bg)] px-2 py-1 rounded-full">Demo</span>
              </div>

              <p className="text-gray-400 mb-4 text-sm">
                In a production app, you would receive real-time notifications here when people register for your events.
              </p>

              {/* Simulate recent activity */}
              <div className="space-y-3">
                {userEvents.slice(0, 2).map((event) => (
                  <div key={event.id} className="flex items-start gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-white">
                        {Math.floor(Math.random() * event.ticketing.registered) + 1} new registration{event.ticketing.registered > 1 ? 's' : ''} for "{event.title}"
                      </div>
                      <div className="text-xs text-gray-400 mt-1">
                        {event.ticketing.registered}/{event.ticketing.capacity} total • {event.ticketing.type === 'paid' ? `Revenue: ₦${(event.ticketing.price * event.ticketing.registered).toLocaleString()}` : 'Free event'}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {Math.floor(Math.random() * 24) + 1} hours ago
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-4">
                <button className="text-xs text-[color:var(--pink)] hover:text-[color:var(--blue)] hover:underline">
                  View All Activity →
                </button>
              </div>
            </div>
          </>
        ) : (
          /* Empty State */
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/5 border border-white/10 mb-6 animate-float">
                <Calendar className="w-10 h-10 text-gray-400" />
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">
                No Events Yet
              </h3>

              <p className="text-gray-400 mb-8 leading-relaxed">
                You haven't created any events yet. Start by creating your first event
                to bring twins together and build your community.
              </p>

              <button
                onClick={handleCreateEvent}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[color:var(--pink)] to-[color:var(--blue)] text-white font-semibold rounded-xl hover:scale-105 hover:shadow-lg transition-all duration-300"
              >
                <Star className="w-5 h-5" />
                Create Your First Event
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default MyEventsPage;
