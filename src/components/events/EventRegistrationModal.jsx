/**
 * EventRegistrationModal Component - TwinRally Events Feature
 *
 * Modal dialog for event registration and booking.
 * Handles free events, RSVP events, and paid ticket purchases.
 * Replaces basic alert interactions with complete booking flow.
 *
 * Architecture:
 * - Modal dialog with event details and registration form
 * - Conditional rendering based on event type and ticketing
 * - Simulated payment processing for paid events
 * - Updates event registration counts and provides confirmation
 * - Glassmorphism design with TwinRally color scheme
 *
 * Usage:
 * <EventRegistrationModal event={eventData} isOpen={isOpen} onClose={handleClose} onRegistrationSuccess={handleSuccess} />
 *
 * Dependencies:
 * - Lucide React icons
 * - TwinRally animations and color variables
 * - Proper modal backdrop and focus management
 *
 * @author Wasiu - TwinRally Team
 * @version 1.0.0
 */

import React, { useState } from 'react';
import {
  X,
  Calendar,
  MapPin,
  Users,
  CreditCard,
  CheckCircle,
  AlertCircle,
  Loader2,
  Clock,
  Ticket,
  DollarSign
} from 'lucide-react';

const EventRegistrationModal = ({
  event,
  isOpen,
  onClose,
  onRegistrationSuccess
}) => {
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState('details'); // details, payment, confirmation
  const [registrationData, setRegistrationData] = useState({
    name: '',
    email: '',
    phone: '',
    specialRequests: '',
    paymentMethod: 'card',
    agreeToTerms: false
  });
  const [errors, setErrors] = useState({});

  if (!isOpen || !event) return null;

  /**
   * Format date for display
   */
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  /**
   * Format time for display
   */
  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  /**
   * Get event type color
   */
  const getEventTypeColor = (type) => {
    const colors = {
      festival: 'purple',
      meetup: 'blue',
      workshop: 'green',
      virtual: 'orange'
    };
    return colors[type] || 'blue';
  };

  /**
   * Calculate remaining capacity
   */
  const remainingCapacity = event.ticketing.capacity - event.ticketing.registered;

  /**
   * Handle form input changes
   */
  const handleInputChange = (field, value) => {
    setRegistrationData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  /**
   * Validate registration form
   */
  const validateForm = () => {
    const newErrors = {};

    if (!registrationData.name.trim()) {
      newErrors.name = 'Full name is required';
    }

    if (!registrationData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(registrationData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!registrationData.agreeToTerms) {
      newErrors.terms = 'You must agree to the terms and conditions';
    }

    // Paid events need additional payment validation
    if (event.ticketing.type === 'paid') {
      if (!registrationData.phone.trim()) {
        newErrors.phone = 'Phone number is required for paid events';
      }
    }

    return newErrors;
  };

  /**
   * Handle free registration
   */
  const handleFreeRegistration = async () => {
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    if (remainingCapacity <= 0) {
      alert('Sorry, this event is fully booked!');
      return;
    }

    setLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      const updatedEvent = {
        ...event,
        ticketing: {
          ...event.ticketing,
          registered: event.ticketing.registered + 1
        }
      };

      onRegistrationSuccess?.(updatedEvent, {
        ...registrationData,
        registrationId: `REG_${Date.now()}`,
        registrationTime: new Date().toISOString(),
        eventId: event.id,
        ticketType: 'free'
      });

      setStep('confirmation');
    } catch (error) {
      console.error('Registration error:', error);
      alert('Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  /**
   * Handle RSVP registration
   */
  const handleRsvpRegistration = async () => {
    await handleFreeRegistration(); // Same logic as free
  };

  /**
   * Handle paid registration
   */
  const handlePaidRegistration = async () => {
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    if (remainingCapacity <= 0) {
      alert('Sorry, this event is fully booked!');
      return;
    }

    setStep('payment');
  };

  /**
   * Process payment (simulated)
   */
  const processPayment = async () => {
    setLoading(true);

    try {
      // Simulate payment processing delay
      await new Promise(resolve => setTimeout(resolve, 3000));

      // Mock payment processing - 95% success rate
      const paymentSuccess = Math.random() > 0.05;

      if (!paymentSuccess) {
        throw new Error('Payment processing failed');
      }

      const updatedEvent = {
        ...event,
        ticketing: {
          ...event.ticketing,
          registered: event.ticketing.registered + 1
        }
      };

      onRegistrationSuccess?.(updatedEvent, {
        ...registrationData,
        registrationId: `REG_${Date.now()}`,
        registrationTime: new Date().toISOString(),
        eventId: event.id,
        ticketType: 'paid',
        paymentId: `PAY_${Date.now()}`,
        amount: event.ticketing.price,
        currency: event.ticketing.currency,
        paymentMethod: registrationData.paymentMethod
      });

      setStep('confirmation');
    } catch (error) {
      console.error('Payment error:', error);
      alert('Payment failed. Please try again or contact support.');
    } finally {
      setLoading(false);
    }
  };

  /**
   * Handle modal close
   */
  const handleClose = () => {
    if (!loading) {
      setStep('details');
      setRegistrationData({
        name: '',
        email: '',
        phone: '',
        specialRequests: '',
        paymentMethod: 'card',
        agreeToTerms: false
      });
      setErrors({});
      onClose();
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden bg-[color:var(--bg)]/95 backdrop-blur-lg border border-white/10 rounded-2xl shadow-2xl animate-slide-up">

          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-10 text-gray-400 hover:text-white transition-colors duration-200"
            disabled={loading}
          >
            <X className="w-6 h-6" />
          </button>

          {/* Content */}
          <div className="overflow-y-auto max-h-[90vh]">

            {/* Event Header */}
            {step !== 'confirmation' && (
              <div className="relative">
                {/* Event Cover */}
                {event.coverImage && (
                  <div className="relative h-48 sm:h-64 overflow-hidden">
                    <img
                      src={event.coverImage}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                )}

                {/* Event Info Overlay */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full bg-${getEventTypeColor(event.type)}-500/20 text-${getEventTypeColor(event.type)}-300 border border-${getEventTypeColor(event.type)}-500/30 capitalize`}>
                      {event.type}
                    </span>
                    {event.isLive && (
                      <span className="text-xs font-medium px-2 py-1 rounded-full bg-red-500/20 text-red-400 border border-red-500/30">
                        🔥 LIVE
                      </span>
                    )}
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">{event.title}</h2>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(event.date)} at {formatTime(event.date)}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location.address}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="w-4 h-4" />
                      <span>Hosted by {event.host.name}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Registration Content */}
            <div className="p-6 sm:p-8">

              {step === 'details' && (
                <>
                  {/* Capacity Info */}
                  <div className="mb-6 p-4 rounded-lg bg-white/5 border border-white/10">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Ticket className="w-5 h-5 text-[color:var(--pink)]" />
                        <span className="font-semibold text-white">Registration</span>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-white">{remainingCapacity}</div>
                        <div className="text-xs text-gray-400">spots left</div>
                      </div>
                    </div>

                    <div className="text-sm text-gray-300">
                      {event.ticketing.type === 'free' && 'This is a free event - no cost to attend!'}
                      {event.ticketing.type === 'rsvp' && 'RSVP required - no payment needed'}
                      {event.ticketing.type === 'paid' && (
                        <span>
                          Paid event - {event.ticketing.currency} {event.ticketing.price.toLocaleString()} per person
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Registration Form */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-white">Full Name</label>
                      <input
                        type="text"
                        value={registrationData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[color:var(--pink)]/50 focus:border-transparent transition-all duration-300"
                        placeholder="Enter your full name"
                      />
                      {errors.name && (
                        <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-white">Email Address</label>
                      <input
                        type="email"
                        value={registrationData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[color:var(--pink)]/50 focus:border-transparent transition-all duration-300"
                        placeholder="your@email.com"
                      />
                      {errors.email && (
                        <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" />
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {event.ticketing.type === 'paid' && (
                      <div>
                        <label className="block text-sm font-medium mb-2 text-white">Phone Number</label>
                        <input
                          type="tel"
                          value={registrationData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[color:var(--pink)]/50 focus:border-transparent transition-all duration-300"
                          placeholder="+1 (555) 123-4567"
                        />
                        {errors.phone && (
                          <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                            <AlertCircle className="h-3 w-3" />
                            {errors.phone}
                          </p>
                        )}
                      </div>
                    )}

                    <div>
                      <label className="block text-sm font-medium mb-2 text-white">Special Requests (Optional)</label>
                      <textarea
                        value={registrationData.specialRequests}
                        onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[color:var(--pink)]/50 focus:border-transparent transition-all duration-300 resize-none"
                        placeholder="Any dietary requirements, accessibility needs, etc."
                        rows="3"
                        maxLength="200"
                      />
                      <div className="text-right text-xs text-gray-400 mt-1">
                        {registrationData.specialRequests.length}/200
                      </div>
                    </div>

                    <div className="flex items-start gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => handleInputChange('agreeToTerms', !registrationData.agreeToTerms)}
                        className={`
                          flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200 mt-0.5
                          ${registrationData.agreeToTerms
                            ? 'bg-[color:var(--pink)] border-[color:var(--pink)]'
                            : 'border-white/30 hover:border-white/50'
                          }
                        `}
                      >
                        {registrationData.agreeToTerms && (
                          <CheckCircle className="w-3 h-3 text-[color:var(--bg)]" />
                        )}
                      </button>
                      <label className="text-sm text-gray-300 leading-relaxed">
                        I agree to the event{' '}
                        <a href="#terms" className="text-[color:var(--pink)] hover:underline">
                          terms and conditions
                        </a>
                        {' '}and{' '}
                        <a href="#privacy" className="text-[color:var(--pink)] hover:underline">
                          privacy policy
                        </a>
                      </label>
                    </div>
                    {errors.terms && (
                      <p className="text-red-400 text-xs flex items-center gap-1 ml-8">
                        <AlertCircle className="h-3 w-3" />
                        {errors.terms}
                      </p>
                    )}
                  </div>

                  {/* Registration Button */}
                  <div className="mt-8">
                    {event.ticketing.type === 'free' && (
                      <button
                        onClick={handleFreeRegistration}
                        disabled={loading || remainingCapacity <= 0}
                        className="w-full bg-gradient-to-r from-[color:var(--pink)] to-[color:var(--blue)] text-white font-semibold py-4 px-6 rounded-lg hover:scale-105 hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      >
                        {loading && <Loader2 className="w-5 h-5 animate-spin" />}
                        {loading ? 'Registering...' : 'Register for Free'}
                      </button>
                    )}

                    {event.ticketing.type === 'rsvp' && (
                      <button
                        onClick={handleRsvpRegistration}
                        disabled={loading || remainingCapacity <= 0}
                        className="w-full bg-gradient-to-r from-[color:var(--pink)] to-[color:var(--blue)] text-white font-semibold py-4 px-6 rounded-lg hover:scale-105 hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      >
                        {loading && <Loader2 className="w-5 h-5 animate-spin" />}
                        {loading ? 'Sending RSVP...' : 'Send RSVP'}
                      </button>
                    )}

                    {event.ticketing.type === 'paid' && (
                      <button
                        onClick={handlePaidRegistration}
                        disabled={loading || remainingCapacity <= 0}
                        className="w-full bg-gradient-to-r from-[color:var(--pink)] to-[color:var(--blue)] text-white font-semibold py-4 px-6 rounded-lg hover:scale-105 hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      >
                        <DollarSign className="w-5 h-5" />
                        {loading ? 'Processing...' : `Purchase Ticket - ${event.ticketing.currency} ${event.ticketing.price.toLocaleString()}`}
                      </button>
                    )}

                    {remainingCapacity <= 0 && (
                      <p className="text-red-400 text-sm text-center mt-2">
                        This event is fully booked
                      </p>
                    )}
                  </div>
                </>
              )}

              {step === 'payment' && (
                <>
                  {/* Payment Header */}
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[color:var(--pink)]/20 to-[color:var(--blue)]/20 border border-white/10 mb-4">
                      <CreditCard className="w-8 h-8 text-[color:var(--pink)]" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Complete Payment</h3>
                    <p className="text-gray-300">
                      {event.ticketing.currency} {event.ticketing.price.toLocaleString()} for {event.title}
                    </p>
                  </div>

                  {/* Payment Methods */}
                  <div className="space-y-4 mb-6">
                    <div className="text-white font-medium mb-2">Payment Method</div>

                    <div className="space-y-3">
                      <label className="flex items-center p-4 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 cursor-pointer transition-all duration-300">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="card"
                          checked={registrationData.paymentMethod === 'card'}
                          onChange={(e) => handleInputChange('paymentMethod', e.target.value)}
                          className="mr-3"
                        />
                        <div className="flex-1">
                          <div className="font-medium text-white">Credit/Debit Card</div>
                          <div className="text-sm text-gray-400">Secure payment processing</div>
                        </div>
                        <div className="flex gap-1">
                          <div className="w-8 h-5 bg-blue-600 rounded text-xs text-white flex items-center justify-center">V</div>
                          <div className="w-8 h-5 bg-red-600 rounded text-xs text-white flex items-center justify-center">M</div>
                          <div className="w-8 h-5 bg-yellow-600 rounded text-xs text-white flex items-center justify-center">A</div>
                        </div>
                      </label>

                      <label className="flex items-center p-4 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 cursor-pointer transition-all duration-300">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="bank"
                          checked={registrationData.paymentMethod === 'bank'}
                          onChange={(e) => handleInputChange('paymentMethod', e.target.value)}
                          className="mr-3"
                        />
                        <div className="flex-1">
                          <div className="font-medium text-white">Bank Transfer</div>
                          <div className="text-sm text-gray-400">Direct bank payment</div>
                        </div>
                      </label>
                    </div>
                  </div>

                  {/* Payment Actions */}
                  <div className="flex gap-4">
                    <button
                      onClick={() => setStep('details')}
                      disabled={loading}
                      className="flex-1 py-3 px-6 rounded-lg border border-white/20 text-gray-300 hover:border-white/40 hover:bg-white/5 transition-all duration-300"
                    >
                      Back
                    </button>
                    <button
                      onClick={processPayment}
                      disabled={loading}
                      className="flex-1 bg-gradient-to-r from-[color:var(--pink)] to-[color:var(--blue)] text-white font-semibold py-3 px-6 rounded-lg hover:scale-105 hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {loading && <Loader2 className="w-4 h-4 animate-spin" />}
                      {loading ? 'Processing Payment...' : 'Complete Payment'}
                    </button>
                  </div>
                </>
              )}

              {step === 'confirmation' && (
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/20 mb-6">
                    <CheckCircle className="w-10 h-10 text-green-400" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">Registration Successful!</h3>
                  <p className="text-gray-300 mb-6">
                    {event.ticketing.type === 'paid'
                      ? `Your payment of ${event.ticketing.currency} ${event.ticketing.price.toLocaleString()} has been processed.`
                      : 'You have successfully registered for this event.'
                    }
                  </p>

                  <div className="bg-white/5 rounded-lg p-4 mb-6">
                    <div className="space-y-2 text-sm">
                      <div><strong className="text-white">Event:</strong> <span className="text-gray-300">{event.title}</span></div>
                      <div><strong className="text-white">Date:</strong> <span className="text-gray-300">{formatDate(event.date)}</span></div>
                      <div><strong className="text-white">Time:</strong> <span className="text-gray-300">{formatTime(event.date)}</span></div>
                      <div><strong className="text-white">Location:</strong> <span className="text-gray-300">{event.location.address}</span></div>
                    </div>
                  </div>

                  <p className="text-sm text-gray-400 mb-6">
                    A confirmation email has been sent to {registrationData.email}.
                    {event.ticketing.type === 'paid' && ' Your payment receipt is attached.'}
                  </p>

                  <button
                    onClick={handleClose}
                    className="px-8 py-3 bg-gradient-to-r from-[color:var(--pink)] to-[color:var(--blue)] text-white font-semibold rounded-lg hover:scale-105 hover:shadow-lg transition-all duration-300"
                  >
                    Close
                  </button>
                </div>
              )}

            </div>

          </div>

        </div>
      </div>
    </>
  );
};

export default EventRegistrationModal;
