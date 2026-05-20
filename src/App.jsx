/**
 * App.jsx - TwinRally Main Application
 *
 * Root component with page routing using React Router.
 * @author Wasiu - TwinRally Team
 * @version 2.0.0
 */

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FeaturesSection from "./components/features/FeaturesSection";
import LoginForm from "./components/auth/LoginForm";
import SignupForm from "./components/auth/SignUpForm";
import PricingSection from "./components/pricing/PricingSection";
import LandingPage from "./components/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/features" element={<FeaturesSection />} />
          <Route path="/pricing" element={<PricingSection />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
