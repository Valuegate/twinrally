import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight, Globe, Shield, Heart, Sparkles,
  ChevronLeft, ChevronRight, Target, Eye
} from 'lucide-react'
import { Header } from '@/components/HomePage/Header'
import Footer from '@/components/layout/Footer'

const T = {
  bg: '#F9F5FF',
  surface: '#FFFFFF',
  navy: '#040E28',
  pink: '#fbc2eb',
  pinkDark: '#e879c0',
  blue: '#a6c0ee',
  blueDark: '#5b8ae0',
  text: '#0f1a35',
  sub: '#4a5568',
  muted: '#94a3b8',
  border: 'rgba(10,20,60,0.08)',
}

/* ── Hero slideshow images – replace with your /public/ paths ── */
const slides = [
  { src: '/hero1.png' },
  { src: '/hero2.png' },
  { src: '/hero3.png' },
]

const ValueCard = ({ icon: Icon, title, desc, color, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }} transition={{ duration: 0.5, delay }}
    whileHover={{ y: -5 }}
    style={{
      background: T.surface, border: `1px solid ${T.border}`, borderRadius: 20,
      padding: '28px 24px', boxShadow: '0 4px 24px rgba(90,120,220,0.07)',
    }}
  >
    <div style={{
      width: 48, height: 48, borderRadius: 14, marginBottom: 18,
      background: `${color}20`, border: `1px solid ${color}44`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <Icon size={22} color={color} strokeWidth={1.8} />
    </div>
    <h4 style={{ color: T.text, fontWeight: 800, fontSize: 16, marginBottom: 8, fontFamily: "'OneNineNineFour-Regular', 'DM Sans', sans-serif" }}>{title}</h4>
    <p style={{ color: T.sub, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{desc}</p>
  </motion.div>
)

const TeamCard = ({ member, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }} transition={{ duration: 0.5, delay }}
    whileHover={{ y: -5 }}
    style={{
      background: T.surface, border: `1px solid ${T.border}`, borderRadius: 24,
      padding: '28px 22px', textAlign: 'center',
      boxShadow: '0 4px 24px rgba(90,120,220,0.07)',
    }}
  >
    <img
      src={member.image} alt={member.name}
      style={{
        width: 84, height: 84, borderRadius: '50%', objectFit: 'cover',
        marginBottom: 16, border: `3px solid transparent`,
        outline: `3px solid ${T.pink}66`,
        boxShadow: '0 8px 24px rgba(90,120,220,0.15)',
      }}
    />
    <h4 style={{ color: T.text, fontWeight: 800, fontSize: 16, marginBottom: 6 }}>{member.name}</h4>
    <div style={{
      display: 'inline-block', background: `linear-gradient(135deg, ${T.pink}33, ${T.blue}33)`,
      color: T.blueDark, fontSize: 12, fontWeight: 700,
      padding: '4px 12px', borderRadius: 100, marginBottom: 12,
    }}>{member.role}</div>
    <p style={{ color: T.sub, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{member.bio}</p>
  </motion.div>
)

const TimelineItem = ({ year, event, desc, delay, last }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }} transition={{ duration: 0.5, delay }}
    style={{ display: 'flex', gap: 20 }}
  >
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
      <div style={{
        width: 40, height: 40, borderRadius: '50%', flexShrink: 0,
        background: `linear-gradient(135deg, ${T.pink}, ${T.blue})`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: T.navy, fontWeight: 900, fontSize: 11,
        boxShadow: `0 4px 16px ${T.pink}66`,
      }}>{year.slice(2)}</div>
      {!last && <div style={{ width: 2, flex: 1, background: T.border, margin: '6px 0', minHeight: 36 }} />}
    </div>
    <div style={{
      background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16,
      padding: '18px 20px', marginBottom: 16, flex: 1,
      boxShadow: '0 2px 12px rgba(90,120,220,0.06)',
    }}>
      <div style={{ color: T.pinkDark, fontWeight: 800, fontSize: 11, letterSpacing: '0.07em', textTransform: 'uppercase', marginBottom: 4 }}>{year}</div>
      <h4 style={{ color: T.text, fontWeight: 800, fontSize: 16, marginBottom: 5 }}>{event}</h4>
      <p style={{ color: T.sub, fontSize: 14, margin: 0 }}>{desc}</p>
    </div>
  </motion.div>
)

const AboutPage = () => {
  const teamMembers = [
    { name: 'Joshua Fayomi', role: 'Founder & CEO', bio: 'Non twin with a passion for connecting people. Economist and Consultant with years of experience.', image: 'https://ca.slack-edge.com/TCGE2RFJB-UCF6FC0DA-f5b5fe1f709a-512' },
    { name: 'Rahul Singh', role: 'Head of Product', bio: 'Co-Founder · Tech Lead · Service Engineer. Believes in creating inclusive digital spaces for unique communities.', image: 'https://ca.slack-edge.com/TCGE2RFJB-UCGE2RFN3-be6c5234de9a-512' },
    { name: 'Faith Onwuemeri', role: 'Product Manager', bio: 'Non-Identical twin with a passion for building meaningful offline connections.', image: 'https://ca.slack-edge.com/TCGE2RFJB-U090WKAM9LH-82237c62a0a0-512' },
    { name: 'Wasiu Oseni', role: 'Community Manager · Team Lead', bio: 'Backend Developer ensuring the platform supports twin wellbeing at every level.', image: 'https://ca.slack-edge.com/TCGE2RFJB-U09CWUAS9H8-83f9136c4d38-512' },
  ]

  const values = [
    { icon: Heart, title: 'Authentic Connections', desc: 'Fostering genuine relationships that celebrate the unique twin bond.', color: T.pinkDark, delay: 0.1 },
    { icon: Globe, title: 'Global Community', desc: 'Breaking geographical barriers to unite twins from every corner of the world.', color: T.blueDark, delay: 0.2 },
    { icon: Sparkles, title: 'Celebration', desc: 'Every twin story deserves to be celebrated and every connection cherished.', color: T.pinkDark, delay: 0.3 },
    { icon: Shield, title: 'Safe Space', desc: 'A secure environment where twins can share openly and connect confidently.', color: T.blueDark, delay: 0.4 },
  ]

  const milestones = [
    { year: '2023', event: 'TwinRally Founded', desc: "Concept born from the founders' vision to unite twins worldwide." },
    { year: '2024', event: 'Platform Launch', desc: 'First version released to early adopters and the beta community.' },
    { year: '2024', event: '10K Twins Joined', desc: 'Reached the milestone of 10,000 registered twins.' },
    { year: '2025', event: 'Global Festival', desc: 'First international twin festival planned across multiple continents.' },
  ]

  const [slide, setSlide] = useState(0)
  const [slideDir, setSlideDir] = useState(1)

  useEffect(() => {
    const t = setInterval(() => { setSlideDir(1); setSlide(c => (c + 1) % slides.length) }, 5000)
    return () => clearInterval(t)
  }, [])

  const goSlide = (i) => { setSlideDir(i > slide ? 1 : -1); setSlide(i) }
  const prevSlide = () => { setSlideDir(-1); setSlide(c => (c - 1 + slides.length) % slides.length) }
  const nextSlide = () => { setSlideDir(1); setSlide(c => (c + 1) % slides.length) }

  return (
    <div style={{ background: T.bg, minHeight: '100vh', fontFamily: "'DM Sans', sans-serif", color: T.text }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />

      <Header />

      {/* ── HERO – full-bleed slideshow background ── */}
      <section style={{ position: 'relative', width: '100%', minHeight: '92vh', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>

        {/* Slideshow background */}
        <AnimatePresence initial={false} custom={slideDir}>
          <motion.div
            key={slide}
            custom={slideDir}
            variants={{
              enter: d => ({ scale: 1.06, opacity: 0 }),
              center: { scale: 1, opacity: 1 },
              exit: d => ({ opacity: 0 }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'absolute', inset: 0,
              backgroundImage: `url(${slides[slide].src})`,
              backgroundSize: 'cover', backgroundPosition: 'center',
            }}
          />
        </AnimatePresence>

        {/* Dark gradient overlay for text legibility */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(120deg, rgba(4,14,40,0.82) 0%, rgba(4,14,40,0.55) 55%, rgba(4,14,40,0.35) 100%)',
        }} />

        {/* Pink/blue color tint layer for brand feel */}
        <div style={{
          position: 'absolute', inset: 0,
          background: `linear-gradient(135deg, ${T.pink}18 0%, transparent 50%, ${T.blue}14 100%)`,
        }} />

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 10, maxWidth: 1200, margin: '0 auto', padding: '120px 32px 100px', width: '100%' }}>
          <motion.div
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 7,
              background: 'rgba(251,194,235,0.18)', border: '1px solid rgba(251,194,235,0.35)',
              borderRadius: 100, padding: '7px 18px', marginBottom: 28,
              color: T.pink, fontSize: 12, fontWeight: 700,
              letterSpacing: '0.08em', textTransform: 'uppercase',
              backdropFilter: 'blur(8px)',
            }}
          >
            <Sparkles size={12} /> Our Story
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "'OneNineNineFour-Regular', 'DM Sans', sans-serif",
              fontSize: 'clamp(48px, 8vw, 96px)', fontWeight: 900, lineHeight: 1.0,
              marginBottom: 24, maxWidth: 700,
              background: `linear-gradient(135deg, #fff 40%, ${T.pink} 75%, ${T.blue})`,
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}
          >
            About<br />TwinRally
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            style={{ color: 'rgba(255,255,255,0.72)', fontSize: 18, lineHeight: 1.75, maxWidth: 520, marginBottom: 48 }}
          >
            Where twins unite, celebrate, and build lifelong connections across the globe — online and in person.
          </motion.p>

          {/* Stat pills */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.45 }}
            style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 60 }}
          >
            {[
              { val: '10K+', label: 'Twins Connected', color: T.pink },
              { val: '50+', label: 'Countries', color: T.blue },
            ].map((s, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: 16, padding: '14px 24px', textAlign: 'center',
                backdropFilter: 'blur(12px)',
              }}>
                <div style={{ color: s.color, fontWeight: 900, fontSize: 26, fontFamily: "'OneNineNineFour-Regular', sans-serif" }}>{s.val}</div>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 2 }}>{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Slide controls — bottom right */}
        <div style={{
          position: 'absolute', bottom: 32, right: 32, zIndex: 20,
          display: 'flex', alignItems: 'center', gap: 10,
        }}>
          {[prevSlide, nextSlide].map((fn, i) => (
            <button key={i} onClick={fn} style={{
              background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '50%', width: 36, height: 36,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', backdropFilter: 'blur(8px)', transition: 'background 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.28)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
            >
              {i === 0 ? <ChevronLeft size={16} color="white" /> : <ChevronRight size={16} color="white" />}
            </button>
          ))}
          <div style={{ display: 'flex', gap: 6 }}>
            {slides.map((_, i) => (
              <button key={i} onClick={() => goSlide(i)} style={{
                width: i === slide ? 22 : 7, height: 7, borderRadius: 100,
                border: 'none', cursor: 'pointer', padding: 0,
                background: i === slide ? T.pink : 'rgba(255,255,255,0.35)',
                transition: 'all 0.3s',
              }} />
            ))}
          </div>
        </div>

        {/* Scroll hint */}
        <motion.div
          animate={{ y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity }}
          style={{
            position: 'absolute', bottom: 36, left: '50%', transform: 'translateX(-50%)',
            zIndex: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
          }}
        >
          <div style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.4))' }} />
          <div style={{ width: 5, height: 5, borderRadius: '50%', background: 'rgba(255,255,255,0.4)' }} />
        </motion.div>
      </section>

      {/* ── OUR STORY ── */}
      <section style={{ background: T.surface, borderTop: `1px solid ${T.border}`, borderBottom: `1px solid ${T.border}`, padding: '80px 24px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div style={{ color: T.blueDark, fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 14 }}>Origin</div>
            <h2 style={{ fontFamily: "'OneNineNineFour-Regular', 'DM Sans', sans-serif", fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 800, color: T.text, marginBottom: 28 }}>Our Story</h2>
            {[
              'TwinRally was born from a simple realization: while twins share an incredible bond, they often lack dedicated spaces to connect with other twins worldwide.',
              'Founded with a passion for community, our platform combines social networking, event hosting, and community engagement to create the ultimate destination for twin connections.',
              "From daily conversations to global festivals, we're building a world where every twin can find their community and celebrate their unique identity.",
            ].map((p, i) => (
              <motion.p key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                style={{ color: T.sub, fontSize: 17, lineHeight: 1.8, margin: '0 0 16px' }}
              >{p}</motion.p>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section style={{ padding: '80px 24px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
          {[
            { icon: Target, label: 'Our Mission', color: T.pinkDark, text: "To create the world's most comprehensive platform exclusively for twins — providing tools for connection, celebration, and community building that honour the unique twin experience." },
            { icon: Eye, label: 'Our Vision', color: T.blueDark, text: 'A world where twins are united through shared experiences, celebrations, and lifelong connections — both online and offline, breaking all geographical and cultural boundaries.' },
          ].map((card, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.15 }}
              style={{
                background: T.surface, border: `1px solid ${T.border}`, borderRadius: 24,
                padding: '40px 36px', boxShadow: '0 8px 32px rgba(90,120,220,0.08)',
                borderTop: `3px solid ${card.color}`,
              }}
            >
              <div style={{
                width: 52, height: 52, borderRadius: 16, marginBottom: 22,
                background: `${card.color}18`, border: `1px solid ${card.color}44`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <card.icon size={24} color={card.color} strokeWidth={1.8} />
              </div>
              <h3 style={{ fontFamily: "'OneNineNineFour-Regular', 'DM Sans', sans-serif", color: T.text, fontSize: 22, fontWeight: 800, marginBottom: 14 }}>{card.label}</h3>
              <p style={{ color: T.sub, fontSize: 15, lineHeight: 1.8, margin: 0 }}>{card.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── VALUES ── */}
      <section style={{ background: T.surface, borderTop: `1px solid ${T.border}`, borderBottom: `1px solid ${T.border}`, padding: '80px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: 52 }}>
            <div style={{ color: T.pinkDark, fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 14 }}>What We Stand For</div>
            <h2 style={{ fontFamily: "'OneNineNineFour-Regular', 'DM Sans', sans-serif", fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 800, color: T.text, margin: 0 }}>Our Values</h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
            {values.map((v, i) => <ValueCard key={i} {...v} />)}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section style={{ padding: '80px 24px', maxWidth: 680, margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: 52 }}>
          <div style={{ color: T.blueDark, fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 14 }}>Milestones</div>
          <h2 style={{ fontFamily: "'OneNineNineFour-Regular', 'DM Sans', sans-serif", fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 800, color: T.text, margin: 0 }}>Our Journey</h2>
        </motion.div>
        {milestones.map((m, i) => <TimelineItem key={i} {...m} delay={i * 0.1} last={i === milestones.length - 1} />)}
      </section>

      {/* ── TEAM ── */}
      <section style={{ background: T.surface, borderTop: `1px solid ${T.border}`, padding: '80px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: 52 }}>
            <div style={{ color: T.pinkDark, fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 14 }}>The People Behind It</div>
            <h2 style={{ fontFamily: "'OneNineNineFour-Regular', 'DM Sans', sans-serif", fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 800, color: T.text, margin: 0 }}>Meet Our Team</h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: 24 }}>
            {teamMembers.map((m, i) => <TeamCard key={i} member={m} delay={i * 0.1} />)}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '80px 24px 100px', maxWidth: 820, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{
            background: T.navy, borderRadius: 32, padding: '64px 48px',
            textAlign: 'center', position: 'relative', overflow: 'hidden',
          }}
        >
          <div style={{ position: 'absolute', top: -60, left: '20%', width: 280, height: 280, borderRadius: '50%', background: T.pink, opacity: 0.12, filter: 'blur(70px)' }} />
          <div style={{ position: 'absolute', bottom: -60, right: '20%', width: 280, height: 280, borderRadius: '50%', background: T.blue, opacity: 0.12, filter: 'blur(70px)' }} />
          <div style={{ position: 'relative', zIndex: 2 }}>
            <h2 style={{
              fontFamily: "'OneNineNineFour-Regular', 'DM Sans', sans-serif",
              fontSize: 'clamp(24px, 4vw, 40px)', fontWeight: 800, color: 'white', marginBottom: 16,
            }}>
              Ready to Join the<br />
              <span style={{ background: `linear-gradient(90deg, ${T.pink}, ${T.blue})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Twin Community?
              </span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 16, lineHeight: 1.7, maxWidth: 440, margin: '0 auto 36px' }}>
              Connect with thousands of twins worldwide and start your journey today.
            </p>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                style={{
                  background: `linear-gradient(135deg, ${T.pink}, ${T.blue})`,
                  color: T.navy, border: 'none', borderRadius: 100,
                  padding: '15px 32px', fontSize: 15, fontWeight: 800, cursor: 'pointer',
                  display: 'flex', alignItems: 'center', gap: 8,
                  boxShadow: `0 0 32px rgba(251,194,235,0.3)`,
                }}
              >
                Sign Up Free <ArrowRight size={15} strokeWidth={2.5} />
              </motion.button>
              <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                style={{
                  background: 'rgba(255,255,255,0.07)', color: 'white',
                  border: '1.5px solid rgba(255,255,255,0.15)', borderRadius: 100,
                  padding: '15px 32px', fontSize: 15, fontWeight: 700, cursor: 'pointer',
                }}
              >
                Learn More
              </motion.button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default AboutPage