/**
 * App.jsx - TwinRally Main Application
 *
 * Root component with page routing using React Router.
 * @author Wasiu - TwinRally Team
 * @version 2.0.0
 */

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Components
import NotificationBell from "./components/notifications/NotificationBell";
import NotificationDropdown from "./components/notifications/NotificationDropdown";
// import Footer from "./components/layout/Footer";
import HomePage from "./components/HomePage";
import { FriendProfile } from "./components/DashBoard/FriendProfile"; // ✅ named import

// Data
import { getUnreadCount } from "./data/mockNotifications";

// Pages
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
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import { DashBoardPage } from "./user-dash-board/DashBoardPage";
import { LoginPage, SignupPage } from "./pages/AuthPages";

const App = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const unreadCount = getUnreadCount();

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-slate-900 text-white">
        <main className="flex-grow pt-24">
          <Routes>
            {/* Landing */}
            <Route path="/" element={<HomePage />} />

            {/* Core */}
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* Dashboard & Networking */}
            <Route path="/dashboard" element={<DashBoardPage />} />
            <Route path="/connections" element={<ConnectionsPage />} />
            <Route path="/messages" element={<MessagesPage />} />
            <Route
              path="/dashboard/friends/profile/:id"
              element={<FriendProfile />}
            />

            {/* Events */}
            <Route path="/events" element={<EventsPage />} />
            <Route path="/events/:eventId" element={<EventDetailsPage />} />
            <Route path="/create-event" element={<CreateEventPage />} />
            <Route path="/my-events" element={<MyEventsPage />} />

            {/* Profile */}
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/profile/edit" element={<EditProfilePage />} />

            {/* Auth */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />

            {/* Fallback */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        {/* <Footer /> */}
      </div>
    </Router>
  );
};

export default App;
