/**
 * AppLayout - TwinRally Shared Layout Component
 *
 * Provides consistent layout structure across all pages.
 * Handles common UI elements that appear on every page.
 *
 * Architecture:
 * - DRY principle: Footer appears once, used everywhere
 * - Navbar placeholder: Ready for Precious's navbar integration
 * - Responsive layout: Works on all devices
 * - Consistent spacing: Proper page structure
 *
 * Usage:
 * <AppLayout>
 *   <YourPageContent />
 * </AppLayout>
 *
 * Benefits:
 * - No code duplication across pages
 * - Easy to update site-wide layout changes
 * - Professional SWE structure
 * - Team-friendly: clear layout responsibility
 *
 * @author Wasiu - TwinRally Team
 * @version 1.0.0
 */

import React from "react";
import Footer from "@/components/layout/Footer";

const AppLayout = ({ children, showFooter = true }) => {
  return (
    <div className="min-h-screen bg-[color:var(--bg)] flex flex-col">
      {/* Navbar Placeholder - Ready for Precious's work */}
      {/* TODO: Replace with actual Navbar when Precious builds it */}
      {/* <Navbar /> */}

      {/* Main Content Area */}
      <main className="flex-1">{children}</main>

      {/* Footer - Appears on all pages by default */}
      {showFooter && <Footer />}
    </div>
  );
};

export default AppLayout;
