import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Bell, Calendar, Clock, Eye, Heart, MapPin,
  MessageCircle, Users, Plus, ChevronRight,
  Sparkles, Gift, Share2, Award, Zap, Star,
  TrendingUp, Globe, Music, Camera, Play,
  CheckCircle, ArrowUpRight, Flame, Crown
} from 'lucide-react'

/* ─────────────────────────────────────────────
   ANIMATION VARIANTS
───────────────────────────────────────────── */
const containerVariants = {
  initial: {},
  animate: { transition: { staggerChildren: 0.07 } },
}

const slideUp = {
  initial: { opacity: 0, y: 24 },
  animate: {
    opacity: 1, y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] }
  },
}

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.6 } },
}

const scaleIn = {
  initial: { opacity: 0, scale: 0.92 },
  animate: {
    opacity: 1, scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  },
}

/* ─────────────────────────────────────────────
   MOCK DATA
───────────────────────────────────────────── */
const quickStats = [
  { label: 'Twin Connections', value: '248', change: '+12 this week', trend: 'up', icon: Users },
  { label: 'Circle Messages', value: '36', change: '5 active threads', trend: 'up', icon: MessageCircle },
  { label: 'Bonds Celebrated', value: '14', change: '+2 milestones', trend: 'up', icon: Heart },
]

const upcomingEvents = [
  {
    id: 1,
    title: 'Annual Twin Birthday Festival',
    date: 'Sat, Jun 14 · 3:00 PM',
    location: 'Ikeja, Lagos',
    attendees: 142,
    tag: 'Festival',
    img: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?w=600&fit=crop&q=80',
  },
  {
    id: 2,
    title: 'Global Twins Story Gala',
    date: 'Sun, Jul 20 · 10:00 AM',
    location: 'Virtual · Worldwide',
    attendees: 3800,
    tag: 'Virtual',
    img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&fit=crop&q=80',
  },
  {
    id: 3,
    title: 'Twin Co-Milestones Showcase',
    date: 'Sat, Aug 2 · 5:00 PM',
    location: 'Abuja, Nigeria',
    attendees: 220,
    tag: 'Meetup',
    img: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=600&fit=crop&q=80',
  },
]

const reminders = [
  { id: 1, title: 'Send Twin Birthday wish to Taiwo & Kehinde', due: 'Tomorrow, 3:00 PM', icon: Gift, urgent: false },
  { id: 2, title: 'Reply to Tunde & Taiwo chat invite', due: 'Overdue · 2 days', icon: MessageCircle, urgent: true },
  { id: 3, title: 'Share new Twin Bond Story update', due: 'Due today', icon: Share2, urgent: false },
]

const activityFeed = [
  { id: 1, avatar: 'https://i.pravatar.cc/40?img=12', user: 'Amara & Adaeze', action: 'joined Nigerian Twins Circle', time: '2m ago', type: 'join' },
  { id: 2, avatar: 'https://i.pravatar.cc/40?img=22', user: 'Kwame & Kofi', action: 'posted Twin Birthday pictures', time: '18m ago', type: 'post' },
  { id: 3, avatar: 'https://i.pravatar.cc/40?img=33', user: 'Sara & Lara', action: 'celebrated a twin bond milestone', time: '1h ago', type: 'milestone' },
  { id: 4, avatar: 'https://i.pravatar.cc/40?img=44', user: 'Tobi & Femi', action: 'RSVPed to Lagos Twin Fest', time: '2h ago', type: 'event' },
]

const STAT_META = [
  { accent: '#fbc2eb', bg: 'rgba(251,194,235,0.12)', glow: '#fbc2eb', icon: Users },
  { accent: '#a6c0ee', bg: 'rgba(166,192,238,0.12)', glow: '#a6c0ee', icon: MessageCircle },
  { accent: '#fbc2eb', bg: 'rgba(251,194,235,0.12)', glow: '#fbc2eb', icon: Heart },
]

const FEED_TYPE_META = {
  join: { icon: Users, color: '#a6c0ee', bg: 'rgba(166,192,238,0.15)' },
  post: { icon: Camera, color: '#fbc2eb', bg: 'rgba(251,194,235,0.15)' },
  milestone: { icon: Star, color: '#ffd700', bg: 'rgba(255,215,0,0.12)' },
  event: { icon: Calendar, color: '#a6c0ee', bg: 'rgba(166,192,238,0.15)' },
}

