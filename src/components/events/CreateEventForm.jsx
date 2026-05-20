/**
 * CreateEventForm Component - TwinRally Events Feature
 *
 * Complex form component for creating new events with ticketing, location,
 * and cover image options. Integrates with mock data submission for Phase 1.
 *
 * Architecture:
 * - Follows TwinRally form patterns from SignupForm
 * - Conditional rendering based on event type and ticketing
 * - File upload with preview for cover images
 * - HTML5 form validation with custom date validation
 * - Glassmorphism design system with pink/blue accents
 *
 * Usage:
 * <CreateEventForm onSubmit={handleEventSubmit} onCancel={goBack} />
 *
 * Dependencies:
 * - Lucide React icons
 * - Tailwind CSS with TwinRally design variables
 * - Custom button components
 *
 * @author Wasiu - TwinRally Team
 * @version 1.0.0
 */

import React, { useState, useRef } from 'react';
import {
  Calendar,
  MapPin,
  Users,
  Ticket,
  Upload,
  X,
  AlertCircle,
  Loader2,
  ImagePlus,
  DollarSign,
  Hash,
  FileText
} from 'lucide-react';

const CreateEventForm = ({ onSubmit, onCancel, className = '' }) => {
  // Form state management
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    type: 'meetup', // festival, meetup, workshop, virtual
    date: '',
    locationType: 'physical', // physical, virtual
    address: '',
    ticketingType: 'free', // free, paid, rsvp
    price: '',
    currency: 'NGN',
    capacity: '',
    coverImage: null
  });

  // UI state
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);

  const eventTypes = [
    { id: 'festival', label: 'Festival', description: 'Large gatherings and celebrations' },
    { id: 'meetup', label: 'Meetup', description: 'Small social gatherings' },
    { id: 'workshop', label: 'Workshop', description: 'Educational or skill-building' },
    { id: 'virtual', label: 'Virtual', description: 'Online events' }
  ];

  const currencies = [
    { code: 'NGN', symbol: '₦' },
    { code: 'USD', symbol: '$' },
    { code: 'EUR', symbol: '€' },
    { code: 'GBP', symbol: '£' },
    { code: 'KES', symbol: 'KSh' }
  ];

  /**
   * Handle input changes and clear related errors
   */
  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));

    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }

    // Clear location fields if switching to virtual
    if (field === 'locationType' && value === 'virtual') {
      setFormData(prev => ({ ...prev, address: '' }));
    }

    // Clear price fields if not paid
    if (field === 'ticketingType' && value !== 'paid') {
      setFormData(prev => ({ ...prev, price: '' }));
    }

    // Clear capacity fields if free
    if (field === 'ticketingType' && value === 'free') {
      setFormData(prev => ({ ...prev, capacity: '' }));
    }

    // Auto-set currency for certain locations
    if (field === 'address') {
      const address = value.toLowerCase();
      if (address.includes('austria')) setFormData(prev => ({ ...prev, currency: 'EUR' }));
      else if (address.includes('uk') || address.includes('britain')) setFormData(prev => ({ ...prev, currency: 'GBP' }));
      else if (address.includes('kenya')) setFormData(prev => ({ ...prev, currency: 'KES' }));
      else if (address.includes('usa') || address.includes('united states')) setFormData(prev => ({ ...prev, currency: 'USD' }));
    }
  };

  /**
   * Handle cover image selection
   */
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);
        setFormData(prev => ({ ...prev, coverImage: file }));
      };
      reader.readAsDataURL(file);
    }
  };

  /**
   * Remove selected image
   */
  const removeImage = () => {
    setImagePreview(null);
    setFormData(prev => ({ ...prev, coverImage: null }));
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  /**
   * Validate form data
   */
  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Event title is required';
    } else if (formData.title.length < 5) {
      newErrors.title = 'Title must be at least 5 characters';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Event description is required';
    } else if (formData.description.length < 20) {
      newErrors.description = 'Description must be at least 20 characters';
    }

    if (!formData.date) {
      newErrors.date = 'Event date and time is required';
    } else {
      const eventDate = new Date(formData.date);
      const now = new Date();
      if (eventDate <= now) {
        newErrors.date = 'Event must be in the future';
      }
    }

    if (formData.locationType === 'physical' && !formData.address.trim()) {
      newErrors.address = 'Event address is required for physical events';
    } else if (formData.ticketingType !== 'virtual' && !formData.address.trim()) {
      newErrors.address = 'Event address is required';
    }

    if (formData.ticketingType === 'paid') {
      if (!formData.price || formData.price <= 0) {
        newErrors.price = 'Price is required for paid events';
      } else if (formData.price > 1000000) {
        newErrors.price = 'Price cannot exceed ₦1,000,000';
      }

      if (!formData.capacity || formData.capacity < 1) {
        newErrors.capacity = 'Capacity is required for paid events';
      } else if (formData.capacity > 10000) {
        newErrors.capacity = 'Capacity cannot exceed 10,000';
      }
    }

    if ((formData.ticketingType === 'rsvp' || formData.ticketingType === 'paid') && (!formData.capacity || formData.capacity < 1)) {
      newErrors.capacity = 'Capacity is required for RSVP and paid events';
    }

    return newErrors;
  };

  /**
   * Handle form submission
   */
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    try {
      // Mock data submission - Phase 1
      const eventData = {
        ...formData,
        id: `evt_${formData.type}_${Date.now()}`,
        location: {
          type: formData.locationType,
          address: formData.locationType === 'virtual' ? 'Virtual Event' : formData.address,
          coordinates: null // Mock coordinates
        },
        host: {
          id: 'user_current', // Mock current user
          name: 'You',
          avatar: '/path/to/avatar.jpg'
        },
        ticketing: {
          type: formData.ticketingType,
          price: formData.ticketingType === 'paid' ? parseFloat(formData.price) : 0,
          currency: formData.currency,
          capacity: formData.ticketingType === 'free' ? 99999 : parseInt(formData.capacity),
          registered: 0
        },
        coverImage: imagePreview || '/public/twinrally_lg_01.png',
        tags: [formData.type],
        isLive: false,
        streamUrl: null
      };

      console.log('Event creation submitted:', eventData);
      await onSubmit?.(eventData);
    } catch (error) {
      console.error('Event creation error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`w-full max-w-4xl mx-auto bg-[color:var(--bg)]/95 backdrop-blur-lg border border-white/10 rounded-2xl p-8 text-white ${className}`}>
      {/* Header */}
      <div className="text-center mb-8 animate-slide-up">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[color:var(--pink)]/20 to-[color:var(--blue)]/20 border border-white/10 mb-4 animate-float">
          <Calendar className="w-8 h-8 text-[color:var(--pink)]" />
        </div>
        <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-white to-[color:var(--pink)] bg-clip-text text-transparent">
          Create New Event
        </h2>
        <p className="text-gray-300">
          Bring twins together for an unforgettable experience
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Event Type Selection */}
        <div className="animate-slide-up-delay-1">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Ticket className="w-5 h-5 text-[color:var(--pink)]" />
            Event Type
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {eventTypes.map((type) => (
              <button
                key={type.id}
                type="button"
                onClick={() => handleInputChange('type', type.id)}
                className={`
                  p-4 rounded-xl border transition-all duration-300 text-left
                  ${formData.type === type.id
                    ? 'border-[color:var(--pink)] bg-[color:var(--pink)]/10 text-[color:var(--pink)]'
                    : 'border-white/20 bg-white/5 text-gray-300 hover:border-white/40 hover:bg-white/10'
                  }
                `}
              >
                <div className="font-semibold text-sm">{type.label}</div>
                <div className="text-xs opacity-70 mt-1">{type.description}</div>
              </button>
            ))}
          </div>
          {errors.type && (
            <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
              <AlertCircle className="h-4 w-4" />
              {errors.type}
            </p>
          )}
        </div>

        {/* Title and Description */}
        <div className="grid md:grid-cols-2 gap-6 animate-slide-up-delay-1">
          <div>
            <label className="block text-sm font-medium mb-2 flex items-center gap-2">
              <FileText className="w-4 h-4 text-[color:var(--pink)]" />
              Event Title
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => handleInputChange('title', e.target.value)}
              placeholder="e.g., Global Twin Festival 2025"
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[color:var(--pink)]/50 focus:border-transparent transition-all duration-300"
              maxLength={100}
            />
            {errors.title && (
              <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                <AlertCircle className="h-3 w-3" />
                {errors.title}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 flex items-center gap-2">
              <Hash className="w-4 h-4 text-[color:var(--pink)]" />
              Event Category Tags
            </label>
            <input
              type="text"
              value={formData.tags || ''}
              onChange={(e) => handleInputChange('tags', e.target.value)}
              placeholder="e.g., festival, cultural, music"
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[color:var(--pink)]/50 focus:border-transparent transition-all duration-300"
            />
            <p className="text-gray-400 text-xs mt-1">Optional: comma-separated tags for categorization</p>
          </div>
        </div>

        <div className="animate-slide-up-delay-1">
          <label className="block text-sm font-medium mb-2">Description</label>
          <textarea
            value={formData.description}
            onChange={(e) => handleInputChange('description', e.target.value)}
            placeholder="Describe your event... who it's for, what attendees can expect, special highlights..."
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[color:var(--pink)]/50 focus:border-transparent transition-all duration-300 resize-vertical min-h-[100px]"
            maxLength={1000}
          />
          <div className="text-right text-gray-400 text-xs mt-1">
            {formData.description.length}/1000
          </div>
          {errors.description && (
            <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
              <AlertCircle className="h-3 w-3" />
              {errors.description}
            </p>
          )}
        </div>

        {/* Date and Time */}
        <div className="animate-slide-up-delay-1">
          <label className="block text-sm font-medium mb-2 flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[color:var(--pink)]" />
            Event Date & Time
          </label>
          <input
            type="datetime-local"
            value={formData.date}
            onChange={(e) => handleInputChange('date', e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[color:var(--pink)]/50 focus:border-transparent transition-all duration-300"
            min={new Date().toISOString().slice(0, 16)}
          />
          {errors.date && (
            <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
              <AlertCircle className="h-3 w-3" />
              {errors.date}
            </p>
          )}
        </div>

        {/* Location Section */}
        <div className="animate-slide-up-delay-1">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-[color:var(--pink)]" />
            Location
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Location Type</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => handleInputChange('locationType', 'physical')}
                  className={`
                    p-3 rounded-lg border transition-all duration-300 text-sm font-medium
                    ${formData.locationType === 'physical'
                      ? 'border-[color:var(--pink)] bg-[color:var(--pink)]/10 text-[color:var(--pink)]'
                      : 'border-white/20 bg-white/5 text-gray-300 hover:border-white/40 hover:bg-white/10'
                    }
                  `}
                >
                  Physical Event
                </button>
                <button
                  type="button"
                  onClick={() => handleInputChange('locationType', 'virtual')}
                  className={`
                    p-3 rounded-lg border transition-all duration-300 text-sm font-medium
                    ${formData.locationType === 'virtual'
                      ? 'border-[color:var(--pink)] bg-[color:var(--pink)]/10 text-[color:var(--pink)]'
                      : 'border-white/20 bg-white/5 text-gray-300 hover:border-white/40 hover:bg-white/10'
                    }
                  `}
                >
                  Virtual Event
                </button>
              </div>
            </div>

            {formData.locationType === 'physical' && (
              <div>
                <label className="block text-sm font-medium mb-2">Event Address</label>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  placeholder="e.g., National Theater, Lagos, Nigeria"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[color:var(--pink)]/50 focus:border-transparent transition-all duration-300"
                />
                {errors.address && (
                  <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    {errors.address}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Ticketing Section */}
        <div className="animate-slide-up-delay-1">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Ticket className="w-5 h-5 text-[color:var(--pink)]" />
            Ticketing
          </h3>

          <div className="grid grid-cols-3 gap-3 mb-6">
            {[
              { id: 'free', label: 'Free Event' },
              { id: 'rsvp', label: 'RSVP Only' },
              { id: 'paid', label: 'Paid Tickets' }
            ].map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => handleInputChange('ticketingType', option.id)}
                className={`
                  p-3 rounded-lg border transition-all duration-300 text-sm font-medium
                  ${formData.ticketingType === option.id
                    ? 'border-[color:var(--pink)] bg-[color:var(--pink)]/10 text-[color:var(--pink)]'
                    : 'border-white/20 bg-white/5 text-gray-300 hover:border-white/40 hover:bg-white/10'
                  }
                `}
              >
                {option.label}
              </button>
            ))}
          </div>

          {(formData.ticketingType === 'rsvp' || formData.ticketingType === 'paid') && (
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Maximum Capacity</label>
              <input
                type="number"
                value={formData.capacity}
                onChange={(e) => handleInputChange('capacity', e.target.value)}
                placeholder="e.g., 100"
                className="w-full max-w-xs px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[color:var(--pink)]/50 focus:border-transparent transition-all duration-300"
                min="1"
                max="10000"
              />
              {errors.capacity && (
                <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {errors.capacity}
                </p>
              )}
            </div>
          )}

          {formData.ticketingType === 'paid' && (
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-[color:var(--pink)]" />
                  Ticket Price
                </label>
                <div className="relative">
                  <select
                    value={formData.currency}
                    onChange={(e) => handleInputChange('currency', e.target.value)}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 px-2 py-1 bg-white/10 rounded border border-white/20 text-gray-300 text-sm focus:outline-none"
                  >
                    {currencies.map(curr => (
                      <option key={curr.code} value={curr.code}>
                        {curr.symbol} {curr.code}
                      </option>
                    ))}
                  </select>
                  <input
                    type="number"
                    value={formData.price}
                    onChange={(e) => handleInputChange('price', e.target.value)}
                    placeholder="0.00"
                    className="w-full pl-20 pr-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[color:var(--pink)]/50 focus:border-transparent transition-all duration-300"
                    min="0"
                    step="0.01"
                    max="1000000"
                  />
                </div>
                {errors.price && (
                  <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    {errors.price}
                  </p>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Cover Image Upload */}
        <div className="animate-slide-up-delay-1">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Upload className="w-5 h-5 text-[color:var(--pink)]" />
            Event Cover Image
          </h3>

          <div
            onClick={() => fileInputRef.current?.click()}
            className="border-2 border-dashed border-white/20 rounded-lg p-6 cursor-pointer hover:border-[color:var(--pink)]/50 hover:bg-white/5 transition-all duration-300"
          >
            {imagePreview ? (
              <div className="relative">
                <img
                  src={imagePreview}
                  alt="Event cover preview"
                  className="w-full h-40 object-cover rounded-lg"
                />
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeImage();
                  }}
                  className="absolute top-2 right-2 bg-red-500/80 hover:bg-red-500 text-white rounded-full p-1 transition-colors duration-200"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="absolute bottom-2 left-2 bg-black/50 text-white px-2 py-1 rounded text-xs">
                  Click to change image
                </div>
              </div>
            ) : (
              <div className="text-center">
                <ImagePlus className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-300 mb-1">Click to upload cover image</p>
                <p className="text-gray-500 text-sm">PNG, JPG, GIF up to 10MB</p>
              </div>
            )}

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </div>
        </div>

        {/* Submit Buttons */}
        <div className="pt-6 border-t border-white/10 animate-slide-up-delay-1">
          <div className="flex gap-4 justify-end">
            <button
              type="button"
              onClick={onCancel}
              className="px-6 py-3 rounded-lg border border-white/20 text-gray-300 hover:border-white/40 hover:bg-white/5 transition-all duration-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-8 py-3 bg-gradient-to-r from-[color:var(--pink)] to-[color:var(--blue)] text-white font-semibold rounded-lg hover:scale-105 hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:scale-100 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {loading && <Loader2 className="w-4 h-4 animate-spin" />}
              {loading ? 'Creating Event...' : 'Create Event'}
            </button>
          </div>
        </div>

      </form>
    </div>
  );
};

export default CreateEventForm;
