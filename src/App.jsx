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
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FeaturesPage from "./pages/FeaturesPage";
import PricingPage from "./pages/PricingPage";
import { LoginPage, SignupPage } from "./pages/AuthPages";

const App = () => {
  return (
    <Router>
      <div className="App">
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
