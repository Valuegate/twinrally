import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Users,
  UserPlus,
  Search,
  MapPin,
  MessageSquare,
  Check,
  X,
  Globe,
  Zap,
  UserCheck,
  Clock,
  Bell,
  BellOff,
  ChevronRight,
} from "lucide-react";

// ─── SHARED THEME ──────────────────────────────────────────────────────────
export const THEME = {
  dark: {
    bg: "#040e29",
    bgCard: "#0a1540",
    bgInput: "#061235",
    bgTab: "#050f2e",
    pink: "#fbc2eb",
    blue: "#a6c0ee",
    text: "#f0f4ff",
    textSub: "#8fa3c8",
    textMuted: "#4a6080",
    border: "rgba(251,194,235,0.12)",
    borderHover: "rgba(251,194,235,0.30)",
    online: "#34d399",
    overlay: "rgba(251,194,235,0.06)",
    darkText: "#040e29",
  },
  light: {
    bg: "#f3edf9",
    bgCard: "#ffffff",
    bgInput: "#ede4f5",
    bgTab: "#e8dff2",
    pink: "#c754a0",
    blue: "#5b7fd4",
    text: "#12152a",
    textSub: "#4a4f72",
    textMuted: "#9098b8",
    border: "rgba(180,100,200,0.14)",
    borderHover: "rgba(180,100,200,0.34)",
    online: "#22c55e",
    overlay: "rgba(180,100,200,0.05)",
    darkText: "#ffffff",
  },
};

