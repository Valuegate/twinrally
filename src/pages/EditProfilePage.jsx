/**
 * EditProfilePage - TwinRally Profile Editor Page
 *
 * Main page for editing user profile information.
 * Integrates EditProfileForm with full page layout.
 *
 * Route: /profile/edit
 *
 * Architecture:
 * - Follows established page patterns (min-h-screen + Footer)
 * - Uses EditProfileForm component
 * - Handles loading states and navigation
 * - Integrates with currentUserProfile
 *
 * @author Wasiu - TwinRally Team
 * @version 1.0.0
 */

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import EditProfileForm from "@/components/profile/EditProfileForm";
import Footer from "@/components/layout/Footer";
import { currentUserProfile } from "@/data/mockProfiles";
import { ArrowLeft } from "lucide-react";

const EditProfilePage = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    // In a real app, this would be: fetch current user profile
    setProfile(currentUserProfile);
  }, []);

  const handleSaveProfile = (updatedProfile) => {
    console.log("Profile updated:", updatedProfile);
    // In a real app: await updateProfile(updatedProfile);
    alert("✅ Profile updated successfully!");
    navigate("/profile");
  };

  const handleCancel = () => {
    navigate("/profile");
  };

  const handleBackToProfile = () => {
    navigate("/profile");
  };

  return (
    <div className="min-h-screen bg-[color:var(--bg)]">
      {/* Header */}
      <div className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={handleBackToProfile}
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
            Back to Profile
          </button>
        </div>
      </div>

      {/* Form */}
      <div className="pb-20">
        {profile ? (
          <EditProfileForm
            profile={profile}
            onSave={handleSaveProfile}
            onCancel={handleCancel}
          />
        ) : (
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="text-lg text-gray-400">Loading profile...</div>
          </div>
        )}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default EditProfilePage;
