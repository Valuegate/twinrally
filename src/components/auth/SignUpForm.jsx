import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { SignupButton } from "@/components/ui/AuthButtons";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  Chrome,
  Apple,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  Loader2,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import AuthModal from "../ui/AuthModal";

const SignUpPage = () => {
  const [showModal, setShowModal] = useState(true);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    isTwin: null,
    twinName: "",
    agreeToTerms: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [socialLoading, setSocialLoading] = useState("");
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const socialProviders = [
    {
      id: "google",
      name: "Google",
      icon: Chrome,
      className:
        "bg-white text-gray-900 hover:bg-gray-50 border border-gray-200",
      popular: true,
    },
    {
      id: "apple",
      name: "Apple",
      icon: Apple,
      className: "bg-black text-white hover:bg-gray-900",
    },
  ];

  const handleSocialLogin = async (providerId) => {
    setSocialLoading(providerId);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1200)); // Simulated login
      console.log(`Signed up with ${providerId}`);
    } catch (error) {
      console.error("Social signup error:", error);
    } finally {
      setSocialLoading("");
    }
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    if (formData.isTwin === null) {
      newErrors.isTwin = "Please let us know if you are a twin";
    }
    if (formData.isTwin && !formData.twinName.trim()) {
      newErrors.twinName = "Please enter your twin's name";
    }
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = "You must agree to the terms and conditions";
    }
    return newErrors;
  };

  const handleEmailSignup = async () => {
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1200)); // Simulated signup
      console.log("Signed up with:", formData);
      setShowModal(false);
    } catch (error) {
      console.error("Signup error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-[color:var(--bg)] via-[#081845] to-[color:var(--blue)]/10 backdrop-blur-2xl"
      style={{
        "--bg": "#040e28",
        "--pink": "#fbc2eb",
        "--blue": "#a6c0ee",
      }}
    >
      <AuthModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        className="relative bg-[color:var(--bg)]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-white shadow-2xl max-w-md w-full animate-slide-up"
      >
        <button
          onClick={() => navigate("/")}
          className="text-gray-400 hover:text-white absolute top-4 left-4 z-10 flex items-center gap-2 transition-all"
        >
          ← Home
        </button>

        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[color:var(--pink)]/20 to-[color:var(--blue)]/20 border border-white/10 mb-4 animate-float">
            <img
              src="/twinrally_icon-removebg-preview (1).png"
              alt="TwinRally Icon"
              className="w-8 h-8"
            />
          </div>
          <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-white to-[color:var(--pink)] bg-clip-text text-transparent">
            Join TwinRally
          </h2>
          <p className="text-gray-300 text-sm">
            Connect with twins worldwide in seconds
          </p>
        </div>

        {!showEmailForm ? (
          <>
            <div className="space-y-3 mb-6 animate-slide-up-delay-1">
              {socialProviders.map((provider) => {
                const isLoading = socialLoading === provider.id;
                return (
                  <Button
                    key={provider.id}
                    onClick={() => handleSocialLogin(provider.id)}
                    disabled={!!socialLoading}
                    className={`w-full gap-3 py-6 font-semibold transition-all duration-300 hover:scale-105 ${provider.className}`}
                  >
                    {isLoading ? (
                      <Loader2 className="h-5 w-5 animate-spin" />
                    ) : provider.id === "google" ? (
                      <svg className="h-5 w-5" viewBox="0 0 24 24">
                        <path
                          fill="#4285F4"
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                          fill="#34A853"
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        />
                        <path
                          fill="#EA4335"
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        />
                      </svg>
                    ) : (
                      <Apple className="h-5 w-5" />
                    )}
                    <span>Continue with {provider.name}</span>
                  </Button>
                );
              })}
            </div>

            <div className="relative my-6 animate-slide-up-delay-2">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-[color:var(--bg)] px-4 text-gray-400">
                  Or continue with email
                </span>
              </div>
            </div>

            <Button
              onClick={() => setShowEmailForm(true)}
              variant="outline"
              className="w-full py-6 border-white/20 text-white hover:bg-white/5 hover:border-white/40 transition-all duration-300 gap-3 animate-slide-up-delay-3"
            >
              <Mail className="h-5 w-5" />
              <span>Continue with Email</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </>
        ) : (
          <>
            <Button
              onClick={() => setShowEmailForm(false)}
              variant="ghost"
              size="sm"
              className="mb-6 text-gray-400 hover:text-white -ml-2"
            >
              ← Back to social login
            </Button>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <input
                    type="text"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={(e) =>
                      handleInputChange("firstName", e.target.value)
                    }
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[color:var(--pink)]/50 focus:border-transparent transition-all duration-300"
                  />
                  {errors.firstName && (
                    <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" />
                      {errors.firstName}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={(e) =>
                      handleInputChange("lastName", e.target.value)
                    }
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[color:var(--pink)]/50 focus:border-transparent transition-all duration-300"
                  />
                  {errors.lastName && (
                    <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" />
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <div className="relative">
                  <Mail className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />
                  <input
                    type="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[color:var(--pink)]/50 focus:border-transparent transition-all duration-300"
                  />
                </div>
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="space-y-3">
                <div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password (min. 8 characters)"
                      value={formData.password}
                      onChange={(e) =>
                        handleInputChange("password", e.target.value)
                      }
                      className="w-full pl-10 pr-10 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[color:var(--pink)]/50 focus:border-transparent transition-all duration-300"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3.5 text-gray-400 hover:text-white"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" />
                      {errors.password}
                    </p>
                  )}
                </div>

                <div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm password"
                      value={formData.confirmPassword}
                      onChange={(e) =>
                        handleInputChange("confirmPassword", e.target.value)
                      }
                      className="w-full pl-10 pr-10 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[color:var(--pink)]/50 focus:border-transparent transition-all duration-300"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute right-3 top-3.5 text-gray-400 hover:text-white"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                  {errors.confirmPassword && (
                    <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" />
                      {errors.confirmPassword}
                    </p>
                  )}
                </div>
              </div>

              <div className="border-t border-white/10 pt-4">
                <h4 className="text-sm font-semibold mb-3 text-[color:var(--pink)]">
                  Twin Information
                </h4>
                <div className="mb-3">
                  <p className="text-sm text-gray-300 mb-2">Are you a twin?</p>
                  <div className="flex gap-3">
                    <Button
                      type="button"
                      variant={formData.isTwin === true ? "default" : "outline"}
                      size="sm"
                      onClick={() => handleInputChange("isTwin", true)}
                      className={
                        formData.isTwin === true
                          ? "bg-[color:var(--pink)] text-[color:var(--bg)]"
                          : "border-white/20 text-white hover:bg-white/5"
                      }
                    >
                      Yes, I'm a twin!
                    </Button>
                    <Button
                      type="button"
                      variant={
                        formData.isTwin === false ? "default" : "outline"
                      }
                      size="sm"
                      onClick={() => handleInputChange("isTwin", false)}
                      className={
                        formData.isTwin === false
                          ? "bg-gray-600 text-white"
                          : "border-white/20 text-white hover:bg-white/5"
                      }
                    >
                      No, but I love twins!
                    </Button>
                  </div>
                  {errors.isTwin && (
                    <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" />
                      {errors.isTwin}
                    </p>
                  )}
                </div>

                {formData.isTwin && (
                  <div>
                    <div className="relative">
                      <User className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Your twin's name"
                        value={formData.twinName}
                        onChange={(e) =>
                          handleInputChange("twinName", e.target.value)
                        }
                        className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[color:var(--pink)]/50 focus:border-transparent transition-all duration-300"
                      />
                    </div>
                    {errors.twinName && (
                      <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {errors.twinName}
                      </p>
                    )}
                  </div>
                )}
              </div>

              <div className="flex items-start gap-3 pt-2">
                <button
                  type="button"
                  onClick={() =>
                    handleInputChange("agreeToTerms", !formData.agreeToTerms)
                  }
                  className={`
                    flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200
                    ${
                      formData.agreeToTerms
                        ? "bg-[color:var(--pink)] border-[color:var(--pink)]"
                        : "border-white/30 hover:border-white/50"
                    }
                  `}
                >
                  {formData.agreeToTerms && (
                    <CheckCircle className="w-3 h-3 text-[color:var(--bg)]" />
                  )}
                </button>
                <label className="text-sm text-gray-300 leading-relaxed">
                  I agree to TwinRally's{" "}
                  <a
                    href="/terms"
                    className="text-[color:var(--pink)] hover:underline"
                  >
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a
                    href="/privacy"
                    className="text-[color:var(--pink)] hover:underline"
                  >
                    Privacy Policy
                  </a>
                </label>
              </div>
              {errors.agreeToTerms && (
                <p className="text-red-400 text-xs flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {errors.agreeToTerms}
                </p>
              )}

              <SignupButton
                type="button"
                onClick={handleEmailSignup}
                loading={loading}
                className="w-full py-4 mt-6"
              >
                {loading
                  ? "Creating your account..."
                  : "Create My TwinRally Account"}
              </SignupButton>
            </div>
          </>
        )}

        <div className="text-center mt-6 pt-6 border-t border-white/10">
          <p className="text-xs text-gray-400">
            Already have an account?{" "}
            <button
              onClick={() => navigate("/login")}
              className="text-[color:var(--pink)] hover:underline font-medium"
            >
              Sign in here
            </button>
          </p>
        </div>
      </AuthModal>
    </div>
  );
};

export default SignUpPage;
