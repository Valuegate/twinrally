import React from 'react'
import { motion } from 'framer-motion'
import { Users, CalendarDays, BookOpen, Sparkles, ArrowRight } from 'lucide-react'

const cards = [
  {
    icon: Users,
    title: 'Connect',
    accent: '#fbc2eb',
    accentDark: '#9a2060',
    image: 'https://plus.unsplash.com/premium_photo-1723579502296-d7c0e46174d7?w=600&auto=format&fit=crop&q=60',
    desc: 'Find and connect with twins from around the world who share your interests and unique twin bond.',
  },
  {
    icon: CalendarDays,
    title: 'Events',
    accent: '#a6c0ee',
    accentDark: '#2a52a0',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&auto=format&fit=crop&q=60',
    desc: 'Join exclusive twin festivals, local meetups, and virtual events celebrating twin culture worldwide.',
  },
  {
    icon: BookOpen,
    title: 'Stories',
    accent: '#fbc2eb',
    accentDark: '#9a2060',
    image: 'https://plus.unsplash.com/premium_photo-1664106242816-cf9c4f3150d2?w=600&auto=format&fit=crop&q=60',
    desc: 'Share your twin journey and discover inspiring stories from twins across the globe.',
  },
  {
    icon: Sparkles,
    title: 'Festivals',
    accent: '#a6c0ee',
    accentDark: '#2a52a0',
    image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=600&auto=format&fit=crop&q=60',
    desc: 'Celebrate twin culture at annual festivals with competitions, workshops, and global recognition.',
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const cardVariant = {
  hidden: { opacity: 0, y: 44 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

export const QuickHighlight = () => {
  return (
    <section style={{
      background: '#040e28',
      fontFamily: "'DM Sans', sans-serif",
      position: 'relative',
      overflow: 'hidden',
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,700&family=Playfair+Display:ital,wght@0,700;1,700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        /* subtle grain texture */
        .qh-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E");
          background-size: 160px;
          pointer-events: none;
          z-index: 0;
          opacity: 0.4;
        }

        .qh-wrap {
          max-width: 1200px;
          margin: 0 auto;
          padding: 6rem 6% 6rem;
          position: relative;
          z-index: 1;
        }

        /* ── HEADER ── */
        .qh-header {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: end;
          margin-bottom: 4rem;
          padding-bottom: 3.5rem;
          border-bottom: 1px solid rgba(255,255,255,0.07);
        }

        .qh-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: rgba(251,194,235,0.1);
          border: 1px solid rgba(251,194,235,0.25);
          color: #fbc2eb;
          border-radius: 100px;
          padding: 5px 14px;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 1.3rem;
        }

        .qh-eyebrow-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: #fbc2eb;
        }

        .qh-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 3.5vw, 3rem);
          font-weight: 700;
          color: #f0ebe2;
          letter-spacing: -1.2px;
          line-height: 1.08;
        }

        .qh-title em {
          font-style: italic;
          background: linear-gradient(120deg, #fbc2eb 20%, #a6c0ee 80%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .qh-header-right {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          gap: 1.5rem;
        }

        .qh-sub {
          font-size: 0.97rem;
          color: rgba(240,235,226,0.48);
          line-height: 1.8;
          max-width: 360px;
        }

        .qh-header-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #fbc2eb;
          color: #3a0020;
          border: none;
          border-radius: 100px;
          padding: 0.75rem 1.75rem;
          font-size: 0.88rem;
          font-weight: 700;
          cursor: pointer;
          font-family: inherit;
          width: fit-content;
          transition: transform 0.2s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.2s;
        }

        .qh-header-cta:hover {
          transform: translateY(-2px) scale(1.03);
          box-shadow: 0 12px 30px rgba(251,194,235,0.28);
        }

        .qh-header-cta svg { width: 15px; height: 15px; }

        /* ── GRID ── */
        .qh-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        /* ── CARD ── */
        .qh-card {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
          background: #0a1535;
          border: 1px solid rgba(255,255,255,0.06);
          transition: border-color 0.3s;
        }

        .qh-card:hover {
          border-color: rgba(255,255,255,0.14);
        }

        /* image */
        .qh-card-img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          display: block;
          opacity: 0.35;
          transition: opacity 0.45s, transform 0.6s;
        }

        .qh-card:hover .qh-card-img {
          opacity: 0.5;
          transform: scale(1.05);
        }

        /* fade from image into content */
        .qh-card-fade {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 200px;
          background: linear-gradient(to bottom, transparent 30%, #0a1535 100%);
          pointer-events: none;
        }

        /* content below image */
        .qh-card-body {
          padding: 1.2rem 1.4rem 1.6rem;
          position: relative;
        }

        /* thin accent line at top of body */
        .qh-card-line {
          position: absolute;
          top: 0; left: 1.4rem; right: 1.4rem;
          height: 1px;
        }

        /* icon box */
        .qh-card-icon {
          width: 42px;
          height: 42px;
          border-radius: 11px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
          flex-shrink: 0;
          transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1);
        }

        .qh-card:hover .qh-card-icon {
          transform: scale(1.12) rotate(-4deg);
        }

        .qh-card-icon svg { width: 18px; height: 18px; }

        .qh-card-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.25rem;
          font-weight: 700;
          color: #f0ebe2;
          letter-spacing: -0.3px;
          margin-bottom: 0.6rem;
          line-height: 1.15;
          transition: color 0.2s;
        }

        .qh-card-desc {
          font-size: 0.82rem;
          color: rgba(240,235,226,0.48);
          line-height: 1.7;
          font-weight: 400;
        }

        /* arrow link */
        .qh-card-arrow {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          margin-top: 1rem;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          opacity: 0;
          transform: translateX(-6px);
          transition: opacity 0.25s, transform 0.25s;
        }

        .qh-card:hover .qh-card-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        .qh-card-arrow svg { width: 13px; height: 13px; }

        /* ── RESPONSIVE ── */
        @media (max-width: 1024px) {
          .qh-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 640px) {
          .qh-grid { grid-template-columns: 1fr; }
          .qh-header { grid-template-columns: 1fr; gap: 1.5rem; }
          .qh-wrap { padding: 4rem 6%; }
        }
      `}</style>

      <div className="qh-section" style={{ position: 'relative' }}>
        <div className="qh-wrap">

          {/* ── HEADER ── */}
          <motion.div
            className="qh-header"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div>
              <div className="qh-eyebrow">
                <div className="qh-eyebrow-dot" />
                Quick Highlights
              </div>
              <h2 className="qh-title">
                Everything you need<br /><em>in one place</em>
              </h2>
            </div>

            <div className="qh-header-right">
              <p className="qh-sub">
                The core features that make TwinRally the ultimate destination for twins worldwide — built to connect, celebrate, and grow together.
              </p>
              <motion.button
                className="qh-header-cta"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                Join TwinRally <ArrowRight />
              </motion.button>
            </div>
          </motion.div>

          {/* ── CARDS ── */}
          <motion.div
            className="qh-grid"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {cards.map(({ icon: Icon, title, accent, accentDark, image, desc }) => (
              <motion.div
                key={title}
                className="qh-card"
                variants={cardVariant}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {/* Image */}
                <img src={image} alt={title} className="qh-card-img" loading="lazy" />
                <div className="qh-card-fade" />

                {/* Body */}
                <div className="qh-card-body">
                  {/* top accent line */}
                  <div
                    className="qh-card-line"
                    style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }}
                  />

                  {/* Icon */}
                  <div
                    className="qh-card-icon"
                    style={{ background: `${accent}18`, color: accent }}
                  >
                    <Icon />
                  </div>

                  <div className="qh-card-title">{title}</div>
                  <p className="qh-card-desc">{desc}</p>

                  <div className="qh-card-arrow" style={{ color: accent }}>
                    Explore <ArrowRight />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}