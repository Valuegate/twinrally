import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Mail, Phone, MapPin,
  Facebook, Twitter, Instagram, Linkedin, Youtube,
  ArrowRight, CheckCircle, Heart
} from 'lucide-react'

const T = {
  navy: '#040E28',
  pink: '#fbc2eb',
  blue: '#a6c0ee',
  border: 'rgba(255,255,255,0.08)',
  muted: 'rgba(255,255,255,0.4)',
  sub: 'rgba(255,255,255,0.6)',
}

const footerSections = [
  {
    title: 'Platform',
    links: [
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Download App', href: '#download' },
      { name: 'Twin Finder', href: '#twin-finder' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Blog & Insights', href: '/blog' },
      { name: "FAQ's", href: '/faq' },
      { name: 'Help Center', href: '/help' },
      { name: 'Contact Support', href: '/contact' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About TwinRally', href: '/about' },
      { name: 'Our Mission', href: '/mission' },
      { name: 'Our Team', href: '/team' },
      { name: 'Values', href: '/values' },
    ],
  },
]

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/twinrally' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/twinrally' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/twinrally' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/twinrally' },
  { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/twinrally' },
]

const contactInfo = [
  { icon: Mail, text: 'hello@twinrally.com', href: 'mailto:hello@twinrally.com' },
  { icon: Phone, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
  { icon: MapPin, text: 'Global Platform', href: '#' },
]

const Footer = () => {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = () => {
    if (email.trim()) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 4000)
    }
  }

  return (
    <footer
      style={{
        background: T.navy,
        borderTop: `1px solid ${T.border}`,
        position: 'relative',
        overflow: 'hidden',
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

      {/* Ambient glows */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: 0, left: '15%', width: 400, height: 400, borderRadius: '50%', background: T.pink, opacity: 0.05, filter: 'blur(100px)' }} />
        <div style={{ position: 'absolute', bottom: 0, right: '15%', width: 400, height: 400, borderRadius: '50%', background: T.blue, opacity: 0.05, filter: 'blur(100px)' }} />
      </div>

      <div style={{ position: 'relative', zIndex: 10, maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>

        {/* ── TOP: Brand + Nav ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 48,
          padding: '72px 0 56px',
          borderBottom: `1px solid ${T.border}`,
        }}>

          {/* Brand col */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ gridColumn: 'span 1' }}
          >
            {/* Logo */}
            <img
              src="/twinrally_lg_01.png"
              alt="TwinRally"
              style={{ height: 44, width: 'auto', marginBottom: 20, objectFit: 'contain' }}
            />

            <p style={{ color: T.sub, fontSize: 14, lineHeight: 1.75, maxWidth: 280, marginBottom: 28 }}>
              The global platform connecting twins worldwide through shared experiences, celebrations, and lifelong bonds.
            </p>

            {/* Contact */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {contactInfo.map((c, i) => (
                <a
                  key={i}
                  href={c.href}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 10,
                    color: T.muted, textDecoration: 'none', fontSize: 13,
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = T.pink}
                  onMouseLeave={e => e.currentTarget.style.color = T.muted}
                >
                  <c.icon size={14} style={{ flexShrink: 0 }} />
                  {c.text}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Nav cols */}
          {footerSections.map((section, si) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * (si + 1) }}
            >
              <h4 style={{
                color: 'white', fontWeight: 700, fontSize: 13,
                letterSpacing: '0.08em', textTransform: 'uppercase',
                marginBottom: 20,
              }}>
                {section.title}
              </h4>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                {section.links.map((link, li) => (
                  <li key={li}>
                    <a
                      href={link.href}
                      style={{
                        color: T.muted, textDecoration: 'none', fontSize: 14,
                        transition: 'color 0.2s, padding-left 0.2s',
                        display: 'inline-block',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.color = T.pink; e.currentTarget.style.paddingLeft = '4px' }}
                      onMouseLeave={e => { e.currentTarget.style.color = T.muted; e.currentTarget.style.paddingLeft = '0px' }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* ── MIDDLE: Newsletter ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            padding: '48px 0',
            borderBottom: `1px solid ${T.border}`,
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 32,
          }}
        >
          {/* Copy */}
          <div>
            <h3 style={{
              fontFamily: "'OneNineNineFour-Regular', 'DM Sans', sans-serif",
              fontSize: 22, fontWeight: 800, color: 'white', marginBottom: 6,
            }}>
              Stay Connected
            </h3>
            <p style={{ color: T.muted, fontSize: 14, margin: 0 }}>
              Twin festivals, platform updates &amp; community stories — in your inbox.
            </p>
          </div>

          {/* Form */}
          <AnimatePresence mode="wait">
            {!subscribed ? (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}
              >
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  background: 'rgba(255,255,255,0.05)',
                  border: `1px solid rgba(255,255,255,0.1)`,
                  borderRadius: 100, padding: '0 20px',
                  backdropFilter: 'blur(8px)',
                }}>
                  <Mail size={14} color={T.muted} />
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && handleSubscribe()}
                    placeholder="your@email.com"
                    style={{
                      background: 'transparent', border: 'none', outline: 'none',
                      color: 'white', fontSize: 14, padding: '13px 0', width: 220,
                    }}
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleSubscribe}
                  style={{
                    background: `linear-gradient(135deg, ${T.pink}, ${T.blue})`,
                    color: T.navy, border: 'none', borderRadius: 100,
                    padding: '13px 24px', fontSize: 14, fontWeight: 700,
                    cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6,
                    boxShadow: `0 0 24px rgba(251,194,235,0.2)`,
                  }}
                >
                  Subscribe <ArrowRight size={14} strokeWidth={2.5} />
                </motion.button>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  background: 'rgba(166,192,238,0.1)',
                  border: `1px solid rgba(166,192,238,0.25)`,
                  borderRadius: 100, padding: '13px 24px',
                  color: T.blue, fontSize: 14, fontWeight: 600,
                }}
              >
                <CheckCircle size={16} /> You're on the list!
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* ── BOTTOM: Copyright + Social ── */}
        <div style={{
          padding: '28px 0',
          display: 'flex', flexWrap: 'wrap',
          alignItems: 'center', justifyContent: 'space-between',
          gap: 20,
        }}>

          {/* Legal */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 6 }}>
            <span style={{ color: T.muted, fontSize: 13 }}>
              © {new Date().getFullYear()} All rights reserved by TwinRally. A Product by ValueGate Consulting.
            </span>
            <span style={{ color: T.border, fontSize: 13 }}>·</span>
            {['Privacy Policy', 'Terms of Service', 'Cookies'].map((l, i) => (
              <React.Fragment key={l}>
                <a
                  href="#"
                  style={{ color: T.muted, fontSize: 13, textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = T.pink}
                  onMouseLeave={e => e.currentTarget.style.color = T.muted}
                >
                  {l}
                </a>
                {i < 2 && <span style={{ color: T.border, fontSize: 13 }}>·</span>}
              </React.Fragment>
            ))}
          </div>

          {/* Socials */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            {socialLinks.map((s, i) => (
              <motion.a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={s.name}
                whileHover={{ scale: 1.12, y: -2 }}
                style={{
                  width: 36, height: 36, borderRadius: 10,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'rgba(255,255,255,0.05)',
                  border: `1px solid ${T.border}`,
                  color: T.muted, textDecoration: 'none',
                  transition: 'color 0.2s, background 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = T.pink; e.currentTarget.style.background = 'rgba(251,194,235,0.1)' }}
                onMouseLeave={e => { e.currentTarget.style.color = T.muted; e.currentTarget.style.background = 'rgba(255,255,255,0.05)' }}
              >
                <s.icon size={15} />
              </motion.a>
            ))}
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer