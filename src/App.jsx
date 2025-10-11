/**
 * App.jsx - TwinRally Main Application
 *
 * Root component with page routing simulation.
 * Ready for React Router implementation when needed.
 *
 * @author Wasiu - TwinRally Team
 * @version 2.0.0
 */

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FeaturesPage from "./pages/FeaturesPage";
import PricingPage from "./pages/PricingPage";
import { LoginPage, SignupPage } from "./pages/AuthPages";

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav className="fixed top-4 left-4 z-50 bg-black/80 backdrop-blur-sm rounded-lg p-3 border border-white/10">
          <div className="flex gap-2">
            <Link to="/features">
              <button className="px-3 py-1 rounded text-xs font-medium transition-colors duration-200 bg-white/10 text-white hover:bg-white/20">
                Features
              </button>
            </Link>
            <Link to="/pricing">
              <button className="px-3 py-1 rounded text-xs font-medium transition-colors duration-200 bg-white/10 text-white hover:bg-white/20">
                Pricing
              </button>
            </Link>
            <Link to="/login">
              <button className="px-3 py-1 rounded text-xs font-medium transition-colors duration-200 bg-white/10 text-white hover:bg-white/20">
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button className="px-3 py-1 rounded text-xs font-medium transition-colors duration-200 bg-white/10 text-white hover:bg-white/20">
                Signup
              </button>
            </Link>
          </div>
          <p className="text-xs text-gray-400 mt-1 text-center">
            Dev Navigation
          </p>
        </nav>
        <Routes>
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="*" element={<FeaturesPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
