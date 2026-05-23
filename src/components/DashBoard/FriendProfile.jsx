import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import {
  ArrowLeft,
  MapPin,
  Users,
  Calendar,
  MessageSquare,
  Heart,
  UserPlus,
  UserCheck,
  Bell,
  BellOff,
  Share2,
  MoreHorizontal,
  Star,
  Shield,
  Zap,
  Globe,
  CheckCircle,
  Sun,
  Moon,
  Grid,
  List,
  ExternalLink,
  Flag,
  UserMinus,
} from "lucide-react";
import { allTwins, TwinAvatars, THEME } from "./Friend";

// ─── STAT PILL ──────────────────────────────────────────────────────────────
const StatBox = ({ label, value, t }) => (
  <div style={{ textAlign: "center", padding: "10px 0" }}>
    <p style={{ margin: 0, fontSize: 18, fontWeight: 900, color: t.text }}>
      {typeof value === "number" && value >= 1000
        ? (value / 1000).toFixed(1) + "K"
        : value}
    </p>
    <p
      style={{
        margin: "2px 0 0",
        fontSize: 11,
        color: t.textMuted,
        fontWeight: 600,
      }}
    >
      {label}
    </p>
  </div>
);

// ─── POST GRID ITEM ─────────────────────────────────────────────────────────
const PostCard = ({ post, t }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ scale: 1.02 }}
      style={{
        position: "relative",
        borderRadius: 14,
        overflow: "hidden",
        aspectRatio: "1",
        cursor: "pointer",
        background: t.bgTab,
      }}
    >
      <img
        src={post.img}
        alt=""
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(4,14,41,0.65)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 20,
            }}
          >
            <span
              style={{
                color: "#fff",
                fontSize: 13,
                fontWeight: 800,
                display: "flex",
                alignItems: "center",
                gap: 5,
              }}
            >
              <Heart size={15} fill="#fff" /> {post.likes.toLocaleString()}
            </span>
            <span
              style={{
                color: "#fff",
                fontSize: 13,
                fontWeight: 800,
                display: "flex",
                alignItems: "center",
                gap: 5,
              }}
            >
              <MessageSquare size={15} fill="#fff" /> {post.comments}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// ─── ACHIEVEMENT BADGE ──────────────────────────────────────────────────────
const AchBadge = ({ label, t }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: 7,
      padding: "7px 13px",
      background: `linear-gradient(135deg, ${t.pink}14, ${t.blue}14)`,
      border: `1px solid ${t.pink}28`,
      borderRadius: 30,
    }}
  >
    <Star size={12} color={t.pink} />
    <span style={{ fontSize: 12, fontWeight: 700, color: t.text }}>
      {label}
    </span>
  </div>
);

// ─── MORE MENU ──────────────────────────────────────────────────────────────
const MoreMenu = ({ t, onClose }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.92, y: -8 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.92, y: -8 }}
    style={{
      position: "absolute",
      top: 42,
      right: 0,
      zIndex: 99,
      background: t.bgCard,
      border: `1px solid ${t.border}`,
      borderRadius: 14,
      overflow: "hidden",
      minWidth: 180,
      boxShadow: `0 12px 40px ${t.pink}18`,
    }}
  >
    {[
      { icon: Share2, label: "Share Profile" },
      { icon: ExternalLink, label: "Copy Profile Link" },
      { icon: UserMinus, label: "Remove Connection" },
      { icon: Flag, label: "Report", danger: true },
    ].map(({ icon: Icon, label, danger }) => (
      <button
        key={label}
        onClick={onClose}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          width: "100%",
          padding: "11px 16px",
          background: "none",
          border: "none",
          cursor: "pointer",
          fontSize: 13,
          fontWeight: 600,
          color: danger ? "#f87171" : t.text,
          textAlign: "left",
          transition: "background 0.15s",
          borderBottom: `1px solid ${t.border}`,
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = t.overlay)}
        onMouseLeave={(e) => (e.currentTarget.style.background = "none")}
      >
        <Icon size={14} color={danger ? "#f87171" : t.textSub} />
        {label}
      </button>
    ))}
  </motion.div>
);

