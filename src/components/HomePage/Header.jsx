"use client"

import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import {
  Users,
  Compass,
  Calendar,
  MessageCircle,
  LayoutDashboard,
  BookOpen,
  HelpCircle,
  Mail,
  ChevronDown,
  X,
  Menu,
  Download,
  Sparkles,
  Globe,
  Zap,
} from "lucide-react"

const resourceSections = [
  {
    title: "Learn",
    icon: BookOpen,
    items: [
      { label: "Blog & Insights", href: "/blog", icon: Sparkles },
      { label: "Twin Stories", href: "/stories", icon: Globe },
    ],
  },
  {
    title: "Support",
    icon: HelpCircle,
    items: [
      { label: "FAQ", href: "/faq", icon: HelpCircle },
      { label: "Contact Us", href: "/contact", icon: Mail },
    ],
  },
]

const navLinks = [
  { title: "Home", href: "/" },
  { title: "Pricing", href: "/pricing" },
  { title: "About", href: "/about" },
]

const featureHighlights = [
  { icon: Users, label: "Community Hub", href: "/features#community" },
  { icon: Compass, label: "Twin Finder", href: "/features#finder" },
  { icon: Calendar, label: "Events", href: "/features#events" },
  { icon: MessageCircle, label: "Messaging", href: "/features#messaging" },
  { icon: LayoutDashboard, label: "Dashboard", href: "/features#dashboard" },
]

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [featuresOpen, setFeaturesOpen] = useState(false)
  const resourcesRef = useRef(null)
  const featuresRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (resourcesRef.current && !resourcesRef.current.contains(e.target)) {
        setResourcesOpen(false)
      }
      if (featuresRef.current && !featuresRef.current.contains(e.target)) {
        setFeaturesOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [menuOpen])

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=DM+Sans:wght@300;400;500;600&display=swap');

        :root {
          --tr-bg: #040E28;
          --tr-pink: #FBC2EB;
          --tr-blue: #A6C0EE;
          --tr-pink-soft: rgba(251,194,235,0.12);
          --tr-blue-soft: rgba(166,192,238,0.12);
          --tr-border: rgba(255,255,255,0.09);
          --tr-border-hover: rgba(251,194,235,0.35);
          --tr-text: rgba(255,255,255,0.92);
          --tr-muted: rgba(255,255,255,0.5);
        }

        .tr-header {
          font-family: 'DM Sans', sans-serif;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 999;
          transition: background 0.4s ease, box-shadow 0.4s ease, backdrop-filter 0.4s ease;
        }

        .tr-header.scrolled {
          background: rgba(4,14,40,0.88);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow: 0 1px 0 var(--tr-border), 0 8px 32px rgba(0,0,0,0.3);
        }

        .tr-header.top {
          background: transparent;
        }

        /* ─── Inner bar ─── */
        .tr-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 2rem;
          height: 68px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
        }

        /* ─── Logo ─── */
        .tr-logo {
          display: flex;
          align-items: center;
          gap: 0.55rem;
          text-decoration: none;
          flex-shrink: 0;
        }

        .tr-logo-mark {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: linear-gradient(135deg, var(--tr-pink) 0%, var(--tr-blue) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          flex-shrink: 0;
        }

        .tr-logo-mark::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.25) 0%, transparent 60%);
          border-radius: inherit;
        }

        .tr-logo-mark svg {
          width: 20px;
          height: 20px;
          fill: #040E28;
          z-index: 1;
          position: relative;
        }

        .tr-logo-wordmark {
          font-family: 'Nunito', sans-serif;
          font-weight: 900;
          font-size: 1.35rem;
          color: #fff;
          letter-spacing: -0.02em;
          line-height: 1;
        }

        .tr-logo-wordmark span {
          color: var(--tr-pink);
        }

        .tr-logo-pill {
          font-size: 0.55rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          background: var(--tr-pink-soft);
          border: 1px solid rgba(251,194,235,0.3);
          color: var(--tr-pink);
          padding: 2px 6px;
          border-radius: 100px;
          line-height: 1.4;
          margin-top: 2px;
        }

        /* ─── Desktop Nav ─── */
        .tr-nav {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .tr-nav-item {
          position: relative;
        }

        .tr-nav-link {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 0.45rem 0.9rem;
          border-radius: 100px;
          color: var(--tr-muted);
          font-size: 0.875rem;
          font-weight: 500;
          text-decoration: none;
          cursor: pointer;
          transition: color 0.2s, background 0.2s;
          white-space: nowrap;
          background: transparent;
          border: none;
          font-family: inherit;
        }

        .tr-nav-link:hover,
        .tr-nav-link.open {
          color: #fff;
          background: rgba(255,255,255,0.06);
        }

        .tr-nav-link svg {
          width: 14px;
          height: 14px;
          transition: transform 0.25s cubic-bezier(0.34,1.56,0.64,1);
          flex-shrink: 0;
        }

        .tr-nav-link.open svg.chevron {
          transform: rotate(180deg);
        }

        /* ─── Features mega pill ─── */
        .tr-mega {
          position: absolute;
          top: calc(100% + 12px);
          left: 50%;
          transform: translateX(-50%);
          background: rgba(4,14,40,0.97);
          border: 1px solid var(--tr-border);
          border-radius: 16px;
          padding: 1rem;
          min-width: 280px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(251,194,235,0.08);
          opacity: 0;
          visibility: hidden;
          transform: translateX(-50%) translateY(-8px);
          transition: opacity 0.2s, transform 0.25s cubic-bezier(0.34,1.56,0.64,1), visibility 0.2s;
          pointer-events: none;
        }

        .tr-mega.open {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(0);
          pointer-events: all;
        }

        .tr-mega-grid {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .tr-mega-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 0.6rem 0.75rem;
          border-radius: 10px;
          color: var(--tr-muted);
          font-size: 0.82rem;
          font-weight: 500;
          text-decoration: none;
          transition: background 0.15s, color 0.15s;
        }

        .tr-mega-item:hover {
          background: var(--tr-pink-soft);
          color: var(--tr-pink);
        }

        .tr-mega-item-icon {
          width: 28px;
          height: 28px;
          border-radius: 7px;
          background: rgba(255,255,255,0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: background 0.15s;
        }

        .tr-mega-item:hover .tr-mega-item-icon {
          background: rgba(251,194,235,0.15);
        }

        .tr-mega-item svg {
          width: 14px;
          height: 14px;
          color: var(--tr-blue);
          transition: color 0.15s;
        }

        .tr-mega-all {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.55rem 0.75rem;
          border-radius: 10px;
          color: var(--tr-pink);
          font-size: 0.78rem;
          font-weight: 700;
          text-decoration: none;
          letter-spacing: 0.02em;
          border-top: 1px solid var(--tr-border);
          margin-top: 4px;
          padding-top: 0.7rem;
          transition: background 0.15s;
        }

        .tr-mega-all:hover {
          background: var(--tr-pink-soft);
        }

        .tr-mega-item:hover svg {
          color: var(--tr-pink);
        }

        /* ─── Resources dropdown ─── */
        .tr-dropdown {
          position: absolute;
          top: calc(100% + 12px);
          left: 50%;
          transform: translateX(-50%);
          background: rgba(4,14,40,0.97);
          border: 1px solid var(--tr-border);
          border-radius: 16px;
          padding: 1rem;
          min-width: 340px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(166,192,238,0.08);
          opacity: 0;
          visibility: hidden;
          transform: translateX(-50%) translateY(-8px);
          transition: opacity 0.2s, transform 0.25s cubic-bezier(0.34,1.56,0.64,1), visibility 0.2s;
          pointer-events: none;
        }

        .tr-dropdown.open {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(0);
          pointer-events: all;
        }

        .tr-dropdown-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem;
        }

        .tr-dropdown-section-title {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--tr-blue);
          margin-bottom: 0.4rem;
          padding-left: 0.1rem;
        }

        .tr-dropdown-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 0.55rem 0.65rem;
          border-radius: 9px;
          color: rgba(255,255,255,0.7);
          font-size: 0.82rem;
          font-weight: 500;
          text-decoration: none;
          transition: background 0.15s, color 0.15s;
        }

        .tr-dropdown-item:hover {
          background: var(--tr-blue-soft);
          color: var(--tr-blue);
        }

        .tr-dropdown-item svg {
          width: 14px;
          height: 14px;
          flex-shrink: 0;
          opacity: 0.7;
        }

        /* ─── CTA Buttons ─── */
        .tr-cta-group {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-shrink: 0;
        }

        .tr-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 0.45rem 1.1rem;
          border-radius: 100px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.2s cubic-bezier(0.34,1.56,0.64,1);
          white-space: nowrap;
          border: none;
        }

        .tr-btn-ghost {
          background: transparent;
          color: var(--tr-muted);
          border: 1px solid var(--tr-border);
        }

        .tr-btn-ghost:hover {
          color: #fff;
          border-color: rgba(255,255,255,0.25);
          background: rgba(255,255,255,0.06);
        }

        .tr-btn-pink {
          background: var(--tr-pink);
          color: #040E28;
          box-shadow: 0 0 0 0 rgba(251,194,235,0.4);
        }

        .tr-btn-pink:hover {
          transform: scale(1.04);
          box-shadow: 0 4px 20px rgba(251,194,235,0.4);
        }

        .tr-btn-download {
          background: var(--tr-blue-soft);
          color: var(--tr-blue);
          border: 1px solid rgba(166,192,238,0.25);
        }

        .tr-btn-download:hover {
          background: rgba(166,192,238,0.2);
          transform: scale(1.04);
        }

        .tr-btn svg {
          width: 15px;
          height: 15px;
        }

        /* ─── Animated border line ─── */
        .tr-header-line {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg,
            transparent 0%,
            rgba(251,194,235,0.0) 20%,
            rgba(251,194,235,0.5) 50%,
            rgba(166,192,238,0.5) 60%,
            rgba(166,192,238,0.0) 80%,
            transparent 100%
          );
          opacity: 0;
          transition: opacity 0.4s;
        }

        .tr-header.scrolled .tr-header-line {
          opacity: 1;
        }

        /* ─── Hamburger ─── */
        .tr-hamburger {
          display: none;
          background: transparent;
          border: 1px solid var(--tr-border);
          border-radius: 10px;
          padding: 0.45rem;
          cursor: pointer;
          color: #fff;
          transition: background 0.2s, border-color 0.2s;
          align-items: center;
          justify-content: center;
        }

        .tr-hamburger:hover {
          background: rgba(255,255,255,0.07);
          border-color: rgba(255,255,255,0.2);
        }

        .tr-hamburger svg {
          width: 20px;
          height: 20px;
          display: block;
        }

        /* ─── Mobile overlay ─── */
        .tr-mobile-overlay {
          position: fixed;
          inset: 0;
          z-index: 998;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.3s;
        }

        .tr-mobile-overlay.open {
          pointer-events: all;
          opacity: 1;
        }

        .tr-mobile-backdrop {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.6);
          backdrop-filter: blur(4px);
        }

        .tr-mobile-drawer {
          position: relative;
          width: 88%;
          max-width: 360px;
          height: 100%;
          background: #060f2a;
          border-left: 1px solid var(--tr-border);
          display: flex;
          flex-direction: column;
          padding: 1.5rem 1.5rem 2rem;
          overflow-y: auto;
          transform: translateX(100%);
          transition: transform 0.35s cubic-bezier(0.34,1.2,0.64,1);
          box-shadow: -20px 0 60px rgba(0,0,0,0.5);
        }

        .tr-mobile-overlay.open .tr-mobile-drawer {
          transform: translateX(0);
        }

        .tr-mobile-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 2rem;
          padding-top: 4px;
        }

        .tr-mobile-close {
          background: rgba(255,255,255,0.06);
          border: 1px solid var(--tr-border);
          border-radius: 9px;
          color: #fff;
          cursor: pointer;
          padding: 0.4rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s;
        }

        .tr-mobile-close:hover {
          background: rgba(255,255,255,0.12);
        }

        .tr-mobile-close svg {
          width: 18px;
          height: 18px;
        }

        .tr-mobile-links {
          list-style: none;
          margin: 0;
          padding: 0;
          flex: 1;
        }

        .tr-mobile-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.85rem 0;
          border-bottom: 1px solid var(--tr-border);
          color: rgba(255,255,255,0.75);
          font-size: 1rem;
          font-weight: 600;
          text-decoration: none;
          cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          transition: color 0.2s;
        }

        .tr-mobile-link:hover {
          color: var(--tr-pink);
        }

        .tr-mobile-link svg {
          width: 16px;
          height: 16px;
          opacity: 0.4;
        }

        .tr-mobile-section {
          padding-bottom: 0;
        }

        .tr-mobile-section-title {
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--tr-blue);
          padding: 1.25rem 0 0.5rem;
        }

        .tr-mobile-sub-link {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 0.6rem 0;
          color: rgba(255,255,255,0.55);
          font-size: 0.875rem;
          font-weight: 500;
          text-decoration: none;
          transition: color 0.15s;
          font-family: 'DM Sans', sans-serif;
        }

        .tr-mobile-sub-link:hover {
          color: #fff;
        }

        .tr-mobile-sub-link svg {
          width: 14px;
          height: 14px;
          opacity: 0.6;
        }

        .tr-mobile-ctas {
          margin-top: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .tr-mobile-ctas .tr-btn {
          justify-content: center;
          padding: 0.75rem 1rem;
          font-size: 0.9rem;
        }

        /* ─── Accent dot on logo ─── */
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 0.7; }
          70% { transform: scale(1.5); opacity: 0; }
          100% { transform: scale(1); opacity: 0; }
        }

        /* ─── Responsive ─── */
        @media (max-width: 960px) {
          .tr-nav { display: none; }
          .tr-cta-group { display: none; }
          .tr-hamburger { display: flex; }
        }

        @media (max-width: 480px) {
          .tr-inner { padding: 0 1.25rem; }
        }
      `}</style>

      {/* ── Main Header ── */}
      <header className={`tr-header ${scrolled ? "scrolled" : "top"}`}>
        <div className="tr-header-line" />
        <div className="tr-inner">

          {/* Logo */}
          <Link to="/" className="tr-logo">
            <img
              src="/twinrally_lg_06-removebg-preview (1).png"
              alt="TwinRally"
              style={{ height: "60px", width: "auto", display: "block" }}
            />
          </Link>

          {/* Desktop Nav */}
          <ul className="tr-nav">
            {navLinks.map((link) => (
              <li key={link.title} className="tr-nav-item">
                <Link to={link.href} className="tr-nav-link">
                  {link.title}
                </Link>
              </li>
            ))}

            {/* Features dropdown */}
            <li className="tr-nav-item" ref={featuresRef}>
              <button
                className={`tr-nav-link ${featuresOpen ? "open" : ""}`}
                onClick={() => { setFeaturesOpen(!featuresOpen); setResourcesOpen(false); }}
              >
                Features
                <ChevronDown className="chevron" />
              </button>
              <div className={`tr-mega ${featuresOpen ? "open" : ""}`}>
                <div className="tr-mega-grid">
                  {featureHighlights.map(({ icon: Icon, label, href }) => (
                    <Link key={label} to={href} className="tr-mega-item" onClick={() => setFeaturesOpen(false)}>
                      <div className="tr-mega-item-icon">
                        <Icon />
                      </div>
                      {label}
                    </Link>
                  ))}
                  <Link to="/features" className="tr-mega-all" onClick={() => setFeaturesOpen(false)}>
                    View all features
                    <ChevronDown style={{ transform: "rotate(-90deg)", width: 13, height: 13 }} />
                  </Link>
                </div>
              </div>
            </li>

            {/* Resources dropdown */}
            <li className="tr-nav-item" ref={resourcesRef}>
              <button
                className={`tr-nav-link ${resourcesOpen ? "open" : ""}`}
                onClick={() => { setResourcesOpen(!resourcesOpen); setFeaturesOpen(false); }}
              >
                Resources
                <ChevronDown className="chevron" />
              </button>
              <div className={`tr-dropdown ${resourcesOpen ? "open" : ""}`}>
                <div className="tr-dropdown-grid">
                  {resourceSections.map((section) => (
                    <div key={section.title}>
                      <div className="tr-dropdown-section-title">{section.title}</div>
                      {section.items.map(({ label, href, icon: Icon }) => (
                        <Link key={label} to={href} className="tr-dropdown-item" onClick={() => setResourcesOpen(false)}>
                          <Icon />
                          {label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </li>
          </ul>

          {/* Desktop CTAs */}
          <div className="tr-cta-group">
            <Link to="/login" className="tr-btn tr-btn-ghost">Login</Link>
            <Link to="/signup" className="tr-btn tr-btn-pink">
              <Zap />
              Sign up free
            </Link>
            <Link to="/download" className="tr-btn tr-btn-download">
              <Download />
              Download
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="tr-hamburger"
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation menu"
          >
            <Menu />
          </button>
        </div>
      </header>

      {/* ── Mobile Overlay ── */}
      <div
        className={`tr-mobile-overlay ${menuOpen ? "open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className="tr-mobile-backdrop" onClick={() => setMenuOpen(false)} />
        <div className="tr-mobile-drawer">
          <div className="tr-mobile-header">
            <Link to="/" className="tr-logo" onClick={() => setMenuOpen(false)}>
              <img
                src="/twinrally_lg_06-removebg-preview (1).png"
                alt="TwinRally"
                style={{ height: "52px", width: "auto", display: "block" }}
              />
            </Link>
            <button className="tr-mobile-close" onClick={() => setMenuOpen(false)} aria-label="Close menu">
              <X />
            </button>
          </div>

          <ul className="tr-mobile-links">
            {navLinks.map((link) => (
              <li key={link.title}>
                <Link to={link.href} className="tr-mobile-link" onClick={() => setMenuOpen(false)}>
                  {link.title}
                  <ChevronDown style={{ transform: "rotate(-90deg)" }} />
                </Link>
              </li>
            ))}

            {/* Features sub-links */}
            <li className="tr-mobile-section">
              <div className="tr-mobile-section-title">Features</div>
              {featureHighlights.map(({ icon: Icon, label, href }) => (
                <Link key={label} to={href} className="tr-mobile-sub-link" onClick={() => setMenuOpen(false)}>
                  <Icon />
                  {label}
                </Link>
              ))}
            </li>

            {/* Resources sub-links */}
            {resourceSections.map((section) => (
              <li key={section.title} className="tr-mobile-section">
                <div className="tr-mobile-section-title">{section.title}</div>
                {section.items.map(({ label, href, icon: Icon }) => (
                  <Link key={label} to={href} className="tr-mobile-sub-link" onClick={() => setMenuOpen(false)}>
                    <Icon />
                    {label}
                  </Link>
                ))}
              </li>
            ))}
          </ul>

          <div className="tr-mobile-ctas">
            <Link to="/login" className="tr-btn tr-btn-ghost" onClick={() => setMenuOpen(false)}>
              Login
            </Link>
            <Link to="/signup" className="tr-btn tr-btn-pink" onClick={() => setMenuOpen(false)}>
              <Zap />
              Sign up free
            </Link>
            <Link to="/download" className="tr-btn tr-btn-download" onClick={() => setMenuOpen(false)}>
              <Download />
              Download App
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}