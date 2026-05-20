/**
 * PhotoGallery Component - TwinRally Photo Showcase
 *
 * Advanced photo gallery with lightbox, captions, and event integration.
 * Displays twin photos in beautiful grid layouts with interactive features.
 *
 * Features:
 * - Responsive grid layout
 * - Lightbox modal with navigation
 * - Photo captions and metadata
 * - Event tagging and linking
 * - Keyboard navigation
 * - Mobile-friendly touch gestures
 * - Lazy loading optimization
 *
 * Architecture:
 * - Grid view with hover interactions
 * - Modal lightbox for detailed viewing
 * - Photo metadata display
 * - Event integration for event-tagged photos
 * - Accessibility and keyboard support
 *
 * Usage:
 * <PhotoGallery photos={profile.photoGallery} userName="Sarah Johnson" />
 *
 * @author Wasiu - TwinRally Team
 * @version 1.0.0
 */

import React, { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, MapPin, Calendar, Heart, MessageCircle } from "lucide-react";

const PhotoGallery = ({
  photos = [],
  userName = "",
  maxPhotos = 12,
  showEmptyState = true
}) => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Filter and limit photos
  const displayPhotos = photos.slice(0, maxPhotos);

  /**
   * Open lightbox for specific photo
   */
  const openLightbox = (photoIndex) => {
    setSelectedPhotoIndex(photoIndex);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  /**
   * Close lightbox
   */
  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedPhotoIndex(null);
    document.body.style.overflow = 'unset';
  };

  /**
   * Navigate to next photo
   */
  const navigateNext = () => {
    setSelectedPhotoIndex((prev) =>
      prev < displayPhotos.length - 1 ? prev + 1 : 0
    );
  };

  /**
   * Navigate to previous photo
   */
  const navigatePrev = () => {
    setSelectedPhotoIndex((prev) =>
      prev > 0 ? prev - 1 : displayPhotos.length - 1
    );
  };

  /**
   * Handle keyboard navigation
   */
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!lightboxOpen) return;

      switch (e.key) {
        case 'ArrowLeft':
          navigatePrev();
          break;
        case 'ArrowRight':
          navigateNext();
          break;
        case 'Escape':
          closeLightbox();
          break;
        default:
          break;
      }
    };

    if (lightboxOpen) {
      window.addEventListener('keydown', handleKeyPress);
      return () => window.removeEventListener('keydown', handleKeyPress);
    }
  }, [lightboxOpen, selectedPhotoIndex]);

  /**
   * Format photo date for display
   */
  const formatPhotoDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  /**
   * Render empty state
   */
  if (showEmptyState && displayPhotos.length === 0) {
    return (
      <div className="text-center py-12 px-4">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Heart className="w-8 h-8 text-gray-400" />
        </div>
        <h3 className="text-lg font-medium text-gray-600 mb-2">No photos yet</h3>
        <p className="text-gray-500 text-sm">
          {userName && `${userName}'s`} photo gallery is waiting to be filled with twin memories!
        </p>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Photo Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {displayPhotos.map((photo, index) => (
          <div
            key={photo.id || `photo-${index}`}
            className="group relative cursor-pointer overflow-hidden rounded-lg bg-gray-100 aspect-square"
            onClick={() => openLightbox(index)}
          >
            {/* Photo Image */}
            <img
              src={photo.url}
              alt={photo.caption || "Twin photo"}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />

            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-white text-center px-4">
                <Heart className="w-8 h-8 mx-auto mb-2" />
                <p className="text-sm font-medium truncate">
                  {photo.caption || "View Photo"}
                </p>
                {photo.eventName && (
                  <p className="text-xs opacity-80 mt-1">
                    {photo.eventName}
                  </p>
                )}
              </div>
            </div>

            {/* Event badge if photo is from an event */}
            {photo.eventName && (
              <div className="absolute top-2 right-2 bg-pink-500/90 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                Event
              </div>
            )}

            {/* Like count indicator (mock) */}
            <div className="absolute bottom-2 left-2 flex items-center gap-1 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1">
              <Heart className="w-3 h-3 text-white" />
              <span className="text-white text-xs">
                {Math.floor(Math.random() * 50) + 5}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button (if more photos exist) */}
      {photos.length > maxPhotos && (
        <div className="text-center mt-6">
          <button className="px-6 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200">
            View All Photos ({photos.length})
          </button>
        </div>
      )}

      {/* Lightbox Modal */}
      {lightboxOpen && selectedPhotoIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
          <div className="relative max-w-6xl max-h-screen p-4">

            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Main Photo Container */}
            <div className="relative">
              <img
                src={displayPhotos[selectedPhotoIndex].url}
                alt={displayPhotos[selectedPhotoIndex].caption || "Photo"}
                className="max-w-full max-h-[80vh] object-contain rounded-lg mx-auto"
              />

              {/* Navigation Arrows */}
              {displayPhotos.length > 1 && (
                <>
                  <button
                    onClick={navigatePrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={navigateNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}

              {/* Photo Counter */}
              {displayPhotos.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                  {selectedPhotoIndex + 1} / {displayPhotos.length}
                </div>
              )}
            </div>

            {/* Photo Information */}
            <div className="mt-6 bg-white rounded-lg p-6 max-w-2xl mx-auto">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  {/* Caption */}
                  {displayPhotos[selectedPhotoIndex].caption && (
                    <p className="text-gray-900 font-medium mb-3">
                      {displayPhotos[selectedPhotoIndex].caption}
                    </p>
                  )}

                  {/* Metadata */}
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{formatPhotoDate(displayPhotos[selectedPhotoIndex].date)}</span>
                    </div>

                    {displayPhotos[selectedPhotoIndex].eventName && (
                      <div className="flex items-center gap-1">
                        <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                        <span className="text-pink-600 font-medium">
                          {displayPhotos[selectedPhotoIndex].eventName}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Tags */}
                  {displayPhotos[selectedPhotoIndex].tags && displayPhotos[selectedPhotoIndex].tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {displayPhotos[selectedPhotoIndex].tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs capitalize"
                        >
                          #{tag.replace(/_/g, '')}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 ml-6">
                  <button className="p-2 text-gray-600 hover:text-red-500 transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-600 hover:text-blue-500 transition-colors">
                    <MessageCircle className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