// ─── SHARED DATA (also imported by FriendProfile) ─────────────────────────
export const allTwins = [
  {
    id: 1,
    name: "Amara & Nadia Osei",
    username: "@amaranadia",
    avatar: "https://i.pravatar.cc/80?img=47",
    avatarB: "https://i.pravatar.cc/80?img=48",
    coverImg:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=900&q=80",
    location: "Accra, Ghana",
    lastActive: "Just now",
    status: "online",
    bio: "Identical twins passionate about fashion design and African textiles. Running our own label together.",
    fullBio:
      "We are Amara and Nadia — identical twins from Accra, Ghana. After studying fashion at KNUST, we launched Osei Label, blending contemporary design with Kente and Ankara. Our work has been featured in Vogue Africa and worn on red carpets across the continent. Twin life is our greatest inspiration.",
    interests: ["Fashion", "Design", "Travel", "Photography", "Culture"],
    mutualFriends: 24,
    followers: 4200,
    following: 918,
    posts: 312,
    twinType: "Identical",
    verified: true,
    twinBond: "Since birth — inseparable since day one",
    achievements: ["Vogue Africa Feature", "Top Twin Pair 2024", "Festival Speaker"],
    recentPosts: [
      { id: 1, img: "https://images.unsplash.com/photo-1558171813-3b69d1a4b8f2?w=400&q=80", likes: 842, comments: 67 },
      { id: 2, img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=80", likes: 1203, comments: 94 },
      { id: 3, img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=80", likes: 566, comments: 38 },
      { id: 4, img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&q=80", likes: 729, comments: 51 },
      { id: 5, img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80", likes: 913, comments: 72 },
      { id: 6, img: "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=400&q=80", likes: 441, comments: 29 },
    ],
  },
  {
    id: 2,
    name: "Kofi & Kwame Mensah",
    username: "@kofkwame",
    avatar: "https://i.pravatar.cc/80?img=11",
    avatarB: "https://i.pravatar.cc/80?img=12",
    coverImg:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80",
    location: "Nairobi, Kenya",
    lastActive: "15m ago",
    status: "online",
    bio: "Tech twins building fintech for Africa. Forbes 30 Under 30. We ship daily.",
    fullBio:
      "Kofi and Kwame are the duo behind PayTwins, a cross-border payment platform serving 14 African countries. Named to Forbes 30 Under 30 Africa in 2023, we believe the best products are built by people who live the problem. Being twins gave us a natural edge in collaborative thinking.",
    interests: ["Tech", "Startups", "Football", "Investing", "AI"],
    mutualFriends: 18,
    followers: 8900,
    following: 420,
    posts: 187,
    twinType: "Fraternal",
    verified: true,
    twinBond: "Coding since age 12 together",
    achievements: ["Forbes 30 Under 30", "$2M Seed Raised", "YC Alumni"],
    recentPosts: [
      { id: 1, img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&q=80", likes: 1820, comments: 140 },
      { id: 2, img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&q=80", likes: 930, comments: 78 },
      { id: 3, img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&q=80", likes: 742, comments: 55 },
      { id: 4, img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&q=80", likes: 615, comments: 42 },
      { id: 5, img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&q=80", likes: 528, comments: 36 },
      { id: 6, img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&q=80", likes: 881, comments: 63 },
    ],
  },
  {
    id: 3,
    name: "Sophia & Mia Rossi",
    username: "@sophiamia",
    avatar: "https://i.pravatar.cc/80?img=32",
    avatarB: "https://i.pravatar.cc/80?img=33",
    coverImg:
      "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=900&q=80",
    location: "Milan, Italy",
    lastActive: "2h ago",
    status: "offline",
    bio: "Dance twins. We perform globally and teach online twin masterclasses.",
    fullBio:
      "Sophia and Mia have danced together since age 4. Now based in Milan, they perform on international stages and run the most-watched twin dance masterclass series on the internet. Their choreography blends contemporary and traditional Italian folk — always in perfect sync.",
    interests: ["Dance", "Music", "Fitness", "Choreography", "Wellness"],
    mutualFriends: 9,
    followers: 12400,
    following: 760,
    posts: 524,
    twinType: "Identical",
    verified: false,
    twinBond: "Moving in perfect sync since 1998",
    achievements: ["La Scala Guest Performance", "100K YouTube Subs", "TwinRally Stage 2024"],
    recentPosts: [
      { id: 1, img: "https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=400&q=80", likes: 2340, comments: 192 },
      { id: 2, img: "https://images.unsplash.com/photo-1547153760-18fc86324498?w=400&q=80", likes: 1870, comments: 154 },
      { id: 3, img: "https://images.unsplash.com/photo-1542773998-9325f0a098d7?w=400&q=80", likes: 1102, comments: 88 },
      { id: 4, img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80", likes: 788, comments: 60 },
      { id: 5, img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&q=80", likes: 943, comments: 71 },
      { id: 6, img: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=400&q=80", likes: 667, comments: 48 },
    ],
  },
  {
    id: 4,
    name: "Jae & Jun Park",
    username: "@jaejunpark",
    avatar: "https://i.pravatar.cc/80?img=67",
    avatarB: "https://i.pravatar.cc/80?img=68",
    coverImg:
      "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=900&q=80",
    location: "Seoul, South Korea",
    lastActive: "1d ago",
    status: "offline",
    bio: "Music producers and content creators. Our twin chemistry makes the best beats.",
    fullBio:
      "Jae and Jun are Seoul-based music producers who have worked with over 40 artists across K-Pop and R&B. Their twin dynamic — finishing each other's musical thoughts — is their superpower. Combined they have 29K+ followers and a growing studio label called Twin Frequency.",
    interests: ["Music", "Production", "Gaming", "K-Pop", "Studio"],
    mutualFriends: 6,
    followers: 29300,
    following: 1100,
    posts: 398,
    twinType: "Identical",
    verified: true,
    twinBond: "Twin Frequency — the beat never stops",
    achievements: ["Melon Chart Top 10", "29K Followers", "SXSW Showcase 2024"],
    recentPosts: [
      { id: 1, img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&q=80", likes: 5230, comments: 413 },
      { id: 2, img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&q=80", likes: 3870, comments: 298 },
      { id: 3, img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&q=80", likes: 2940, comments: 221 },
      { id: 4, img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&q=80", likes: 2100, comments: 167 },
      { id: 5, img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&q=80", likes: 1780, comments: 134 },
      { id: 6, img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&q=80", likes: 1340, comments: 98 },
    ],
  },
  {
    id: 5,
    name: "Zara & Zuri Johnson",
    username: "@zarazuri",
    avatar: "https://i.pravatar.cc/80?img=38",
    avatarB: "https://i.pravatar.cc/80?img=39",
    coverImg:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=900&q=80",
    location: "London, UK",
    lastActive: "30m ago",
    status: "online",
    bio: "Lifestyle twins taking over the gram. We share everything — except secrets.",
    fullBio:
      "London-based lifestyle creators. Fashion, travel, and twinhood — that is our whole thing. We have been building our brand since 2020 and love every second of it.",
    interests: ["Fashion", "Travel", "Photography", "Lifestyle", "Content"],
    mutualFriends: 15,
    followers: 6700,
    following: 820,
    posts: 601,
    twinType: "Identical",
    verified: false,
    twinBond: "Matching fits and matching energy",
    achievements: ["Brand Collab x ASOS", "6.7K Followers", "TwinRally Content Award"],
    recentPosts: [
      { id: 1, img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=80", likes: 1340, comments: 103 },
      { id: 2, img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&q=80", likes: 890, comments: 67 },
      { id: 3, img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80", likes: 720, comments: 54 },
      { id: 4, img: "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=400&q=80", likes: 550, comments: 41 },
      { id: 5, img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=80", likes: 430, comments: 32 },
      { id: 6, img: "https://images.unsplash.com/photo-1558171813-3b69d1a4b8f2?w=400&q=80", likes: 380, comments: 27 },
    ],
  },
  {
    id: 6,
    name: "Tobias & Marcus Weber",
    username: "@tobmarcus",
    avatar: "https://i.pravatar.cc/80?img=54",
    avatarB: "https://i.pravatar.cc/80?img=55",
    coverImg:
      "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=900&q=80",
    location: "Berlin, Germany",
    lastActive: "5h ago",
    status: "offline",
    bio: "Creative twins. We build brands by day and make music by night.",
    fullBio:
      "Tobias and Marcus are Berlin-based creative directors who split their time between brand strategy and electronic music production. Their agency has worked with clients across Europe and their DJ sets pull thousands every weekend.",
    interests: ["Music", "Design", "Startups", "Branding", "DJ"],
    mutualFriends: 8,
    followers: 3400,
    following: 520,
    posts: 243,
    twinType: "Fraternal",
    verified: false,
    twinBond: "Different strengths, one vision",
    achievements: ["Berghain Warm-Up Set", "Agency of the Year (Berlin 2023)", "3.4K Followers"],
    recentPosts: [
      { id: 1, img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&q=80", likes: 780, comments: 59 },
      { id: 2, img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&q=80", likes: 640, comments: 48 },
      { id: 3, img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&q=80", likes: 510, comments: 38 },
      { id: 4, img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&q=80", likes: 420, comments: 31 },
      { id: 5, img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&q=80", likes: 330, comments: 24 },
      { id: 6, img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&q=80", likes: 280, comments: 19 },
    ],
  },
  {
    id: 7,
    name: "Yemi & Bisi Afolabi",
    username: "@yemibisi",
    avatar: "https://i.pravatar.cc/80?img=44",
    avatarB: "https://i.pravatar.cc/80?img=45",
    coverImg:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&q=80",
    location: "Ibadan, Nigeria",
    lastActive: "2h ago",
    status: "online",
    bio: "Nigerian twin engineers. Making Africa proud one commit at a time.",
    fullBio:
      "Yemi and Bisi are software engineers from Ibadan who met their twin destiny at a Google Developer event. Both work at top tech companies and contribute heavily to open source. They are your biggest fans if you write clean code.",
    interests: ["Tech", "Football", "Food", "Open Source", "Lagos Nightlife"],
    mutualFriends: 21,
    followers: 1900,
    following: 310,
    posts: 154,
    twinType: "Fraternal",
    verified: false,
    twinBond: "Pair programming — literally always",
    achievements: ["Google Developer Expert", "GDG Lagos Lead", "TwinRally Tech Spotlight"],
    recentPosts: [
      { id: 1, img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&q=80", likes: 560, comments: 43 },
      { id: 2, img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&q=80", likes: 430, comments: 33 },
      { id: 3, img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&q=80", likes: 350, comments: 26 },
      { id: 4, img: "https://images.unsplash.com/photo-1531297484001-80022131e5a1?w=400&q=80", likes: 280, comments: 20 },
      { id: 5, img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&q=80", likes: 220, comments: 16 },
      { id: 6, img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&q=80", likes: 190, comments: 13 },
    ],
  },
  {
    id: 8,
    name: "Aisha & Fatima Al-Hassan",
    username: "@aishafatima",
    avatar: "https://i.pravatar.cc/80?img=60",
    avatarB: "https://i.pravatar.cc/80?img=61",
    coverImg:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&q=80",
    location: "Dubai, UAE",
    lastActive: "1h ago",
    status: "online",
    bio: "Art twins exhibiting across the Gulf. Beauty runs deep when it runs in twos.",
    fullBio:
      "Aisha and Fatima create large-scale installations that explore identity, duality, and the twin bond across cultures. Their work has been shown in galleries from Dubai to London. When twins make art about twinhood, the result is something transcendent.",
    interests: ["Art", "Culture", "Travel", "Exhibitions", "Philosophy"],
    mutualFriends: 5,
    followers: 9100,
    following: 670,
    posts: 289,
    twinType: "Identical",
    verified: true,
    twinBond: "Two souls, one artistic vision",
    achievements: ["Dubai Art Week 2024", "Artsy Top 100", "TwinRally Art Award"],
    recentPosts: [
      { id: 1, img: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=400&q=80", likes: 2100, comments: 167 },
      { id: 2, img: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&q=80", likes: 1780, comments: 141 },
      { id: 3, img: "https://images.unsplash.com/photo-1549887552-cb1071d3e5ca?w=400&q=80", likes: 1430, comments: 112 },
      { id: 4, img: "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=400&q=80", likes: 1100, comments: 87 },
      { id: 5, img: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=400&q=80", likes: 890, comments: 70 },
      { id: 6, img: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=400&q=80", likes: 740, comments: 58 },
    ],
  },
];

export const pendingInvites = [
  {
    id: 101,
    name: "Remi & Tola Adebayo",
    username: "@remitola",
    avatar: "https://i.pravatar.cc/80?img=20",
    avatarB: "https://i.pravatar.cc/80?img=21",
    location: "Abuja, Nigeria",
    type: "received",
    time: "3 hours ago",
    bio: "Law twins navigating courtrooms and twin life simultaneously.",
    mutualFriends: 11,
    twinType: "Fraternal",
  },
  {
    id: 102,
    name: "Chioma & Adaeze Eze",
    username: "@chiomadaeze",
    avatar: "https://i.pravatar.cc/80?img=25",
    avatarB: "https://i.pravatar.cc/80?img=26",
    location: "Enugu, Nigeria",
    type: "received",
    time: "1 day ago",
    bio: "Medical twin sisters. Future doctors with a shared passion for helping others.",
    mutualFriends: 7,
    twinType: "Identical",
  },
  {
    id: 103,
    name: "Noah & Liam Carter",
    username: "@noahliam",
    avatar: "https://i.pravatar.cc/80?img=52",
    avatarB: "https://i.pravatar.cc/80?img=53",
    location: "Toronto, Canada",
    type: "sent",
    time: "2 days ago",
    bio: "Athletic twins. Track & field at university level.",
    mutualFriends: 4,
    twinType: "Identical",
  },
];

// ─── SUBCOMPONENTS ─────────────────────────────────────────────────────────
export const TwinAvatars = ({ a, b, size = 48, t }) => (
  <div style={{ position: "relative", width: size + 16, height: size, flexShrink: 0 }}>
    <img
      src={a}
      alt=""
      style={{
        width: size, height: size, borderRadius: "50%", objectFit: "cover",
        position: "absolute", left: 0, top: 0, border: `2.5px solid ${t.bg}`, zIndex: 2,
      }}
    />
    <img
      src={b}
      alt=""
      style={{
        width: size, height: size, borderRadius: "50%", objectFit: "cover",
        position: "absolute", left: Math.round(size * 0.28), top: 0,
        border: `2.5px solid ${t.bg}`, zIndex: 1, opacity: 0.88,
      }}
    />
  </div>
);

const OnlineDot = ({ status, t }) => (
  <span
    style={{
      width: 8, height: 8, borderRadius: "50%", display: "inline-block",
      background: status === "online" ? t.online : t.textMuted,
      border: `2px solid ${t.bgCard}`, marginRight: 4, verticalAlign: "middle", flexShrink: 0,
    }}
  />
);

const PillBadge = ({ label, t, variant = "blue" }) => (
  <span
    style={{
      fontSize: 10, fontWeight: 700, padding: "2px 9px", borderRadius: 20,
      background: variant === "pink" ? `${t.pink}1a` : `${t.blue}1a`,
      color: variant === "pink" ? t.pink : t.blue,
      border: `1px solid ${variant === "pink" ? t.pink : t.blue}30`,
      letterSpacing: "0.03em", whiteSpace: "nowrap",
    }}
  >
    {label}
  </span>
);

// ─── MAIN FRIEND COMPONENT ─────────────────────────────────────────────────
// `dark` is controlled by the dashboard topbar toggle, passed in as a prop.
// FIX: default value added so the component never receives `undefined` and
// silently falls into a broken state before the parent's state settles.
export const Friend = ({ dark = true }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("friends");
  const [searchQuery, setSearchQuery] = useState("");
  const [connected, setConnected] = useState({});
  const [followed, setFollowed] = useState({});
  const [accepted, setAccepted] = useState({});
  const [rejected, setRejected] = useState({});

  const t = dark ? THEME.dark : THEME.light;

  const myFriends = allTwins.slice(0, 4);
  const suggested = allTwins.slice(4);

  const filter = (arr) =>
    arr.filter(
      (f) =>
        f.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        f.bio.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (f.interests || []).some((i) => i.toLowerCase().includes(searchQuery.toLowerCase()))
    );

  const filteredFriends = filter(myFriends);
  const filteredPending = pendingInvites.filter(
    (p) =>
      !rejected[p.id] &&
      (p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.bio.toLowerCase().includes(searchQuery.toLowerCase()))
  );
  const filteredSuggested = filter(suggested);

  const goToProfile = (twin) =>
    navigate(`/dashboard/friends/profile/${twin.id}`, {
      state: { twin, darkMode: dark },
    });

  const cVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.07 } },
  };
  const cardV = {
    hidden: { opacity: 0, y: 22, scale: 0.97 },
    show: {
      opacity: 1, y: 0, scale: 1,
      transition: { type: "spring", stiffness: 85, damping: 15 },
    },
  };

  const cardBase = {
    background: t.bgCard,
    borderRadius: 20,
    border: `1px solid ${t.border}`,
    overflow: "hidden",
    position: "relative",
    transition: "border-color 0.2s",
  };

  const tabs = [
    { id: "friends", label: "My Twins", count: filteredFriends.length },
    { id: "pending", label: "Requests", count: filteredPending.length },
    { id: "suggested", label: "Discover", count: filteredSuggested.length },
  ];

  const ActionButtons = ({ twin, compact = false }) => (
    <div style={{ display: "flex", gap: compact ? 6 : 8, flexWrap: "wrap" }}>
      <motion.button
        whileTap={{ scale: 0.93 }}
        onClick={(e) => {
          e.stopPropagation();
          setConnected((c) => ({ ...c, [twin.id]: !c[twin.id] }));
        }}
        style={{
          background: connected[twin.id] ? t.overlay : `linear-gradient(135deg, ${t.pink}, ${t.blue})`,
          border: connected[twin.id] ? `1px solid ${t.border}` : "none",
          borderRadius: 10,
          padding: compact ? "6px 12px" : "7px 15px",
          cursor: "pointer",
          fontSize: compact ? 11 : 12,
          fontWeight: 800,
          color: connected[twin.id] ? t.textSub : t.darkText,
          display: "flex", alignItems: "center", gap: 5,
          boxShadow: connected[twin.id] ? "none" : `0 4px 14px ${t.pink}40`,
          transition: "all 0.22s cubic-bezier(.4,0,.2,1)",
          whiteSpace: "nowrap",
        }}
      >
        {connected[twin.id] ? (<><UserCheck size={12} /> Connected</>) : (<><UserPlus size={12} /> Connect</>)}
      </motion.button>

      <motion.button
        whileTap={{ scale: 0.93 }}
        onClick={(e) => {
          e.stopPropagation();
          setFollowed((f) => ({ ...f, [twin.id]: !f[twin.id] }));
        }}
        style={{
          background: followed[twin.id] ? `${t.blue}18` : t.overlay,
          border: `1px solid ${followed[twin.id] ? t.blue + "55" : t.border}`,
          borderRadius: 10,
          padding: compact ? "6px 12px" : "7px 15px",
          cursor: "pointer",
          fontSize: compact ? 11 : 12,
          fontWeight: 700,
          color: followed[twin.id] ? t.blue : t.textMuted,
          display: "flex", alignItems: "center", gap: 5,
          transition: "all 0.22s",
          whiteSpace: "nowrap",
        }}
      >
        {followed[twin.id] ? (<><Bell size={12} /> Following</>) : (<><BellOff size={12} /> Follow</>)}
      </motion.button>

      <motion.button
        whileTap={{ scale: 0.93 }}
        onClick={(e) => e.stopPropagation()}
        style={{
          background: t.overlay,
          border: `1px solid ${t.border}`,
          borderRadius: 10,
          padding: compact ? "6px 10px" : "7px 12px",
          cursor: "pointer",
          color: t.textMuted,
          display: "flex", alignItems: "center",
          transition: "all 0.2s",
        }}
      >
        <MessageSquare size={13} />
      </motion.button>
    </div>
  );

  return (
    // FIX: key={dark ? "dark" : "light"} forces React/Framer Motion to fully
    // remount this subtree whenever the theme flips, instead of patching styles
    // in place. This prevents motion elements from getting stuck at their
    // `initial` (opacity: 0) state when the theme toggle interrupts an
    // in-progress animation — which is what produces "empty container until
    // refresh" symptoms.
    <div
      key={dark ? "dark" : "light"}
      style={{
        background: t.bg,
        minHeight: "100vh",
        fontFamily: "'DM Sans', 'Inter', sans-serif",
        color: t.text,
        padding: "24px 20px",
        transition: "background 0.3s, color 0.3s",
      }}
    >
      {/* HEADER — dark/light toggle button removed; controlled by dashboard topbar now */}
      <motion.div
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          marginBottom: 26, flexWrap: "wrap", gap: 12,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 38, height: 38, borderRadius: 11,
              background: `linear-gradient(135deg, ${t.pink}, ${t.blue})`,
              display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
            }}
          >
            <Users size={18} color={t.darkText} />
          </div>
          <div>
            <h1
              style={{
                margin: 0, fontSize: 20, fontWeight: 900, letterSpacing: "-0.03em",
                background: `linear-gradient(135deg, ${t.pink}, ${t.blue})`,
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}
            >
              Twin Connections
            </h1>
            <p style={{ margin: 0, fontSize: 12, color: t.textMuted }}>
              Manage your global twin network
            </p>
          </div>
        </div>
      </motion.div>

      {/* SEARCH */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.06 } }} style={{ position: "relative", marginBottom: 18 }}>
        <Search
          size={15}
          color={t.textMuted}
          style={{ position: "absolute", left: 15, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}
        />
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search twins by name, interest, location..."
          style={{
            width: "100%", boxSizing: "border-box", background: t.bgInput,
            border: `1px solid ${t.border}`, borderRadius: 13, padding: "12px 15px 12px 40px",
            color: t.text, fontSize: 13, outline: "none", transition: "border-color 0.2s",
          }}
          onFocus={(e) => (e.target.style.borderColor = t.pink)}
          onBlur={(e) => (e.target.style.borderColor = t.border)}
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            style={{
              position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)",
              background: "none", border: "none", cursor: "pointer", color: t.textMuted, padding: 0,
            }}
          >
            <X size={14} />
          </button>
        )}
      </motion.div>

      {/* TABS */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.1 } }}
        style={{
          display: "flex", background: t.bgTab, borderRadius: 13, padding: 4,
          marginBottom: 22, border: `1px solid ${t.border}`, gap: 3,
        }}
      >
        {tabs.map((tab) => {
          const active = activeTab === tab.id;
          return (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              whileTap={{ scale: 0.97 }}
              style={{
                flex: 1, padding: "9px 6px", borderRadius: 10, border: "none",
                cursor: "pointer", fontSize: 12, fontWeight: 800,
                background: active ? `linear-gradient(135deg, ${t.pink}, ${t.blue})` : "transparent",
                color: active ? t.darkText : t.textSub,
                transition: "all 0.22s", display: "flex", alignItems: "center",
                justifyContent: "center", gap: 5,
                boxShadow: active ? `0 3px 14px ${t.pink}38` : "none",
              }}
            >
              {tab.label}
              <span
                style={{
                  fontSize: 10, fontWeight: 800, padding: "1px 6px", borderRadius: 20,
                  background: active ? "rgba(4,14,41,0.18)" : t.overlay,
                  color: active ? t.darkText : t.textMuted,
                }}
              >
                {tab.count}
              </span>
            </motion.button>
          );
        })}
      </motion.div>

      {/* CONTENT */}
      <AnimatePresence mode="wait">
        {/* MY TWINS */}
        {activeTab === "friends" && (
          <motion.div
            key="friends"
            variants={cVariants}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0 }}
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))", gap: 14 }}
          >
            {filteredFriends.map((twin) => (
              <motion.div
                key={twin.id}
                variants={cardV}
                whileHover={{ y: -5, borderColor: t.borderHover, boxShadow: `0 14px 44px ${t.pink}14` }}
                style={{ ...cardBase, cursor: "pointer" }}
                onClick={() => goToProfile(twin)}
              >
                <div style={{ height: 52, background: `linear-gradient(120deg, ${t.pink}30, ${t.blue}30)`, position: "relative", flexShrink: 0 }}>
                  {twin.verified && (
                    <span
                      style={{
                        position: "absolute", top: 8, right: 10, fontSize: 10, fontWeight: 800,
                        background: `linear-gradient(135deg, ${t.pink}, ${t.blue})`,
                        color: t.darkText, padding: "2px 9px", borderRadius: 20,
                      }}
                    >
                      ✦ Verified
                    </span>
                  )}
                  <div style={{ position: "absolute", bottom: -20, left: 16 }}>
                    <TwinAvatars a={twin.avatar} b={twin.avatarB} size={48} t={t} />
                  </div>
                </div>

                <div style={{ padding: "28px 16px 16px" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 6, flexWrap: "wrap", gap: 6 }}>
                    <div>
                      <h3 style={{ margin: 0, fontSize: 14, fontWeight: 800 }}>{twin.name}</h3>
                      <p style={{ margin: "1px 0 0", fontSize: 11, color: t.pink, fontWeight: 600 }}>{twin.username}</p>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", fontSize: 11, color: twin.status === "online" ? t.online : t.textMuted, gap: 2 }}>
                      <OnlineDot status={twin.status} t={t} />
                      {twin.status === "online" ? "Online" : twin.lastActive}
                    </div>
                  </div>

                  <p style={{ margin: "0 0 4px", fontSize: 11, color: t.textSub, display: "flex", alignItems: "center", gap: 3 }}>
                    <MapPin size={10} />
                    {twin.location}
                  </p>

                  <p
                    style={{
                      margin: "6px 0 10px", fontSize: 12, color: t.textSub, lineHeight: 1.55,
                      display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden",
                    }}
                  >
                    {twin.bio}
                  </p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 12 }}>
                    <PillBadge label={twin.twinType} t={t} variant="blue" />
                    {twin.interests.slice(0, 2).map((tag, i) => (
                      <span
                        key={i}
                        style={{
                          fontSize: 10, padding: "2px 8px", borderRadius: 20,
                          background: t.overlay, color: t.textSub, border: `1px solid ${t.border}`,
                        }}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div style={{ paddingTop: 10, borderTop: `1px solid ${t.border}` }}>
                    <div style={{ fontSize: 11, color: t.textMuted, marginBottom: 8 }}>
                      {twin.followers.toLocaleString()} followers · {twin.mutualFriends} mutual
                    </div>
                    <ActionButtons twin={twin} compact />
                  </div>
                </div>

                <div
                  style={{
                    position: "absolute", bottom: 14, right: 14, opacity: 0.3,
                    display: "flex", alignItems: "center", gap: 3, fontSize: 11, color: t.textSub,
                  }}
                >
                  View profile <ChevronRight size={12} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* REQUESTS */}
        {activeTab === "pending" && (
          <motion.div key="pending" variants={cVariants} initial="hidden" animate="show" exit={{ opacity: 0 }}>
            <AnimatePresence>
              {filteredPending.filter((p) => accepted[p.id]).map((p) => (
                <motion.div
                  key={`ok-${p.id}`}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  style={{
                    ...cardBase, padding: "12px 16px", marginBottom: 10,
                    borderColor: `${t.online}40`, background: `${t.online}08`,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <UserCheck size={16} color={t.online} />
                    <span style={{ fontSize: 13, fontWeight: 700, color: t.online }}>
                      Connected with {p.name}!
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {filteredPending.filter((p) => p.type === "received" && !accepted[p.id]).length > 0 && (
              <div style={{ marginBottom: 22 }}>
                <p style={{ fontSize: 10, fontWeight: 900, letterSpacing: "0.1em", color: t.textMuted, textTransform: "uppercase", margin: "0 0 10px" }}>
                  Received
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {filteredPending
                    .filter((p) => p.type === "received" && !accepted[p.id])
                    .map((invite) => (
                      <motion.div key={invite.id} variants={cardV} style={{ ...cardBase, padding: 16 }}>
                        <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                          <TwinAvatars a={invite.avatar} b={invite.avatarB} size={50} t={t} />
                          <div style={{ flex: 1 }}>
                            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 6, marginBottom: 2 }}>
                              <div>
                                <h3 style={{ margin: 0, fontSize: 14, fontWeight: 800 }}>{invite.name}</h3>
                                <p style={{ margin: 0, fontSize: 11, color: t.pink }}>{invite.username}</p>
                              </div>
                              <span style={{ fontSize: 10, color: t.textMuted, display: "flex", alignItems: "center", gap: 3 }}>
                                <Clock size={10} />
                                {invite.time}
                              </span>
                            </div>

                            <p style={{ margin: "3px 0", fontSize: 11, color: t.textSub, display: "flex", alignItems: "center", gap: 3 }}>
                              <MapPin size={10} />
                              {invite.location}
                            </p>

                            <p style={{ margin: "6px 0 8px", fontSize: 12, color: t.textSub, lineHeight: 1.5 }}>
                              {invite.bio}
                            </p>

                            <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 10, flexWrap: "wrap" }}>
                              <span style={{ fontSize: 11, color: t.textMuted }}>
                                {invite.mutualFriends} mutual twin friends
                              </span>
                              <PillBadge label={invite.twinType} t={t} variant="pink" />
                            </div>

                            <div style={{ display: "flex", gap: 8 }}>
                              <motion.button
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setAccepted((a) => ({ ...a, [invite.id]: true }))}
                                style={{
                                  background: `linear-gradient(135deg, ${t.pink}, ${t.blue})`,
                                  border: "none", borderRadius: 10, padding: "8px 18px", cursor: "pointer",
                                  fontSize: 12, fontWeight: 800, color: t.darkText,
                                  display: "flex", alignItems: "center", gap: 5,
                                  boxShadow: `0 4px 14px ${t.pink}40`,
                                }}
                              >
                                <Check size={13} /> Accept
                              </motion.button>

                              <motion.button
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setRejected((r) => ({ ...r, [invite.id]: true }))}
                                style={{
                                  background: t.overlay, border: `1px solid ${t.border}`, borderRadius: 10,
                                  padding: "8px 14px", cursor: "pointer", fontSize: 12, fontWeight: 700,
                                  color: t.textMuted, display: "flex", alignItems: "center", gap: 5,
                                }}
                              >
                                <X size={13} /> Decline
                              </motion.button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                </div>
              </div>
            )}

            {filteredPending.filter((p) => p.type === "sent").length > 0 && (
              <div>
                <p style={{ fontSize: 10, fontWeight: 900, letterSpacing: "0.1em", color: t.textMuted, textTransform: "uppercase", margin: "0 0 10px" }}>
                  Sent
                </p>

                {filteredPending
                  .filter((p) => p.type === "sent")
                  .map((invite) => (
                    <motion.div key={invite.id} variants={cardV} style={{ ...cardBase, padding: 16, marginBottom: 10 }}>
                      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                        <TwinAvatars a={invite.avatar} b={invite.avatarB} size={46} t={t} />
                        <div style={{ flex: 1 }}>
                          <h3 style={{ margin: 0, fontSize: 14, fontWeight: 800 }}>{invite.name}</h3>
                          <p style={{ margin: "2px 0", fontSize: 11, color: t.textSub, display: "flex", alignItems: "center", gap: 3 }}>
                            <MapPin size={10} />
                            {invite.location}
                          </p>
                          <p style={{ margin: "2px 0", fontSize: 11, color: t.textMuted, display: "flex", alignItems: "center", gap: 3 }}>
                            <Clock size={10} />
                            Sent {invite.time}
                          </p>
                        </div>

                        <span
                          style={{
                            fontSize: 11, fontWeight: 700, padding: "4px 11px", borderRadius: 20,
                            background: `${t.blue}18`, color: t.blue, border: `1px solid ${t.blue}30`,
                          }}
                        >
                          Pending
                        </span>
                      </div>
                    </motion.div>
                  ))}
              </div>
            )}
          </motion.div>
        )}

        {/* DISCOVER */}
        {activeTab === "suggested" && (
          <motion.div key="suggested" variants={cVariants} initial="hidden" animate="show" exit={{ opacity: 0 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <Globe size={14} color={t.pink} />
                <span style={{ fontSize: 12, fontWeight: 800, color: t.textSub }}>Suggested Twin Pairs</span>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 13 }}>
              {filteredSuggested.map((twin) => (
                <motion.div
                  key={twin.id}
                  variants={cardV}
                  whileHover={{ y: -5, borderColor: t.borderHover, boxShadow: `0 14px 44px ${t.blue}14` }}
                  style={{ ...cardBase, cursor: "pointer" }}
                  onClick={() => goToProfile(twin)}
                >
                  <div
                    style={{
                      padding: "7px 14px", borderBottom: `1px solid ${t.border}`, fontSize: 11,
                      color: t.blue, fontWeight: 700, background: `${t.blue}09`,
                      display: "flex", alignItems: "center", gap: 4,
                    }}
                  >
                    <Zap size={11} />
                    {twin.reason || "Suggested for you"}
                  </div>

                  <div style={{ padding: 16 }}>
                    <div style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 10 }}>
                      <TwinAvatars a={twin.avatar} b={twin.avatarB} size={50} t={t} />
                      <div>
                        <h3 style={{ margin: 0, fontSize: 14, fontWeight: 800 }}>{twin.name}</h3>
                        <p style={{ margin: "1px 0", fontSize: 11, color: t.blue, fontWeight: 600 }}>{twin.username}</p>
                        <p style={{ margin: "2px 0", fontSize: 11, color: t.textSub, display: "flex", alignItems: "center", gap: 3 }}>
                          <MapPin size={10} />
                          {twin.location}
                        </p>
                      </div>
                    </div>

                    <p
                      style={{
                        margin: "0 0 8px", fontSize: 12, color: t.textSub, lineHeight: 1.55,
                        display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden",
                      }}
                    >
                      {twin.bio}
                    </p>

                    <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 12 }}>
                      {(twin.commonInterests || twin.interests || []).slice(0, 3).map((ci, i) => (
                        <span
                          key={i}
                          style={{
                            fontSize: 10, padding: "2px 8px", borderRadius: 20,
                            background: `${t.pink}12`, color: t.pink, border: `1px solid ${t.pink}25`,
                          }}
                        >
                          ✦ {ci}
                        </span>
                      ))}
                    </div>

                    <div style={{ paddingTop: 10, borderTop: `1px solid ${t.border}` }}>
                      <div style={{ fontSize: 11, color: t.textMuted, marginBottom: 8 }}>
                        {twin.mutualFriends} mutual · {(twin.followers / 1000).toFixed(1)}K followers
                      </div>
                      <ActionButtons twin={twin} compact />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* EMPTY STATE */}
      <AnimatePresence>
        {((activeTab === "friends" && filteredFriends.length === 0) ||
          (activeTab === "pending" && filteredPending.length === 0) ||
          (activeTab === "suggested" && filteredSuggested.length === 0)) && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            style={{
              textAlign: "center", padding: "52px 24px", border: `1px dashed ${t.border}`,
              borderRadius: 18, background: t.overlay, marginTop: 18,
            }}
          >
            <div
              style={{
                width: 56, height: 56, borderRadius: "50%", margin: "0 auto 14px",
                background: `linear-gradient(135deg, ${t.pink}20, ${t.blue}20)`,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}
            >
              <Users size={24} color={t.pink} />
            </div>
            <h3 style={{ margin: "0 0 5px", fontSize: 16, fontWeight: 800 }}>No twins found</h3>
            <p style={{ margin: "0 0 16px", fontSize: 12, color: t.textSub, maxWidth: 260, marginLeft: "auto", marginRight: "auto" }}>
              {searchQuery ? `No results for "${searchQuery}"` : "Nothing here yet."}
            </p>
            {searchQuery && (
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setSearchQuery("")}
                style={{
                  background: `linear-gradient(135deg, ${t.pink}, ${t.blue})`, border: "none",
                  borderRadius: 10, padding: "8px 18px", cursor: "pointer", fontSize: 12,
                  fontWeight: 800, color: t.darkText,
                }}
              >
                Clear Search
              </motion.button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Friend;