import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  Mail, MessageCircle, Phone, MapPin, Send, ChevronDown,
  ChevronUp, ArrowRight, Users, Calendar, Zap, Shield,
  Heart, Globe, Star, CheckCircle
} from 'lucide-react';
import { Header } from '@/components/HomePage/Header';

/* ─── Brand Tokens ─── */
const NAVY   = '#040E29';
const PINK   = '#FBC2EB';
const BLUE   = '#A6C0EE';
const PINK_D = '#E87CC8';
const BLUE_D = '#6B98DC';
const CREAM  = '#FAF7FF';
const WARM   = '#F5F0FB';

/* ─── Reusable animated section wrapper ─── */
function FadeUp({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Floating blob ─── */
function Blob({ style }) {
  return (
    <div
      style={{
        position: 'absolute',
        borderRadius: '60% 40% 70% 30% / 50% 60% 40% 70%',
        filter: 'blur(72px)',
        opacity: 0.35,
        pointerEvents: 'none',
        ...style,
      }}
    />
  );
}

/* ─── Pill badge ─── */
function Pill({ children, color = PINK }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      background: color + '30',
      color: color === PINK ? PINK_D : BLUE_D,
      fontWeight: 700, fontSize: 12, letterSpacing: '0.08em',
      textTransform: 'uppercase', borderRadius: 999,
      padding: '5px 14px', border: `1.5px solid ${color}60`,
    }}>
      {children}
    </span>
  );
}

/* ─── Section heading ─── */
function SectionHeading({ pill, title, subtitle, align = 'center' }) {
  return (
    <div style={{ textAlign: align, marginBottom: 56 }}>
      {pill && <div style={{ marginBottom: 16 }}><Pill>{pill}</Pill></div>}
      <h2 style={{
        fontFamily: "'Playfair Display', serif",
        fontWeight: 800, fontSize: 'clamp(28px, 4vw, 44px)',
        color: NAVY, margin: '0 0 16px',
        lineHeight: 1.15,
      }}>{title}</h2>
      {subtitle && <p style={{
        fontSize: 17, color: '#64607A', maxWidth: 580,
        margin: align === 'center' ? '0 auto' : '0',
        lineHeight: 1.7,
      }}>{subtitle}</p>}
    </div>
  );
}

/* ─── Contact Method Card ─── */
function ContactCard({ icon: Icon, label, value, sub, href, accent, delay }) {
  const [hov, setHov] = useState(false);
  return (
    <FadeUp delay={delay}>
      <motion.a
        href={href}
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        animate={{ y: hov ? -6 : 0 }}
        transition={{ duration: 0.25 }}
        style={{
          display: 'block', textDecoration: 'none',
          background: hov ? '#fff' : CREAM,
          border: `1.5px solid ${hov ? accent : accent + '50'}`,
          borderRadius: 20, padding: '32px 28px',
          boxShadow: hov ? `0 20px 48px ${accent}25` : '0 2px 12px rgba(4,14,41,0.06)',
          transition: 'all 0.3s ease',
          position: 'relative', overflow: 'hidden',
        }}
      >
        <div style={{
          width: 52, height: 52, borderRadius: 14,
          background: `linear-gradient(135deg, ${accent}30, ${accent}15)`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          marginBottom: 20, border: `1.5px solid ${accent}40`,
        }}>
          <Icon size={22} color={accent === PINK ? PINK_D : BLUE_D} strokeWidth={2} />
        </div>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: accent === PINK ? PINK_D : BLUE_D, marginBottom: 6 }}>{label}</div>
        <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 17, color: NAVY, marginBottom: 4 }}>{value}</div>
        <div style={{ fontSize: 13, color: '#9490A8' }}>{sub}</div>
        <div style={{
          position: 'absolute', right: 20, bottom: 20,
          opacity: hov ? 1 : 0, transition: 'opacity 0.25s',
        }}>
          <ArrowRight size={18} color={PINK_D} />
        </div>
      </motion.a>
    </FadeUp>
  );
}

