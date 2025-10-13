<<<<<<< HEAD
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
=======
import './App.css'

import { Header } from './components/HomePage/Header'
import { FeatureOne } from './components/HomePage/FeatureOne'
import { FeatureTwo } from './components/HomePage/FeatureTwo'
import { CallToAction } from './components/HomePage/CallToAction'
import { QuickHighlight } from './components/HomePage/QuickHighLight'
import { NewsLetter } from './components/HomePage/NewsLetter'
import { TwinCommunity } from './components/HomePage/TwinCommunity'


function App() {

  return (
    <div className='bg-[#040E28]'>
      <Header />

      <FeatureOne />

      <TwinCommunity />

      <FeatureTwo />

      <CallToAction />

      <QuickHighlight />

      <NewsLetter />
    </div>
  )
}

export default App
>>>>>>> precious-branch
