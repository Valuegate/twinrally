import React, { useRef } from 'react'
import { Link } from "react-router-dom";
import { motion, useInView } from 'framer-motion'
import {
  Users, CalendarDays, MessageCircle, Trophy,
  Globe2, ArrowRight, CheckCircle2
} from 'lucide-react'

const features = [
  {
    title: "Community & Networking",
    tagline: "Find your people worldwide",
    icon: <Users size={20} />,
    accent: "#fbc2eb",
    accentDark: "#9a2060",
    accentBg: "rgba(251,194,235,0.10)",
    accentBorder: "rgba(251,194,235,0.28)",
    image: "/hero1.png",
    items: [
      "Create joint twin profiles or individual linked accounts",
      "Discover twins in your city, state, or across the world",
      "Join interest groups for sports, music, careers & more",
      "Share twin stories and unique milestone experiences",
    ],
  },
  {
    title: "Event Hosting",
    tagline: "Bring twins together in person",
    icon: <CalendarDays size={20} />,
    accent: "#a6c0ee",
    accentDark: "#2a52a0",
    accentBg: "rgba(166,192,238,0.10)",
    accentBorder: "rgba(166,192,238,0.28)",
    image: "/hero2.png",
    items: [
      "Annual twin festivals celebrating twin culture globally",
      "Create local meetups, workshops, and talent shows",
      "Integrated ticketing and RSVP system built-in",
      "Live streaming for twins who can't attend in person",
    ],
  },
  {
    title: "Communication",
    tagline: "Stay connected, always",
    icon: <MessageCircle size={20} />,
    accent: "#fbc2eb",
    accentDark: "#9a2060",
    accentBg: "rgba(251,194,235,0.10)",
    accentBorder: "rgba(251,194,235,0.28)",
    image: "/hero3.png",
    items: [
      "Private messaging between twins worldwide",
      "Topic & location-based twin circle group chats",
      "Voice and video calls for closer connections",
      "Discussion forums for advice and shared experiences",
    ],
  },
  {
    title: "Engagement & Recognition",
    tagline: "Celebrate what makes twins special",
    icon: <Trophy size={20} />,
    accent: "#a6c0ee",
    accentDark: "#2a52a0",
    accentBg: "rgba(166,192,238,0.10)",
    accentBorder: "rgba(166,192,238,0.28)",
    image: "/hero4.png",
    items: [
      "Twin challenges, look-alike contests and trivia",
      "Monthly spotlight featuring inspiring twin pairs",
      "Achievements and badges for active participation",
      "Twin leaderboards and community recognition",
    ],
  },
]

