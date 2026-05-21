import React, { useContext, useState, useEffect } from "react";
import { IoMdMenu } from "react-icons/io";
import { navItems } from "@/data/dashboard/navItem";
import { ContentContext } from "../UseContext/context";
import { FeaturesForDashboard } from "@/components/DashBoard/FeaturesForDashboard";
import { Friend } from "@/components/DashBoard/Friend";
import { Settings } from "@/components/DashBoard/Settings";
import { Events } from "@/components/DashBoard/Events";
import { CommPage } from "@/components/DashBoard/CommPage";
import { Message } from "@/components/DashBoard/Message";
import { NotificationsPage } from "@/components/DashBoard/NotificationPage";
import { Sun, Moon, LogOut, Bell, Search, ChevronRight } from "lucide-react";

export const DashBoardPage = () => {
  const { handleSelect, selectedItem } = useContext(ContentContext);
  const [mobile, setMobile] = useState(false);
  const [dark, setDark] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);

  // close mobile drawer on resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMobile(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const d = dark ? theme.dark : theme.light;

  const renderContent = () => (
    <>
      {selectedItem === "dashboard"     && <FeaturesForDashboard />}
      {selectedItem === "friends"       && <Friend />}
      {selectedItem === "community"     && <CommPage />}
      {selectedItem === "settings"      && <Settings />}
      {selectedItem === "events"        && <Events />}
      {selectedItem === "messages"      && <Message />}
      {selectedItem === "notifications" && <NotificationsPage />}
    </>
  );

  const currentLabel = navItems.find(n => n.id === selectedItem)?.label || "Dashboard";

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&family=Playfair+Display:ital,wght@0,700;1,700&display=swap');

        .db-root *, .db-root *::before, .db-root *::after { box-sizing: border-box; }
        .db-root { font-family: 'DM Sans', sans-serif; transition: background 0.3s, color 0.3s; }

        /* ── SIDEBAR ── */
        .db-sidebar {
          position: fixed; top: 0; left: 0;
          width: 240px; height: 100vh;
          display: flex; flex-direction: column;
          transition: background 0.3s, border-color 0.3s;
          z-index: 40;
          overflow: hidden;
        }
        .db-sidebar-logo {
          display: flex; align-items: center; gap: 10px;
          padding: 1.4rem 1.4rem 1rem;
          flex-shrink: 0;
        }
        .db-logo-img { width: 34px; height: 34px; object-fit: contain; flex-shrink: 0; }
        .db-logo-txt {
          font-family: 'Playfair Display', serif;
          font-size: 1.15rem; font-weight: 700; letter-spacing: -0.3px;
        }
        .db-sidebar-scroll {
          flex: 1; overflow-y: auto; padding: 0.5rem 0.75rem 1rem;
        }
        .db-sidebar-scroll::-webkit-scrollbar { width: 3px; }
        .db-sidebar-scroll::-webkit-scrollbar-thumb { background: rgba(166,192,238,0.2); border-radius: 2px; }

        .db-nav-section { margin-bottom: 1.2rem; }
        .db-nav-label {
          font-size: 0.6rem; font-weight: 700; letter-spacing: 0.12em;
          text-transform: uppercase; padding: 0 0.6rem; margin-bottom: 4px;
          opacity: 0.35;
        }
        .db-nav-item {
          display: flex; align-items: center; gap: 10px;
          padding: 0.55rem 0.75rem; border-radius: 10px;
          cursor: pointer; transition: all 0.18s; position: relative;
          margin-bottom: 2px; font-size: 0.875rem; font-weight: 500;
        }
        .db-nav-item:hover { transform: translateX(2px); }
        .db-nav-item.active::before {
          content: '';
          position: absolute; left: 0; top: 20%; bottom: 20%;
          width: 3px; border-radius: 0 2px 2px 0;
          background: #fbc2eb;
        }
        .db-badge {
          margin-left: auto; font-size: 0.6rem; font-weight: 700;
          padding: 2px 7px; border-radius: 100px;
          background: #fbc2eb; color: #3a0020;
        }

        .db-sidebar-footer {
          padding: 0.75rem; border-top: 1px solid;
          flex-shrink: 0;
        }
        .db-user-row {
          display: flex; align-items: center; gap: 10px;
          padding: 0.6rem 0.5rem; border-radius: 10px;
          cursor: pointer; transition: background 0.18s;
        }
        .db-avatar {
          width: 34px; height: 34px; border-radius: 50%;
          background: linear-gradient(135deg, #fbc2eb, #a6c0ee);
          display: flex; align-items: center; justify-content: center;
          font-size: 0.8rem; font-weight: 700; flex-shrink: 0;
          color: #3a0020;
        }
        .db-user-name { font-size: 0.82rem; font-weight: 600; }
        .db-user-role { font-size: 0.68rem; opacity: 0.45; }

        /* ── TOPBAR ── */
        .db-topbar {
          position: fixed; top: 0; left: 240px; right: 0;
          height: 58px; z-index: 30;
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 1.5rem;
          transition: background 0.3s, border-color 0.3s;
          border-bottom: 1px solid;
        }
        .db-topbar-left {
          display: flex; align-items: center; gap: 6px;
          font-size: 0.75rem; opacity: 0.4;
        }
        .db-topbar-title {
          font-family: 'Playfair Display', serif;
          font-size: 1rem; font-weight: 700; opacity: 1;
        }
        .db-topbar-right { display: flex; align-items: center; gap: 8px; }

        .db-icon-btn {
          width: 34px; height: 34px; border-radius: 9px;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; border: 1px solid; transition: all 0.18s;
          flex-shrink: 0;
        }
        .db-icon-btn:hover { transform: scale(1.07); }

        .db-toggle-btn {
          display: flex; align-items: center; gap: 6px;
          padding: 0 12px; height: 34px; border-radius: 100px;
          font-size: 0.75rem; font-weight: 600; cursor: pointer;
          border: 1px solid; transition: all 0.2s; white-space: nowrap;
        }
        .db-logout-btn {
          display: flex; align-items: center; gap: 6px;
          padding: 0 14px; height: 34px; border-radius: 100px;
          font-size: 0.75rem; font-weight: 600; cursor: pointer;
          border: none; transition: all 0.2s; white-space: nowrap;
          background: rgba(251,194,235,0.15); color: #9a3060;
        }
        .db-logout-btn:hover { background: rgba(251,194,235,0.28); }

        /* ── MAIN ── */
        .db-main {
          margin-left: 240px; padding-top: 58px;
          min-height: 100vh; transition: background 0.3s;
        }
        .db-content { padding: 1.8rem; }

        /* ── MOBILE TOPBAR ── */
        .db-mob-topbar {
          position: fixed; top: 0; left: 0; right: 0; height: 54px;
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 1rem; z-index: 50;
          border-bottom: 1px solid;
          transition: background 0.3s;
        }
        .db-mob-menu {
          width: 32px; height: 32px; border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; border: 1px solid;
        }

        /* ── DRAWER ── */
        .db-drawer-overlay {
          position: fixed; inset: 0; z-index: 48;
          background: rgba(4,14,41,0.45);
          backdrop-filter: blur(4px);
          animation: fadeIn 0.2s ease;
        }
        .db-drawer {
          position: fixed; top: 0; left: 0; bottom: 0;
          width: 260px; z-index: 49;
          display: flex; flex-direction: column;
          animation: slideIn 0.25s cubic-bezier(0.22,1,0.36,1);
          overflow: hidden;
        }
        @keyframes fadeIn { from{opacity:0} to{opacity:1} }
        @keyframes slideIn { from{transform:translateX(-100%)} to{transform:translateX(0)} }

        .db-drawer-logo {
          display: flex; align-items: center; gap: 10px;
          padding: 1.2rem 1.2rem 0.8rem; flex-shrink: 0;
        }
        .db-drawer-scroll { flex: 1; overflow-y: auto; padding: 0.5rem 0.75rem 1rem; }
        .db-drawer-footer { padding: 0.75rem; border-top: 1px solid; flex-shrink: 0; }

        /* ── SCROLLBAR ── */
        .db-root ::-webkit-scrollbar { width: 4px; }
        .db-root ::-webkit-scrollbar-thumb { background: rgba(166,192,238,0.25); border-radius: 2px; }

        @media (max-width: 1023px) {
          .db-sidebar  { display: none; }
          .db-topbar   { display: none; }
          .db-main     { margin-left: 0; padding-top: 54px; }
        }
        @media (min-width: 1024px) {
          .db-mob-topbar { display: none; }
        }
      `}</style>

      <div className="db-root" style={{ background: d.bg, color: d.text, minHeight: '100vh' }}>

        {/* ══ DESKTOP SIDEBAR ══ */}
        <aside
          className="db-sidebar"
          style={{ background: d.sidebar, borderRight: `1px solid ${d.border}` }}
        >
          {/* Logo */}
          <div className="db-sidebar-logo">
            <img src="/twinrally_icon-removebg-preview (1).png" alt="TwinRally" className="db-logo-img" />
            <span className="db-logo-txt" style={{ color: d.text }}>TwinRally</span>
          </div>

          {/* Nav */}
          <div className="db-sidebar-scroll">
            <NavItems
              items={navItems}
              selected={selectedItem}
              onSelect={handleSelect}
              d={d}
            />
          </div>

          {/* User footer */}
          <div className="db-sidebar-footer" style={{ borderColor: d.border }}>
            <div className="db-user-row" style={{ ':hover': { background: d.hover } }}
              onMouseEnter={e => e.currentTarget.style.background = d.hover}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              <div className="db-avatar">F</div>
              <div>
                <div className="db-user-name" style={{ color: d.text }}>Faith</div>
                <div className="db-user-role" style={{ color: d.text }}>Twin · Lagos</div>
              </div>
              <ChevronRight size={14} style={{ marginLeft: 'auto', opacity: 0.3, color: d.text }} />
            </div>
          </div>
        </aside>

        {/* ══ DESKTOP TOPBAR ══ */}
        <header
          className="db-topbar"
          style={{ background: d.topbar, borderColor: d.border }}
        >
          <div className="db-topbar-left" style={{ color: d.text }}>
            <span>Pages</span>
            <ChevronRight size={12} />
            <span className="db-topbar-title" style={{ color: d.text }}>{currentLabel}</span>
          </div>

          <div className="db-topbar-right">
            {/* Theme toggle */}
            <button
              className="db-toggle-btn"
              style={{
                background: dark ? 'rgba(166,192,238,0.1)' : 'rgba(4,14,41,0.06)',
                borderColor: d.border,
                color: d.text,
              }}
              onClick={() => setDark(!dark)}
            >
              {dark
                ? <><Sun size={13} /> Light mode</>
                : <><Moon size={13} /> Dark mode</>
              }
            </button>

            {/* Notifications */}
            <div
              className="db-icon-btn"
              style={{ background: d.btnBg, borderColor: d.border, color: d.text }}
            >
              <Bell size={14} />
            </div>

            {/* Log out */}
            <button className="db-logout-btn" onClick={() => {}}>
              <LogOut size={13} /> Log out
            </button>
          </div>
        </header>

        {/* ══ DESKTOP MAIN ══ */}
        <main className="db-main" style={{ background: d.bg }}>
          <div className="db-content">
            {renderContent()}
          </div>
        </main>

        {/* ══ MOBILE TOPBAR ══ */}
        <header
          className="db-mob-topbar"
          style={{ background: d.sidebar, borderColor: d.border }}
        >
          <div className="db-drawer-logo" style={{ padding: 0 }}>
            <img src="/twinrally_icon-removebg-preview (1).png" alt="" style={{ width: 28, height: 28, objectFit: 'contain' }} />
            <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '1rem', color: d.text }}>TwinRally</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            {/* Mobile theme toggle */}
            <div
              className="db-icon-btn"
              style={{ background: d.btnBg, borderColor: d.border, color: d.text }}
              onClick={() => setDark(!dark)}
            >
              {dark ? <Sun size={14} /> : <Moon size={14} />}
            </div>

            {/* Hamburger */}
            <div
              className="db-mob-menu"
              style={{ background: d.btnBg, borderColor: d.border, color: d.text }}
              onClick={() => setMobile(true)}
            >
              <IoMdMenu size={16} />
            </div>
          </div>
        </header>

        {/* ══ MOBILE DRAWER ══ */}
        {mobile && (
          <>
            <div className="db-drawer-overlay" onClick={() => setMobile(false)} />
            <div className="db-drawer" style={{ background: d.sidebar, borderRight: `1px solid ${d.border}` }}>
              <div className="db-drawer-logo">
                <img src="/twinrally_icon-removebg-preview (1).png" alt="" style={{ width: 30, height: 30 }} />
                <span style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, color: d.text }}>TwinRally</span>
              </div>
              <div className="db-drawer-scroll">
                <NavItems
                  items={navItems}
                  selected={selectedItem}
                  onSelect={(id) => { handleSelect(id); setMobile(false); }}
                  d={d}
                />
              </div>
              <div className="db-drawer-footer" style={{ borderColor: d.border }}>
                <div className="db-user-row">
                  <div className="db-avatar">F</div>
                  <div>
                    <div className="db-user-name" style={{ color: d.text }}>Faith</div>
                    <div className="db-user-role" style={{ color: d.text }}>Twin · Lagos</div>
                  </div>
                </div>
                <button className="db-logout-btn" style={{ width: '100%', marginTop: 8, justifyContent: 'center' }}>
                  <LogOut size={13} /> Log out
                </button>
              </div>
            </div>
          </>
        )}

        {/* ══ MOBILE MAIN ══ */}
        <div className="lg:hidden" style={{ paddingTop: 54, minHeight: '100vh', background: d.bg }}>
          <div style={{ padding: '1.2rem' }}>
            {renderContent()}
          </div>
        </div>
      </div>
    </>
  );
};

/* ── NAV ITEMS COMPONENT ── */
function NavItems({ items, selected, onSelect, d }) {
  const mainItems  = items.filter(i => !i.section || i.section === 'main');
  const otherItems = items.filter(i => i.section === 'other');

  const renderItem = (el) => {
    const Icon = el.icon;
    const isActive = selected === el.id;
    return (
      <div
        key={el.id}
        className={`db-nav-item ${isActive ? 'active' : ''}`}
        style={{
          background: isActive ? d.activeItem : 'transparent',
          color: isActive ? d.activeText : d.mutedText,
        }}
        onMouseEnter={e => { if (!isActive) e.currentTarget.style.background = d.hover; e.currentTarget.style.color = d.text; }}
        onMouseLeave={e => { if (!isActive) e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = isActive ? d.activeText : d.mutedText; }}
        onClick={() => onSelect(el.id)}
      >
        <Icon size={17} />
        <span>{el.label}</span>
        {el.badge && <span className="db-badge">{el.badge}</span>}
      </div>
    );
  };

  return (
    <>
      <div className="db-nav-section">
        <div className="db-nav-label" style={{ color: d.text }}>Menu</div>
        {mainItems.length > 0 ? mainItems.map(renderItem) : items.map(renderItem)}
      </div>
      {otherItems.length > 0 && (
        <div className="db-nav-section">
          <div className="db-nav-label" style={{ color: d.text }}>Other</div>
          {otherItems.map(renderItem)}
        </div>
      )}
    </>
  );
}

/* ── THEME TOKENS ── */
const theme = {
  dark: {
    bg:         '#080f22',
    sidebar:    '#040e29',
    topbar:     'rgba(4,14,41,0.95)',
    border:     'rgba(255,255,255,0.07)',
    text:       '#f0ecf8',
    mutedText:  'rgba(240,236,248,0.5)',
    hover:      'rgba(166,192,238,0.1)',
    activeItem: 'rgba(251,194,235,0.12)',
    activeText: '#fbc2eb',
    btnBg:      'rgba(255,255,255,0.06)',
  },
  light: {
    bg:         '#f0ece6',
    sidebar:    '#faf8f5',
    topbar:     'rgba(250,248,245,0.96)',
    border:     'rgba(4,14,41,0.08)',
    text:       '#040e29',
    mutedText:  'rgba(4,14,41,0.45)',
    hover:      'rgba(4,14,41,0.05)',
    activeItem: 'rgba(251,194,235,0.18)',
    activeText: '#9a3060',
    btnBg:      'rgba(4,14,41,0.05)',
  },
};

export default DashBoardPage;