/* ─────────────────────────────────────────────
   FLOATING ORBS BACKGROUND
───────────────────────────────────────────── */
const FloatingOrbs = () => (
  <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
    {[
      { w: 320, h: 320, top: '-80px', left: '-60px', color: 'rgba(251,194,235,0.07)', dur: 8 },
      { w: 260, h: 260, top: '40%', right: '-80px', color: 'rgba(166,192,238,0.08)', dur: 11 },
      { w: 180, h: 180, bottom: '10%', left: '30%', color: 'rgba(251,194,235,0.05)', dur: 9 },
    ].map((orb, i) => (
      <motion.div
        key={i}
        style={{
          position: 'absolute',
          width: orb.w, height: orb.h,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${orb.color}, transparent 70%)`,
          top: orb.top, left: orb.left,
          right: orb.right, bottom: orb.bottom,
        }}
        animate={{ scale: [1, 1.12, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: orb.dur, repeat: Infinity, ease: 'easeInOut' }}
      />
    ))}
  </div>
)

/* ─────────────────────────────────────────────
   PULSE DOT
───────────────────────────────────────────── */
const PulseDot = ({ color = '#fbc2eb' }) => (
  <span style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 10, height: 10 }}>
    <motion.span
      style={{
        position: 'absolute', width: 10, height: 10, borderRadius: '50%',
        background: color, opacity: 0.3,
      }}
      animate={{ scale: [1, 2, 1], opacity: [0.3, 0, 0.3] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <span style={{ width: 7, height: 7, borderRadius: '50%', background: color, display: 'block' }} />
  </span>
)

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
export const FeaturesForDashboard = () => {
  const [activeEvent, setActiveEvent] = useState(null)
  const [hoveredStat, setHoveredStat] = useState(null)
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 60000)
    return () => clearInterval(timer)
  }, [])

  const greeting = () => {
    const h = time.getHours()
    if (h < 12) return 'Good Morning'
    if (h < 17) return 'Good Afternoon'
    return 'Good Evening'
  }

  const user = {
    name: 'Faith',
    twin: 'Hope',
    avatar: 'https://i.pravatar.cc/80?img=5',
    twinAvatar: 'https://i.pravatar.cc/80?img=9',
    level: 'Twin Ambassador',
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700;9..40,800&display=swap');

        :root {
          --bg:        #040e29;
          --pink:      #fbc2eb;
          --blue:      #a6c0ee;
          --surface:   rgba(255,255,255,0.04);
          --surface2:  rgba(255,255,255,0.07);
          --surface3:  rgba(255,255,255,0.10);
          --border:    rgba(255,255,255,0.08);
          --border2:   rgba(251,194,235,0.18);
          --text:      #f0ecff;
          --text-sub:  rgba(240,236,255,0.55);
          --text-muted:rgba(240,236,255,0.35);
          --radius-lg: 20px;
          --radius-md: 14px;
          --radius-sm: 10px;
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .tr-dashboard {
          font-family: 'DM Sans', sans-serif;
          background: var(--bg);
          min-height: 100vh;
          color: var(--text);
          padding: 2rem;
          position: relative;
          z-index: 1;
        }

        /* ── GRID LAYOUT ── */
        .tr-grid {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          max-width: 1280px;
          margin: 0 auto;
        }

        /* ── WELCOME BANNER ── */
        .tr-banner {
          border-radius: var(--radius-lg);
          overflow: hidden;
          position: relative;
          border: 1px solid var(--border2);
          background: linear-gradient(135deg, rgba(251,194,235,0.06) 0%, rgba(166,192,238,0.04) 100%);
        }

        .tr-banner-bg {
          position: absolute; inset: 0;
          background: 
            radial-gradient(ellipse 60% 80% at 90% 50%, rgba(166,192,238,0.12) 0%, transparent 70%),
            radial-gradient(ellipse 50% 70% at 5% 30%, rgba(251,194,235,0.10) 0%, transparent 70%);
          pointer-events: none;
        }

        .tr-banner-grid-lines {
          position: absolute; inset: 0; pointer-events: none;
          background-image:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 40px 40px;
        }

        .tr-banner-inner {
          position: relative; z-index: 2;
          padding: 2rem 2.25rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .tr-banner-left { display: flex; align-items: center; gap: 1.5rem; }

        .tr-avatar-group {
          position: relative;
          width: 80px; height: 56px;
          flex-shrink: 0;
        }

        .tr-avatar {
          width: 52px; height: 52px; border-radius: 50%;
          object-fit: cover;
          border: 2px solid rgba(251,194,235,0.6);
          box-shadow: 0 0 0 3px rgba(251,194,235,0.1), 0 6px 20px rgba(0,0,0,0.4);
          position: absolute;
        }

        .tr-avatar-main { left: 0; top: 0; z-index: 2; }
        .tr-avatar-twin {
          left: 28px; top: 4px; z-index: 1;
          border-color: rgba(166,192,238,0.6);
          box-shadow: 0 0 0 3px rgba(166,192,238,0.1), 0 6px 20px rgba(0,0,0,0.4);
        }

        .tr-banner-text {}

        .tr-banner-eyebrow {
          font-size: 0.68rem; font-weight: 700;
          letter-spacing: 0.12em; text-transform: uppercase;
          background: linear-gradient(90deg, var(--pink), var(--blue));
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          margin-bottom: 4px;
          display: flex; align-items: center; gap: 6px;
        }

        .tr-banner-name {
          font-size: 1.9rem; font-weight: 800;
          line-height: 1.15;
          background: linear-gradient(135deg, #ffffff 0%, rgba(166,192,238,0.85) 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          letter-spacing: -0.02em;
        }

        .tr-banner-sub {
          font-size: 0.82rem; color: var(--text-sub);
          margin-top: 5px; font-weight: 400;
        }

        .tr-banner-right {
          display: flex; align-items: center; gap: 10px; flex-wrap: wrap;
        }

        .tr-chip {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 7px 16px; border-radius: 100px;
          font-size: 0.75rem; font-weight: 600;
          border: 1px solid;
          white-space: nowrap;
          cursor: default;
          transition: all 0.2s;
        }

        .tr-chip-pink {
          background: rgba(251,194,235,0.10);
          border-color: rgba(251,194,235,0.25);
          color: var(--pink);
        }

        .tr-chip-blue {
          background: rgba(166,192,238,0.10);
          border-color: rgba(166,192,238,0.25);
          color: var(--blue);
        }

        .tr-chip-gold {
          background: rgba(255,215,0,0.08);
          border-color: rgba(255,215,0,0.2);
          color: #ffd700;
        }

        /* ── STATS ROW ── */
        .tr-stats-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }

        .tr-stat-card {
          border-radius: var(--radius-lg);
          border: 1px solid var(--border);
          background: var(--surface);
          padding: 1.5rem;
          position: relative;
          overflow: hidden;
          cursor: default;
          transition: border-color 0.3s, background 0.3s, transform 0.25s;
        }

        .tr-stat-card:hover {
          border-color: rgba(251,194,235,0.25);
          background: var(--surface2);
          transform: translateY(-3px);
        }

        .tr-stat-shine {
          position: absolute; top: 0; left: -100%;
          width: 60%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.04), transparent);
          pointer-events: none;
          transition: left 0.6s ease;
        }

        .tr-stat-card:hover .tr-stat-shine { left: 150%; }

        .tr-stat-accent-line {
          position: absolute; top: 0; left: 0; right: 0;
          height: 2px;
          border-radius: 2px 2px 0 0;
        }

        .tr-stat-glow {
          position: absolute; top: -40px; right: -40px;
          width: 120px; height: 120px; border-radius: 50%;
          filter: blur(40px); opacity: 0.12; pointer-events: none;
        }

        .tr-stat-header { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 1rem; }

        .tr-stat-label {
          font-size: 0.72rem; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.08em;
          color: var(--text-muted);
        }

        .tr-stat-icon {
          width: 36px; height: 36px; border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }

        .tr-stat-value {
          font-size: 2.4rem; font-weight: 800;
          line-height: 1; letter-spacing: -0.03em;
          margin-bottom: 6px;
        }

        .tr-stat-change {
          font-size: 0.75rem; font-weight: 600;
          display: flex; align-items: center; gap: 4px;
        }

        /* ── SECTION HEADER ── */
        .tr-section-header {
          display: flex; align-items: center; justify-content: space-between;
          margin-bottom: 1.1rem;
        }

        .tr-section-title {
          font-size: 1.15rem; font-weight: 700;
          color: var(--text);
          display: flex; align-items: center; gap: 8px;
          letter-spacing: -0.01em;
        }

        .tr-section-title-icon {
          width: 28px; height: 28px; border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
        }

        .tr-see-all {
          font-size: 0.78rem; font-weight: 600;
          color: var(--text-muted);
          background: none; border: none; cursor: pointer;
          display: flex; align-items: center; gap: 3px;
          transition: color 0.2s; padding: 0;
        }
        .tr-see-all:hover { color: var(--pink); }

        /* ── EVENT CARDS ── */
        .tr-events-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }

        .tr-event-card {
          border-radius: var(--radius-lg);
          border: 1px solid var(--border);
          background: var(--surface);
          overflow: hidden;
          cursor: pointer;
          position: relative;
          transition: border-color 0.3s;
        }

        .tr-event-img-wrap {
          height: 120px; position: relative; overflow: hidden;
        }

        .tr-event-img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 0.5s ease;
        }

        .tr-event-card:hover .tr-event-img { transform: scale(1.06); }

        .tr-event-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(180deg, transparent 30%, rgba(4,14,41,0.85) 100%);
        }

        .tr-event-tag {
          position: absolute; top: 10px; left: 10px;
          padding: 3px 10px; border-radius: 20px;
          font-size: 0.63rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em;
          border: 1px solid;
          backdrop-filter: blur(6px);
        }

        .tr-event-tag-festival { background: rgba(251,194,235,0.2); border-color: rgba(251,194,235,0.4); color: var(--pink); }
        .tr-event-tag-virtual  { background: rgba(166,192,238,0.2); border-color: rgba(166,192,238,0.4); color: var(--blue); }
        .tr-event-tag-meetup   { background: rgba(255,215,0,0.15); border-color: rgba(255,215,0,0.3); color: #ffd700; }

        .tr-event-body { padding: 1.1rem; }

        .tr-event-title {
          font-size: 0.9rem; font-weight: 700;
          color: var(--text); margin-bottom: 0.55rem; line-height: 1.35;
        }

        .tr-event-meta {
          display: flex; align-items: center; gap: 5px;
          font-size: 0.73rem; color: var(--text-sub);
          margin-bottom: 0.3rem; font-weight: 400;
        }

        .tr-event-footer {
          display: flex; align-items: center; justify-content: space-between;
          margin-top: 0.9rem; padding-top: 0.75rem;
          border-top: 1px solid var(--border);
        }

        .tr-attendees {
          display: flex; align-items: center; gap: 5px;
        }

        .tr-attendee-avatars { display: flex; }
        .tr-attendee-av {
          width: 20px; height: 20px; border-radius: 50%;
          border: 1.5px solid var(--bg);
          margin-left: -5px; overflow: hidden;
        }
        .tr-attendee-av:first-child { margin-left: 0; }
        .tr-attendee-av img { width: 100%; height: 100%; object-fit: cover; }
        .tr-attendee-count { font-size: 0.7rem; color: var(--text-muted); font-weight: 500; }

        .tr-rsvp-btn {
          padding: 6px 16px; border-radius: 100px; border: none;
          background: linear-gradient(135deg, var(--pink) 0%, var(--blue) 100%);
          color: #040e29; font-weight: 700; font-size: 0.72rem;
          cursor: pointer; transition: all 0.2s;
          letter-spacing: 0.03em;
        }
        .tr-rsvp-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 18px rgba(251,194,235,0.35);
        }

        /* ── BOTTOM TWO COL ── */
        .tr-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }

        .tr-panel {
          border-radius: var(--radius-lg);
          border: 1px solid var(--border);
          background: var(--surface);
          padding: 1.35rem;
        }

        /* ── REMINDER ITEMS ── */
        .tr-reminder-item {
          display: flex; align-items: center; gap: 10px;
          padding: 0.8rem 0.9rem;
          background: var(--surface2);
          border-radius: var(--radius-md);
          border: 1px solid var(--border);
          margin-bottom: 0.55rem;
          transition: border-color 0.2s, background 0.2s;
          cursor: pointer;
        }
        .tr-reminder-item:last-child { margin-bottom: 0; }
        .tr-reminder-item:hover { border-color: var(--border2); background: var(--surface3); }
        .tr-reminder-item.urgent { border-color: rgba(251,194,235,0.2); }

        .tr-reminder-icon {
          width: 34px; height: 34px; border-radius: 9px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }

        .tr-reminder-body { flex: 1; min-width: 0; }
        .tr-reminder-title { font-size: 0.8rem; font-weight: 600; color: var(--text); line-height: 1.3; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .tr-reminder-due { font-size: 0.68rem; color: var(--text-muted); margin-top: 2px; }
        .tr-reminder-due.overdue { color: #ff7b7b; }

        .tr-view-btn {
          padding: 4px 11px; border-radius: 8px;
          border: 1px solid var(--border);
          background: transparent;
          color: var(--text-sub); font-size: 0.68rem; font-weight: 600;
          cursor: pointer; flex-shrink: 0; transition: all 0.2s;
        }
        .tr-view-btn:hover { border-color: var(--pink); color: var(--pink); }

        /* ── ACTIVITY FEED ── */
        .tr-feed-item {
          display: flex; align-items: center; gap: 10px;
          padding: 0.8rem 0.9rem;
          background: var(--surface2);
          border-radius: var(--radius-md);
          border: 1px solid var(--border);
          margin-bottom: 0.55rem;
          transition: border-color 0.2s, background 0.2s;
          cursor: pointer;
        }
        .tr-feed-item:last-child { margin-bottom: 0; }
        .tr-feed-item:hover { border-color: rgba(166,192,238,0.2); background: var(--surface3); }

        .tr-feed-avatar { position: relative; flex-shrink: 0; }
        .tr-feed-avatar img { width: 36px; height: 36px; border-radius: 50%; object-fit: cover; border: 1.5px solid rgba(255,255,255,0.1); }
        .tr-feed-type-dot {
          position: absolute; bottom: -1px; right: -1px;
          width: 14px; height: 14px; border-radius: 50%;
          border: 1.5px solid var(--bg);
          display: flex; align-items: center; justify-content: center;
        }

        .tr-feed-body { flex: 1; min-width: 0; }
        .tr-feed-text { font-size: 0.79rem; color: var(--text); line-height: 1.35; }
        .tr-feed-text strong { font-weight: 700; }
        .tr-feed-time { font-size: 0.67rem; color: var(--text-muted); margin-top: 2px; }

        /* ── DIVIDER ── */
        .tr-divider {
          height: 1px;
          background: var(--border);
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 960px) {
          .tr-dashboard { padding: 1.25rem; }
          .tr-events-grid { grid-template-columns: 1fr 1fr; }
          .tr-stats-row { grid-template-columns: 1fr 1fr; }
          .tr-two-col { grid-template-columns: 1fr; }
        }

        @media (max-width: 600px) {
          .tr-events-grid { grid-template-columns: 1fr; }
          .tr-stats-row { grid-template-columns: 1fr; }
          .tr-banner-inner { padding: 1.4rem 1.2rem; }
          .tr-banner-name { font-size: 1.5rem; }
          .tr-banner-right { display: none; }
        }

        /* ── SCROLLBAR ── */
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(251,194,235,0.2); border-radius: 10px; }
      `}</style>

      <FloatingOrbs />

      <div className="tr-dashboard">
        <motion.div
          className="tr-grid"
          variants={containerVariants}
          initial="initial"
          animate="animate"
        >

          {/* ───────────────── WELCOME BANNER ───────────────── */}
          <motion.div variants={scaleIn} className="tr-banner">
            <div className="tr-banner-bg" />
            <div className="tr-banner-grid-lines" />
            <div className="tr-banner-inner">

              <div className="tr-banner-left">
                <div className="tr-avatar-group">
                  <motion.img
                    src={user.avatar}
                    alt={user.name}
                    className="tr-avatar tr-avatar-main"
                    whileHover={{ scale: 1.05 }}
                  />
                  <motion.img
                    src={user.twinAvatar}
                    alt={user.twin}
                    className="tr-avatar tr-avatar-twin"
                    whileHover={{ scale: 1.05 }}
                  />
                </div>

                <div className="tr-banner-text">
                  <div className="tr-banner-eyebrow">
                    <PulseDot color="#fbc2eb" />
                    {greeting()}, twin
                  </div>
                  <h1 className="tr-banner-name">Hi, {user.name}!</h1>
                  <p className="tr-banner-sub">Here's what's happening across your twin connections today.</p>
                </div>
              </div>

              <div className="tr-banner-right">
                <motion.div
                  className="tr-chip tr-chip-gold"
                  whileHover={{ scale: 1.03 }}
                >
                  <Crown size={12} />
                  {user.level}
                </motion.div>
                <motion.div
                  className="tr-chip tr-chip-pink"
                  whileHover={{ scale: 1.03 }}
                >
                  <Sparkles size={12} />
                  3 new milestones
                </motion.div>
                <motion.div
                  className="tr-chip tr-chip-blue"
                  whileHover={{ scale: 1.03 }}
                >
                  <Globe size={12} />
                  248 worldwide twins
                </motion.div>
              </div>

            </div>
          </motion.div>

          {/* ───────────────── QUICK STATS ───────────────── */}
          <motion.div className="tr-stats-row" variants={containerVariants}>
            {quickStats.map((stat, i) => {
              const meta = STAT_META[i]
              const Icon = meta.icon
              const isHovered = hoveredStat === i
              return (
                <motion.div
                  key={i}
                  className="tr-stat-card"
                  variants={slideUp}
                  onHoverStart={() => setHoveredStat(i)}
                  onHoverEnd={() => setHoveredStat(null)}
                  whileHover={{ y: -4 }}
                >
                  <div
                    className="tr-stat-accent-line"
                    style={{
                      background: `linear-gradient(90deg, ${meta.accent}, transparent)`,
                    }}
                  />
                  <div className="tr-stat-glow" style={{ background: meta.glow }} />
                  <div className="tr-stat-shine" />

                  <div className="tr-stat-header">
                    <div className="tr-stat-label">{stat.label}</div>
                    <motion.div
                      className="tr-stat-icon"
                      style={{ background: meta.bg, color: meta.accent }}
                      animate={{ rotate: isHovered ? 8 : 0, scale: isHovered ? 1.1 : 1 }}
                      transition={{ duration: 0.25 }}
                    >
                      <Icon size={16} />
                    </motion.div>
                  </div>

                  <motion.div
                    className="tr-stat-value"
                    style={{ color: meta.accent }}
                    animate={{ scale: isHovered ? 1.04 : 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {stat.value}
                  </motion.div>

                  <div className="tr-stat-change" style={{ color: meta.accent, opacity: 0.7 }}>
                    <TrendingUp size={12} />
                    {stat.change}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* ───────────────── UPCOMING EVENTS ───────────────── */}
          <motion.div variants={slideUp}>
            <div className="tr-section-header">
              <div className="tr-section-title">
                <div
                  className="tr-section-title-icon"
                  style={{ background: 'rgba(166,192,238,0.12)', color: 'var(--blue)' }}
                >
                  <Calendar size={15} />
                </div>
                Upcoming Celebrations
              </div>
              <motion.button className="tr-see-all" whileHover={{ x: 2 }}>
                View all events <ChevronRight size={13} />
              </motion.button>
            </div>

            <motion.div
              className="tr-events-grid"
              variants={containerVariants}
              initial="initial"
              animate="animate"
            >
              {upcomingEvents.map((event, i) => {
                const tagClass = {
                  Festival: 'tr-event-tag-festival',
                  Virtual: 'tr-event-tag-virtual',
                  Meetup: 'tr-event-tag-meetup',
                }[event.tag] || 'tr-event-tag-festival'

                return (
                  <motion.div
                    key={event.id}
                    className="tr-event-card"
                    variants={slideUp}
                    whileHover={{ y: -5, borderColor: 'rgba(251,194,235,0.22)' }}
                    onClick={() => setActiveEvent(event.id === activeEvent ? null : event.id)}
                  >
                    <div className="tr-event-img-wrap">
                      <img src={event.img} alt={event.title} className="tr-event-img" />
                      <div className="tr-event-overlay" />
                      <span className={`tr-event-tag ${tagClass}`}>{event.tag}</span>
                    </div>

                    <div className="tr-event-body">
                      <h4 className="tr-event-title">{event.title}</h4>
                      <div className="tr-event-meta">
                        <Clock size={11} style={{ color: 'var(--blue)', flexShrink: 0 }} />
                        {event.date}
                      </div>
                      <div className="tr-event-meta">
                        <MapPin size={11} style={{ color: 'var(--pink)', flexShrink: 0 }} />
                        {event.location}
                      </div>

                      <div className="tr-event-footer">
                        <div className="tr-attendees">
                          <div className="tr-attendee-avatars">
                            {[12, 22, 33].map((n) => (
                              <div key={n} className="tr-attendee-av">
                                <img src={`https://i.pravatar.cc/20?img=${n}`} alt="" />
                              </div>
                            ))}
                          </div>
                          <span className="tr-attendee-count">+{event.attendees.toLocaleString()}</span>
                        </div>
                        <motion.button
                          className="tr-rsvp-btn"
                          whileHover={{ scale: 1.06 }}
                          whileTap={{ scale: 0.97 }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          RSVP Now
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>

          {/* ───────────────── REMINDERS + ACTIVITY FEED ───────────────── */}
          <motion.div className="tr-two-col" variants={containerVariants}>

            {/* Reminders */}
            <motion.div className="tr-panel" variants={slideUp}>
              <div className="tr-section-header">
                <div className="tr-section-title" style={{ fontSize: '1rem' }}>
                  <div
                    className="tr-section-title-icon"
                    style={{ background: 'rgba(251,194,235,0.12)', color: 'var(--pink)' }}
                  >
                    <Bell size={14} />
                  </div>
                  Reminders
                </div>
                <motion.button className="tr-see-all" whileHover={{ x: 2 }}>
                  <Plus size={11} /> Add new
                </motion.button>
              </div>

              {reminders.map((r, i) => {
                const Icon = r.icon
                const isOverdue = r.due.toLowerCase().includes('overdue')
                return (
                  <motion.div
                    key={r.id}
                    className={`tr-reminder-item ${r.urgent ? 'urgent' : ''}`}
                    variants={slideUp}
                    whileHover={{ x: 2 }}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <div
                      className="tr-reminder-icon"
                      style={{
                        background: r.urgent ? 'rgba(251,194,235,0.12)' : 'rgba(166,192,238,0.10)',
                        color: r.urgent ? 'var(--pink)' : 'var(--blue)',
                      }}
                    >
                      <Icon size={14} />
                    </div>
                    <div className="tr-reminder-body">
                      <div className="tr-reminder-title">{r.title}</div>
                      <div className={`tr-reminder-due ${isOverdue ? 'overdue' : ''}`}>
                        {isOverdue && <Flame size={9} style={{ marginRight: 3, display: 'inline', verticalAlign: 'middle' }} />}
                        {r.due}
                      </div>
                    </div>
                    <button className="tr-view-btn">View</button>
                  </motion.div>
                )
              })}
            </motion.div>

            {/* Activity Feed */}
            <motion.div className="tr-panel" variants={slideUp}>
              <div className="tr-section-header">
                <div className="tr-section-title" style={{ fontSize: '1rem' }}>
                  <div
                    className="tr-section-title-icon"
                    style={{ background: 'rgba(166,192,238,0.12)', color: 'var(--blue)' }}
                  >
                    <Zap size={14} />
                  </div>
                  Connection Feed
                </div>
                <motion.button className="tr-see-all" whileHover={{ x: 2 }}>
                  View more <ChevronRight size={13} />
                </motion.button>
              </div>

              {activityFeed.map((a, i) => {
                const typeMeta = FEED_TYPE_META[a.type] || FEED_TYPE_META.join
                const TypeIcon = typeMeta.icon
                return (
                  <motion.div
                    key={a.id}
                    className="tr-feed-item"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    whileHover={{ x: -2 }}
                  >
                    <div className="tr-feed-avatar">
                      <img src={a.avatar} alt={a.user} />
                      <div
                        className="tr-feed-type-dot"
                        style={{ background: typeMeta.bg }}
                      >
                        <TypeIcon size={7} style={{ color: typeMeta.color }} />
                      </div>
                    </div>
                    <div className="tr-feed-body">
                      <div className="tr-feed-text">
                        <strong>{a.user}</strong> {a.action}
                      </div>
                      <div className="tr-feed-time">{a.time}</div>
                    </div>
                    <motion.div
                      style={{ color: 'var(--text-muted)', flexShrink: 0 }}
                      whileHover={{ color: 'var(--pink)', scale: 1.15 }}
                    >
                      <ArrowUpRight size={13} />
                    </motion.div>
                  </motion.div>
                )
              })}
            </motion.div>

          </motion.div>

        </motion.div>
      </div>
    </>
  )
}

export default FeaturesForDashboard