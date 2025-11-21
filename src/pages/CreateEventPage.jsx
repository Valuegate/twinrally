/**
 * CreateEventPage - TwinRally Event Creation Page
 *
 * Page wrapper for the CreateEventForm component.
 * Handles navigation, state management, and form submission workflows.
 *
 * Route: /create-event
 *
 * Responsibilities:
 * - Display event creation form
 * - Handle successful event creation
 * - Navigate back to events page on cancel or success
 * - Manage page-level state and loading
 *
 * Architecture:
 * - Follows EventsPage layout pattern
 * - Uses CreateEventForm for the actual form
 * - Toast notifications for success/failure
 * - Navigation integration with React Router
 *
 * @author Wasiu - TwinRally Team
 * @version 1.0.0
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import CreateEventForm from '@/components/events/CreateEventForm';
import Footer from '@/components/layout/Footer';
import { ArrowLeft, Sparkles } from 'lucide-react';

const CreateEventPage = () => {
  const navigate = useNavigate();

  /**
   * Handle successful event creation
   * Future: Add to mock events array, show toast, navigate to new event
   */
  const handleEventCreated = async (eventData) => {
    console.log('Event successfully created:', eventData);

    // Phase 1: Show success alert and redirect
    alert(`🎉 Event Created Successfully!\n\n"${eventData.title}" has been created and will appear in your My Events dashboard.\n\nRedirecting to your events...`);

    // Future: Add to mock events and show toast
    // mockEvents.push(eventData);
    // showToast('Event created successfully!', 'success');

    // Navigate back to events page
    navigate('/events');
  };

  /**
   * Handle form cancellation
   */
  const handleCancel = () => {
    console.log('Event creation cancelled');
    navigate('/events');
  };

  /**
   * Navigate back to events page
   */
  const handleBackToEvents = () => {
    navigate('/events');
  };

  return (
    <div className="min-h-screen bg-[color:var(--bg)]">

      {/* Header Section */}
      <div className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Back Navigation */}
          <button
            onClick={handleBackToEvents}
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
            Back to Events
          </button>

          {/* Title with gradient effect */}
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[color:var(--pink)] to-[color:var(--blue)] bg-clip-text text-transparent">
                Create New Event
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed">
              Bring twins together for an unforgettable experience. Create festivals, meetups,
              workshops, or virtual events to connect with your twin community.
            </p>

            {/* Inspirational message */}
            <div className="inline-flex items-center gap-2 text-sm text-gray-400 bg-white/5 px-4 py-2 rounded-full border border-white/10">
              <Sparkles className="w-4 h-4 text-[color:var(--pink)]" />
              <span>Every great twin connection starts with an event</span>
            </div>
          </div>

        </div>
      </div>

      {/* Form Section */}
      <div className="pb-20">
        <CreateEventForm
          onSubmit={handleEventCreated}
          onCancel={handleCancel}
        />
      </div>

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default CreateEventPage;
