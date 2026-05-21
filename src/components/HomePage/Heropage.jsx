import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import {
  Users, MapPin, Globe2, Sparkles, ArrowRight,
  Heart, Zap, Download, CalendarDays, MessageCircle, Music2
} from 'lucide-react';

const stats = [
  { icon: <Users size={20} />,         value: '10K+', label: 'Twins Connected' },
  { icon: <Globe2 size={20} />,        value: '50+',  label: 'Countries' },
  { icon: <CalendarDays size={20} />,  value: '100+', label: 'Events Yearly' },
  { icon: <MessageCircle size={20} />, value: '500+', label: 'Active Circles' },
];

const pills = [
  { icon: <Heart size={11} fill="#fbc2eb" color="#fbc2eb" />, text: 'Festival Lagos is live',   delay: '0s',   dur: '3.2s' },
  { icon: <Users size={11} color="#a6c0ee" />,                text: '128 twins joined today',  delay: '1.4s', dur: '3.8s', live: true },
  { icon: <Music2 size={11} color="#fbc2eb" />,               text: 'Twin Talent Show · NYC',  delay: '2.8s', dur: '4.1s' },
  { icon: <MapPin size={11} color="#a6c0ee" />,               text: 'New circle: Seoul Twins',  delay: '0.7s', dur: '3.5s' },
];

const chips = [
  { icon: <Users size={11} color="#a6c0ee" />,         label: 'Twin Finder' },
  { icon: <CalendarDays size={11} color="#fbc2eb" />,  label: 'Festivals & Events' },
  { icon: <MessageCircle size={11} color="#a6c0ee" />, label: 'Twin Circles' },
  { icon: <MapPin size={11} color="#fbc2eb" />,        label: 'Local Meetups' },
  { icon: <Zap size={11} color="#a6c0ee" />,           label: 'Twin Challenges' },
];

const rotating = [
  'Born together, stronger together.',
  'Two souls, one unbreakable bond.',
  'Connected across every continent.',
  'Your twin story starts here.',
];

