import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SignupButton } from "@/components/ui/AuthButtons";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  Apple,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  Loader2,
  Users,
  Star,
  Globe,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

/* ─── Animation variants ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -16, transition: { duration: 0.2 } },
};

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

const slideFromRight = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
  exit: { opacity: 0, x: -30, transition: { duration: 0.25 } },
};

const slideFromLeft = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
  exit: { opacity: 0, x: 30, transition: { duration: 0.25 } },
};

/* ─── Tiny helpers ─── */
const ErrorMsg = ({ msg }) =>
  msg ? (
    <motion.p
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center gap-1 text-red-400 text-xs mt-1"
    >
      <AlertCircle className="h-3 w-3 flex-shrink-0" />
      {msg}
    </motion.p>
  ) : null;

function InputField({
  icon: Icon,
  type = "text",
  placeholder,
  value,
  onChange,
  rightSlot,
  error,
  delay = 0,
}) {
  const [focused, setFocused] = useState(false);
  return (
    <motion.div variants={itemVariant} custom={delay}>
      <div className="relative">
        {Icon && (
          <Icon
            className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 pointer-events-none transition-colors duration-200"
            style={{ color: focused ? "#fbc2eb" : "rgba(255,255,255,0.3)" }}
          />
        )}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full py-3.5 rounded-xl text-white placeholder-white/30 text-sm outline-none transition-all duration-200"
          style={{
            paddingLeft: Icon ? "2.75rem" : "1rem",
            paddingRight: rightSlot ? "2.75rem" : "1rem",
            background: focused
              ? "rgba(255,255,255,0.075)"
              : "rgba(255,255,255,0.055)",
            border: `1px solid ${
              error
                ? "rgba(248,113,113,0.5)"
                : focused
                ? "rgba(251,194,235,0.55)"
                : "rgba(255,255,255,0.10)"
            }`,
            boxShadow: focused ? "0 0 0 3px rgba(251,194,235,0.10)" : "none",
          }}
        />
        {rightSlot && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            {rightSlot}
          </div>
        )}
      </div>
      <ErrorMsg msg={error} />
    </motion.div>
  );
}

