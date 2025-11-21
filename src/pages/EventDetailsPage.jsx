/**
 * EventDetailsPage - TwinRally Event Details Page
 *
 * Page container for EventDetails component. Handles routing, data fetching, and navigation.
 * Part of the Events CRUD flow - transforms browse → detail user journey.
 *
 * Route: /events/:eventId
import EventShare from '@/components/events/EventShare';
 *
 * Responsibilities:
 * - Extract eventId from URL parameters
 * - Fetch event data from mockEvents
 * - Handle loading and error states
 * - Provide navigation back to EventsPage
 * - SEO and meta information for events
 *
 * Navigation Flow:
 * EventsPage → EventDetailsPage → EventsPage
 * Allows users to dive deep into events after browsing
 *
 * @author Wasiu - TwinRally Team
 * @version 1.0.0
 */

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import EventDetails from '@/components/events/EventDetails';
import Footer from '@/components/layout/Footer';
import { mockEvents } from '@/data/mockEvents';
import { ArrowLeft, AlertCircle } from 'lucide-react';

const EventDetailsPage = () => {
  const { eventId } = useParams(); // Extract eventId from URL: /events/:eventId
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /**
   * Fetch event data on component mount
   * Simulates API call based on eventId parameter
   */
  useEffect(() => {
    const fetchEvent = async () => {
      try {
        setLoading(true);
        setError(null);

        // Simulate API delay (same as EventsPage for consistency)
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Find event by ID in mock data (future: API call)
        const foundEvent = mockEvents.find(event => event.id === eventId);

        if (foundEvent) {
          setEvent(foundEvent);
        } else {
          // Event not found - set error state
          setError(`No event found with ID: ${eventId}`);
        }

      } catch (err) {
        console.error('Error fetching event:', err);
        setError('Failed to load event. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    // Only fetch if we have a valid eventId
    if (eventId) {
      fetchEvent();
    } else {
      setError('Invalid event ID');
      setLoading(false);
    }
  }, [eventId]); // Re-fetch if eventId changes

  /**
   * Handle back navigation to EventsPage
   */
  const handleBackToEvents = () => {
    navigate('/events', {
      state: { from: 'eventDetails', eventId }, // Optional: pass context for future features
      replace: false // Allow browser back button to work
    });
  };

  /**
   * Handle invalid event ID case
   * Renders a proper error state when EventDetails receives null event
   */
  if (!loading && error) {
    console.warn('EventDetailsPage error:', error);
    // EventDetails component handles the error UI when event is null
  }

  return (
    <div className="min-h-screen">

      {/* EventDetails Component - Main content */}
      <EventDetails
        event={event}
        onBack={handleBackToEvents}
        loading={loading}
      />

      {/* Footer - Only show when not loading (prevents layout shift) */}
      {!loading && <Footer />}
    </div>
  );
};

export default EventDetailsPage;
