import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AuthModal from "../components/auth/AuthModal";
import LoginForm from "../components/auth/LoginForm";
import SignupForm from "../components/auth/SignupForm";

export const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Open modal when page is loaded
  useEffect(() => {
    setIsModalOpen(true);
  }, [location]);

  const handleClose = () => {
    setIsModalOpen(false);
    navigate("/features");
  };

  const handleLoginSuccess = async (formData) => {
    console.log("Login success:", formData);
    alert("Welcome back! (Would redirect to dashboard)");
    setIsModalOpen(false);
    navigate("/dashboard"); // Adjust to your desired route
  };

  const handleSocialLogin = async (provider) => {
    console.log("Social login:", provider);
    alert(`Social login with ${provider}`);
    setIsModalOpen(false);
    navigate("/dashboard"); // Adjust to your desired route
  };

  const handleForgotPassword = async (email) => {
    console.log("Password reset:", email);
    alert(`Password reset email sent to ${email}`);
  };

  return (
    <div className="min-h-screen bg-[color:var(--bg)] flex items-center justify-center">
      <AuthModal isOpen={isModalOpen} onClose={handleClose}>
        <LoginForm
          onSuccess={handleLoginSuccess}
          onSocialLogin={handleSocialLogin}
          onForgotPassword={handleForgotPassword}
          onSwitchToSignup={() => navigate("/signup")}
          onGoHome={handleClose}
        />
      </AuthModal>
    </div>
  );
};

export const SignupPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Open modal when page is loaded
  useEffect(() => {
    setIsModalOpen(true);
  }, [location]);

  const handleClose = () => {
    setIsModalOpen(false);
    navigate("/features");
  };

  const handleSignupSuccess = async (formData) => {
    console.log("Signup success:", formData);
    alert("Welcome to TwinRally! Account created successfully.");
    setIsModalOpen(false);
    navigate("/dashboard"); // Adjust to your desired route
  };

  const handleSocialLogin = async (provider) => {
    console.log("Social signup:", provider);
    alert(`Account created with ${provider}`);
    setIsModalOpen(false);
    navigate("/dashboard"); // Adjust to your desired route
  };

  return (
    <div className="min-h-screen bg-[color:var(--bg)] flex items-center justify-center">
      <AuthModal isOpen={isModalOpen} onClose={handleClose}>
        <SignupForm
          onSuccess={handleSignupSuccess}
          onSocialLogin={handleSocialLogin}
          onSwitchToLogin={() => navigate("/login")}
          onGoHome={handleClose}
        />
      </AuthModal>
    </div>
  );
};