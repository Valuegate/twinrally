import React, { useState } from "react";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  Apple,
  Loader2,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Users,
  Calendar,
  Star,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

/* ─────────────────────────────────────────
   Tiny reusable helpers
───────────────────────────────────────── */
const ErrorMsg = ({ msg }) => (
  <AnimatePresence mode="popLayout">
    {msg && (
      <motion.p
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        className="flex items-center gap-1 text-red-400 text-xs mt-1"
      >
        <AlertCircle className="h-3 w-3 flex-shrink-0" />
        {msg}
      </motion.p>
    )}
  </AnimatePresence>
);

function InputField({
  icon: Icon,
  type = "text",
  placeholder,
  value,
  onChange,
  rightSlot,
  error,
}) {
  return (
    <div>
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30 pointer-events-none" />
        )}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`
            w-full ${Icon ? "pl-10" : "pl-4"} ${
            rightSlot ? "pr-10" : "pr-4"
          } py-3.5 rounded-xl
            text-white placeholder-white/30 text-sm
            focus:outline-none focus:ring-2 focus:ring-[#fbc2eb]/40 focus:border-[#fbc2eb]/50
            transition-all duration-200
            ${error ? "border-red-400/50" : "border-white/12"}
          `}
          style={{
            background: "rgba(255,255,255,0.055)",
            border: `1px solid ${
              error ? "rgba(248,113,113,0.4)" : "rgba(255,255,255,0.10)"
            }`,
          }}
        />
        {rightSlot && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            {rightSlot}
          </div>
        )}
      </div>
      <ErrorMsg msg={error} />
    </div>
  );
}