const FadeUp = ({ children, delay = 0 }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

const FadeIn = ({ children, delay = 0, direction = 'left' }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: direction === 'left' ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export const FeatureOne = () => {
  return (
    <section style={{
      background: '#e8e2d9',
      fontFamily: "'DM Sans', sans-serif",
      position: 'relative',
      overflow: 'hidden',
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,700;1,9..40,300&family=Playfair+Display:ital,wght@0,700;1,700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── HEADER ── */
        .ft-header {
          text-align: center;
          padding: 7rem 6% 5rem;
          position: relative;
          z-index: 2;
        }

        .ft-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: rgba(251,194,235,0.15);
          border: 1px solid rgba(251,194,235,0.45);
          color: #9a2060;
          border-radius: 100px;
          padding: 5px 16px;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 1.8rem;
        }

        .ft-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.6rem, 4.5vw, 4rem);
          font-weight: 700;
          line-height: 1.06;
          letter-spacing: -1.5px;
          color: #0e1628;
          margin-bottom: 1.3rem;
        }

        .ft-title em {
          font-style: italic;
          background: linear-gradient(120deg, #fbc2eb 20%, #a6c0ee 80%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .ft-sub {
          font-size: 1.05rem;
          color: rgba(14,22,40,0.5);
          max-width: 500px;
          margin: 0 auto;
          line-height: 1.8;
          font-weight: 400;
        }

        /* ── DIVIDER ── */
        .ft-divider {
          width: 100%;
          height: 1px;
          background: rgba(14,22,40,0.08);
        }

        /* ── ROW ── */
        .ft-rows {
          display: flex;
          flex-direction: column;
        }

        .ft-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 520px;
          border-bottom: 1px solid rgba(14,22,40,0.08);
          position: relative;
          overflow: hidden;
        }

        .ft-row:last-child {
          border-bottom: none;
        }

        /* Image side */
        .ft-row-img {
          position: relative;
          overflow: hidden;
          background: #d4cdc3;
        }

        .ft-row-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          transition: transform 0.7s ease;
        }

        .ft-row:hover .ft-row-img img {
          transform: scale(1.03);
        }

        .ft-row-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(14,22,40,0.12) 0%, transparent 70%);
          pointer-events: none;
        }

        /* Number badge on image */
        .ft-row-num {
          position: absolute;
          top: 2rem;
          left: 2rem;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: rgba(14,22,40,0.75);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Playfair Display', serif;
          font-size: 1rem;
          font-weight: 700;
          color: #fff;
          z-index: 2;
        }

        /* Text side */
        .ft-row-content {
          padding: 4.5rem 5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: #ede8e0;
          position: relative;
        }

        .ft-row-content::before {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          width: 1px;
          background: rgba(14,22,40,0.08);
        }

        .ft-row:nth-child(odd) .ft-row-content::before { left: 0; }
        .ft-row:nth-child(even) .ft-row-content::before { right: 0; }

        /* Alternating: even rows flip image/text order */
        .ft-row:nth-child(even) .ft-row-img {
          order: 2;
        }
        .ft-row:nth-child(even) .ft-row-content {
          order: 1;
        }

        .ft-row-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border-radius: 100px;
          padding: 6px 14px 6px 10px;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          margin-bottom: 1.5rem;
          width: fit-content;
          border: 1px solid transparent;
        }

        .ft-row-tag-icon {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .ft-row-tagline {
          font-size: 0.82rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin-bottom: 0.6rem;
          opacity: 0.45;
          color: #0e1628;
        }

        .ft-row-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.7rem, 2.5vw, 2.3rem);
          font-weight: 700;
          color: #0e1628;
          letter-spacing: -0.8px;
          line-height: 1.12;
          margin-bottom: 2rem;
        }

        .ft-row-items {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .ft-row-item {
          display: flex;
          align-items: flex-start;
          gap: 11px;
        }

        .ft-row-item-check {
          flex-shrink: 0;
          margin-top: 2px;
        }

        .ft-row-item-txt {
          font-size: 0.9rem;
          color: rgba(14,22,40,0.6);
          line-height: 1.65;
          font-weight: 400;
        }

        .ft-row-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: 2rem;
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.03em;
          text-decoration: none;
          cursor: pointer;
          transition: gap 0.2s ease;
          background: none;
          border: none;
          padding: 0;
          font-family: inherit;
        }

        .ft-row-link:hover {
          gap: 10px;
        }

        /* ── GLOBAL STRIP ── */
        .ft-global {
          background: #0e1628;
          padding: 1.6rem 6%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2.5rem;
          flex-wrap: wrap;
        }

        .ft-global-label {
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.25);
          margin-right: 0.5rem;
        }

        .ft-global-item {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 0.78rem;
          font-weight: 500;
          color: rgba(255,255,255,0.38);
        }

        .ft-global-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        /* ── BOTTOM CTA ── */
        .ft-bottom {
          background: #040e29;
          padding: 5rem 6%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          flex-wrap: wrap;
        }
        .ft-bottom-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.8rem, 3vw, 2.6rem);
          font-weight: 700;
          color: #f5f0ea;
          letter-spacing: -1px;
          line-height: 1.1;
          margin-bottom: 0.7rem;
        }
        .ft-bottom-title em {
          font-style: italic;
          background: linear-gradient(120deg, #fbc2eb, #a6c0ee);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .ft-bottom-sub {
          font-size: 0.95rem;
          color: rgba(245,240,234,0.5);
          max-width: 420px;
          line-height: 1.7;
        }
        .ft-bottom-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        .btn-cta-main {
          background: #fbc2eb;
          color: #3a0020;
          border: none;
          border-radius: 100px;
          padding: 0.85rem 2rem;
          font-size: 0.92rem;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: transform 0.2s, box-shadow 0.2s;
          font-family: inherit;
        }
        .btn-cta-main:hover { transform: translateY(-2px); box-shadow: 0 10px 30px rgba(251,194,235,0.3); }
        .btn-cta-ghost {
          background: rgba(255,255,255,0.07);
          color: rgba(245,240,234,0.88);
          border: 1.5px solid rgba(255,255,255,0.16);
          border-radius: 100px;
          padding: 0.85rem 1.6rem;
          font-size: 0.92rem;
          font-weight: 500;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: inherit;
          transition: all 0.2s;
        }
        .btn-cta-ghost:hover { border-color: rgba(255,255,255,0.4); background: rgba(255,255,255,0.12); }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          .ft-row {
            grid-template-columns: 1fr;
            min-height: unset;
          }
          .ft-row-img {
            height: 260px;
            order: 1 !important;
          }
          .ft-row-content {
            order: 2 !important;
            padding: 2.8rem 2rem;
          }
          .ft-row-content::before { display: none; }
          .ft-bottom { flex-direction: column; align-items: flex-start; padding: 3.5rem 6%; }
          .ft-header { padding: 4.5rem 6% 3rem; }
          .ft-global { gap: 1.2rem; }
        }

        @media (max-width: 540px) {
          .ft-row-num { top: 1rem; left: 1rem; }
          .ft-global-label { display: none; }
        }
      `}</style>

      {/* ── HEADER ── */}
      <div className="ft-header">
        <FadeUp>
          <div className="ft-eyebrow">
            <Globe2 size={11} /> What TwinRally Offers
          </div>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="ft-title">
            Built for the Bond<br />
            <em>Only Twins Know</em>
          </h2>
        </FadeUp>
        <FadeUp delay={0.2}>
          <p className="ft-sub">
            Every feature on TwinRally was designed from the ground up
            to celebrate, strengthen, and grow the unique connection between twins worldwide.
          </p>
        </FadeUp>
      </div>

      <div className="ft-divider" />

      {/* ── FEATURE ROWS ── */}
      <div className="ft-rows">
        {features.map((f, i) => {
          const isEven = i % 2 !== 0
          return (
            <div className="ft-row" key={i}>
              {/* Image */}
              <FadeIn direction={isEven ? 'right' : 'left'} delay={0.05}>
                <div className="ft-row-img" style={{ height: '100%' }}>
                  <img src={f.image} alt={f.title} loading="lazy" />
                  <div className="ft-row-img-overlay" />
                  <div className="ft-row-num"
                    style={{ borderColor: `${f.accent}44`, color: f.accent }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                </div>
              </FadeIn>

              {/* Content */}
              <FadeIn direction={isEven ? 'left' : 'right'} delay={0.15}>
                <div className="ft-row-content">
                  {/* Tag */}
                  <div
                    className="ft-row-tag"
                    style={{
                      background: f.accentBg,
                      borderColor: f.accentBorder,
                      color: f.accentDark,
                    }}
                  >
                    <div
                      className="ft-row-tag-icon"
                      style={{ background: `${f.accent}25`, color: f.accentDark }}
                    >
                      {f.icon}
                    </div>
                    {f.title}
                  </div>

                  {/* Tagline */}
                  <p className="ft-row-tagline">{f.tagline}</p>

                  {/* Title */}
                  <h3 className="ft-row-title">{f.title}</h3>

                  {/* Items */}
                  <div className="ft-row-items">
                    {f.items.map((item, j) => (
                      <div className="ft-row-item" key={j}>
                        <CheckCircle2
                          size={15}
                          className="ft-row-item-check"
                          style={{ color: f.accent, flexShrink: 0 }}
                        />
                        <span className="ft-row-item-txt">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Inline link */}
                  <Link
  to="/features"
  className="ft-row-link inline-flex items-center gap-1"
  style={{ color: f.accentDark, textDecoration: 'none' }}
>
  Learn more <ArrowRight size={14} />
</Link>
                </div>
              </FadeIn>
            </div>
          )
        })}
      </div>

      {/* ── GLOBAL PING STRIP ── */}
      <div className="ft-global">
        <span className="ft-global-label">Twins active in</span>
        {[
          { dot: '#fbc2eb', label: 'Lagos · Nigeria' },
          { dot: '#a6c0ee', label: 'Toronto · Canada' },
          { dot: '#fbc2eb', label: 'Seoul · Korea' },
          { dot: '#a6c0ee', label: 'São Paulo · Brazil' },
          { dot: '#fbc2eb', label: 'London · UK' },
          { dot: '#a6c0ee', label: 'Sydney · Australia' },
        ].map((g, i) => (
          <div className="ft-global-item" key={i}>
            <div className="ft-global-dot" style={{ background: g.dot }} />
            {g.label}
          </div>
        ))}
      </div>

      {/* ── BOTTOM CTA ── */}
      <FadeUp>
        <div className="ft-bottom">
          <div className="ft-bottom-left">
            <div className="ft-bottom-title">
              Ready to find your<br /><em>twin community?</em>
            </div>
            <p className="ft-bottom-sub">
              Join thousands of twins already building meaningful connections
              and creating unforgettable memories together.
            </p>
          </div>
          <div className="ft-bottom-actions flex items-center gap-4">
  <Link 
    to="/signup" 
    className="btn-cta-main inline-flex items-center justify-center gap-2"
  >
    Start Your Journey <ArrowRight size={15} />
  </Link>

  <Link 
    to="/features" 
    className="btn-cta-ghost inline-flex items-center justify-center"
  >
    Browse Features
  </Link>
</div>
        </div>
      </FadeUp>
    </section>
  )
}