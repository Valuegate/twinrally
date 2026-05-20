/**
 * App.jsx - TwinRally Main Application
 *
 * Root component with page routing using React Router.
 * @author Wasiu - TwinRally Team
 * @version 2.0.0
 */

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NotificationBell from "./components/notifications/NotificationBell";
import NotificationDropdown from "./components/notifications/NotificationDropdown";
import { getUnreadCount } from "./data/mockNotifications";
import FeaturesPage from "./pages/FeaturesPage";
import PricingPage from "./pages/PricingPage";
import EventsPage from "./pages/EventsPage";
import EventDetailsPage from "./pages/EventDetailsPage";
import MessagesPage from "./pages/MessagesPage";
import CreateEventPage from "./pages/CreateEventPage";
import ConnectionsPage from "./pages/ConnectionsPage";
import MyEventsPage from "./pages/MyEventsPage";
import ProfilePage from "./pages/ProfilePage";
import EditProfilePage from "./pages/EditProfilePage";
import { LoginPage, SignupPage } from "./pages/AuthPages";

const App = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const unreadCount = getUnreadCount();

  return (
    <Router>
      {/* Notification Bell - Top Right */}
      <div className="fixed top-4 right-4 z-50">
        <NotificationBell
          unreadCount={unreadCount}
          onClick={() => setShowNotifications(true)}
        />
      </div>

      {/* Notification Dropdown */}
      <NotificationDropdown
        isOpen={showNotifications}
        onClose={() => setShowNotifications(false)}
      />

      {/* Dev Navigation - TEMPORARY for testing */}
      <nav className="fixed top-4 left-4 z-50 bg-white/10 backdrop-blur-md rounded-lg p-2 flex gap-2">
        <Link to="/messages" className="px-3 py-1 text-sm bg-white/20 rounded hover:bg-white/30 transition-colors">
          Messages
        </Link>
        <Link to="/profile" className="px-3 py-1 text-sm bg-white/20 rounded hover:bg-white/30 transition-colors">
          Profile
        </Link>
        <Link to="/features" className="px-3 py-1 text-sm bg-white/20 rounded hover:bg-white/30 transition-colors">
          Features
        </Link>
        <Link to="/pricing" className="px-3 py-1 text-sm bg-white/20 rounded hover:bg-white/30 transition-colors">
          Pricing
        </Link>
        <Link to="/events" className="px-3 py-1 text-sm bg-white/20 rounded hover:bg-white/30 transition-colors">
          Events
        </Link>
        <Link to="/create-event" className="px-3 py-1 text-sm bg-white/20 rounded hover:bg-white/30 transition-colors">
          Create
        </Link>
        <Link to="/my-events" className="px-3 py-1 text-sm bg-white/20 rounded hover:bg-white/30 transition-colors">
          My Events
        </Link>
        <Link to="/login" className="px-3 py-1 text-sm bg-white/20 rounded hover:bg-white/30 transition-colors">
          Login
        </Link>
        <Link to="/signup" className="px-3 py-1 text-sm bg-white/20 rounded hover:bg-white/30 transition-colors">
          Signup
        </Link>
      </nav>

      <div className="App">
        <Routes>
          <Route path="/" element={<FeaturesPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/events/:eventId" element={<EventDetailsPage />} />
          <Route path="/create-event" element={<CreateEventPage />} />
           <Route path="/connections" element={<ConnectionsPage />} />
           <Route path="/messages" element={<MessagesPage />} />
          <Route path="/my-events" element={<MyEventsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/profile/edit" element={<EditProfilePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="*" element={<FeaturesPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;