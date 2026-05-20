/**
 * NotificationSettings.jsx - Notification Preferences Component
 *
 * Allows users to configure notification preferences and settings.
 * Includes toggles for different notification types and delivery methods.
 *
 * @author Kilo Code - TwinRally Team
 * @version 1.0.0
 */

import React, { useState } from 'react';
import { Bell, Mail, Smartphone, Globe } from 'lucide-react';

const NotificationSettings = ({ className = "" }) => {
  const [settings, setSettings] = useState({
    // Email notifications
    emailConnections: true,
    emailEvents: true,
    emailMessages: false,
    emailMarketing: false,

    // Push notifications
    pushConnections: true,
    pushEvents: true,
    pushMessages: true,
    pushReminders: true,

    // In-app notifications
    inAppConnections: true,
    inAppEvents: true,
    inAppMessages: true,
    inAppSystem: true,

    // General settings
    quietHours: false,
    quietStart: "22:00",
    quietEnd: "08:00",
    weeklyDigest: true,
    soundEnabled: true
  });

  const handleSettingChange = (setting, value) => {
    setSettings(prev => ({
      ...prev,
      [setting]: value
    }));
  };

  const notificationCategories = [
    {
      title: "Connections",
      description: "Friend requests, connection acceptances, and social interactions",
      icon: <Globe className="w-5 h-5 text-blue-400" />,
      settings: [
        { key: "emailConnections", label: "Email notifications", type: "email" },
        { key: "pushConnections", label: "Push notifications", type: "push" },
        { key: "inAppConnections", label: "In-app notifications", type: "inApp" }
      ]
    },
    {
      title: "Events",
      description: "Event invitations, updates, reminders, and registrations",
      icon: <Bell className="w-5 h-5 text-green-400" />,
      settings: [
        { key: "emailEvents", label: "Email notifications", type: "email" },
        { key: "pushEvents", label: "Push notifications", type: "push" },
        { key: "inAppEvents", label: "In-app notifications", type: "inApp" },
        { key: "pushReminders", label: "Event reminders", type: "push" }
      ]
    },
    {
      title: "Messages",
      description: "Direct messages and group chat notifications",
      icon: <Mail className="w-5 h-5 text-purple-400" />,
      settings: [
        { key: "emailMessages", label: "Email notifications", type: "email" },
        { key: "pushMessages", label: "Push notifications", type: "push" },
        { key: "inAppMessages", label: "In-app notifications", type: "inApp" }
      ]
    },
    {
      title: "System",
      description: "Platform updates, announcements, and system notifications",
      icon: <Smartphone className="w-5 h-5 text-orange-400" />,
      settings: [
        { key: "inAppSystem", label: "In-app notifications", type: "inApp" },
        { key: "emailMarketing", label: "Marketing emails", type: "email" },
        { key: "weeklyDigest", label: "Weekly digest", type: "email" }
      ]
    }
  ];

  return (
    <div className={`space-y-8 ${className}`}>
      {/* Header */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Notification Settings</h2>
        <p className="text-gray-400">
          Choose how you want to be notified about activity on TwinRally
        </p>
      </div>

      {/* Notification Categories */}
      <div className="space-y-6">
        {notificationCategories.map((category, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
          >
            <div className="flex items-start space-x-4 mb-4">
              <div className="flex-shrink-0 p-2 bg-white/10 rounded-lg">
                {category.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">
                  {category.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {category.description}
                </p>
              </div>
            </div>

            <div className="space-y-3 ml-16">
              {category.settings.map((setting) => (
                <div key={setting.key} className="flex items-center justify-between">
                  <span className="text-gray-300 text-sm">{setting.label}</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings[setting.key]}
                      onChange={(e) => handleSettingChange(setting.key, e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[color:var(--pink)]/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-[color:var(--pink)] peer-checked:to-[color:var(--blue)]"></div>
                  </label>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* General Settings */}
      <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
        <h3 className="text-lg font-bold text-white mb-4">General Settings</h3>

        <div className="space-y-4">
          {/* Quiet Hours */}
          <div className="flex items-center justify-between">
            <div>
              <span className="text-gray-300 text-sm font-medium">Quiet Hours</span>
              <p className="text-gray-500 text-xs">Pause notifications during specified hours</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.quietHours}
                onChange={(e) => handleSettingChange('quietHours', e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[color:var(--pink)]/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-[color:var(--pink)] peer-checked:to-[color:var(--blue)]"></div>
            </label>
          </div>

          {/* Quiet Hours Time Range */}
          {settings.quietHours && (
            <div className="ml-4 p-4 bg-white/5 rounded-lg border border-white/10">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Start Time</label>
                  <input
                    type="time"
                    value={settings.quietStart}
                    onChange={(e) => handleSettingChange('quietStart', e.target.value)}
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--pink)]/50"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">End Time</label>
                  <input
                    type="time"
                    value={settings.quietEnd}
                    onChange={(e) => handleSettingChange('quietEnd', e.target.value)}
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--pink)]/50"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Sound Enabled */}
          <div className="flex items-center justify-between">
            <div>
              <span className="text-gray-300 text-sm font-medium">Sound Notifications</span>
              <p className="text-gray-500 text-xs">Play sound for new notifications</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.soundEnabled}
                onChange={(e) => handleSettingChange('soundEnabled', e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[color:var(--pink)]/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-[color:var(--pink)] peer-checked:to-[color:var(--blue)]"></div>
            </label>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="text-center">
        <button className="px-8 py-3 bg-gradient-to-r from-[color:var(--pink)] to-[color:var(--blue)] text-white rounded-lg hover:scale-105 transition-all duration-300 font-medium">
          Save Preferences
        </button>
      </div>
    </div>
  );
};

export default NotificationSettings;