import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AuthModal from "../components/ui/AuthModal";
import LoginForm from "../components/auth/LoginForm";
import SignupForm from "../components/auth/SignUpForm";

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
    setIsModalOpen(false);
    // Directly navigate without raw browser alert blocks
    navigate("/dashboard");
  };

  const handleSocialLogin = async (provider) => {
    console.log("Social login:", provider);
    setIsModalOpen(false);
    navigate("/dashboard");
  };

  const handleForgotPassword = async (email) => {
    console.log("Password reset:", email);
    // Optional: Replace this with a clean UI toast later
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
    setIsModalOpen(false);
    navigate("/dashboard");
  };

  const handleSocialLogin = async (provider) => {
    console.log("Social signup:", provider);
    setIsModalOpen(false);
    navigate("/dashboard");
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