/* ─── Floating orb on hero panel ─── */
function FloatingOrb({ style, duration = 6, delay = 0 }) {
  return (
    <motion.div
      animate={{ y: [0, -18, 0], rotate: [0, 6, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
      style={{
        position: "absolute",
        borderRadius: "50%",
        filter: "blur(56px)",
        pointerEvents: "none",
        ...style,
      }}
    />
  );
}

/* ─── Left hero panel ─── */
function HeroPanel() {
  const stats = [
    { icon: Users, value: "50K+", label: "Twins Connected" },
    { icon: Globe, value: "120+", label: "Countries" },
    { icon: Star, value: "4.9", label: "App Rating" },
  ];
  return (
    <div
      className="relative hidden lg:flex flex-col justify-between overflow-hidden"
      style={{ width: "48%", flexShrink: 0 }}
    >
      {/* Hero image */}
      <img
        src="/hero1.png"
        alt="Twins celebrating"
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ filter: "brightness(0.50)" }}
      />

      {/* Gradient overlays */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, #040e28 0%, #040e2878 40%, transparent 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, #040e2850 0%, transparent 55%)",
        }}
      />

      {/* Animated orbs */}
      <FloatingOrb
        style={{
          width: 220,
          height: 220,
          background: "#fbc2eb",
          top: "15%",
          left: "-60px",
          opacity: 0.18,
        }}
        duration={7}
      />
      <FloatingOrb
        style={{
          width: 160,
          height: 160,
          background: "#a6c0ee",
          bottom: "25%",
          right: "-40px",
          opacity: 0.18,
        }}
        duration={9}
        delay={2}
      />

      {/* Logo */}
      <motion.div
        className="relative z-10 p-8"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex items-center gap-2.5">
          <motion.div
            className="w-9 h-9 rounded-xl flex items-center justify-center"
            style={{
              background: "rgba(251,194,235,0.15)",
              border: "1px solid rgba(251,194,235,0.3)",
            }}
            whileHover={{ scale: 1.08, rotate: 4 }}
          >
            <img
              src="/twinrally_icon-removebg-preview (1).png"
              alt="TwinRally"
              className="w-5 h-5"
            />
          </motion.div>
          <span
            className="font-bold text-white text-lg tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            TwinRally
          </span>
        </div>
      </motion.div>

      {/* Bottom content */}
      <motion.div
        className="relative z-10 p-8 pb-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.p
          className="text-xs font-semibold uppercase tracking-widest mb-3"
          style={{ color: "#fbc2eb" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Global Twins Community
        </motion.p>

        <h2
          className="text-white text-3xl xl:text-4xl font-black leading-[1.1] mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          The World's
          <br />
          <em
            className="not-italic"
            style={{
              background: "linear-gradient(90deg, #fbc2eb, #a6c0ee)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Twin Community
          </em>
        </h2>

        <p className="text-white/55 text-sm leading-relaxed mb-7 max-w-xs">
          Find your people, share your stories, and celebrate the bond the world
          doesn't quite understand.
        </p>

        {/* Stat chips */}
        <div className="flex gap-5">
          {stats.map(({ icon: Icon, value, label }, i) => (
            <motion.div
              key={label}
              className="flex flex-col"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
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
      </motion.div>
    </div>
  );
}

/* ─── Social button ─── */
function SocialBtn({ id, label, bg, color, icon, loading, onClick }) {
  return (
    <motion.button
      variants={itemVariant}
      onClick={() => onClick(id)}
      whileHover={{ scale: 1.018, y: -1 }}
      whileTap={{ scale: 0.975 }}
      className="w-full flex items-center gap-3 px-5 py-4 rounded-xl font-semibold text-sm transition-colors duration-150"
      style={{ background: bg, color }}
    >
      {loading === id ? <Loader2 className="h-4 w-4 animate-spin" /> : icon}
      <span>{label}</span>
    </motion.button>
  );
}

/* ═══════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════ */
const SignUpPage = () => {
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

  const handleInputChange = (field, value) => {
    setFormData((p) => ({ ...p, [field]: value }));
    if (errors[field]) setErrors((p) => ({ ...p, [field]: "" }));
  };

  const validateForm = () => {
    const e = {};
    if (!formData.firstName.trim()) e.firstName = "Required";
    if (!formData.lastName.trim()) e.lastName = "Required";
    if (!formData.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      e.email = "Invalid email";
    if (!formData.password) e.password = "Required";
    else if (formData.password.length < 8) e.password = "Min. 8 characters";
    if (formData.password !== formData.confirmPassword)
      e.confirmPassword = "Passwords don't match";
    if (formData.isTwin === null) e.isTwin = "Please select one";
    if (formData.isTwin && !formData.twinName.trim())
      e.twinName = "Twin's name required";
    if (!formData.agreeToTerms) e.agreeToTerms = "Required to continue";
    return e;
  };

  const handleSocialLogin = async (id) => {
    setSocialLoading(id);
    await new Promise((r) => setTimeout(r, 1200));
    setSocialLoading("");
  };

  const handleEmailSignup = async () => {
    const errs = validateForm();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    
    setLoading(true);
    
    try {
      // 1. Your simulated network delay
      await new Promise((r) => setTimeout(r, 1400));
      
      console.log("Form successfully validated and submitted!", formData);

      // ✅ 2. Route directly to the dashboard using the local navigate hook!
      navigate("/dashboard");

    } catch (error) {
      console.error("Signup error:", error);
    } finally {
      setLoading(false);
    }
  };

  const EyeBtn = ({ show, onToggle }) => (
    <motion.button
      type="button"
      onClick={onToggle}
      whileTap={{ scale: 0.85 }}
      className="text-white/30 hover:text-white/70 transition-colors"
    >
      {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
    </motion.button>
  );

  const googleIcon = (
    <svg className="h-4 w-4 flex-shrink-0" viewBox="0 0 24 24">
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
  );

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
        {/* LEFT */}
        <HeroPanel />

        {/* RIGHT */}
        <motion.div
          className="flex-1 flex flex-col min-h-0 overflow-hidden"
          style={{
            background: "linear-gradient(160deg, #060f2e 0%, #040e28 100%)",
          }}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Top bar */}
          <motion.div
            className="flex-shrink-0 flex items-center justify-between px-8 py-5"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <motion.button
              onClick={() => navigate("/")}
              className="flex items-center gap-1.5 text-white/40 hover:text-white text-sm transition-colors"
              whileHover={{ x: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              ← Home
            </motion.button>
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
          </motion.div>

          {/* Scrollable body */}
          <div className="flex-1 overflow-y-auto">
            <div className="min-h-full flex flex-col justify-center px-8 py-8 max-w-md mx-auto w-full">
              <AnimatePresence mode="wait">
                {!showEmailForm ? (
                  /* ── Screen 1: social ── */
                  <motion.div
                    key="social"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="show"
                    exit={slideFromLeft.exit}
                  >
                    <motion.div variants={itemVariant} className="mb-8">
                      <h1
                        className="text-white text-2xl font-black mb-1.5"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        Join TwinRally
                      </h1>
                      <p className="text-white/40 text-sm">
                        Connect with twins worldwide in seconds.
                      </p>
                    </motion.div>

                    <div className="space-y-3 mb-6">
                      <SocialBtn
                        id="google"
                        label="Continue with Google"
                        bg="#fff"
                        color="#111"
                        icon={googleIcon}
                        loading={socialLoading}
                        onClick={handleSocialLogin}
                      />
                      <SocialBtn
                        id="apple"
                        label="Continue with Apple"
                        bg="#000"
                        color="#fff"
                        icon={<Apple className="h-4 w-4 flex-shrink-0" />}
                        loading={socialLoading}
                        onClick={handleSocialLogin}
                      />
                    </div>

                    <motion.div
                      variants={itemVariant}
                      className="relative my-5"
                    >
                      <div className="absolute inset-0 flex items-center">
                        <div
                          className="w-full"
                          style={{
                            borderTop: "1px solid rgba(255,255,255,0.09)",
                          }}
                        />
                      </div>
                      <div className="relative flex justify-center">
                        <span
                          className="px-4 text-xs text-white/30 uppercase tracking-widest"
                          style={{ background: "#050f2a" }}
                        >
                          or
                        </span>
                      </div>
                    </motion.div>

                    <motion.button
                      variants={itemVariant}
                      onClick={() => setShowEmailForm(true)}
                      className="w-full flex items-center gap-3 px-5 py-3.5 rounded-xl text-sm font-semibold text-white"
                      style={{
                        border: "1px solid rgba(255,255,255,0.14)",
                        background: "rgba(255,255,255,0.04)",
                      }}
                      whileHover={{
                        scale: 1.015,
                        background: "rgba(255,255,255,0.07)",
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Mail className="h-4 w-4 flex-shrink-0 text-white/50" />
                      <span>Continue with Email</span>
                      <motion.span
                        className="ml-auto"
                        animate={{ x: [0, 4, 0] }}
                        transition={{
                          duration: 1.8,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <ArrowRight className="h-4 w-4 text-white/30" />
                      </motion.span>
                    </motion.button>
                  </motion.div>
                ) : (
                  /* ── Screen 2: email form ── */
                  <motion.div
                    key="emailform"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="show"
                    exit={slideFromRight.exit}
                  >
                    <motion.button
                      variants={itemVariant}
                      onClick={() => setShowEmailForm(false)}
                      className="text-white/35 hover:text-white text-xs mb-7 flex items-center gap-1 transition-colors"
                      whileHover={{ x: -3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      ← Back
                    </motion.button>

                    <motion.div variants={itemVariant} className="mb-7">
                      <h1
                        className="text-white text-2xl font-black mb-1"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        Create your account
                      </h1>
                      <p className="text-white/40 text-sm">
                        Your twin journey starts here.
                      </p>
                    </motion.div>

                    <motion.div
                      variants={staggerContainer}
                      className="space-y-4"
                    >
                      {/* Name row */}
                      <motion.div
                        variants={itemVariant}
                        className="grid grid-cols-2 gap-3"
                      >
                        <InputField
                          placeholder="First name"
                          value={formData.firstName}
                          onChange={(e) =>
                            handleInputChange("firstName", e.target.value)
                          }
                          error={errors.firstName}
                        />
                        <InputField
                          placeholder="Last name"
                          value={formData.lastName}
                          onChange={(e) =>
                            handleInputChange("lastName", e.target.value)
                          }
                          error={errors.lastName}
                        />
                      </motion.div>

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

                      {/* Passwords row */}
                      <motion.div
                        variants={itemVariant}
                        className="grid grid-cols-2 gap-3"
                      >
                        <InputField
                          icon={Lock}
                          type={showPassword ? "text" : "password"}
                          placeholder="Password"
                          value={formData.password}
                          onChange={(e) =>
                            handleInputChange("password", e.target.value)
                          }
                          error={errors.password}
                          rightSlot={
                            <EyeBtn
                              show={showPassword}
                              onToggle={() => setShowPassword(!showPassword)}
                            />
                          }
                        />
                        <InputField
                          icon={Lock}
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="Confirm"
                          value={formData.confirmPassword}
                          onChange={(e) =>
                            handleInputChange("confirmPassword", e.target.value)
                          }
                          error={errors.confirmPassword}
                          rightSlot={
                            <EyeBtn
                              show={showConfirmPassword}
                              onToggle={() =>
                                setShowConfirmPassword(!showConfirmPassword)
                              }
                            />
                          }
                        />
                      </motion.div>

                      {/* Twin info */}
                      <motion.div
                        variants={itemVariant}
                        className="rounded-2xl p-5 space-y-4"
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(251,194,235,0.15)",
                        }}
                        whileHover={{ borderColor: "rgba(251,194,235,0.28)" }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="flex items-center gap-2">
                          <motion.div
                            className="w-1 h-4 rounded-full"
                            style={{
                              background:
                                "linear-gradient(to bottom, #fbc2eb, #a6c0ee)",
                            }}
                            animate={{ scaleY: [1, 1.2, 1] }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          />
                          <span
                            className="text-xs font-bold uppercase tracking-widest"
                            style={{ color: "#fbc2eb" }}
                          >
                            Twin Information
                          </span>
                        </div>

                        <div>
                          <p className="text-white/50 text-xs mb-3">
                            Are you a twin?
                          </p>
                          <div className="grid grid-cols-2 gap-2.5">
                            {[
                              { val: true, label: "Yes, I'm a twin!" },
                              { val: false, label: "No, I love twins!" },
                            ].map(({ val, label }) => (
                              <motion.button
                                key={String(val)}
                                type="button"
                                onClick={() => handleInputChange("isTwin", val)}
                                className="py-2.5 px-3 rounded-xl text-xs font-semibold transition-colors duration-200"
                                style={
                                  formData.isTwin === val
                                    ? {
                                        background: val
                                          ? "linear-gradient(135deg,#fbc2eb,#a6c0ee)"
                                          : "rgba(255,255,255,0.15)",
                                        color: val ? "#040e28" : "#fff",
                                        border: "1px solid transparent",
                                      }
                                    : {
                                        background: "transparent",
                                        color: "rgba(255,255,255,0.4)",
                                        border:
                                          "1px solid rgba(255,255,255,0.12)",
                                      }
                                }
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.96 }}
                              >
                                {label}
                              </motion.button>
                            ))}
                          </div>
                          <ErrorMsg msg={errors.isTwin} />
                        </div>

                        <AnimatePresence>
                          {formData.isTwin && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{
                                duration: 0.1,
                                ease: [0.22, 1, 0.36, 1],
                              }}
                              style={{ overflow: "hidden" }}
                            >
                              <InputField
                                icon={User}
                                placeholder="Your twin's name"
                                value={formData.twinName}
                                onChange={(e) =>
                                  handleInputChange("twinName", e.target.value)
                                }
                                error={errors.twinName}
                              />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>

                      {/* Terms */}
                      <motion.label
                        variants={itemVariant}
                        className="flex items-start gap-3 cursor-pointer group"
                      >
                        <motion.button
                          type="button"
                          onClick={() =>
                            handleInputChange(
                              "agreeToTerms",
                              !formData.agreeToTerms
                            )
                          }
                          className="flex-shrink-0 w-5 h-5 rounded-md flex items-center justify-center transition-colors duration-200 mt-0.5"
                          style={{
                            background: formData.agreeToTerms
                              ? "linear-gradient(135deg,#fbc2eb,#a6c0ee)"
                              : "transparent",
                            border: formData.agreeToTerms
                              ? "none"
                              : "1.5px solid rgba(255,255,255,0.2)",
                          }}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <AnimatePresence>
                            {formData.agreeToTerms && (
                              <motion.div
                                initial={{ scale: 0, rotate: -20 }}
                                animate={{ scale: 1, rotate: 0 }}
                                exit={{ scale: 0 }}
                                transition={{ duration: 0.2 }}
                              >
                                <CheckCircle className="w-3.5 h-3.5 text-[#040e28]" />
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.button>
                        <span className="text-xs text-white/40 leading-relaxed group-hover:text-white/55 transition-colors">
                          I agree to TwinRally's{" "}
                          <a
                            href="/terms"
                            className="hover:underline"
                            style={{ color: "#fbc2eb" }}
                          >
                            Terms of Service
                          </a>{" "}
                          and{" "}
                          <a
                            href="/privacy"
                            className="hover:underline"
                            style={{ color: "#fbc2eb" }}
                          >
                            Privacy Policy
                          </a>
                        </span>
                      </motion.label>
                      <ErrorMsg msg={errors.agreeToTerms} />

                      {/* Submit */}
                      <motion.div variants={itemVariant}>
                        <motion.button
                          type="button"
                          onClick={handleEmailSignup}
                          disabled={loading}
                          className="w-full py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 mt-1"
                          style={{
                            background:
                              "linear-gradient(135deg, #e87cc8 0%, #a6c0ee 100%)",
                            color: "#040e28",
                            boxShadow: "0 8px 32px rgba(251,194,235,0.25)",
                            fontFamily: "'DM Sans', sans-serif",
                            opacity: loading ? 0.75 : 1,
                          }}
                          whileHover={{
                            scale: 1.018,
                            boxShadow: "0 12px 40px rgba(251,194,235,0.38)",
                          }}
                          whileTap={{ scale: 0.975 }}
                        >
                          {loading ? (
                            <>
                              <Loader2 className="h-4 w-4 animate-spin" />{" "}
                              Creating account…
                            </>
                          ) : (
                            <>
                              <span>Create My TwinRally Account</span>{" "}
                              <ArrowRight className="h-4 w-4" />
                            </>
                          )}
                        </motion.button>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Pinned footer */}
          <motion.div
            className="flex-shrink-0 px-8 py-4 text-center"
            style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-xs text-white/35">
              Already have an account?{" "}
              <motion.button
                onClick={() => navigate("/login")}
                className="font-bold hover:underline"
                style={{ color: "#fbc2eb" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                Sign in here
              </motion.button>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default SignUpPage;