export const Heropage = function HeroPage() {
  const [entered, setEntered] = useState(false);
  const [rotIdx, setRotIdx]   = useState(0);
  const [rotOut, setRotOut]   = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setEntered(true), 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const iv = setInterval(() => {
      setRotOut(true);
      setTimeout(() => { 
        setRotIdx(i => (i + 1) % rotating.length); 
        setRotOut(false); 
      }, 380);
    }, 3800);
    return () => clearInterval(iv);
  }, []);

  return (
    <section style={{
      position: 'relative',
      width: '100%',
      height: '100vh', /* Strict viewport limitation */
      minHeight: '650px', /* Safe absolute minimum for very tiny windows */
      overflow: 'hidden',
      background: '#040e29',
      fontFamily: "'DM Sans', sans-serif",
      display: 'flex',
      flexDirection: 'column'
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,700;1,9..40,300&family=Playfair+Display:ital,wght@0,700;1,700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        /* ─── YOUTUBE BACKGROUND EMBED ─── */
        .tr-video-container {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100vw;
          height: 56.25vw;
          min-height: 100vh;
          min-width: 177.77vh;
          transform: translate(-50%, -50%);
          z-index: 0;
          pointer-events: none;
          opacity: 0.75;
        }
        .tr-video-iframe {
          width: 100%;
          height: 100%;
          border: none;
        }

        /* ─── SPLIT OVERLAYS ─── */
        .tr-ov1 {
          position: absolute; inset: 0; z-index: 1;
          background: rgba(4, 14, 41, 0.15);
        }
        .tr-ov2 {
          position: absolute; inset: 0; z-index: 2;
          background: linear-gradient(
            90deg,
            rgba(4, 14, 41, 0.96) 0%,
            rgba(4, 14, 41, 0.88) 40%,
            rgba(4, 14, 41, 0.45) 55%,
            transparent 70%
          );
        }

        /* ─── ENTRANCE ANIMATIONS ─── */
        .anim {
          opacity: 0; transform: translateY(15px);
          transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .entered .anim { opacity: 1; transform: translateY(0); }
        .d1 { transition-delay: 0.05s; }
        .d2 { transition-delay: 0.12s; }
        .d3 { transition-delay: 0.20s; }
        .d4 { transition-delay: 0.28s; }
        .d5 { transition-delay: 0.35s; }

        /* ─── SCREEN RESPONSIVE FLEXBOX CONTAINER ─── */
        .tr-wrap {
          position: relative; 
          z-index: 10;
          width: 100%;
          height: 100%;
          padding: 100px 7% 45px 7%; /* Reduced top/bottom padding to reclaim real estate */
          display: flex;
          align-items: center;
        }
        .tr-col {
          width: 100%; max-width: 620px;
          height: 100%;
          display: flex; 
          flex-direction: column;
          justify-content: space-between; /* Stretches nodes perfectly within bounds */
          gap: 16px; /* Tight safe fallback gap */
        }

        /* ─── BADGE ─── */
        .tr-badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(251, 194, 235, 0.14);
          border: 1px solid rgba(251, 194, 235, 0.35);
          color: #fbc2eb; border-radius: 100px;
          padding: 6px 18px; font-size: 0.72rem;
          font-weight: 700; letter-spacing: 0.08em;
          text-transform: uppercase; width: fit-content;
        }

        /* ─── HEADLINE ─── */
        .tr-headline {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.4rem, 4.2vw, 4.3rem);
          font-weight: 700; line-height: 1.1;
          letter-spacing: -1.5px; color: #f5f0ea;
        }
        .tr-headline em {
          font-style: italic; display: block;
          background: linear-gradient(120deg, #fbc2eb 0%, #a6c0ee 55%, #fbc2eb 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }
        @keyframes shimmer {
          from { background-position: 0% center; }
          to   { background-position: 200% center; }
        }

        /* ─── ROTATING LINE ─── */
        .tr-rot-wrap { height: 1.6rem; overflow: hidden; }
        .tr-rot {
          font-size: 1.05rem; color: rgba(245, 240, 234, 0.5);
          font-style: italic; font-weight: 300; white-space: nowrap;
          transition: opacity 0.35s ease, transform 0.35s ease;
        }
        .tr-rot.out { opacity: 0; transform: translateY(-10px); }
        .tr-rot.in  { opacity: 1; transform: translateY(0); }

        /* ─── BODY TEXT ─── */
        .tr-body {
          font-size: 0.94rem; color: rgba(245, 240, 234, 0.65);
          line-height: 1.7; max-width: 520px;
        }
        .tr-body strong { color: rgba(245, 240, 234, 0.95); font-weight: 600; }

        /* ─── CHIPS ─── */
        .tr-chips { display: flex; flex-wrap: wrap; gap: 8px; }
        .tr-chip {
          display: flex; align-items: center; gap: 6px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 100px; padding: 6px 14px;
          font-size: 0.75rem; font-weight: 500;
          color: rgba(245, 240, 234, 0.75);
        }

        /* ─── PRIMARY BUTTONS ─── */
        .tr-actions { display: flex; align-items: center; gap: 16px; flex-wrap: wrap; }
        .btn-main {
          background: #fbc2eb; color: #3a0020;
          border: none; border-radius: 100px;
          padding: 0.85rem 2.2rem; font-size: 0.95rem; font-weight: 700;
          cursor: pointer; display: flex; align-items: center; gap: 8px;
          transition: transform 0.2s, box-shadow 0.2s; font-family: inherit;
        }
        .btn-main:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(251, 194, 235, 0.35);
        }
        .btn-ghost {
          background: rgba(255, 255, 255, 0.08); color: rgba(245, 240, 234, 0.9);
          border: 1.5px solid rgba(255, 255, 255, 0.18); border-radius: 100px;
          padding: 0.85rem 1.8rem; font-size: 0.95rem; font-weight: 500;
          cursor: pointer; display: flex; align-items: center; gap: 8px;
          backdrop-filter: blur(8px); transition: all 0.2s; font-family: inherit;
        }
        .btn-ghost:hover {
          border-color: rgba(255, 255, 255, 0.45);
          background: rgba(255, 255, 255, 0.15);
        }

        /* ─── STATS PANEL ─── */
        .tr-stats {
          display: flex; 
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding-top: 18px; 
          gap: 16px;
          width: 100%;
          margin-top: auto; /* Snaps safely to the very bottom of the flex box */
        }
        .stat-item {
          display: flex; 
          flex-direction: column; 
          align-items: flex-start;
          gap: 4px;
        }
        .stat-ico {
          color: #a6c0ee;
          display: flex; align-items: center; justify-content: center;
          width: 36px; height: 36px;
          background: rgba(166, 192, 238, 0.12);
          border-radius: 10px; flex-shrink: 0;
        }
        .stat-val {
          font-family: 'Playfair Display', serif;
          font-size: 1.8rem; font-weight: 700; color: #f5f0ea;
          letter-spacing: -0.5px; line-height: 1.1;
        }
        .stat-lbl {
          font-size: 0.72rem; 
          color: rgba(245, 240, 234, 0.5);
          font-weight: 500; 
          letter-spacing: 0.03em; 
          line-height: 1.3;
        }

        /* ─── FLOATING PILLS ─── */
        .tr-pills {
          position: absolute; right: 6%; top: 50%;
          transform: translateY(-50%); z-index: 10;
          display: flex; flex-direction: column; gap: 14px;
          opacity: 0; transition: opacity 0.7s 0.8s ease;
        }
        .entered .tr-pills { opacity: 1; }
        .fl-pill {
          display: flex; align-items: center; gap: 10px;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 100px; padding: 11px 20px;
          font-size: 0.78rem; font-weight: 600;
          color: rgba(245, 240, 234, 0.95); white-space: nowrap;
          animation: floatY 4s ease-in-out infinite;
          box-shadow: 0 8px 32px rgba(4, 14, 41, 0.4);
        }
        @keyframes floatY {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-8px); }
        }
        .live-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: #4ade80; flex-shrink: 0;
          animation: blink 1.8s ease-in-out infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%      { opacity: 0.3; }
        }

        /* ─── SCROLL FOOTER BAR ─── */
        .tr-bottom {
          position: absolute; bottom: 0; left: 0; right: 0; z-index: 10;
          display: flex; align-items: center; justify-content: space-between;
          padding: 0.8rem 7%;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          opacity: 0; transition: opacity 0.7s 0.9s ease;
        }
        .entered .tr-bottom { opacity: 1; }
        .tr-btxt {
          font-size: 0.65rem; color: rgba(245, 240, 234, 0.25);
          letter-spacing: 0.12em; text-transform: uppercase;
        }
        .tr-scroll-wrap { display: flex; flex-direction: column; align-items: center; gap: 4px; }
        .tr-scroll-line {
          width: 1px; height: 16px;
          background: linear-gradient(to bottom, rgba(245, 240, 234, 0.35), transparent);
          animation: linePulse 2s ease-in-out infinite;
        }
        @keyframes linePulse {
          0%, 100% { opacity: 1; transform: scaleY(1); }
          50%      { opacity: 0.25; transform: scaleY(0.5); }
        }

        /* ─── RESPONSIVE BREAKPOINTS ─── */
        @media (max-width: 992px) {
          .tr-pills { display: none; }
          .tr-wrap { padding-top: 100px; padding-bottom: 30px; }
          .tr-stats { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; padding-top: 16px; }
          .tr-ov2 {
            background: linear-gradient(
              to bottom,
              rgba(4, 14, 41, 0.95) 0%,
              rgba(4, 14, 41, 0.84) 60%,
              rgba(4, 14, 41, 0.5) 100%
            );
          }
        }

        @media (max-width: 576px) {
          section { height: auto !important; min-height: 100vh; overflow-y: auto; } /* Soft fluid release for mobile devices */
          .tr-wrap { padding: 95px 6% 40px 6%; }
          .tr-col { gap: 20px; }
          .tr-headline { font-size: 2.2rem; }
          .tr-actions { flex-direction: column; align-items: flex-start; gap: 12px; }
          .btn-main, .btn-ghost { width: 100%; justify-content: center; }
          .tr-stats { grid-template-columns: repeat(2, 1fr); gap: 16px; }
          .stat-val { font-size: 1.45rem; }
          .tr-bottom { display: none; }
        }
      `}</style>

      {/* ── YOUTUBE BACKGROUND PLAYER ── */}
      <div className="tr-video-container">
        <iframe
          className="tr-video-iframe"
          src="https://www.youtube.com/embed/f-lzHbd5zu4?autoplay=1&mute=1&loop=1&playlist=f-lzHbd5zu4&start=15&end=78&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&playsinline=1"
          allow="autoplay; encrypted-media"
          title="TwinRally Background Stream"
        />
      </div>

      {/* ── GRADIENT OVERLAYS ── */}
      <div className="tr-ov1" />
      <div className="tr-ov2" />

      {/* ── WRAPPER CONTROLLER CONTAINER ── */}
      <div className={`tr-wrap ${entered ? 'entered' : ''}`}>
        <div className="tr-col">

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div className="anim d1">
              <span className="tr-badge">
                <Sparkles size={11} />
                Global Twins Community · 50+ Countries
              </span>
            </div>

            <div className="anim d2">
              <h1 className="tr-headline">
                The World's<br />
                <em>Twin Community</em>
              </h1>
            </div>

            <div className="anim d2">
              <div className="tr-rot-wrap">
                <p className={`tr-rot ${rotOut ? 'out' : 'in'}`}>{rotating[rotIdx]}</p>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div className="anim d3">
              <p className="tr-body">
                The first platform built <strong>exclusively for twins</strong> — find your people,
                share your stories, and celebrate the bond the world doesn't quite understand.{' '}
                <strong>Connect, celebrate, and belong.</strong>
              </p>
            </div>

            <div className="anim d3">
              <div className="tr-chips">
                {chips.map((c, i) => (
                  <div className="tr-chip" key={i}>{c.icon} {c.label}</div>
                ))}
              </div>
            </div>

            <div className="anim d4">
              <div className="tr-actions">
              <Link 
  to="/signup" 
  className="btn-main inline-flex items-center justify-center gap-2"
>
  Join TwinRally <ArrowRight size={15} />
</Link>
                <button className="btn-ghost"><Download size={14} /> Download App</button>
              </div>
            </div>
          </div>

          <div className="anim d5" style={{ width: '100%' }}>
            <div className="tr-stats">
              {stats.map((s, i) => (
                <div className="stat-item" key={i}>
                  <div className="stat-ico">{s.icon}</div>
                  <div className="stat-val">{s.value}</div>
                  <div className="stat-lbl">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ── FLOATING PILLS ── */}
      <div className={`tr-pills ${entered ? 'entered' : ''}`}>
        {pills.map((p, i) => (
          <div
            className="fl-pill"
            key={i}
            style={{ animationDelay: p.delay, animationDuration: p.dur }}
          >
            {p.live && <div className="live-dot" />}
            {p.icon}
            {p.text}
          </div>
        ))}
      </div>

      {/* ── SCROLL FOOTER DECORATION BAR ── */}
      <div className={`tr-bottom ${entered ? 'entered' : ''}`}>
        <div className="tr-btxt">TwinRally · 2026</div>
        <div className="tr-scroll-wrap">
          <div className="tr-scroll-line" />
        </div>
        <div className="tr-btxt">Connect · Celebrate · Belong</div>
      </div>
    </section>
  );
};