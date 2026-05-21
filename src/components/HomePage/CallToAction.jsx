import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { UserPlus, Download, ArrowRight, Star, Globe2, Users } from 'lucide-react'

export const CallToAction = () => {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '45%'])
  const textY       = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])

  return (
    <div ref={ref}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,700&family=Playfair+Display:ital,wght@0,700;1,700&display=swap');

        .cta-section {
          position: relative;
          min-height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          font-family: 'DM Sans', sans-serif;
        }

        /* ── layered gradient overlay ── */
        .cta-overlay {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 80% 60% at 50% 110%, rgba(251,194,235,0.18) 0%, transparent 70%),
            linear-gradient(to bottom, rgba(4,14,40,0.55) 0%, rgba(4,14,40,0.35) 40%, rgba(4,14,40,0.72) 100%);
          z-index: 1;
        }

        /* thin pink/blue gradient bar at top */
        .cta-top-bar {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #fbc2eb 0%, #a6c0ee 100%);
          z-index: 10;
        }

        /* ── inner content ── */
        .cta-inner {
          position: relative;
          z-index: 5;
          max-width: 860px;
          margin: 0 auto;
          padding: 6rem 6%;
          text-align: center;
        }

        /* eyebrow pill */
        .cta-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          backdrop-filter: blur(10px);
          border-radius: 100px;
          padding: 7px 18px;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.09em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.85);
          margin-bottom: 2rem;
        }

        .cta-pill-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #fbc2eb;
          flex-shrink: 0;
        }

        /* heading */
        .cta-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.8rem, 6vw, 5.2rem);
          font-weight: 700;
          line-height: 1.05;
          letter-spacing: -2px;
          color: #fff;
          margin-bottom: 1.4rem;
        }

        .cta-title em {
          font-style: italic;
          background: linear-gradient(120deg, #fbc2eb 20%, #a6c0ee 80%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* subtext */
        .cta-sub {
          font-size: clamp(1rem, 1.8vw, 1.15rem);
          color: rgba(255,255,255,0.68);
          line-height: 1.8;
          max-width: 520px;
          margin: 0 auto 3rem;
          font-weight: 400;
        }

        /* ── button group ── */
        .cta-btns {
          display: flex;
          gap: 14px;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 3.5rem;
        }

        .cta-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          background: #fbc2eb;
          color: #3a0020;
          border: none;
          border-radius: 100px;
          padding: 1rem 2.2rem;
          font-size: 0.95rem;
          font-weight: 700;
          cursor: pointer;
          font-family: inherit;
          transition: transform 0.2s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.2s;
          box-shadow: 0 8px 30px rgba(251,194,235,0.3);
          text-decoration: none;
        }

        .cta-btn-primary:hover {
          transform: translateY(-3px) scale(1.03);
          box-shadow: 0 16px 40px rgba(251,194,235,0.4);
        }

        .cta-btn-primary svg {
          width: 17px;
          height: 17px;
          flex-shrink: 0;
        }

        .cta-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          background: rgba(255,255,255,0.1);
          color: #fff;
          border: 1.5px solid rgba(255,255,255,0.28);
          border-radius: 100px;
          padding: 1rem 2rem;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          font-family: inherit;
          backdrop-filter: blur(10px);
          transition: transform 0.2s cubic-bezier(0.34,1.56,0.64,1), background 0.2s, border-color 0.2s;
          text-decoration: none;
        }

        .cta-btn-secondary:hover {
          transform: translateY(-3px) scale(1.03);
          background: rgba(255,255,255,0.18);
          border-color: rgba(255,255,255,0.5);
        }

        .cta-btn-secondary svg {
          width: 17px;
          height: 17px;
          flex-shrink: 0;
        }

        /* ── social proof strip ── */
        .cta-proof {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .cta-proof-item {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 0.8rem;
          font-weight: 500;
          color: rgba(255,255,255,0.55);
        }

        .cta-proof-item svg {
          width: 14px;
          height: 14px;
          flex-shrink: 0;
          color: #fbc2eb;
        }

        .cta-proof-divider {
          width: 1px;
          height: 14px;
          background: rgba(255,255,255,0.18);
        }

        /* ── floating cards ── */
        .cta-float {
          position: absolute;
          z-index: 4;
          backdrop-filter: blur(12px);
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.18);
          border-radius: 14px;
          padding: 0.8rem 1.1rem;
          display: flex;
          align-items: center;
          gap: 10px;
          pointer-events: none;
        }

        .cta-float-icon {
          width: 34px;
          height: 34px;
          border-radius: 9px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .cta-float-icon svg {
          width: 16px;
          height: 16px;
        }

        .cta-float-title {
          font-size: 0.78rem;
          font-weight: 700;
          color: #fff;
          line-height: 1.2;
        }

        .cta-float-sub {
          font-size: 0.65rem;
          color: rgba(255,255,255,0.55);
          margin-top: 1px;
        }

        .cta-float-left {
          left: 5%;
          top: 22%;
        }

        .cta-float-right {
          right: 5%;
          bottom: 28%;
        }

        @media (max-width: 768px) {
          .cta-float { display: none; }
          .cta-inner { padding: 5rem 6%; }
          .cta-proof { gap: 1rem; }
          .cta-proof-divider { display: none; }
        }
      `}</style>

      <section className="cta-section">
        {/* Accent bar */}
        <div className="cta-top-bar" />

        {/* Parallax background image */}
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0 z-0"
        >
          <img
            src="https://plus.unsplash.com/premium_photo-1733317391601-b1651d6d4be9?w=1920&auto=format&fit=crop&q=100&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODh8fGJhY2tncm91bmQlMjBpbWFnZSUyMHdpdGglMjBwZW9wbGUlMjBjb25uZWN0aW5nfGVufDB8fDB8fHww"
            alt="Twins Community"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </motion.div>

        {/* Overlay */}
        <div className="cta-overlay" />

        {/* Floating card — left */}
        <motion.div
          className="cta-float cta-float-left"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          animate={{ y: [0, -8, 0] }}
        >
          <div className="cta-float-icon" style={{ background: 'rgba(251,194,235,0.2)' }}>
            <Users style={{ color: '#fbc2eb' }} />
          </div>
          <div>
            <div className="cta-float-title">10,000+ Twins</div>
            <div className="cta-float-sub">joined this month</div>
          </div>
        </motion.div>

        {/* Floating card — right */}
        <motion.div
          className="cta-float cta-float-right"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          animate={{ y: [0, 8, 0] }}
        >
          <div className="cta-float-icon" style={{ background: 'rgba(166,192,238,0.2)' }}>
            <Globe2 style={{ color: '#a6c0ee' }} />
          </div>
          <div>
            <div className="cta-float-title">40+ Countries</div>
            <div className="cta-float-sub">twins connected globally</div>
          </div>
        </motion.div>

        {/* Main content */}
        <motion.div style={{ y: textY }} className="cta-inner">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Eyebrow */}
            <div className="cta-pill">
              <div className="cta-pill-dot" />
              The Global Twins Platform
            </div>

            {/* Heading */}
            <h2 className="cta-title">
              Join the<br /><em>Twin Revolution</em>
            </h2>

            {/* Sub */}
            <p className="cta-sub">
              Connect with twins worldwide, celebrate your unique bond, and be part of a
              community that truly understands you.
            </p>

            {/* Buttons */}
            <div className="cta-btns">
              <motion.a
                href="/signup"
                className="cta-btn-primary"
                whileHover={{ scale: 1.04, y: -3 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
              >
                <UserPlus />
                Sign Up Free
              </motion.a>

              <motion.a
                href="/download"
                className="cta-btn-secondary"
                whileHover={{ scale: 1.04, y: -3 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
              >
                <Download />
                Download App
                <ArrowRight style={{ width: 14, height: 14, opacity: 0.6 }} />
              </motion.a>
            </div>

            {/* Social proof */}
            <motion.div
              className="cta-proof"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="cta-proof-item">
                <Star />
                Available on iOS & Android
              </div>
              <div className="cta-proof-divider" />
              <div className="cta-proof-item">
                <UserPlus />
                Free to join
              </div>
              <div className="cta-proof-divider" />
              <div className="cta-proof-item">
                <Globe2 />
                No credit card required
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}