/* ─── FAQ Item ─── */
function FAQItem({ q, a, delay }) {
  const [open, setOpen] = useState(false);
  return (
    <FadeUp delay={delay}>
      <div
        onClick={() => setOpen(!open)}
        style={{
          background: open ? '#fff' : CREAM,
          border: `1.5px solid ${open ? PINK + '70' : '#E8E2F5'}`,
          borderRadius: 16, overflow: 'hidden',
          cursor: 'pointer', transition: 'all 0.25s ease',
          boxShadow: open ? `0 8px 32px ${PINK}20` : 'none',
        }}
      >
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '22px 28px',
        }}>
          <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 16, color: NAVY, paddingRight: 16 }}>{q}</span>
          <div style={{
            width: 32, height: 32, borderRadius: 8, flexShrink: 0,
            background: open ? PINK + '30' : '#F0EBF9',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'all 0.25s',
          }}>
            {open
              ? <ChevronUp size={16} color={PINK_D} />
              : <ChevronDown size={16} color='#9490A8' />}
          </div>
        </div>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{ overflow: 'hidden' }}
            >
              <div style={{ padding: '0 28px 24px', fontSize: 15, color: '#64607A', lineHeight: 1.7 }}>{a}</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </FadeUp>
  );
}

/* ─── Floating label input ─── */
function Field({ label, type = 'text', name, value, onChange, multiline }) {
  const [focused, setFocused] = useState(false);
  const active = focused || value;
  const Tag = multiline ? 'textarea' : 'input';
  return (
    <div style={{ position: 'relative', marginBottom: 6 }}>
      <label style={{
        position: 'absolute', left: 16,
        top: active ? 8 : (multiline ? 18 : '50%'),
        transform: active ? 'none' : (multiline ? 'none' : 'translateY(-50%)'),
        fontSize: active ? 11 : 15,
        fontWeight: active ? 700 : 400,
        color: focused ? PINK_D : '#9490A8',
        letterSpacing: active ? '0.07em' : '0',
        textTransform: active ? 'uppercase' : 'none',
        transition: 'all 0.2s ease',
        pointerEvents: 'none', zIndex: 1,
      }}>{label}</label>
      <Tag
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        rows={multiline ? 5 : undefined}
        style={{
          width: '100%', boxSizing: 'border-box',
          padding: active ? '24px 16px 10px' : '16px',
          background: focused ? '#fff' : CREAM,
          border: `1.5px solid ${focused ? PINK : '#E8E2F5'}`,
          borderRadius: 14, fontSize: 15, color: NAVY,
          outline: 'none', fontFamily: 'inherit',
          resize: multiline ? 'none' : undefined,
          transition: 'all 0.2s ease',
          boxShadow: focused ? `0 0 0 3px ${PINK}25` : 'none',
          minHeight: multiline ? 140 : 'auto',
        }}
      />
    </div>
  );
}

/* ─── Stat chip ─── */
function StatChip({ icon: Icon, label, value, accent }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 12,
      background: '#fff', border: `1.5px solid ${accent}40`,
      borderRadius: 14, padding: '14px 20px',
      boxShadow: '0 2px 16px rgba(4,14,41,0.06)',
    }}>
      <div style={{
        width: 40, height: 40, borderRadius: 10,
        background: `linear-gradient(135deg, ${accent}30, ${accent}10)`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <Icon size={18} color={accent === PINK ? PINK_D : BLUE_D} />
      </div>
      <div>
        <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: 20, color: NAVY }}>{value}</div>
        <div style={{ fontSize: 12, color: '#9490A8', fontWeight: 500 }}>{label}</div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════════ */