/* ─────────────────────────────────────────
   Left panel — hero2 image + brand quote
───────────────────────────────────────── */
function HeroPanel() {
  const stats = [
    { icon: Users, value: "50K+", label: "Twins Connected" },
    { icon: Calendar, value: "3.4K", label: "Events Hosted" },
    { icon: Star, value: "4.9★", label: "App Rating" },
  ];

  return (
    <div
      className="relative hidden lg:flex flex-col justify-between overflow-hidden"
      style={{ width: "48%", flexShrink: 0 }}
    >
      {/* Full-bleed image with ambient mount zoom */}
      <motion.img
        initial={{ scale: 1.08, filter: "brightness(0)" }}
        animate={{ scale: 1, filter: "brightness(0.50)" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        src="/hero2.png"
        alt="Twins at a festival"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Overlays */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, #040e28 0%, #040e2875 40%, transparent 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, #040e2855 0%, transparent 55%)",
        }}
      />

      {/* Top — logo */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="relative z-10 p-8"
      >
        <div className="flex items-center gap-2.5">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center"
            style={{
              background: "rgba(251,194,235,0.15)",
              border: "1px solid rgba(251,194,235,0.3)",
            }}
          >
            <img
              src="/twinrally_icon-removebg-preview (1).png"
              alt="TwinRally"
              className="w-5 h-5"
            />
          </div>
          <span
            className="font-bold text-white text-lg tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            TwinRally
          </span>
        </div>
      </motion.div>

      {/* Bottom — headline + quote + stats */}
      <div className="relative z-10 p-8 pb-10">
        <motion.p
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xs font-semibold uppercase tracking-widest mb-3"
          style={{ color: "#a6c0ee" }}
        >
          Welcome Back
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-white text-3xl xl:text-4xl font-black leading-[1.1] mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Your twin story
          <br />
          <em
            className="not-italic"
            style={{
              background: "linear-gradient(90deg, #fbc2eb, #a6c0ee)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            continues here.
          </em>
        </motion.h2>

        {/* Pull quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mb-7 pl-4"
          style={{ borderLeft: "2px solid rgba(251,194,235,0.4)" }}
        >
          <p className="text-white/55 text-sm leading-relaxed italic">
            "TwinRally gave us a space to celebrate who we are — together and
            apart."
          </p>
          <p className="text-white/30 text-xs mt-1.5 not-italic">
            — Faith & Grace, Lagos
          </p>
        </motion.div>

        {/* Stats */}
        <div className="flex gap-6">
          {stats.map(({ icon: Icon, value, label }, index) => (
            <motion.div 
              key={label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
              className="flex flex-col"
            >
              <span
                className="text-white font-black text-xl"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {value}
              </span>
              <span className="text-white/45 text-xs mt-0.5">{label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Main Login Page
───────────────────────────────────────── */
const LoginPage = () => {
  const [socialLoading, setSocialLoading] = useState("");
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (field, value) => {
    setFormData((p) => ({ ...p, [field]: value }));
    if (errors[field]) setErrors((p) => ({ ...p, [field]: "" }));
  };

  const validateForm = () => {
    const e = {};
    if (!formData.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      e.email = "Invalid email address";
    if (!formData.password) e.password = "Password is required";
    return e;
  };

  const handleSocialLogin = async (id) => {
    setErrors({});
    setSocialLoading(id);
    await new Promise((r) => setTimeout(r, 1000));
    setSocialLoading("");
    
    setSuccessMessage(`Successfully authenticated via ${id.charAt(0).toUpperCase() + id.slice(1)}!`);
    await new Promise((r) => setTimeout(r, 1200));
    navigate("/dashboard");
  };

  const handleEmailLogin = async () => {
    const errs = validateForm();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    
    setErrors({});
    setLoading(true);
    try {
      await new Promise((r) => setTimeout(r, 1400));
      console.log("Logged in successfully with:", formData);
      
      setSuccessMessage("Welcome back! Redirecting to dashboard...");
      // Wait briefly so the layout banner pop-up registers beautifully before changing views
      await new Promise((r) => setTimeout(r, 1200));
      navigate("/dashboard");
      
    } catch {
      setErrors({ general: "Invalid email or password. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  const EyeBtn = () => (
    <button
      type="button"
      onClick={() => setShowPassword(!showPassword)}
      className="text-white/30 hover:text-white/70 transition-colors"
    >
      {showPassword ? (
        <EyeOff className="h-4 w-4" />
      ) : (
        <Eye className="h-4 w-4" />
      )}
    </button>
  );

  // Reusable variant definitions for crisp step transitions
  const formPanelVariants = {
    initial: (custom) => ({
      opacity: 0,
      x: custom > 0 ? 30 : -30,
    }),
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: "easeOut", staggerChildren: 0.06 }
    },
    exit: (custom) => ({
      opacity: 0,
      x: custom > 0 ? -30 : 30,
      transition: { duration: 0.3, ease: "easeIn" }
    })
  };

  const childFadeVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 99px; }
      `}</style>

      <div
        className="fixed inset-0 flex"
        style={{ background: "#040e28", fontFamily: "'DM Sans', sans-serif" }}
      >
        {/* ── LEFT: hero image ── */}
        <HeroPanel />

        {/* ── RIGHT: form panel ── */}
        <div
          className="flex-1 flex flex-col min-h-0 overflow-hidden"
          style={{
            background: "linear-gradient(160deg, #060f2e 0%, #040e28 100%)",
          }}
        >
          {/* Top bar */}
          <div
            className="flex-shrink-0 flex items-center justify-between px-8 py-5"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.07)", zIndex: 20 }}
          >
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-1.5 text-white/40 hover:text-white text-sm transition-colors"
            >
              ← Home
            </button>

            {/* Mobile logo */}
            <div className="flex items-center gap-2 lg:hidden">
              <img
                src="/twinrally_icon-removebg-preview (1).png"
                alt="TwinRally"
                className="w-6 h-6"
              />
              <span
                className="text-white font-bold text-base"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                TwinRally
              </span>
            </div>
            <div className="w-16" />
          </div>

          {/* Scrollable body wrapper */}
          <div className="flex-1 overflow-y-auto relative flex flex-col justify-center">
            <div className="px-8 py-10 max-w-md mx-auto w-full relative overflow-hidden">
              <AnimatePresence mode="wait" initial={false} custom={showEmailForm ? 1 : -1}>
                {!showEmailForm ? (
                  /* ── Screen 1: social options ── */
                  <motion.div
                    key="social-screen"
                    custom={1}
                    variants={formPanelVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="w-full flex flex-col justify-center"
                  >
                    <motion.div variants={childFadeVariants} className="mb-9">
                      <h1
                        className="text-white text-3xl font-black mb-2"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        Welcome back
                      </h1>
                      <p className="text-white/40 text-sm">
                        Sign in to your TwinRally account.
                      </p>
                    </motion.div>

                    {/* General success Banner on Screen 1 */}
                    <AnimatePresence>
                      {successMessage && (
                        <motion.div
                          initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                          animate={{ opacity: 1, height: "auto", marginBottom: 20 }}
                          exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                          className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm text-emerald-400 overflow-hidden"
                          style={{
                            background: "rgba(52,211,153,0.08)",
                            border: "1px solid rgba(52,211,153,0.2)",
                          }}
                        >
                          <CheckCircle className="h-4 w-4 flex-shrink-0 text-emerald-400" />
                          {successMessage}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Social buttons */}
                    <motion.div variants={childFadeVariants} className="space-y-3 mb-7">
                      {[
                        {
                          id: "google",
                          label: "Continue with Google",
                          bg: "#fff",
                          color: "#111",
                          icon: (
                            <svg className="h-4 w-4 flex-shrink-0" viewBox="0 0 24 24">
                              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92(3.28-4.74 3.28-8.09z" />
                              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                            </svg>
                          ),
                        },
                        {
                          id: "apple",
                          label: "Continue with Apple",
                          bg: "#000",
                          color: "#fff",
                          icon: <Apple className="h-4 w-4 flex-shrink-0" />,
                        },
                      ].map(({ id, label, bg, color, icon }) => (
                        <motion.button
                          whileHover={{ scale: 1.015 }}
                          whileTap={{ scale: 0.99 }}
                          key={id}
                          onClick={() => handleSocialLogin(id)}
                          disabled={!!socialLoading || !!successMessage}
                          className="w-full flex items-center gap-3 px-5 py-4 rounded-xl font-semibold text-sm transition-all disabled:opacity-60 cursor-pointer"
                          style={{ background: bg, color }}
                        >
                          {socialLoading === id ? (
                            <Loader2 className="h-4 w-4 animate-spin" />
                          ) : (
                            icon
                          )}
                          <span>{label}</span>
                        </motion.button>
                      ))}
                    </motion.div>

                    {/* Divider */}
                    <motion.div variants={childFadeVariants} className="relative mb-7">
                      <div className="absolute inset-0 flex items-center">
                        <div
                          className="w-full"
                          style={{ borderTop: "1px solid rgba(255,255,255,0.09)" }}
                        />
                      </div>
                      <div className="relative flex justify-center">
                        <span
                          className="px-4 text-xs text-white/30 uppercase tracking-widest"
                          style={{ background: "#050f2a" }}
                        >
                          or sign in with email
                        </span>
                      </div>
                    </motion.div>

                    <motion.button
                      variants={childFadeVariants}
                      whileHover={{ scale: 1.015 }}
                      whileTap={{ scale: 0.99 }}
                      onClick={() => setShowEmailForm(true)}
                      disabled={!!successMessage}
                      className="w-full flex items-center gap-3 px-5 py-4 rounded-xl text-sm font-semibold text-white transition-all cursor-pointer disabled:opacity-50"
                      style={{
                        border: "1px solid rgba(255,255,255,0.14)",
                        background: "rgba(255,255,255,0.04)",
                      }}
                    >
                      <Mail className="h-4 w-4 flex-shrink-0 text-white/50" />
                      <span>Sign in with Email</span>
                      <ArrowRight className="h-4 w-4 ml-auto text-white/30" />
                    </motion.button>
                  </motion.div>
                ) : (
                  /* ── Screen 2: email form ── */
                  <motion.div
                    key="email-screen"
                    custom={-1}
                    variants={formPanelVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="w-full flex flex-col justify-center"
                  >
                    <motion.button
                      variants={childFadeVariants}
                      onClick={() => {
                        setShowEmailForm(false);
                        setErrors({});
                      }}
                      disabled={loading || !!successMessage}
                      className="text-white/35 hover:text-white text-xs mb-7 flex items-center gap-1 transition-colors self-start cursor-pointer disabled:opacity-40"
                    >
                      ← Back
                    </motion.button>

                    <motion.div variants={childFadeVariants} className="mb-8">
                      <h1
                        className="text-white text-3xl font-black mb-2"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        Sign in
                      </h1>
                      <p className="text-white/40 text-sm">
                        Enter your credentials to continue.
                      </p>
                    </motion.div>

                    <div className="space-y-5">
                      {/* Success Feedback Banner */}
                      <AnimatePresence>
                        {successMessage && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm text-emerald-400 overflow-hidden"
                            style={{
                              background: "rgba(52,211,153,0.08)",
                              border: "1px solid rgba(52,211,153,0.2)",
                            }}
                          >
                            <CheckCircle className="h-4 w-4 flex-shrink-0 text-emerald-400" />
                            {successMessage}
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* General error Banner inside layout check */}
                      <AnimatePresence>
                        {errors.general && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm text-red-400 overflow-hidden"
                            style={{
                              background: "rgba(248,113,113,0.08)",
                              border: "1px solid rgba(248,113,113,0.2)",
                            }}
                          >
                            <AlertCircle className="h-4 w-4 flex-shrink-0" />
                            {errors.general}
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Email */}
                      <motion.div variants={childFadeVariants}>
                        <InputField
                          icon={Mail}
                          type="email"
                          placeholder="Email address"
                          value={formData.email}
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
                          error={errors.email}
                        />
                      </motion.div>

                      {/* Password */}
                      <motion.div variants={childFadeVariants}>
                        <InputField
                          icon={Lock}
                          type={showPassword ? "text" : "password"}
                          placeholder="Password"
                          value={formData.password}
                          onChange={(e) =>
                            handleInputChange("password", e.target.value)
                          }
                          error={errors.password}
                          rightSlot={<EyeBtn />}
                        />
                      </motion.div>

                      {/* Remember me + Forgot password */}
                      <motion.div variants={childFadeVariants} className="flex items-center justify-between pt-1">
                        <label className="flex items-center gap-2.5 cursor-pointer group">
                          <button
                            type="button"
                            disabled={loading || !!successMessage}
                            onClick={() =>
                              handleInputChange(
                                "rememberMe",
                                !formData.rememberMe
                              )
                            }
                            className="flex-shrink-0 w-5 h-5 rounded-md flex items-center justify-center transition-all duration-200"
                            style={{
                              background: formData.rememberMe
                                ? "linear-gradient(135deg,#fbc2eb,#a6c0ee)"
                                : "transparent",
                              border: formData.rememberMe
                                ? "none"
                                : "1.5px solid rgba(255,255,255,0.2)",
                            }}
                          >
                            {formData.rememberMe && (
                              <CheckCircle className="w-3.5 h-3.5 text-[#040e28]" />
                            )}
                          </button>
                          <span className="text-xs text-white/40 group-hover:text-white/60 transition-colors select-none">
                            Remember me
                          </span>
                        </label>

                        <button
                          type="button"
                          className="text-xs font-semibold transition-colors hover:underline cursor-pointer"
                          style={{ color: "#fbc2eb" }}
                        >
                          Forgot password?
                        </button>
                      </motion.div>

                      {/* Submit */}
                      <motion.button
                        variants={childFadeVariants}
                        whileHover={{ scale: 1.015 }}
                        whileTap={{ scale: 0.99 }}
                        type="button"
                        onClick={handleEmailLogin}
                        disabled={loading || !!successMessage}
                        className="w-full py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all disabled:opacity-70 mt-2 cursor-pointer"
                        style={{
                          background: successMessage
                            ? "linear-gradient(135deg, #10b981 0%, #059669 100%)"
                            : "linear-gradient(135deg, #e87cc8 0%, #a6c0ee 100%)",
                          color: successMessage ? "#ffffff" : "#040e28",
                          boxShadow: successMessage 
                            ? "0 8px 32px rgba(16,185,129,0.22)" 
                            : "0 8px 32px rgba(251,194,235,0.22)",
                          fontFamily: "'DM Sans', sans-serif",
                        }}
                      >
                        {loading ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin" /> Signing
                            you in…
                          </>
                        ) : successMessage ? (
                          <>
                            <CheckCircle className="h-4 w-4" />
                            <span>Success!</span>
                          </>
                        ) : (
                          <>
                            <span>Sign In to TwinRally</span>{" "}
                            <ArrowRight className="h-4 w-4" />
                          </>
                        )}
                      </motion.button>

                      {/* Divider + social shortcut */}
                      <motion.div variants={childFadeVariants} className="relative pt-1">
                        <div className="absolute inset-0 flex items-center">
                          <div
                            className="w-full mt-1"
                            style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
                          />
                        </div>
                        <div className="relative flex justify-center">
                          <span
                            className="px-3 text-xs text-white/25"
                            style={{ background: "#050f2a" }}
                          >
                            or use social login
                          </span>
                        </div>
                      </motion.div>

                      {/* Quick social row */}
                      <motion.div variants={childFadeVariants} className="grid grid-cols-2 gap-3">
                        {[
                          {
                            id: "google",
                            bg: "#fff",
                            color: "#111",
                            icon: (
                              <svg className="h-4 w-4" viewBox="0 0 24 24">
                               <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                               <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                               <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                               <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                              </svg>
                            ),
                            label: "Google",
                          },
                          {
                            id: "apple",
                            bg: "#000",
                            color: "#fff",
                            icon: <Apple className="h-4 w-4" />,
                            label: "Apple",
                          },
                        ].map(({ id, bg, color, icon, label }) => (
                          <button
                            key={id}
                            onClick={() => handleSocialLogin(id)}
                            disabled={!!socialLoading || !!successMessage}
                            className="flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-semibold transition-all hover:scale-[1.02] disabled:opacity-50 cursor-pointer"
                            style={{ background: bg, color }}
                          >
                            {socialLoading === id ? (
                              <Loader2 className="h-3.5 w-3.5 animate-spin" />
                            ) : (
                              icon
                            )}
                            {label}
                          </button>
                        ))}
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* ── PINNED FOOTER — always visible ── */}
          <div
            className="flex-shrink-0 px-8 py-4 text-center"
            style={{ borderTop: "1px solid rgba(255,255,255,0.07)", zIndex: 20 }}
          >
            <p className="text-xs text-white/35">
              Don't have an account?{" "}
              <button
                disabled={!!successMessage}
                onClick={() => navigate("/signup")}
                className="font-bold transition-colors hover:underline cursor-pointer disabled:opacity-40"
                style={{ color: "#fbc2eb" }}
              >
                Sign up for free
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;