import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import {
  Users, MapPin, Calendar, MessageCircle, Sparkles, Globe,
  Radio, Heart, Star, ArrowRight, Zap, Shield, ChevronRight,
  Music, Trophy, Mic2, Camera, BookOpen, Bell
} from 'lucide-react'

/* ─── Brand tokens ─── */
const T = {
  navy: '#040e29',
  navyMid: '#071433',
  pink: '#fbc2eb',
  blue: '#a6c0ee',
  pinkDim: 'rgba(251,194,235,0.15)',
  blueDim: 'rgba(166,192,238,0.15)',
  white: '#ffffff',
  muted: 'rgba(255,255,255,0.45)',
  border: 'rgba(255,255,255,0.08)',
}

/* ─── Floating particle ─── */
const Particle = ({ x, y, size, color, delay }) => (
  <motion.div
    style={{
      position: 'absolute', left: `${x}%`, top: `${y}%`,
      width: size, height: size, borderRadius: '50%',
      background: color, filter: 'blur(1px)', pointerEvents: 'none',
    }}
    animate={{ y: [0, -20, 0], opacity: [0.3, 0.8, 0.3] }}
    transition={{ duration: 4 + Math.random() * 3, delay, repeat: Infinity, ease: 'easeInOut' }}
  />
)

/* ─── Animated counter ─── */
const Counter = ({ target, suffix = '' }) => {
  const [val, setVal] = useState(0)
  const ref = useRef(null)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        let start = 0
        const step = target / 60
        const t = setInterval(() => {
          start += step
          if (start >= target) { setVal(target); clearInterval(t) }
          else setVal(Math.floor(start))
        }, 16)
      }
    }, { threshold: 0.5 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [target])
  return <span ref={ref}>{val.toLocaleString()}{suffix}</span>
}

/* ─── Feature card ─── */
const FeatureCard = ({ icon: Icon, title, desc, color, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    whileHover={{ y: -6, scale: 1.01 }}
    style={{
      background: `linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)`,
      border: `1px solid ${T.border}`,
      borderRadius: 24,
      padding: '28px 24px',
      backdropFilter: 'blur(12px)',
      cursor: 'default',
      position: 'relative',
      overflow: 'hidden',
    }}
  >
    {/* corner glow */}
    <div style={{
      position: 'absolute', top: -40, right: -40,
      width: 120, height: 120, borderRadius: '50%',
      background: color, opacity: 0.12, filter: 'blur(30px)',
    }} />
    <div style={{
      width: 48, height: 48, borderRadius: 14,
      background: `linear-gradient(135deg, ${color}22, ${color}44)`,
      border: `1px solid ${color}44`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      marginBottom: 16,
    }}>
      <Icon size={22} color={color} strokeWidth={1.8} />
    </div>
    <h4 style={{ color: T.white, fontFamily: "'OneNineNineFour-Regular', sans-serif", fontSize: 17, fontWeight: 700, marginBottom: 8 }}>{title}</h4>
    <p style={{ color: T.muted, fontSize: 14, lineHeight: 1.65, margin: 0 }}>{desc}</p>
  </motion.div>
)

/* ─── Journey step ─── */
const JourneyStep = ({ num, text, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 20 }}
  >
    <div style={{
      width: 36, height: 36, borderRadius: '50%', flexShrink: 0,
      background: `linear-gradient(135deg, ${T.pink}, ${T.blue})`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: T.navy, fontWeight: 900, fontSize: 14,
    }}>{num}</div>
    <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: 15, lineHeight: 1.6, margin: 0, paddingTop: 6 }}>{text}</p>
  </motion.div>
)

/* ─── Testimonial ─── */
const testimonials = [
  { name: 'Faith & Grace', location: 'Lagos, Nigeria', text: 'Found 40 twin pairs from our city within the first week. TwinRally is magic.', color: T.pink },
  { name: 'Luca & Marco', location: 'Milan, Italy', text: 'We hosted our first Twin Talent Show and sold out 200 tickets. Unbelievable!', color: T.blue },
  { name: 'Aisha & Amara', location: 'Nairobi, Kenya', text: 'The Twin Finder is uncanny. We\'ve made lifelong friends across 3 continents.', color: T.pink },
]

