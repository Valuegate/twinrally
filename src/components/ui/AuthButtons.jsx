/**
 * Auth Buttons - TwinRally UI Components
 *
 * Reusable authentication buttons built on shadcn/ui Button foundation.
 * Provides consistent styling and behavior for all auth-related CTAs across the platform.
 *
 * Architecture:
 * - Composition pattern: extends shadcn Button with TwinRally-specific styling
 * - Minimal wrapper approach for better maintainability
 * - Consistent with platform design system (colors, animations, spacing)
 * - Loading states and accessibility handled automatically
 *
 * Usage:
 * import { LoginButton, SignupButton, AuthButtonGroup } from '@/components/ui/AuthButtons';
 *
 * <LoginButton onClick={handleLogin} />
 * <SignupButton loading={isSubmitting} size="lg" />
 * <AuthButtonGroup onLogin={handleLogin} onSignup={handleSignup} />
 *
 * Dependencies:
 * - shadcn/ui Button component
 * - TwinRally CSS variables (--bg, --pink, --blue)
 * - Custom animations from index.css (animate-shimmer, animate-slide-up)
 * - Lucide React icons
 *
 * @author Wasiu - TwinRally Team
 * @version 1.0.0
 */

import React from "react";
import { Button } from "@/components/ui/button";
import {
  LogIn,
  UserPlus,
  Download,
  Loader2,
  ArrowRight,
  Users,
} from "lucide-react";

/**
 * Login Button - Outline style for secondary action
 */
export const LoginButton = ({ children, loading, ...props }) => (
  <Button
    variant="outline"
    className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 hover:scale-105 transition-all duration-300 gap-2"
    disabled={loading}
    {...props}
  >
    {loading ? (
      <Loader2 className="h-4 w-4 animate-spin" />
    ) : (
      <LogIn className="h-4 w-4" />
    )}
    {children || (loading ? "Logging in..." : "Log In")}
  </Button>
);

/**
 * Signup Button - Primary gradient style for main CTA
 */
export const SignupButton = ({ children, loading, ...props }) => (
  <Button
    className="bg-gradient-to-r from-[color:var(--pink)] to-[color:var(--blue)] text-[color:var(--bg)] hover:scale-105 hover:shadow-xl hover:shadow-[color:var(--pink)]/30 transition-all duration-300 animate-shimmer gap-2 font-semibold border-0"
    disabled={loading}
    {...props}
  >
    {loading ? (
      <Loader2 className="h-4 w-4 animate-spin" />
    ) : (
      <UserPlus className="h-4 w-4" />
    )}
    {children || (loading ? "Creating account..." : "Sign Up Free")}
    {!loading && (
      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
    )}
  </Button>
);

/**
 * Download Button - Secondary style for app downloads
 */
export const DownloadButton = ({ children, ...props }) => (
  <Button
    variant="secondary"
    className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 hover:border-[color:var(--pink)]/50 hover:scale-105 transition-all duration-300 gap-2"
    {...props}
  >
    <Download className="h-4 w-4" />
    {children || "Download App"}
  </Button>
);

/**
 * Auth Button Group - Login + Signup together
 */
export const AuthButtonGroup = ({
  onLogin,
  onSignup,
  loading,
  className = "",
  vertical = false,
}) => (
  <div
    className={`flex ${
      vertical ? "flex-col" : "flex-row"
    } gap-4 items-center ${className}`}
  >
    <LoginButton onClick={onLogin} loading={loading} />
    <SignupButton onClick={onSignup} loading={loading} />
  </div>
);

/**
 * Twin Connect CTA - Complete marketing section
 */
export const TwinConnectCTA = ({ onGetStarted, loading, className = "" }) => (
  <div className={`text-center py-16 px-6 animate-slide-up ${className}`}>
    {/* Icon */}
    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[color:var(--pink)]/20 to-[color:var(--blue)]/20 border border-white/10 mb-6 animate-float">
      <Users className="w-8 h-8 text-[color:var(--pink)]" />
    </div>

    {/* Heading */}
    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 bg-gradient-to-r from-white via-[color:var(--pink)] to-[color:var(--blue)] bg-clip-text text-transparent">
      Ready to Connect with Twins Worldwide?
    </h3>

    {/* Description */}
    <p className="text-gray-300 mb-8 max-w-lg mx-auto">
      Join thousands of twins sharing experiences, hosting events, and building
      lifelong connections.
    </p>

    {/* Stats */}
    <div className="flex items-center justify-center gap-6 mb-8 text-sm text-gray-400">
      <span className="flex items-center gap-1">
        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        10,000+ Twins
      </span>
      <span className="flex items-center gap-1">
        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        50+ Countries
      </span>
    </div>

    {/* CTA Button */}
    <SignupButton size="lg" onClick={onGetStarted} loading={loading} />

    {/* Trust line */}
    <p className="text-xs text-gray-500 mt-4">
      Free forever • No credit card required
    </p>
  </div>
);