// ─── MAIN PROFILE COMPONENT (NAMED EXPORT) ──────────────────────────────────
export const FriendProfile = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();

  const passedTwin = location.state?.twin;
  const passedDark = location.state?.darkMode;
  const twin =
    passedTwin || allTwins.find((x) => x.id === parseInt(id)) || allTwins[0];

  const [darkMode, setDarkMode] = useState(
    passedDark !== undefined ? passedDark : true
  );
  const [connected, setConnected] = useState(false);
  const [followed, setFollowed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("posts");

  const t = darkMode ? THEME.dark : THEME.light;
  const totalLikes = twin.recentPosts.reduce((s, p) => s + p.likes, 0);

  useEffect(() => {
    const close = () => setMenuOpen(false);
    if (menuOpen) document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [menuOpen]);

  const sectionTabs = ["posts", "about", "achievements"];

  return (
    <div
      style={{
        background: t.bg,
        minHeight: "100vh",
        fontFamily: "'DM Sans', 'Inter', sans-serif",
        color: t.text,
        transition: "background 0.3s, color 0.3s",
        maxWidth: 760,
        margin: "0 auto",
      }}
    >
      {/* TOP NAV */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: darkMode
            ? "rgba(4,14,41,0.92)"
            : "rgba(243,237,249,0.92)",
          backdropFilter: "blur(14px)",
          borderBottom: `1px solid ${t.border}`,
          padding: "12px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <motion.button
          whileTap={{ scale: 0.93 }}
          onClick={() => navigate(-1)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 7,
            background: t.overlay,
            border: `1px solid ${t.border}`,
            borderRadius: 10,
            padding: "7px 14px",
            cursor: "pointer",
            color: t.text,
            fontSize: 13,
            fontWeight: 700,
          }}
        >
          <ArrowLeft size={14} /> Back
        </motion.button>
        <span
          style={{
            fontSize: 14,
            fontWeight: 800,
            background: `linear-gradient(135deg, ${t.pink}, ${t.blue})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {twin.username}
        </span>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <motion.button
            whileTap={{ scale: 0.92 }}
            onClick={() => setDarkMode((d) => !d)}
            style={{
              background: t.overlay,
              border: `1px solid ${t.border}`,
              borderRadius: 50,
              padding: "6px 12px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 6,
              color: t.text,
              fontSize: 11,
              fontWeight: 700,
            }}
          >
            {darkMode ? (
              <Sun size={13} color={t.pink} />
            ) : (
              <Moon size={13} color={t.blue} />
            )}
          </motion.button>
          <div style={{ position: "relative" }}>
            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={(e) => {
                e.stopPropagation();
                setMenuOpen((m) => !m);
              }}
              style={{
                background: t.overlay,
                border: `1px solid ${t.border}`,
                borderRadius: 10,
                padding: "7px 10px",
                cursor: "pointer",
                color: t.textSub,
              }}
            >
              <MoreHorizontal size={16} />
            </motion.button>
            <AnimatePresence>
              {menuOpen && (
                <MoreMenu t={t} onClose={() => setMenuOpen(false)} />
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      {/* COVER */}
      <div style={{ position: "relative", height: 200, overflow: "hidden" }}>
        <img
          src={twin.coverImg}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(to bottom, transparent 40%, ${t.bg} 100%)`,
          }}
        />
      </div>

      {/* PROFILE HEADER */}
      <div style={{ padding: "0 24px 0", marginTop: -52 }}>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: 16,
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <div style={{ display: "flex", alignItems: "flex-end", gap: 14 }}>
            <div style={{ position: "relative" }}>
              <TwinAvatars a={twin.avatar} b={twin.avatarB} size={76} t={t} />
              {twin.verified && (
                <div
                  style={{
                    position: "absolute",
                    bottom: -2,
                    right: -6,
                    background: `linear-gradient(135deg, ${t.pink}, ${t.blue})`,
                    borderRadius: "50%",
                    width: 22,
                    height: 22,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: `2px solid ${t.bg}`,
                  }}
                >
                  <CheckCircle size={13} color={t.darkText} />
                </div>
              )}
            </div>
            <div style={{ paddingBottom: 4 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  flexWrap: "wrap",
                }}
              >
                <h1
                  style={{
                    margin: 0,
                    fontSize: 20,
                    fontWeight: 900,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {twin.name}
                </h1>
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 800,
                    padding: "2px 9px",
                    borderRadius: 20,
                    background:
                      twin.twinType === "Identical"
                        ? `${t.pink}20`
                        : `${t.blue}20`,
                    color: twin.twinType === "Identical" ? t.pink : t.blue,
                    border: `1px solid ${
                      twin.twinType === "Identical" ? t.pink : t.blue
                    }35`,
                  }}
                >
                  {twin.twinType}
                </span>
              </div>
              <p
                style={{
                  margin: "3px 0 0",
                  fontSize: 13,
                  color: t.pink,
                  fontWeight: 700,
                }}
              >
                {twin.username}
              </p>
              <p
                style={{
                  margin: "3px 0 0",
                  fontSize: 12,
                  color: t.textSub,
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                }}
              >
                <MapPin size={11} />
                {twin.location}
              </p>
            </div>
          </div>

          {/* CTA */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 8,
              alignItems: "flex-end",
            }}
          >
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <motion.button
                whileTap={{ scale: 0.94 }}
                onClick={() => setConnected((c) => !c)}
                style={{
                  background: connected
                    ? t.overlay
                    : `linear-gradient(135deg, ${t.pink}, ${t.blue})`,
                  border: connected ? `1px solid ${t.border}` : "none",
                  borderRadius: 11,
                  padding: "9px 20px",
                  cursor: "pointer",
                  fontSize: 13,
                  fontWeight: 800,
                  color: connected ? t.textSub : t.darkText,
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  boxShadow: connected ? "none" : `0 5px 18px ${t.pink}42`,
                  transition: "all 0.22s cubic-bezier(.4,0,.2,1)",
                }}
              >
                {connected ? (
                  <>
                    <UserCheck size={14} /> Connected
                  </>
                ) : (
                  <>
                    <UserPlus size={14} /> Connect
                  </>
                )}
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.94 }}
                onClick={() => setFollowed((f) => !f)}
                style={{
                  background: followed ? `${t.blue}18` : t.overlay,
                  border: `1px solid ${followed ? t.blue + "55" : t.border}`,
                  borderRadius: 11,
                  padding: "9px 18px",
                  cursor: "pointer",
                  fontSize: 13,
                  fontWeight: 700,
                  color: followed ? t.blue : t.textSub,
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  transition: "all 0.22s",
                }}
              >
                {followed ? (
                  <>
                    <Bell size={14} /> Following
                  </>
                ) : (
                  <>
                    <BellOff size={14} /> Follow
                  </>
                )}
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.94 }}
                style={{
                  background: t.overlay,
                  border: `1px solid ${t.border}`,
                  borderRadius: 11,
                  padding: "9px 14px",
                  cursor: "pointer",
                  color: t.textSub,
                }}
              >
                <MessageSquare size={15} />
              </motion.button>
            </div>
          </div>
        </div>

        {/* BIO */}
        <p
          style={{
            margin: "0 0 6px",
            fontSize: 13,
            color: t.textSub,
            lineHeight: 1.65,
            maxWidth: 520,
          }}
        >
          {twin.bio}
        </p>
        <p
          style={{
            margin: "0 0 16px",
            fontSize: 12,
            color: t.textMuted,
            display: "flex",
            alignItems: "center",
            gap: 5,
            fontStyle: "italic",
          }}
        >
          <Heart size={11} fill={t.pink} color={t.pink} /> {twin.twinBond}
        </p>

        {/* STATS */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.15 } }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            background: t.bgCard,
            border: `1px solid ${t.border}`,
            borderRadius: 16,
            marginBottom: 20,
            overflow: "hidden",
          }}
        >
          {[
            { label: "Posts", value: twin.posts },
            { label: "Followers", value: twin.followers },
            { label: "Following", value: twin.following },
            { label: "Mutual", value: twin.mutualFriends },
          ].map((s, i) => (
            <div
              key={s.label}
              style={{ borderRight: i < 3 ? `1px solid ${t.border}` : "none" }}
            >
              <StatBox {...s} t={t} />
            </div>
          ))}
        </motion.div>

        {/* TABS */}
        <div
          style={{
            display: "flex",
            gap: 0,
            borderBottom: `1px solid ${t.border}`,
            marginBottom: 20,
          }}
        >
          {sectionTabs.map((sec) => {
            const active = activeSection === sec;
            return (
              <button
                key={sec}
                onClick={() => setActiveSection(sec)}
                style={{
                  flex: 1,
                  padding: "11px 0",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: 13,
                  fontWeight: 800,
                  textTransform: "capitalize",
                  color: active ? t.pink : t.textMuted,
                  borderBottom: active
                    ? `2.5px solid ${t.pink}`
                    : "2.5px solid transparent",
                  transition: "all 0.2s",
                  marginBottom: -1,
                }}
              >
                {sec}
              </button>
            );
          })}
        </div>

        {/* SECTIONS */}
        <AnimatePresence mode="wait">
          {activeSection === "posts" && (
            <motion.div
              key="posts"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: 8,
                  marginBottom: 28,
                }}
              >
                {twin.recentPosts.map((post) => (
                  <PostCard key={post.id} post={post} t={t} />
                ))}
              </div>
              <div
                style={{
                  textAlign: "center",
                  padding: "14px",
                  borderRadius: 13,
                  border: `1px dashed ${t.border}`,
                  color: t.textMuted,
                  fontSize: 13,
                  fontWeight: 600,
                }}
              >
                Showing 6 of {twin.posts} posts
              </div>
            </motion.div>
          )}

          {activeSection === "about" && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 14,
                paddingBottom: 28,
              }}
            >
              <div
                style={{
                  background: t.bgCard,
                  border: `1px solid ${t.border}`,
                  borderRadius: 16,
                  padding: 20,
                }}
              >
                <p
                  style={{
                    margin: "0 0 6px",
                    fontSize: 11,
                    fontWeight: 900,
                    color: t.textMuted,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  About
                </p>
                <p
                  style={{
                    margin: 0,
                    fontSize: 14,
                    color: t.textSub,
                    lineHeight: 1.7,
                  }}
                >
                  {twin.fullBio}
                </p>
              </div>
              <div
                style={{
                  background: t.bgCard,
                  border: `1px solid ${t.border}`,
                  borderRadius: 16,
                  padding: 20,
                }}
              >
                <p
                  style={{
                    margin: "0 0 12px",
                    fontSize: 11,
                    fontWeight: 900,
                    color: t.textMuted,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  Interests
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {twin.interests.map((tag, i) => (
                    <span
                      key={i}
                      style={{
                        fontSize: 13,
                        padding: "5px 14px",
                        borderRadius: 20,
                        fontWeight: 700,
                        background: i % 2 === 0 ? `${t.pink}14` : `${t.blue}14`,
                        color: i % 2 === 0 ? t.pink : t.blue,
                        border: `1px solid ${i % 2 === 0 ? t.pink : t.blue}28`,
                      }}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
              <div
                style={{
                  background: t.bgCard,
                  border: `1px solid ${t.border}`,
                  borderRadius: 16,
                  padding: 20,
                }}
              >
                <p
                  style={{
                    margin: "0 0 12px",
                    fontSize: 11,
                    fontWeight: 900,
                    color: t.textMuted,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  Details
                </p>
                {[
                  { icon: MapPin, label: "Location", val: twin.location },
                  { icon: Users, label: "Twin Type", val: twin.twinType },
                  { icon: Globe, label: "Username", val: twin.username },
                  {
                    icon: Zap,
                    label: "Total Likes",
                    val: totalLikes.toLocaleString(),
                  },
                ].map(({ icon: Icon, label, val }) => (
                  <div
                    key={label}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "9px 0",
                      borderBottom: `1px solid ${t.border}`,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 13,
                        color: t.textMuted,
                        display: "flex",
                        alignItems: "center",
                        gap: 7,
                        fontWeight: 600,
                      }}
                    >
                      <Icon size={13} color={t.textMuted} />
                      {label}
                    </span>
                    <span
                      style={{ fontSize: 13, fontWeight: 700, color: t.text }}
                    >
                      {val}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeSection === "achievements" && (
            <motion.div
              key="achievements"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              style={{ paddingBottom: 28 }}
            >
              <div
                style={{
                  background: t.bgCard,
                  border: `1px solid ${t.border}`,
                  borderRadius: 16,
                  padding: 20,
                  marginBottom: 14,
                }}
              >
                <p
                  style={{
                    margin: "0 0 14px",
                    fontSize: 11,
                    fontWeight: 900,
                    color: t.textMuted,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  Twin Achievements
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                  {twin.achievements.map((ach, i) => (
                    <AchBadge key={i} label={ach} t={t} />
                  ))}
                </div>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: 12,
                }}
              >
                {[
                  {
                    label: "Total Posts",
                    val: twin.posts,
                    icon: Grid,
                    color: t.pink,
                  },
                  {
                    label: "Total Likes",
                    val: totalLikes.toLocaleString(),
                    icon: Heart,
                    color: "#f87171",
                  },
                  {
                    label: "Followers",
                    val: twin.followers.toLocaleString(),
                    icon: Users,
                    color: t.blue,
                  },
                  {
                    label: "Mutual Twins",
                    val: twin.mutualFriends,
                    icon: Shield,
                    color: t.online,
                  },
                ].map(({ label, val, icon: Icon, color }) => (
                  <motion.div
                    key={label}
                    whileHover={{ y: -3 }}
                    style={{
                      background: t.bgCard,
                      border: `1px solid ${t.border}`,
                      borderRadius: 16,
                      padding: "16px 18px",
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                    }}
                  >
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 11,
                        background: `${color}18`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={18} color={color} />
                    </div>
                    <div>
                      <p style={{ margin: 0, fontSize: 18, fontWeight: 900 }}>
                        {val}
                      </p>
                      <p
                        style={{
                          margin: 0,
                          fontSize: 11,
                          color: t.textMuted,
                          fontWeight: 600,
                        }}
                      >
                        {label}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* STICKY BOTTOM BAR */}
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { delay: 0.3, type: "spring", stiffness: 80 },
        }}
        style={{
          position: "fixed",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          maxWidth: 760,
          zIndex: 40,
          background: darkMode
            ? "rgba(4,14,41,0.95)"
            : "rgba(243,237,249,0.95)",
          backdropFilter: "blur(14px)",
          borderTop: `1px solid ${t.border}`,
          padding: "12px 24px",
          display: "flex",
          gap: 10,
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            flex: 1,
            minWidth: 0,
          }}
        >
          <img
            src={twin.avatar}
            alt=""
            style={{
              width: 32,
              height: 32,
              borderRadius: "50%",
              objectFit: "cover",
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontSize: 13,
              fontWeight: 800,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {twin.name}
          </span>
        </div>
        <motion.button
          whileTap={{ scale: 0.94 }}
          onClick={() => setConnected((c) => !c)}
          style={{
            background: connected
              ? t.overlay
              : `linear-gradient(135deg, ${t.pink}, ${t.blue})`,
            border: connected ? `1px solid ${t.border}` : "none",
            borderRadius: 11,
            padding: "8px 18px",
            cursor: "pointer",
            fontSize: 12,
            fontWeight: 800,
            color: connected ? t.textSub : t.darkText,
            display: "flex",
            alignItems: "center",
            gap: 5,
            boxShadow: connected ? "none" : `0 4px 16px ${t.pink}40`,
            whiteSpace: "nowrap",
            transition: "all 0.22s",
          }}
        >
          {connected ? (
            <>
              <UserCheck size={13} /> Connected
            </>
          ) : (
            <>
              <UserPlus size={13} /> Connect
            </>
          )}
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.94 }}
          onClick={() => setFollowed((f) => !f)}
          style={{
            background: followed ? `${t.blue}18` : t.overlay,
            border: `1px solid ${followed ? t.blue + "55" : t.border}`,
            borderRadius: 11,
            padding: "8px 16px",
            cursor: "pointer",
            fontSize: 12,
            fontWeight: 700,
            color: followed ? t.blue : t.textSub,
            display: "flex",
            alignItems: "center",
            gap: 5,
            transition: "all 0.22s",
            whiteSpace: "nowrap",
          }}
        >
          {followed ? (
            <>
              <Bell size={13} /> Following
            </>
          ) : (
            <>
              <BellOff size={13} /> Follow
            </>
          )}
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.94 }}
          style={{
            background: t.overlay,
            border: `1px solid ${t.border}`,
            borderRadius: 11,
            padding: "8px 12px",
            cursor: "pointer",
            color: t.textSub,
            flexShrink: 0,
          }}
        >
          <MessageSquare size={14} />
        </motion.button>
      </motion.div>

      <div style={{ height: 80 }} />
    </div>
  );
};