const TestimonialCard = ({ t, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    style={{
      background: 'rgba(255,255,255,0.04)',
      border: `1px solid ${T.border}`,
      borderRadius: 20,
      padding: '24px 22px',
      position: 'relative',
      overflow: 'hidden',
    }}
  >
    <div style={{
      position: 'absolute', bottom: -30, right: -30,
      width: 100, height: 100, borderRadius: '50%',
      background: t.color, opacity: 0.08, filter: 'blur(25px)',
    }} />
    <div style={{ display: 'flex', gap: 4, marginBottom: 14 }}>
      {[...Array(5)].map((_, i) => <Star key={i} size={13} fill={t.color} color={t.color} />)}
    </div>
    <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 14, lineHeight: 1.7, marginBottom: 16 }}>"{t.text}"</p>
    <div>
      <div style={{ color: T.white, fontWeight: 700, fontSize: 14 }}>{t.name}</div>
      <div style={{ color: T.muted, fontSize: 12, display: 'flex', alignItems: 'center', gap: 4, marginTop: 3 }}>
        <MapPin size={11} /> {t.location}
      </div>
    </div>
  </motion.div>
)

/* ─── Main section ─── */
export const TwinCommunity = () => {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -60])

  const particles = Array.from({ length: 18 }, (_, i) => ({
    x: Math.random() * 100, y: Math.random() * 100,
    size: 3 + Math.random() * 5,
    color: i % 2 === 0 ? T.pink : T.blue,
    delay: i * 0.3,
  }))

  const features = [
    { icon: Users, title: 'Twin Finder', desc: 'Discover twins in your city or across the globe using smart location-based matching.', color: T.pink, delay: 0.1 },
    { icon: Calendar, title: 'Twin Festivals', desc: 'Join annual global festivals and local meetups — in-person or via live stream.', color: T.blue, delay: 0.2 },
    { icon: MessageCircle, title: 'Twin Circles', desc: 'Private chats, group discussions, and community forums built for twin culture.', color: T.pink, delay: 0.3 },
    { icon: Radio, title: 'Live Streams', desc: 'Broadcast events worldwide or tune into twin experiences from every corner of the earth.', color: T.blue, delay: 0.4 },
    { icon: Trophy, title: 'Twin Challenges', desc: 'Compete in look-alike contests, talent showcases, and community trivia battles.', color: T.pink, delay: 0.5 },
    { icon: Globe, title: 'Global Community', desc: 'Multilingual platform connecting 10,000+ twins across 50+ countries and counting.', color: T.blue, delay: 0.6 },
  ]

  const stats = [
    { val: 10000, suffix: '+', label: 'Twins Connected', color: T.pink, icon: Users },
    { val: 50, suffix: '+', label: 'Countries', color: T.blue, icon: Globe },
    { val: 200, suffix: '+', label: 'Events Hosted', color: T.pink, icon: Calendar },
    { val: 98, suffix: '%', label: 'Match Rate', color: T.blue, icon: Heart },
  ]

  return (
    <div
      ref={sectionRef}
      style={{
        background: T.navy,
        width: '100%',
        overflowX: 'hidden',
        position: 'relative',
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700;900&display=swap" rel="stylesheet" />

      {/* ── Background mesh ── */}
      <motion.div style={{ position: 'absolute', inset: 0, y: bgY, pointerEvents: 'none', zIndex: 0 }}>
        <div style={{ position: 'absolute', top: '5%', left: '-5%', width: 500, height: 500, borderRadius: '50%', background: T.pink, opacity: 0.07, filter: 'blur(100px)' }} />
        <div style={{ position: 'absolute', bottom: '10%', right: '-5%', width: 600, height: 600, borderRadius: '50%', background: T.blue, opacity: 0.07, filter: 'blur(120px)' }} />
        <div style={{ position: 'absolute', top: '40%', left: '30%', width: 400, height: 400, borderRadius: '50%', background: T.pink, opacity: 0.04, filter: 'blur(80px)' }} />
        {/* grid lines */}
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.04 }}>
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        {particles.map((p, i) => <Particle key={i} {...p} />)}
      </motion.div>

      {/* ══════════════════════════════════════
          HERO BAND
      ══════════════════════════════════════ */}
      <section style={{ position: 'relative', zIndex: 10, padding: '100px 24px 80px', textAlign: 'center', maxWidth: 900, margin: '0 auto' }}>

        {/* pill badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(251,194,235,0.1)', border: `1px solid rgba(251,194,235,0.25)`,
            borderRadius: 100, padding: '8px 18px', marginBottom: 32,
            color: T.pink, fontSize: 13, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase',
          }}
        >
          <Zap size={13} fill={T.pink} /> Global Twins Community Platform
        </motion.div>

        {/* headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "'OneNineNineFour-Regular', 'DM Sans', sans-serif",
            fontSize: 'clamp(42px, 7vw, 80px)',
            fontWeight: 800,
            lineHeight: 1.08,
            marginBottom: 24,
            background: `linear-gradient(135deg, ${T.white} 30%, ${T.pink} 65%, ${T.blue} 100%)`,
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Discover Your<br />
          <span style={{
            background: `linear-gradient(90deg, ${T.pink}, ${T.blue})`,
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>Twin Soul</span> Community
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ color: 'rgba(255,255,255,0.6)', fontSize: 18, lineHeight: 1.75, maxWidth: 600, margin: '0 auto 40px' }}
        >
          Join <strong style={{ color: T.pink }}>10,000+ twins worldwide</strong> who are forging unbreakable bonds, sharing unique stories, and celebrating the extraordinary connection only twins understand.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <motion.button
            whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            style={{
              background: `linear-gradient(135deg, ${T.pink}, ${T.blue})`,
              color: T.navy, border: 'none', borderRadius: 100,
              padding: '16px 32px', fontSize: 15, fontWeight: 800,
              cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8,
              boxShadow: `0 0 40px rgba(251,194,235,0.25)`,
            }}
          >
            <Sparkles size={16} strokeWidth={2.5} />
            Start Your Twin Journey
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            style={{
              background: 'transparent', color: T.white,
              border: `1.5px solid rgba(255,255,255,0.15)`,
              borderRadius: 100, padding: '16px 32px', fontSize: 15, fontWeight: 700,
              cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8,
              backdropFilter: 'blur(8px)',
            }}
          >
            <BookOpen size={16} strokeWidth={2} />
            Explore Stories
          </motion.button>
        </motion.div>

        {/* trust line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{ marginTop: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, color: 'rgba(255,255,255,0.35)', fontSize: 13 }}
        >
          <Shield size={14} color={T.blue} />
          Trusted by twins worldwide · Secure & Private
        </motion.div>
      </section>

      {/* ══════════════════════════════════════
          STATS ROW
      ══════════════════════════════════════ */}
      <section style={{ position: 'relative', zIndex: 10, padding: '0 24px 80px', maxWidth: 1000, margin: '0 auto' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: 16,
          background: 'rgba(255,255,255,0.03)', border: `1px solid ${T.border}`,
          borderRadius: 24, padding: '32px 24px',
          backdropFilter: 'blur(16px)',
        }}>
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{ textAlign: 'center', padding: '8px 0', borderRight: i < stats.length - 1 ? `1px solid ${T.border}` : 'none' }}
            >
              <s.icon size={18} color={s.color} style={{ marginBottom: 8 }} />
              <div style={{ fontSize: 36, fontWeight: 900, background: `linear-gradient(135deg, ${s.color}, white)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontFamily: "'OneNineNineFour-Regular', sans-serif" }}>
                <Counter target={s.val} suffix={s.suffix} />
              </div>
              <div style={{ color: T.muted, fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 4 }}>{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>



      {/* ══════════════════════════════════════
          USER JOURNEY  +  PROFILE CARD  (2-col)
      ══════════════════════════════════════ */}
      <section style={{ position: 'relative', zIndex: 10, padding: '0 24px 80px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 28 }}>

          {/* Journey */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              background: 'rgba(255,255,255,0.03)', border: `1px solid ${T.border}`,
              borderRadius: 28, padding: '36px 32px',
            }}
          >
            <div style={{ color: T.pink, fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>How It Works</div>
            <h3 style={{ fontFamily: "'OneNineNineFour-Regular', 'DM Sans', sans-serif", color: T.white, fontSize: 26, fontWeight: 800, marginBottom: 32 }}>Your Twin Journey</h3>
            <JourneyStep num={1} text="Create a joint twin profile or link two individual accounts." delay={0.1} />
            <JourneyStep num={2} text="Use Twin Finder to discover twins in your city, state, or globally." delay={0.2} />
            <JourneyStep num={3} text="Join interest-based Twin Circles and start connecting with your community." delay={0.3} />
            <JourneyStep num={4} text="Attend or host local meetups, talent shows, and global Twin Festivals." delay={0.4} />
            <motion.button
              whileHover={{ x: 4 }}
              style={{
                background: 'transparent', border: 'none', color: T.pink,
                fontWeight: 700, fontSize: 14, cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: 6, padding: 0, marginTop: 12,
              }}
            >
              Start now <ArrowRight size={15} />
            </motion.button>
          </motion.div>

          {/* Mock Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              background: 'rgba(255,255,255,0.03)', border: `1px solid ${T.border}`,
              borderRadius: 28, padding: '36px 32px', position: 'relative', overflow: 'hidden',
            }}
          >
            <div style={{ position: 'absolute', top: -40, right: -40, width: 160, height: 160, borderRadius: '50%', background: T.pink, opacity: 0.08, filter: 'blur(40px)' }} />

            <div style={{ color: T.blue, fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>Live Preview</div>
            <h3 style={{ fontFamily: "'OneNineNineFour-Regular', 'DM Sans', sans-serif", color: T.white, fontSize: 26, fontWeight: 800, marginBottom: 28 }}>Twin Profile</h3>

            {/* avatar row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
              {['F', 'G'].map((l, i) => (
                <div key={i} style={{
                  width: 54, height: 54, borderRadius: '50%',
                  background: `linear-gradient(135deg, ${i === 0 ? T.pink : T.blue}, ${T.navy})`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: T.white, fontWeight: 900, fontSize: 20,
                  border: `2px solid ${i === 0 ? T.pink : T.blue}44`,
                }}>{l}</div>
              ))}
              <div>
                <div style={{ color: T.white, fontWeight: 700, fontSize: 16 }}>Faith & Grace</div>
                <div style={{ color: T.muted, fontSize: 13, display: 'flex', alignItems: 'center', gap: 4 }}>
                  <MapPin size={11} /> Lagos, Nigeria
                </div>
              </div>
            </div>

            {/* tag chips */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
              {['Identical', 'Music', 'Events', 'Travel', 'Design'].map((tag, i) => (
                <span key={i} style={{
                  background: i % 2 === 0 ? 'rgba(251,194,235,0.12)' : 'rgba(166,192,238,0.12)',
                  color: i % 2 === 0 ? T.pink : T.blue,
                  border: `1px solid ${i % 2 === 0 ? 'rgba(251,194,235,0.25)' : 'rgba(166,192,238,0.25)'}`,
                  borderRadius: 100, padding: '5px 14px', fontSize: 12, fontWeight: 600,
                }}>{tag}</span>
              ))}
            </div>

            {/* mini stats */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10 }}>
              {[
                { icon: Users, val: '248', label: 'Friends' },
                { icon: Calendar, val: '12', label: 'Events' },
                { icon: MessageCircle, val: '5', label: 'Circles' },
              ].map((s, i) => (
                <div key={i} style={{
                  background: 'rgba(255,255,255,0.04)', borderRadius: 14, padding: '12px 8px',
                  textAlign: 'center', border: `1px solid ${T.border}`,
                }}>
                  <s.icon size={15} color={i % 2 === 0 ? T.pink : T.blue} style={{ marginBottom: 6 }} />
                  <div style={{ color: T.white, fontWeight: 800, fontSize: 16 }}>{s.val}</div>
                  <div style={{ color: T.muted, fontSize: 11 }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* online indicator */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 20 }}>
              <motion.div
                animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ width: 8, height: 8, borderRadius: '50%', background: '#4ade80' }}
              />
              <span style={{ color: T.muted, fontSize: 12 }}>Online · Last seen just now</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          ACTIVITY FEED BAND
      ══════════════════════════════════════ */}
      <section style={{ position: 'relative', zIndex: 10, padding: '0 24px 80px', maxWidth: 1100, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: 44 }}
        >
          <div style={{ color: T.pink, fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 14 }}>Live Activity</div>
          <h2 style={{ fontFamily: "'OneNineNineFour-Regular', 'DM Sans', sans-serif", fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 800, color: T.white, margin: 0 }}>What's Happening Now</h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
          {[
            { icon: Bell, text: 'Lagos Twin Meetup is trending', sub: '320 twins registered', color: T.pink },
            { icon: Mic2, text: 'Global Talent Show — Live', sub: 'Streaming now · 1.2K watching', color: T.blue },
            { icon: Camera, text: 'Look-Alike Contest results', sub: 'Winners announced today', color: T.pink },
            { icon: Music, text: 'Twin Beats playlist live', sub: 'Curated by 18 twin pairs', color: T.blue },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              style={{
                background: 'rgba(255,255,255,0.04)', border: `1px solid ${T.border}`,
                borderRadius: 18, padding: '20px 18px',
                display: 'flex', alignItems: 'center', gap: 14, cursor: 'pointer',
              }}
            >
              <div style={{
                width: 42, height: 42, borderRadius: 12, flexShrink: 0,
                background: `${item.color}22`, border: `1px solid ${item.color}33`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <item.icon size={18} color={item.color} />
              </div>
              <div>
                <div style={{ color: T.white, fontWeight: 600, fontSize: 14 }}>{item.text}</div>
                <div style={{ color: T.muted, fontSize: 12, marginTop: 3 }}>{item.sub}</div>
              </div>
              <ChevronRight size={16} color={T.muted} style={{ marginLeft: 'auto', flexShrink: 0 }} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════ */}
      <section style={{ position: 'relative', zIndex: 10, padding: '0 24px 80px', maxWidth: 1100, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: 44 }}
        >
          <div style={{ color: T.blue, fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 14 }}>Twin Spotlight</div>
          <h2 style={{ fontFamily: "'OneNineNineFour-Regular', 'DM Sans', sans-serif", fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 800, color: T.white, margin: 0 }}>Stories From Our Community</h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
          {testimonials.map((t, i) => <TestimonialCard key={i} t={t} delay={i * 0.1} />)}
        </div>
      </section>

      {/* ══════════════════════════════════════
          BOTTOM CTA BANNER
      ══════════════════════════════════════ */}
      <section style={{ position: 'relative', zIndex: 10, padding: '0 24px 100px', maxWidth: 900, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          style={{
            background: `linear-gradient(135deg, rgba(251,194,235,0.1) 0%, rgba(166,192,238,0.08) 100%)`,
            border: `1px solid rgba(251,194,235,0.2)`,
            borderRadius: 32, padding: '60px 40px',
            textAlign: 'center', position: 'relative', overflow: 'hidden',
          }}
        >
          <div style={{ position: 'absolute', top: -60, left: '50%', transform: 'translateX(-50%)', width: 300, height: 300, borderRadius: '50%', background: T.pink, opacity: 0.1, filter: 'blur(60px)' }} />

          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            style={{ fontSize: 48, marginBottom: 20 }}
          >
            <Heart size={48} color={T.pink} fill={T.pink} />
          </motion.div>

          <h2 style={{
            fontFamily: "'OneNineNineFour-Regular', 'DM Sans', sans-serif",
            fontSize: 'clamp(26px, 4vw, 44px)', fontWeight: 800, color: T.white,
            marginBottom: 16,
          }}>
            Your Mirror Soul<br />
            <span style={{ background: `linear-gradient(90deg, ${T.pink}, ${T.blue})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Is Waiting
            </span>
          </h2>

          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 17, lineHeight: 1.7, maxWidth: 500, margin: '0 auto 36px' }}>
            TwinRally is the world's first platform built exclusively for twins. Join the waitlist and be first when we launch.
          </p>

          {/* newsletter / CTA */}
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center' }}>
            <div style={{
              display: 'flex', background: 'rgba(255,255,255,0.07)',
              border: `1px solid rgba(255,255,255,0.12)`, borderRadius: 100,
              overflow: 'hidden', backdropFilter: 'blur(8px)',
            }}>
              <input
                placeholder="your@email.com"
                style={{
                  background: 'transparent', border: 'none', outline: 'none',
                  color: T.white, padding: '14px 20px', fontSize: 14, minWidth: 220,
                }}
              />
              <motion.button
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                style={{
                  background: `linear-gradient(135deg, ${T.pink}, ${T.blue})`,
                  color: T.navy, border: 'none', padding: '14px 24px',
                  fontWeight: 800, fontSize: 14, cursor: 'pointer',
                  borderRadius: 100, margin: 4,
                }}
              >
                Join Waitlist
              </motion.button>
            </div>
          </div>

          <div style={{ marginTop: 20, color: 'rgba(255,255,255,0.3)', fontSize: 12 }}>
            No spam · Unsubscribe anytime · 100% free
          </div>
        </motion.div>
      </section>

    </div>
  )
}

export default TwinCommunity