export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return;
    setSending(true);
    await new Promise(r => setTimeout(r, 1400));
    setSending(false);
    setSent(true);
  };

  const contacts = [
    { icon: Mail,           label: 'Email',      value: 'hello@twinrally.com',   sub: 'Reply within 24 hours',      href: 'mailto:hello@twinrally.com', accent: PINK },
    { icon: MessageCircle,  label: 'WhatsApp',   value: '+1 (555) 123-TWIN',     sub: 'Chat with us anytime',        href: '#',                         accent: BLUE },
    { icon: Phone,          label: 'Call Us',    value: '+1 (555) 123-8946',     sub: 'Mon–Fri, 9am – 6pm',         href: 'tel:+15551238946',           accent: PINK },
    { icon: MapPin,         label: 'Location',   value: 'Twin HQ, Lagos',        sub: 'Come say hello',              href: '#',                         accent: BLUE },
  ];

  const faqs = [
    { q: 'How do I join TwinRally?', a: 'Sign up on our platform, create your twin profile (individual or joint), and start discovering twins worldwide in seconds.' },
    { q: 'Is TwinRally free to use?', a: 'Yes! Our Freemium plan includes community access, Twin Finder, and basic messaging. Premium unlocks event hosting, advanced analytics, and more.' },
    { q: 'Can I host my own twin event?', a: 'Absolutely! Any registered user can create events with ticketing, RSVP management, live streaming support, and global promotion tools.' },
    { q: 'How does twin verification work?', a: 'We have a simple, privacy-respecting verification flow that helps keep the community authentic and safe for all members.' },
    { q: 'Is TwinRally available outside Nigeria?', a: 'Yes — TwinRally is a global platform with multilingual support. We have members across Africa, Europe, the Americas, and Asia.' },
  ];

  const reasons = [
    { icon: Zap,    label: 'Quick Response',   desc: 'We reply within 24 hours, guaranteed.' },
    { icon: Shield, label: 'Privacy First',    desc: 'Your data is never sold or shared.' },
    { icon: Heart,  label: 'Human Support',    desc: 'Real people, not bots — from the twin community.' },
    { icon: Globe,  label: 'Always Available', desc: 'Our help center is live 24/7 worldwide.' },
  ];

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: CREAM, minHeight: '100vh', color: NAVY, overflowX: 'hidden' }}>

      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700;1,900&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,700;1,400&display=swap');
        *, *::before, *::after { box-sizing: border-box; }
        ::selection { background: ${PINK}60; color: ${NAVY}; }
        a { text-decoration: none; }

        @keyframes float1 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-22px) rotate(6deg); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(18px) rotate(-5deg); }
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .spin-slow { animation: spin-slow 18s linear infinite; }
        @keyframes pulse-ring {
          0%, 100% { transform: scale(1); opacity: 0.4; }
          50% { transform: scale(1.12); opacity: 0.15; }
        }
      `}</style>

      {/* ── HEADER ── */}
      <Header />

      {/* ── HERO ── */}
      <section style={{ position: 'relative', overflow: 'hidden', padding: '120px 24px 80px', minHeight: 680, display: 'flex', alignItems: 'center' }}>
        <Blob style={{ width: 520, height: 520, background: PINK, top: -120, right: -100, animation: 'float1 9s ease-in-out infinite' }} />
        <Blob style={{ width: 380, height: 380, background: BLUE, bottom: -80, left: -60, animation: 'float2 11s ease-in-out infinite' }} />
        <Blob style={{ width: 200, height: 200, background: PINK, top: '40%', left: '35%', animation: 'float1 7s ease-in-out infinite 2s' }} />

        <div style={{ maxWidth: 1160, margin: '0 auto', width: '100%', position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>

            {/* Left */}
            <div>
              <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <Pill color={BLUE}><Star size={11} /> Get In Touch</Pill>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 900, fontSize: 'clamp(40px, 5.5vw, 72px)',
                  color: NAVY, margin: '20px 0 20px', lineHeight: 1.08,
                }}
              >
                We'd love<br />
                <em style={{ fontStyle: 'italic', background: `linear-gradient(135deg, ${PINK_D}, ${BLUE_D})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 700 }}>to hear</em><br />
                from you.
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
                style={{ fontSize: 18, color: '#64607A', lineHeight: 1.75, marginBottom: 36 }}>
                Questions about TwinRally? Want to share your twin story or partner with us? Our team is always here.
              </motion.p>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
                style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                <motion.button
                  whileHover={{ scale: 1.04, boxShadow: `0 12px 36px ${PINK}60` }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    background: `linear-gradient(135deg, ${PINK_D}, ${BLUE_D})`,
                    color: '#fff', border: 'none', borderRadius: 999,
                    padding: '14px 30px', fontWeight: 700, fontSize: 15,
                    cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8,
                    fontFamily: 'inherit',
                  }}
                >
                  Join Community <ArrowRight size={16} />
                </motion.button>
                <motion.a href="#contact-form"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    background: '#fff', color: NAVY, borderRadius: 999,
                    padding: '14px 30px', fontWeight: 700, fontSize: 15,
                    border: `1.5px solid #E0D9F5`, display: 'flex', alignItems: 'center', gap: 8,
                    boxShadow: '0 2px 12px rgba(4,14,41,0.07)',
                  }}
                >
                  Send Message <Send size={15} />
                </motion.a>
              </motion.div>
            </div>

            {/* Right – stats card stack */}
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.15 }}
              style={{ position: 'relative' }}>

              {/* Big card */}
              <div style={{
                background: `linear-gradient(145deg, ${NAVY}, #0D1F52)`,
                borderRadius: 28, padding: 36, color: '#fff',
                boxShadow: `0 32px 80px ${NAVY}40`,
                position: 'relative', overflow: 'hidden',
              }}>
                <Blob style={{ width: 200, height: 200, background: PINK, top: -60, right: -60, opacity: 0.15 }} />
                <div style={{ fontSize: 13, fontWeight: 600, color: BLUE + 'CC', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 10 }}>TwinRally Community</div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: 40, marginBottom: 6 }}>50,000+</div>
                <div style={{ fontSize: 15, color: '#C5C0DC', marginBottom: 28 }}>Twins connected worldwide</div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  {[
                    { v: '120+', l: 'Countries', icon: Globe },
                    { v: '3,400', l: 'Events Hosted', icon: Calendar },
                    { v: '98%', l: 'Satisfaction', icon: Star },
                    { v: '24/7', l: 'Support', icon: Shield },
                  ].map(({ v, l, icon: Icon }) => (
                    <div key={l} style={{
                      background: 'rgba(255,255,255,0.07)', borderRadius: 12,
                      padding: '14px 16px', border: '1px solid rgba(255,255,255,0.1)',
                    }}>
                      <Icon size={14} color={PINK} style={{ marginBottom: 6 }} />
                      <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: 22 }}>{v}</div>
                      <div style={{ fontSize: 12, color: '#9490A8' }}>{l}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  position: 'absolute', top: -18, left: -20,
                  background: '#fff', borderRadius: 16,
                  padding: '12px 18px', boxShadow: '0 8px 32px rgba(4,14,41,0.15)',
                  display: 'flex', alignItems: 'center', gap: 10,
                  border: `1.5px solid ${PINK}40`,
                }}
              >
                <div style={{ width: 36, height: 36, borderRadius: 10, background: PINK + '30', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Users size={18} color={PINK_D} />
                </div>
                <div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: 16, color: NAVY }}>New twins</div>
                  <div style={{ fontSize: 12, color: '#9490A8' }}>+124 this week</div>
                </div>
              </motion.div>

              {/* Bottom badge */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                style={{
                  position: 'absolute', bottom: -18, right: -16,
                  background: '#fff', borderRadius: 16,
                  padding: '12px 18px', boxShadow: '0 8px 32px rgba(4,14,41,0.15)',
                  display: 'flex', alignItems: 'center', gap: 10,
                  border: `1.5px solid ${BLUE}50`,
                }}
              >
                <CheckCircle size={20} color={BLUE_D} />
                <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 14, color: NAVY }}>Verified Community</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── MARQUEE STRIP ── */}
      <div style={{ background: NAVY, overflow: 'hidden', padding: '16px 0', borderTop: `2px solid ${PINK}30`, borderBottom: `2px solid ${BLUE}30` }}>
        <div style={{ display: 'flex', gap: 48, animation: 'marquee 22s linear infinite', whiteSpace: 'nowrap', width: 'max-content' }}>
          {[...Array(2)].map((_, i) =>
            ['Twin Finder', 'Live Events', 'Global Festivals', 'Twin Stories', 'Community Hub', 'Messaging', 'Twin Challenges', 'Premium Plans'].map((t, j) => (
              <span key={`${i}-${j}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 12, fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: j % 2 === 0 ? PINK + 'CC' : BLUE + 'CC' }}>
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: j % 2 === 0 ? PINK : BLUE, display: 'inline-block' }} />
                {t}
              </span>
            ))
          )}
        </div>
      </div>

      {/* ── CONTACT CARDS ── */}
      <section style={{ padding: '96px 24px', position: 'relative' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <FadeUp>
            <SectionHeading
              pill="Reach Out"
              title="Multiple Ways to Connect"
              subtitle="Choose your preferred channel — we're available across email, phone, WhatsApp, and in person."
            />
          </FadeUp>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
            {contacts.map((c, i) => <ContactCard key={i} {...c} delay={i * 0.08} />)}
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM ── */}
      <section id="contact-form" style={{ padding: '0 24px 96px', position: 'relative' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 64, alignItems: 'start' }}>

            {/* Left – why reach out */}
            <FadeUp>
              <Pill color={BLUE}><Send size={11} /> Send a Message</Pill>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: 'clamp(28px, 3.5vw, 42px)', color: NAVY, margin: '20px 0 20px', lineHeight: 1.15 }}>
                Tell us what's on your mind
              </h2>
              <p style={{ fontSize: 16, color: '#64607A', lineHeight: 1.75, marginBottom: 40 }}>
                Whether you're a twin looking to connect, a brand wanting to partner, or just curious about the platform — we'd love to chat.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {reasons.map(({ icon: Icon, label, desc }, i) => (
                  <motion.div key={i}
                    initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                    style={{
                      display: 'flex', alignItems: 'flex-start', gap: 16,
                      background: '#fff', border: '1.5px solid #EDE8F8',
                      borderRadius: 14, padding: '18px 20px',
                    }}
                  >
                    <div style={{ width: 40, height: 40, borderRadius: 10, background: `linear-gradient(135deg, ${i % 2 === 0 ? PINK : BLUE}30, ${i % 2 === 0 ? PINK : BLUE}15)`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon size={18} color={i % 2 === 0 ? PINK_D : BLUE_D} />
                    </div>
                    <div>
                      <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 15, color: NAVY, marginBottom: 4 }}>{label}</div>
                      <div style={{ fontSize: 13, color: '#9490A8', lineHeight: 1.6 }}>{desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </FadeUp>

            {/* Right – form */}
            <FadeUp delay={0.1}>
              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div key="success"
                    initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                    style={{
                      background: '#fff', border: `1.5px solid ${PINK}50`,
                      borderRadius: 24, padding: '60px 40px', textAlign: 'center',
                      boxShadow: `0 20px 60px ${PINK}20`,
                    }}
                  >
                    <div style={{ width: 72, height: 72, borderRadius: '50%', background: `linear-gradient(135deg, ${PINK}, ${BLUE})`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                      <CheckCircle size={34} color="#fff" />
                    </div>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: 26, color: NAVY, marginBottom: 12 }}>Message Sent!</h3>
                    <p style={{ fontSize: 16, color: '#64607A', lineHeight: 1.7 }}>Thanks for reaching out. We'll get back to you within 24 hours.</p>
                    <motion.button onClick={() => setSent(false)} whileHover={{ scale: 1.03 }}
                      style={{ marginTop: 28, background: `linear-gradient(135deg, ${PINK_D}, ${BLUE_D})`, color: '#fff', border: 'none', borderRadius: 999, padding: '12px 28px', fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit', fontSize: 15 }}>
                      Send Another
                    </motion.button>
                  </motion.div>
                ) : (
                  <motion.div key="form"
                    style={{
                      background: '#fff', border: '1.5px solid #EDE8F8',
                      borderRadius: 24, padding: '40px', position: 'relative', overflow: 'hidden',
                      boxShadow: '0 8px 40px rgba(4,14,41,0.07)',
                    }}
                  >
                    <Blob style={{ width: 180, height: 180, background: PINK, top: -60, right: -60, opacity: 0.12 }} />
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 18, position: 'relative', zIndex: 1 }}>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                        <Field label="Full Name" name="name" value={form.name} onChange={handleChange} />
                        <Field label="Email Address" type="email" name="email" value={form.email} onChange={handleChange} />
                      </div>
                      <Field label="Subject" name="subject" value={form.subject} onChange={handleChange} />
                      <Field label="Your Message" name="message" value={form.message} onChange={handleChange} multiline />

                      <motion.button
                        onClick={handleSubmit}
                        disabled={sending}
                        whileHover={{ scale: 1.02, boxShadow: `0 12px 36px ${PINK}50` }}
                        whileTap={{ scale: 0.98 }}
                        style={{
                          background: `linear-gradient(135deg, ${PINK_D}, ${BLUE_D})`,
                          color: '#fff', border: 'none', borderRadius: 14,
                          padding: '16px', fontWeight: 700, fontSize: 16,
                          cursor: sending ? 'not-allowed' : 'pointer',
                          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                          fontFamily: 'inherit', opacity: sending ? 0.75 : 1,
                          transition: 'opacity 0.2s',
                        }}
                      >
                        {sending ? (
                          <>
                            <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }} style={{ width: 20, height: 20, border: '2px solid rgba(255,255,255,0.4)', borderTopColor: '#fff', borderRadius: '50%' }} />
                            Sending…
                          </>
                        ) : (
                          <><Send size={18} /> Send Message</>
                        )}
                      </motion.button>
                      <p style={{ fontSize: 12, color: '#9490A8', textAlign: 'center' }}>
                        By submitting, you agree to our privacy policy. We never sell your data.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: '0 24px 96px', position: 'relative' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <FadeUp>
            <SectionHeading
              pill="FAQ"
              title="Frequently Asked Questions"
              subtitle="Quick answers to things our community asks most."
            />
          </FadeUp>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {faqs.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} delay={i * 0.07} />)}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section style={{ padding: '0 24px 96px' }}>
        <FadeUp>
          <div style={{
            maxWidth: 1160, margin: '0 auto',
            background: `linear-gradient(135deg, ${NAVY} 0%, #0D1F52 60%, #1a0940 100%)`,
            borderRadius: 32, padding: '64px 48px', position: 'relative', overflow: 'hidden',
            textAlign: 'center',
          }}>
            <Blob style={{ width: 400, height: 400, background: PINK, top: -150, right: -100, opacity: 0.18 }} />
            <Blob style={{ width: 300, height: 300, background: BLUE, bottom: -100, left: -80, opacity: 0.15 }} />

            {/* Decorative ring */}
            <div style={{ position: 'absolute', width: 300, height: 300, borderRadius: '50%', border: `1px solid ${PINK}20`, top: '50%', left: '50%', transform: 'translate(-50%, -50%)', animation: 'pulse-ring 4s ease-in-out infinite' }} />
            <div style={{ position: 'absolute', width: 200, height: 200, borderRadius: '50%', border: `1px solid ${BLUE}20`, top: '50%', left: '50%', transform: 'translate(-50%, -50%)', animation: 'pulse-ring 4s ease-in-out infinite 1s' }} />

            <div style={{ position: 'relative', zIndex: 2 }}>
              <Pill color={PINK}><Heart size={11} /> Join TwinRally</Pill>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: 'clamp(30px, 4vw, 52px)', color: '#fff', margin: '20px 0 18px', lineHeight: 1.1 }}>
                Ready to find your<br />
                <em style={{ fontStyle: 'italic', fontWeight: 700, background: `linear-gradient(90deg, ${PINK}, ${BLUE})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  twin community?
                </em>
              </h2>
              <p style={{ fontSize: 17, color: '#C5C0DC', marginBottom: 36, lineHeight: 1.7 }}>
                Join 50,000+ twins across 120+ countries. Free to start, always.
              </p>
              <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
                <motion.button whileHover={{ scale: 1.05, boxShadow: `0 16px 48px ${PINK}50` }} whileTap={{ scale: 0.97 }}
                  style={{ background: `linear-gradient(135deg, ${PINK_D}, ${BLUE_D})`, color: '#fff', border: 'none', borderRadius: 999, padding: '16px 36px', fontWeight: 700, fontSize: 16, cursor: 'pointer', fontFamily: 'inherit', display: 'flex', alignItems: 'center', gap: 8 }}>
                  Get Started Free <ArrowRight size={18} />
                </motion.button>
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
                  style={{ background: 'rgba(255,255,255,0.08)', color: '#fff', border: '1.5px solid rgba(255,255,255,0.2)', borderRadius: 999, padding: '16px 36px', fontWeight: 700, fontSize: 16, cursor: 'pointer', fontFamily: 'inherit', backdropFilter: 'blur(10px)' }}>
                  Download App
                </motion.button>
              </div>
            </div>
          </div>
        </FadeUp>
      </section>

    </div>
  );
}