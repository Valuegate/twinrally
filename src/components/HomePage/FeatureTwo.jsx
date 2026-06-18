import React, { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { accordionFeatures } from '@/data/accordion'
import { Plus, Minus, Users, CalendarDays, MessageCircle, Trophy, Globe2, Zap } from 'lucide-react'


const LUCIDE_ICONS = [
  <Users size={20} />,
  <CalendarDays size={20} />,
  <MessageCircle size={20} />,
  <Trophy size={20} />,
  <Globe2 size={20} />,
  <Zap size={20} />,
]

const FadeUp = ({ children, delay = 0 }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export const FeatureTwo = () => {
  const [openAccordion, setOpenAccordion] = useState(0)
  const [activeFeature, setActiveFeature] = useState(0)

  const toggle = (index) => {
    setOpenAccordion(openAccordion === index ? null : index)
    setActiveFeature(index)
  }

  return (
    <section style={{
      background: '#ddd7ce',
      fontFamily: "'DM Sans', sans-serif",
      position: 'relative',
      overflow: 'hidden',
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,700&family=Playfair+Display:ital,wght@0,700;1,700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── SECTION WRAPPER ── */
        .ft2-wrap {
          max-width: 1200px;
          margin: 0 auto;
          padding: 7rem 6% 7rem;
        }

        /* ── HEADER ── */
        .ft2-header {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: end;
          margin-bottom: 5rem;
          padding-bottom: 4rem;
          border-bottom: 1px solid rgba(14,22,40,0.18);
        }

        .ft2-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: rgba(251,194,235,0.15);
          border: 1px solid rgba(251,194,235,0.4);
          color: #9a2060;
          border-radius: 100px;
          padding: 5px 14px;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 1.4rem;
        }

        .ft2-eyebrow-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #fbc2eb;
          flex-shrink: 0;
        }

        .ft2-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.2rem, 3.5vw, 3.2rem);
          font-weight: 700;
          color: #0e1628;
          letter-spacing: -1.2px;
          line-height: 1.08;
        }

        .ft2-title em {
          font-style: italic;
          background: linear-gradient(120deg, #fbc2eb 20%, #a6c0ee 80%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .ft2-header-right {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          gap: 1.5rem;
          width: 100%;
        }

        .ft2-sub {
          font-size: 0.97rem;
          color: rgba(14,22,40,0.72);
          line-height: 1.8;
          font-weight: 400;
          max-width: 100%;
        }

       /*  .ft2-stats {
          display: flex;
          gap: 2rem;
        }*/


 .ft2-stats {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: stretch;
  gap: 12px;
}

.ft2-stats > div {
  flex: 1;
  min-width: 0;
  text-align: center;
}


       /* .ft2-stat-num {
          font-family: 'Playfair Display', serif;
          font-size: 1.7rem;
          font-weight: 700;
          color: #0e1628;
          letter-spacing: -0.5px;
          line-height: 1;
          margin-bottom: 3px;
          white-space: nowrap;
        }*/


         .ft2-stat-num {
  font-family: 'Playfair Display', serif;
  font-size: 1.7rem;
  font-weight: 700;
  white-space: nowrap;
  margin-bottom: 6px;
}



        .ft2-stat-num span {
          background: linear-gradient(120deg, #fbc2eb, #a6c0ee);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

/*        .ft2-stat-label {
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: rgba(14,22,40,0.72);
        }*/


          .ft2-stat-label {
  font-size: 0.7rem;
  line-height: 1.3;
  word-break: break-word;
}

        /* ── BODY GRID ── */
        .ft2-body {
          display: grid;
          grid-template-columns: 5fr 4fr;
          gap: 3.5rem;
          align-items: start;
        }

        /* ── ACCORDION ── */
        .ft2-accordion {
          display: flex;
          flex-direction: column;
          gap: 2px;
          background: rgba(14,22,40,0.18);
          border-radius: 20px;
          overflow: hidden;
        }

        .ft2-item {
          background: #cdc6bb;
          transition: background 0.25s;
          overflow: hidden;
        }

        .ft2-item.active {
          background: #fff;
        }

        .ft2-item-btn {
          width: 100%;
          padding: 1.4rem 1.8rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          cursor: pointer;
          background: none;
          border: none;
          font-family: inherit;
          text-align: left;
        }

        .ft2-item-left {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .ft2-item-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-size: 1.1rem;
          transition: transform 0.25s;
        }

        .ft2-item.active .ft2-item-icon {
          transform: scale(1.08);
        }

        .ft2-item-name {
          font-size: 0.97rem;
          font-weight: 700;
          color: #0e1628;
          line-height: 1.2;
        }

        .ft2-item-count {
          font-size: 0.72rem;
          font-weight: 500;
          color: rgba(14,22,40,0.72);
          margin-top: 2px;
          letter-spacing: 0.02em;
        }

        .ft2-item-toggle {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: rgba(14,22,40,0.18);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: background 0.2s;
          color: rgba(14,22,40,0.65);
        }

        .ft2-item.active .ft2-item-toggle {
          background: rgba(251,194,235,0.2);
          color: #9a2060;
        }

        .ft2-item-toggle svg {
          width: 14px;
          height: 14px;
        }

        /* Accordion body */
        .ft2-item-body {
          padding: 0 1.8rem 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .ft2-feature-row {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 10px 12px;
          border-radius: 10px;
          background: rgba(14,22,40,0.05);
          border: 1px solid rgba(14,22,40,0.1);
        }

        .ft2-feature-check {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 1px;
          font-size: 0.6rem;
          color: #fff;
        }

        .ft2-feature-txt {
          font-size: 0.84rem;
          color: rgba(14,22,40,0.78);
          line-height: 1.6;
        }

        /* ── STICKY VISUAL PANEL ── */
        .ft2-panel {
          position: sticky;
          top: 5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .ft2-visual-card {
          background: #fff;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid rgba(14,22,40,0.14);
        }

        .ft2-visual-top {
          height: 7px;
          width: 100%;
        }

        .ft2-visual-body {
          padding: 2rem 2rem 1.5rem;
          text-align: center;
        }

        .ft2-visual-icon {
          width: 64px;
          height: 64px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.2rem;
          font-size: 1.6rem;
        }

        .ft2-visual-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.35rem;
          font-weight: 700;
          color: #0e1628;
          letter-spacing: -0.4px;
          margin-bottom: 0.6rem;
          line-height: 1.15;
        }

        .ft2-visual-desc {
          font-size: 0.85rem;
          color: rgba(14,22,40,0.72);
          line-height: 1.7;
        }

        .ft2-mini-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
          padding: 0 2rem 2rem;
        }

        .ft2-mini-card {
          border-radius: 10px;
          background: rgba(14,22,40,0.05);
          border: 1px solid rgba(14,22,40,0.12);
          padding: 0.75rem;
        }

        .ft2-mini-label {
          font-size: 0.72rem;
          font-weight: 700;
          color: #0e1628;
          margin-bottom: 3px;
          line-height: 1.2;
        }

        .ft2-mini-sub {
          font-size: 0.68rem;
          color: rgba(14,22,40,0.62);
          line-height: 1.4;
        }

        /* Progress bar panel */
        .ft2-progress-card {
          background: #fff;
          border-radius: 16px;
          padding: 1.25rem 1.5rem;
          border: 1px solid rgba(14,22,40,0.14);
        }

        .ft2-progress-label {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: rgba(14,22,40,0.35);
          margin-bottom: 0.9rem;
        }

        .ft2-progress-rows {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .ft2-progress-row {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .ft2-progress-name {
          font-size: 0.78rem;
          font-weight: 500;
          color: rgba(14,22,40,0.72);
          width: 80px;
          flex-shrink: 0;
        }

        .ft2-progress-track {
          flex: 1;
          height: 5px;
          background: rgba(14,22,40,0.14);
          border-radius: 100px;
          overflow: hidden;
        }

        .ft2-progress-fill {
          height: 100%;
          border-radius: 100px;
        }

        

        /* ── RESPONSIVE ── */
        @media (max-width: 960px) {
          .ft2-header {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .ft2-body {
            grid-template-columns: 1fr;
          }
          .ft2-panel {
            position: static;
          }
          .ft2-bottom {
            flex-direction: column;
            align-items: flex-start;
            padding: 3.5rem 6%;
          }
        }

       /* @media (max-width: 580px) {
          .ft2-wrap { padding: 4.5rem 6% 5rem; }
          .ft2-header { margin-bottom: 3rem; padding-bottom: 3rem; }
          .ft2-stats { gap: 1.5rem; }
        }*/


    @media (max-width: 580px) {
  .ft2-stats {
    gap: 6px;
  }

  .ft2-stat-num {
    font-size: 1rem;
  }

  .ft2-stat-label {
    font-size: 0.58rem;
  }
}
      `}</style>

      <div className="ft2-wrap">

        {/* ── HEADER ── */}
        <FadeUp>
          <div className="ft2-header">
            <div>
              <div className="ft2-eyebrow">
                <div className="ft2-eyebrow-dot" />
                Powerful Features
              </div>
              <h2 className="ft2-title">
                Everything twins<br />need to <em>thrive together</em>
              </h2>
            </div>
            <div className="ft2-header-right">
              <p className="ft2-sub">
                Innovative tools and experiences designed specifically for the twin community — to connect, share, and grow together.
              </p>
              <div className="ft2-stats">
                <div>
                  <div className="ft2-stat-num"><span>10k+</span></div>
                  <div className="ft2-stat-label">Twin pairs</div>
                </div>
                <div>
                  <div className="ft2-stat-num"><span>40+</span></div>
                  <div className="ft2-stat-label">Countries</div>
                </div>
                <div>
                  <div className="ft2-stat-num"><span>200+</span></div>
                  <div className="ft2-stat-label">Events hosted</div>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* ── BODY ── */}
        <div className="ft2-body">

          {/* Accordion */}
          <FadeUp delay={0.1}>
            <div className="ft2-accordion">
              {accordionFeatures.map((feature, index) => {
                const isOpen = openAccordion === index
                const accentColor = index % 2 === 0 ? '#fbc2eb' : '#a6c0ee'
                const accentDark  = index % 2 === 0 ? '#9a2060' : '#2a52a0'
                return (
                  <div key={index} className={`ft2-item${isOpen ? ' active' : ''}`}>
                    <button className="ft2-item-btn" onClick={() => toggle(index)}>
                      <div className="ft2-item-left">
                        <div
                          className="ft2-item-icon"
                          style={{
                            background: `${accentColor}20`,
                            color: accentDark,
                          }}
                        >
                          {LUCIDE_ICONS[index % LUCIDE_ICONS.length]}
                        </div>
                        <div>
                          <div className="ft2-item-name">{feature.title}</div>
                          <div className="ft2-item-count">{feature.features.length} features included</div>
                        </div>
                      </div>
                      <div className="ft2-item-toggle">
                        {isOpen ? <Minus /> : <Plus />}
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="body"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                          style={{ overflow: 'hidden' }}
                        >
                          <div className="ft2-item-body">
                            {feature.features.map((item, j) => (
                              <motion.div
                                key={j}
                                className="ft2-feature-row"
                                initial={{ opacity: 0, x: -12 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: j * 0.05 }}
                              >
                                <div
                                  className="ft2-feature-check"
                                  style={{ background: `linear-gradient(135deg, ${accentColor}, ${index % 2 === 0 ? '#a6c0ee' : '#fbc2eb'})` }}
                                >
                                  ✓
                                </div>
                                <span className="ft2-feature-txt">{item}</span>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
            </div>
          </FadeUp>

          {/* Sticky Visual Panel */}
          <FadeUp delay={0.2}>
            <div className="ft2-panel">
              {/* Main card */}
              <div className="ft2-visual-card">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeFeature}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.4, ease: [0.22,1,0.36,1] }}
                  >
                    {/* Accent bar */}
                    <div
                      className="ft2-visual-top"
                      style={{
                        background: activeFeature % 2 === 0
                          ? 'linear-gradient(90deg, #fbc2eb, #a6c0ee)'
                          : 'linear-gradient(90deg, #a6c0ee, #fbc2eb)',
                      }}
                    />
                    <div className="ft2-visual-body">
                      <div
                        className="ft2-visual-icon"
                        style={{
                          background: activeFeature % 2 === 0
                            ? 'rgba(251,194,235,0.15)'
                            : 'rgba(166,192,238,0.15)',
                          color: activeFeature % 2 === 0 ? '#9a2060' : '#2a52a0',
                          fontSize: '1.7rem',
                        }}
                      >
                        {LUCIDE_ICONS[activeFeature % LUCIDE_ICONS.length]}
                      </div>
                      <div className="ft2-visual-title">
                        {accordionFeatures[activeFeature]?.title}
                      </div>
                      <p className="ft2-visual-desc">
                        {accordionFeatures[activeFeature]?.description}
                      </p>
                    </div>

                    <div className="ft2-mini-grid">
                      {accordionFeatures[activeFeature]?.features.slice(0, 4).map((f, i) => (
                        <motion.div
                          key={i}
                          className="ft2-mini-card"
                          initial={{ opacity: 0, scale: 0.94 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: i * 0.07 }}
                        >
                          <div className="ft2-mini-label"
                            style={{ color: activeFeature % 2 === 0 ? '#9a2060' : '#2a52a0' }}>
                            {f.split(':')[0]}
                          </div>
                          <div className="ft2-mini-sub">
                            {f.split(':')[1]?.trim() || ''}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Progress card */}
              <div className="ft2-progress-card">
                <div className="ft2-progress-label">Community reach</div>
                <div className="ft2-progress-rows">
                  {[
                    { name: 'Networking', val: 92, color: '#fbc2eb' },
                    { name: 'Events', val: 78, color: '#a6c0ee' },
                    { name: 'Messaging', val: 88, color: '#fbc2eb' },
                    { name: 'Engagement', val: 65, color: '#a6c0ee' },
                  ].map((r, i) => (
                    <div className="ft2-progress-row" key={i}>
                      <div className="ft2-progress-name">{r.name}</div>
                      <div className="ft2-progress-track">
                        <motion.div
                          className="ft2-progress-fill"
                          style={{ background: r.color }}
                          initial={{ width: 0 }}
                          animate={{ width: `${r.val}%` }}
                          transition={{ duration: 0.9, delay: i * 0.1, ease: [0.22,1,0.36,1] }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}