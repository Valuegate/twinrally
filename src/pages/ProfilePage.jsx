/**
 * ProfilePage - TwinRally Profile Display Page
 *
 * Main user profile display page combining multiple profile components.
 * Shows comprehensive user information, activities, and connections.
 *
 * Route: /profile or future /profile/:id
 *
 * Architecture:
 * - Follows established page patterns (min-h-screen + Footer)
 * - Combines reusable profile components
 * - Handles loading states and route parameters
 * - Ready for user switching and permissions
 *
 * @author Wasiu - TwinRally Team
 * @version 1.0.0
 */

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Users } from 'lucide-react';
import ProfileHeader from '@/components/profile/ProfileHeader';
import PhotoGallery from '@/components/profile/PhotoGallery';
import Footer from '@/components/layout/Footer';
import { currentUserProfile, getProfileById } from '@/data/mockProfiles';
import { Calendar, MapPin, Heart, Share2, Camera } from 'lucide-react';

const ProfilePage = () => {
  const { profileId } = useParams(); // For future profile viewing by ID
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  /**
   * Load profile data - either current user or specified user
   */
  useEffect(() => {
    const loadProfile = async () => {
      setLoading(true);

      // Simulate API delay for realistic loading
      await new Promise(resolve => setTimeout(resolve, 1200));

      try {
        // Default to current user profile if no specific ID provided
        // In future: fetch from API based on profileId or current user
        const profileData = profileId ? getProfileById(profileId) : currentUserProfile;

        if (profileData) {
          setProfile(profileData);
        } else {
          // Profile not found - could redirect to 404 or error page
          console.warn('Profile not found:', profileId);
          setProfile(null);
        }
      } catch (error) {
        console.error('Error loading profile:', error);
        setProfile(null);
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, [profileId]);

  /**
   * Handle profile editing navigation
   */
  const handleEditProfile = () => {
    navigate('/profile/edit');
  };

  /**
   * Handle event clicks from activity feed
   */
  const handleEventClick = (eventData) => {
    navigate(`/events/${eventData.eventId}`);
  };

  return (
    <div className="min-h-screen bg-[color:var(--bg)] theme-transition">

      {/* Loading State */}
      {loading && (
        <div className="py-20">
          <ProfileHeader profile={null} />
        </div>
      )}

      {/* Profile Content */}
      {!loading && profile && (
        <>

          {/* Profile Header */}
          <div className="py-20">
            <ProfileHeader
              profile={profile}
              onEdit={handleEditProfile}
              editable={!profileId} // Only show edit for own profile
              showActions={true}
            />
          </div>

          {/* Profile Content Grid */}
          <div className="max-w-6xl mx-auto px-4 pb-20">
            <div className="grid lg:grid-cols-3 gap-8">

              {/* Main Content Column */}
              <div className="lg:col-span-2 space-y-8">

                {/* Twin Story Section */}
                {profile.twinStory && (
                  <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 animate-slide-up">
                    <h2 className="text-xl font-bold text-white mb-4">Our Twin Story</h2>
                    <div className="prose prose-gray max-w-none">
                      <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                        {profile.twinStory}
                      </p>
                    </div>
                  </div>
                )}

                {/* Photo Gallery Section */}
                {profile.photoGallery && profile.photoGallery.length > 0 && (
                  <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 animate-slide-up" style={{ animationDelay: '0.05s' }}>
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-xl font-bold text-white flex items-center gap-2">
                        <Camera className="w-5 h-5 text-[color:var(--pink)]" />
                        Photo Gallery
                      </h2>
                      {profile.photoGallery.length > 8 && (
                        <span className="text-sm text-gray-400">
                          {profile.photoGallery.length} photos total
                        </span>
                      )}
                    </div>
                    <PhotoGallery
                      photos={profile.photoGallery}
                      userName={`${profile.firstName} ${profile.lastName}`}
                      maxPhotos={9}
                      showEmptyState={false}
                    />
                  </div>
                )}

                {/* Interests Section */}
                {profile.interests && profile.interests.length > 0 && (
                  <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                    <h2 className="text-xl font-bold text-white mb-4">Interests</h2>
                    <div className="flex flex-wrap gap-2">
                      {profile.interests.map((interest, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-gradient-to-r from-[color:var(--pink)]/20 to-[color:var(--blue)]/20 text-gray-300 rounded-full text-sm border border-white/20 capitalize"
                        >
                          {interest.replace(/_/g, ' ')}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Recent Activity */}
                {profile.recentActivity && profile.recentActivity.length > 0 && (
                  <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                    <h2 className="text-xl font-bold text-white mb-4">Recent Activity</h2>
                    <div className="space-y-4">
                      {profile.recentActivity.map((activity, index) => (
                        <div key={index} className="flex items-start space-x-3 p-4 bg-white/5 rounded-lg border border-white/10">
                          <div className="flex-shrink-0">
                            {activity.type === 'event_hosted' && <Calendar className="w-5 h-5 text-[color:var(--pink)] mt-0.5" />}
                            {activity.type === 'post_shared' && <Heart className="w-5 h-5 text-[color:var(--blue)] mt-0.5" />}
                            {activity.type === 'connection_made' && <Users className="w-5 h-5 text-green-400 mt-0.5" />}
                          </div>
                          <div className="flex-1">
                            <div className="text-gray-300 text-sm">
                              {activity.type === 'event_hosted' && (
                                <span>
                                  Hosted <span className="text-[color:var(--pink)] font-medium">"{activity.data.eventTitle}"</span>
                                </span>
                              )}
                              {activity.type === 'post_shared' && (
                                <span>Shared: "{activity.data.content}"</span>
                              )}
                              {activity.type === 'connection_made' && (
                                <span>
                                  Connected with <span className="text-[color:var(--blue)] font-medium">{activity.data.connectionName}</span>
                                  {activity.data.mutualFriends > 0 && ` (${activity.data.mutualFriends} mutual)`}
                                </span>
                              )}
                            </div>
                            <div className="text-gray-500 text-xs mt-1">
                              {new Date(activity.timestamp).toLocaleDateString()}
                            </div>
                          </div>
                          {activity.type === 'event_hosted' && (
                            <button
                              onClick={() => handleEventClick(activity.data)}
                              className="px-3 py-1 bg-white/10 text-gray-400 rounded text-xs hover:bg-white/20 hover:text-white transition-colors"
                            >
                              View Event
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Upcoming Events Hosted */}
                {profile.upcomingEvents && profile.upcomingEvents.length > 0 && (
                  <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                    <h2 className="text-xl font-bold text-white mb-4">Upcoming Events</h2>
                    <div className="space-y-3">
                      {profile.upcomingEvents.map((event, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
                          <div>
                            <div className="font-medium text-white mb-1">{event.title}</div>
                            <div className="text-gray-400 text-sm flex items-center">
                              <Calendar className="w-4 h-4 mr-2" />
                              {new Date(event.date).toLocaleDateString()} • {event.location}
                            </div>
                          </div>
                          <button
                            onClick={() => navigate(`/events/${event.id}`)}
                            className="px-4 py-2 bg-gradient-to-r from-[color:var(--pink)] to-[color:var(--blue)] text-white text-sm rounded-lg hover:scale-105 transition-all duration-300"
                          >
                            View Details
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Connections Section */}
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <Users className="w-5 h-5 text-[color:var(--blue)]" />
                      Connections
                    </h3>
                    <button
                      onClick={() => navigate('/connections')}
                      className="px-4 py-2 bg-gradient-to-r from-[color:var(--pink)] to-[color:var(--blue)] text-white text-sm rounded-lg hover:scale-105 transition-all duration-300"
                    >
                      View All
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                      <div className="text-2xl font-bold text-[color:var(--pink)]">{profile.connections?.followers || 0}</div>
                      <div className="text-gray-400 text-sm">Followers</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                      <div className="text-2xl font-bold text-[color:var(--blue)]">{profile.connections?.following || 0}</div>
                      <div className="text-gray-400 text-sm">Following</div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Sidebar */}
              <div className="space-y-8">

                {/* Details Card */}
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 animate-slide-up">
                  <h3 className="text-lg font-bold text-white mb-4">Details</h3>
                  <div className="space-y-4">

                    {/* Twin Type */}
                    {profile.isTwin && profile.twinType && (
                      <div>
                        <div className="text-gray-400 text-sm">Twin Type</div>
                        <div className="text-white capitalize font-medium">{profile.twinType} Twins</div>
                      </div>
                    )}

                    {/* Relationship */}
                    {profile.twinRelationship && (
                      <div>
                        <div className="text-gray-400 text-sm">Relationship</div>
                        <div className="text-white capitalize font-medium">
                          {profile.twinRelationship.replace(/_/g, ' ')}
                        </div>
                      </div>
                    )}

                    {/* Born In */}
                    {profile.bornIn && (
                      <div>
                        <div className="text-gray-400 text-sm">Born In</div>
                        <div className="text-white font-medium">
                          {profile.bornIn.city}, {profile.bornIn.country}
                        </div>
                      </div>
                    )}

                    {/* Education */}
                    {profile.education && profile.education.degree && (
                      <div>
                        <div className="text-gray-400 text-sm">Education</div>
                        <div className="text-white font-medium">
                          {profile.education.degree}
                          {profile.education.university && <div className="text-gray-400 text-sm">{profile.education.university}</div>}
                        </div>
                      </div>
                    )}

                    {/* Joined Date */}
                    {profile.createdAt && (
                      <div>
                        <div className="text-gray-400 text-sm">Member Since</div>
                        <div className="text-white font-medium">
                          {new Date(profile.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
                        </div>
                      </div>
                    )}

                  </div>
                </div>

                {/* Social Links */}
                {profile.socialLinks && Object.keys(profile.socialLinks).length > 0 && (
                  <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                    <h3 className="text-lg font-bold text-white mb-4">Connect</h3>
                    <div className="space-y-3">
                      {profile.socialLinks.linkedin && (
                        <a
                          href={`https://linkedin.com/in/${profile.socialLinks.linkedin}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-3 text-gray-300 hover:text-[color:var(--blue)] transition-colors p-2 rounded-lg hover:bg-white/5"
                        >
                          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded flex items-center justify-center">
                            <span className="text-white font-bold text-sm">in</span>
                          </div>
                          <span>LinkedIn</span>
                        </a>
                      )}
                      {profile.socialLinks.instagram && (
                        <a
                          href={`https://instagram.com/${profile.socialLinks.instagram}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-3 text-gray-300 hover:text-pink-400 transition-colors p-2 rounded-lg hover:bg-white/5"
                        >
                          <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded flex items-center justify-center">
                            <span className="text-white font-bold text-sm">ig</span>
                          </div>
                          <span>Instagram</span>
                        </a>
                      )}
                      {profile.socialLinks.twinrally && (
                        <a
                          href="#" // Internal link or placeholder
                          className="flex items-center space-x-3 text-gray-300 hover:text-[color:var(--pink)] transition-colors p-2 rounded-lg hover:bg-white/5"
                        >
                          <div className="w-8 h-8 bg-gradient-to-r from-[color:var(--pink)] to-[color:var(--blue)] rounded flex items-center justify-center">
                            <span className="text-white font-bold text-sm">TR</span>
                          </div>
                          <span>TwinRally Profile</span>
                        </a>
                      )}
                    </div>
                  </div>
                )}

              </div>

            </div>
          </div>

        </>
      )}

      {/* Error State */}
      {!loading && !profile && (
        <div className="flex items-center justify-center min-h-[50vh]">
          <div className="text-center animate-slide-up">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Users className="w-8 h-8 text-gray-400" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Profile Not Found</h2>
            <p className="text-gray-400 mb-6">This user's profile is not available.</p>
            <button
              onClick={() => navigate('/')}
              className="px-6 py-3 bg-gradient-to-r from-[color:var(--pink)] to-[color:var(--blue)] text-white rounded-lg hover:scale-105 transition-all duration-300"
            >
              Back to Home
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      {!loading && <Footer />}

    </div>
  );
};

export default ProfilePage;

