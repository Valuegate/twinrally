/**
 * EditProfileForm Component - Comprehensive Profile Editor
 */
import React, { useState, useEffect } from "react";
import { User, MapPin, Heart, Save, X, Loader2 } from "lucide-react";

const EditProfileForm = ({ profile, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    bio: "",
    occupation: "",
    location: "",
    twinName: "",
    twinStory: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (profile) {
      setFormData({
        firstName: profile.firstName || "",
        lastName: profile.lastName || "",
        email: profile.email || "",
        phone: profile.phone || "",
        bio: profile.bio || "",
        occupation: profile.occupation || "",
        location: profile.location?.city || "",
        twinName: profile.twinName || "",
        twinStory: profile.twinStory || "",
      });
    }
  }, [profile]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      onSave?.({ ...profile, ...formData });
    } catch (error) {
      console.error("Error saving profile:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 text-white">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Edit Profile</h2>
        <p className="text-gray-300">Customize your twin story</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">First Name</label>
            <input
              type="text"
              value={formData.firstName}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, firstName: e.target.value }))
              }
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Last Name</label>
            <input
              type="text"
              value={formData.lastName}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, lastName: e.target.value }))
              }
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Occupation</label>
          <input
            type="text"
            value={formData.occupation}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, occupation: e.target.value }))
            }
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Bio</label>
          <textarea
            value={formData.bio}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, bio: e.target.value }))
            }
            rows="4"
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
          />
        </div>

        <div className="flex gap-4 justify-end pt-6">
          <button
            type="button"
            onClick={onCancel}
            className="px-6 py-3 border border-white/20 text-gray-300 rounded-lg hover:bg-white/5"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3 bg-gradient-to-r from-pink-500 to-blue-500 text-white rounded-lg hover:scale-105 flex items-center gap-2 disabled:opacity-50"
          >
            {loading && <Loader2 className="w-4 h-4 animate-spin" />}
            {loading ? "Saving..." : "Save Profile"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfileForm;
