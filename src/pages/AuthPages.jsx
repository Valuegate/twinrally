import React from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/auth/LoginForm";
import SignupForm from "../components/auth/SignupForm";

export const LoginPage = () => {
  const navigate = useNavigate();
  const handleLoginSuccess = async (formData) => {
    console.log("Login success:", formData);
    alert("Welcome back! (Would redirect to dashboard)");
  };

  const handleSocialLogin = async (provider) => {
    console.log("Social login:", provider);
    alert(`Social login with ${provider}`);
  };

  const handleForgotPassword = async (email) => {
    console.log("Password reset:", email);
    alert(`Password reset email sent to ${email}`);
  };

  return (
    <div className="min-h-screen bg-[color:var(--bg)] flex items-center justify-center py-12 px-6">
      <div className="w-full max-w-md">
        <LoginForm
          onSuccess={handleLoginSuccess}
          onSocialLogin={handleSocialLogin}
          onForgotPassword={handleForgotPassword}
          onSwitchToSignup={() => navigate("/signup")}
          onGoHome={() => navigate("/features")}
        />
      </div>
    </div>
  );
};

export const SignupPage = () => {
  const navigate = useNavigate();
  const handleSignupSuccess = async (formData) => {
    console.log("Signup success:", formData);
    alert("Welcome to TwinRally! Account created successfully.");
  };

  const handleSocialLogin = async (provider) => {
    console.log("Social signup:", provider);
    alert(`Account created with ${provider}`);
  };

  return (
    <div className="min-h-screen bg-[color:var(--bg)] flex items-center justify-center py-12 px-6">
      <div className="w-full max-w-md">
        <SignupForm
          onSuccess={handleSignupSuccess}
          onSocialLogin={handleSocialLogin}
          onSwitchToLogin={() => navigate("/login")}
          onGoHome={() => navigate("/features")}
        />
      </div>
    </div>
  );
};
