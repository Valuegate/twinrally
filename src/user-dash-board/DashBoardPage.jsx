import React, { useContext, useState, useEffect, useRef } from "react";
import { IoMdMenu } from "react-icons/io";
import { navItems } from "@/data/dashboard/navItem";
import { ContentContext } from "../UseContext/context";
import { Friend } from "@/components/DashBoard/Friend";
import { Settings } from "@/components/DashBoard/Settings";
import { Events } from "@/components/DashBoard/Events";
import { CommPage } from "@/components/DashBoard/CommPage";
import { Message } from "@/components/DashBoard/Message";
import { NotificationsPage } from "@/components/DashBoard/NotificationPage";
import {
  Sun,
  Moon,
  LogOut,
  Bell,
  Search,
  ChevronRight,
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  MoreHorizontal,
  Image as ImageIcon,
  Video,
  Smile,
  MapPin,
  Users,
  Plus,
  TrendingUp,
  Sparkles,
  X,
  Send,
  Repeat2,
  Twitter,
  Link2,
  Copy,
  Check,
  Calendar,
  ChevronLeft,
  ChevronRight as ChevronR,
  Eye,
  UserPlus,
  UserCheck,
} from "lucide-react";

const TR_THEME = {
  dark: {
    bg: "#07111f",
    sidebar: "#040e29",
    topbar: "rgba(4,14,41,0.97)",
    surface: "#0d1e38",
    card: "#0d1e38",
    border: "rgba(166,192,238,0.08)",
    text: "#f0ecf8",
    mutedText: "rgba(240,236,248,0.45)",
    hover: "rgba(166,192,238,0.07)",
    activeItem: "rgba(251,194,235,0.13)",
    activeText: "#fbc2eb",
    btnBg: "rgba(255,255,255,0.05)",
    inputBg: "rgba(255,255,255,0.05)",
    accent1: "#fbc2eb",
    accent2: "#a6c0ee",
    accentDeep: "#9a3060",
    overlay: "rgba(4,14,41,0.88)",
    like: "#f87171",
  },
  light: {
    bg: "#f4f1ed",
    sidebar: "#fefcf9",
    topbar: "rgba(254,252,249,0.97)",
    surface: "#ffffff",
    card: "#ffffff",
    border: "rgba(4,14,41,0.07)",
    text: "#0f1a2e",
    mutedText: "rgba(15,26,46,0.45)",
    hover: "rgba(4,14,41,0.04)",
    activeItem: "rgba(251,194,235,0.22)",
    activeText: "#9a3060",
    btnBg: "rgba(4,14,41,0.04)",
    inputBg: "rgba(4,14,41,0.03)",
    accent1: "#c4507a",
    accent2: "#4a7fc1",
    accentDeep: "#9a3060",
    overlay: "rgba(15,26,46,0.55)",
    like: "#e11d48",
  },
};

const STORIES_DATA = [
  {
    id: "own",
    name: "Your Story",
    initials: "F",
    isOwn: true,
    viewed: false,
    color: "#fbc2eb",
    bg: "#3a0020",
    img: null,
  },
  {
    id: "s2",
    name: "Amara & Ada",
    initials: "AA",
    viewed: false,
    color: "#a6c0ee",
    bg: "#0d1e38",
    img: "https://picsum.photos/seed/twins1/200/350",
  },
  {
    id: "s3",
    name: "Jide Twins",
    initials: "JT",
    viewed: false,
    color: "#c4b5fd",
    bg: "#1e0d38",
    img: "https://picsum.photos/seed/twins2/200/350",
  },
  {
    id: "s4",
    name: "The Babas",
    initials: "TB",
    viewed: true,
    color: "#86efac",
    bg: "#0d2a1e",
    img: "https://picsum.photos/seed/twins3/200/350",
  },
  {
    id: "s5",
    name: "Mimi & Titi",
    initials: "MT",
    viewed: false,
    color: "#fcd34d",
    bg: "#2a1e0d",
    img: "https://picsum.photos/seed/twins4/200/350",
  },
  {
    id: "s6",
    name: "Leo & Len",
    initials: "LL",
    viewed: true,
    color: "#f9a8d4",
    bg: "#2a0d1e",
    img: "https://picsum.photos/seed/twins5/200/350",
  },
  {
    id: "s7",
    name: "Tolu & Sola",
    initials: "TS",
    viewed: false,
    color: "#67e8f9",
    bg: "#0d1e2a",
    img: "https://picsum.photos/seed/twins6/200/350",
  },
];

const POSTS_DATA = [
  {
    id: 1,
    user: "Amara & Adaeze",
    handle: "@amaraada_twins",
    initials: "AA",
    avatarColor: "#fbc2eb",
    avatarBg: "rgba(251,194,235,0.18)",
    time: "2m ago",
    verified: true,
    content:
      "Twin connection hits different at 3am when you both simultaneously text each other the exact same meme without even talking first. This bond is genuinely unexplainable.",
    img: null,
    likes: 847,
    comments: 92,
    shares: 134,
    liked: false,
    saved: false,
    badge: "Trending",
    commentsList: [
      {
        id: 1,
        user: "Jide Twins",
        initials: "JT",
        color: "#c4b5fd",
        text: "This is literally us every weekend omg",
        time: "1m ago",
      },
      {
        id: 2,
        user: "Tolu & Sola",
        initials: "TS",
        color: "#67e8f9",
        text: "Twin telepathy is real and science can't explain it",
        time: "30s ago",
      },
    ],
  },
  {
    id: 2,
    user: "Lagos Twin Fest 2025",
    handle: "@lagostvinfest",
    initials: "LT",
    avatarColor: "#a6c0ee",
    avatarBg: "rgba(166,192,238,0.18)",
    time: "18m ago",
    verified: true,
    content:
      "Registration is officially OPEN. Join 2,000+ twins from across Africa for the biggest twin celebration of the year. Live performances, twin challenges, matching contests and so much more.",
    img: "https://picsum.photos/seed/festival99/600/340",
    likes: 2341,
    comments: 318,
    shares: 891,
    liked: true,
    saved: true,
    badge: "Event",
    commentsList: [
      {
        id: 1,
        user: "Amara & Ada",
        initials: "AA",
        color: "#fbc2eb",
        text: "Already registered! See everyone there",
        time: "15m ago",
      },
    ],
  },
  {
    id: 3,
    user: "Taiwo Adesanya",
    handle: "@taiwo_and_kehinde",
    initials: "TA",
    avatarColor: "#c4b5fd",
    avatarBg: "rgba(196,181,253,0.18)",
    time: "1h ago",
    verified: false,
    content:
      "My twin Kehinde and I just hit 10 years of running our business together. People always ask how we don't fight. Honestly? We do. We just can't stay mad for more than 10 minutes.",
    img: "https://picsum.photos/seed/business22/600/340",
    likes: 1204,
    comments: 445,
    shares: 203,
    liked: false,
    saved: false,
    badge: null,
    commentsList: [
      {
        id: 1,
        user: "The Babas",
        initials: "TB",
        color: "#86efac",
        text: "10 years is massive, congratulations!",
        time: "55m ago",
      },
      {
        id: 2,
        user: "Mimi & Titi",
        initials: "MT",
        color: "#fcd34d",
        text: "Goals! We're at year 3 and still figuring it out",
        time: "40m ago",
      },
    ],
  },
  {
    id: 4,
    user: "TwinRally Global",
    handle: "@twinrally",
    initials: "TR",
    avatarColor: "#fbc2eb",
    avatarBg: "rgba(251,194,235,0.18)",
    time: "3h ago",
    verified: true,
    content:
      "This week's Twin Spotlight: meet the Okonkwo sisters from Enugu who started a sustainable fashion brand together. They've dressed over 500 brides across Nigeria.",
    img: "https://picsum.photos/seed/fashion77/600/340",
    likes: 3892,
    comments: 612,
    shares: 1204,
    liked: true,
    saved: false,
    badge: "Spotlight",
    commentsList: [
      {
        id: 1,
        user: "Taiwo Adesanya",
        initials: "TA",
        color: "#c4b5fd",
        text: "Incredible story, so inspiring!",
        time: "2h ago",
      },
    ],
  },
];

const TRENDING_DATA = [
  { tag: "#LagossTwinFest", count: "12.4K posts" },
  { tag: "#TwinBondChallenge", count: "8.9K posts" },
  { tag: "#TwinLife", count: "6.2K posts" },
  { tag: "#NigerianTwins", count: "4.1K posts" },
  { tag: "#MatchingMoment", count: "3.8K posts" },
];

const SUGGESTED_DATA = [
  {
    id: 1,
    name: "Chisom & Chidinma",
    handle: "@chisomchi",
    initials: "CC",
    mutual: 12,
    followed: false,
    color: "#fbc2eb",
  },
  {
    id: 2,
    name: "Remi & Remi Jr",
    handle: "@remixremi",
    initials: "RR",
    mutual: 7,
    followed: false,
    color: "#a6c0ee",
  },
  {
    id: 3,
    name: "The Bello Twins",
    handle: "@bellotwins",
    initials: "BT",
    mutual: 23,
    followed: false,
    color: "#c4b5fd",
  },
];

/* ---- SCOPED CSS ---- */
const SCOPED_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap');
.trdb*,.trdb *::before,.trdb *::after{box-sizing:border-box;margin:0;padding:0;}
.trdb{font-family:'DM Sans',sans-serif;}
.trdb .tr-sidebar{position:fixed;top:0;left:0;width:248px;height:100vh;display:flex;flex-direction:column;z-index:40;overflow:hidden;transition:background .4s,border-color .4s;}
.trdb .tr-logo-wrap{display:flex;align-items:center;gap:10px;padding:1.5rem 1.4rem 1.1rem;flex-shrink:0;}
.trdb .tr-logo-icon{width:36px;height:36px;border-radius:10px;background:linear-gradient(135deg,#fbc2eb,#a6c0ee);display:flex;align-items:center;justify-content:center;flex-shrink:0;overflow:hidden;}
.trdb .tr-logo-icon img{width:100%;height:100%;object-fit:contain;}
.trdb .tr-logo-txt{font-family:'Syne',sans-serif;font-size:1.2rem;font-weight:800;letter-spacing:-0.5px;}
.trdb .tr-sb-scroll{flex:1;overflow-y:auto;padding:.25rem .75rem 1rem;scrollbar-width:none;}
.trdb .tr-sb-scroll::-webkit-scrollbar{display:none;}
.trdb .tr-sec-label{font-size:.58rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;padding:.9rem .6rem .35rem;opacity:.28;}
.trdb .tr-nav-item{display:flex;align-items:center;gap:11px;padding:.58rem .8rem;border-radius:12px;cursor:pointer;transition:all .2s;position:relative;margin-bottom:2px;font-size:.875rem;font-weight:500;user-select:none;}
.trdb .tr-nav-item:hover{transform:translateX(3px);}
.trdb .tr-nav-item.active::after{content:'';position:absolute;right:0;top:25%;bottom:25%;width:3px;border-radius:2px 0 0 2px;background:linear-gradient(180deg,#fbc2eb,#a6c0ee);}
.trdb .tr-nav-badge{margin-left:auto;font-size:.6rem;font-weight:700;padding:2px 8px;border-radius:100px;background:linear-gradient(135deg,#fbc2eb,#a6c0ee);color:#3a0020;}
.trdb .tr-sb-footer{padding:.9rem .75rem;border-top:1px solid;flex-shrink:0;}
.trdb .tr-user-chip{display:flex;align-items:center;gap:10px;padding:.55rem .6rem;border-radius:12px;cursor:pointer;transition:background .2s;}
.trdb .tr-av-sm{width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,#fbc2eb,#a6c0ee);display:flex;align-items:center;justify-content:center;font-size:.78rem;font-weight:700;flex-shrink:0;color:#3a0020;font-family:'Syne',sans-serif;}
.trdb .tr-uname{font-size:.84rem;font-weight:600;}
.trdb .tr-urole{font-size:.68rem;opacity:.4;}
.trdb .tr-topbar{position:fixed;top:0;left:248px;right:0;height:60px;z-index:30;display:flex;align-items:center;justify-content:space-between;padding:0 1.75rem;transition:background .4s,border-color .4s;border-bottom:1px solid;backdrop-filter:blur(12px);}
.trdb .tr-topbar-title{font-family:'Syne',sans-serif;font-size:1.05rem;font-weight:700;}
.trdb .tr-topbar-right{display:flex;align-items:center;gap:8px;}
.trdb .tr-icon-btn{width:36px;height:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;cursor:pointer;border:1px solid;transition:all .2s;flex-shrink:0;background:none;}
.trdb .tr-icon-btn:hover{transform:scale(1.06);}
.trdb .tr-pill-btn{display:flex;align-items:center;gap:6px;padding:0 14px;height:36px;border-radius:100px;font-size:.75rem;font-weight:600;cursor:pointer;border:1px solid;transition:all .2s;white-space:nowrap;font-family:'DM Sans',sans-serif;background:none;}
.trdb .tr-logout-btn{display:flex;align-items:center;gap:6px;padding:0 14px;height:36px;border-radius:100px;font-size:.75rem;font-weight:600;cursor:pointer;border:none;transition:all .2s;background:rgba(251,194,235,0.13);color:#9a3060;font-family:'DM Sans',sans-serif;}
.trdb .tr-logout-btn:hover{background:rgba(251,194,235,0.24);}

/* ── SCROLL FIX: main no longer grows the page; it scrolls inside itself ── */
.trdb .tr-main{
  position:fixed;
  top:60px;
  left:248px;
  right:0;
  bottom:0;
  overflow-y:auto;
}

.trdb .tr-layout{max-width:1140px;margin:0 auto;display:grid;grid-template-columns:1fr 310px;gap:1.5rem;padding:1.75rem 1.5rem;}
.trdb .tr-feed{min-width:0;}
.trdb .tr-twin-chip{display:flex;align-items:center;position:relative;cursor:pointer;flex-shrink:0;}
.trdb .tr-twin-av{width:44px;height:44px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:.8rem;font-weight:800;font-family:'Syne',sans-serif;border:2.5px solid;transition:transform .2s;flex-shrink:0;}
.trdb .tr-twin-chip:hover .tr-twin-av{transform:scale(1.06);}
.trdb .tr-stories-wrap{display:flex;gap:10px;overflow-x:auto;padding-bottom:4px;margin-bottom:1.25rem;scrollbar-width:none;}
.trdb .tr-stories-wrap::-webkit-scrollbar{display:none;}
.trdb .tr-story{display:flex;flex-direction:column;align-items:center;gap:6px;flex-shrink:0;cursor:pointer;}
.trdb .tr-story-ring{width:60px;height:60px;border-radius:50%;display:flex;align-items:center;justify-content:center;transition:transform .2s;}
.trdb .tr-story-ring:hover{transform:scale(1.09);}
.trdb .tr-story-inner{width:100%;height:100%;border-radius:50%;overflow:hidden;display:flex;align-items:center;justify-content:center;font-size:.88rem;font-weight:800;font-family:'Syne',sans-serif;}
.trdb .tr-story-inner img{width:100%;height:100%;object-fit:cover;}
.trdb .tr-story-name{font-size:.62rem;font-weight:500;text-align:center;max-width:62px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;opacity:.6;}
.trdb .tr-composer{border-radius:18px;padding:1.1rem 1.2rem;border:1px solid;margin-bottom:1.25rem;transition:border-color .2s;}
.trdb .tr-composer-top{display:flex;align-items:flex-start;gap:10px;}
.trdb .tr-composer-input{flex:1;border:none;outline:none;font-family:'DM Sans',sans-serif;font-size:.95rem;font-weight:400;background:transparent;resize:none;line-height:1.6;padding-top:2px;min-height:42px;transition:min-height .25s;}
.trdb .tr-composer-actions{display:flex;align-items:center;gap:6px;padding-top:.8rem;border-top:1px solid;margin-top:.8rem;flex-wrap:wrap;}
.trdb .tr-media-btn{display:flex;align-items:center;gap:5px;padding:6px 12px;border-radius:100px;font-size:.74rem;font-weight:600;cursor:pointer;border:1px solid;transition:all .2s;background:none;font-family:'DM Sans',sans-serif;}
.trdb .tr-media-btn:hover{transform:scale(1.05);}
.trdb .tr-post-btn{margin-left:auto;display:flex;align-items:center;gap:6px;padding:7px 20px;border-radius:100px;font-size:.78rem;font-weight:700;cursor:pointer;border:none;font-family:'DM Sans',sans-serif;background:linear-gradient(135deg,#fbc2eb,#a6c0ee);color:#2a0038;transition:all .2s;}
.trdb .tr-post-btn:hover{opacity:.88;transform:scale(1.03);}
.trdb .tr-post-btn:disabled{opacity:.4;cursor:default;transform:none;}
.trdb .tr-feed-tab{padding:.5rem .9rem;border:none;background:transparent;font-family:'DM Sans',sans-serif;font-size:.8rem;font-weight:600;cursor:pointer;border-bottom:2px solid transparent;margin-bottom:-1px;transition:all .18s;}
.trdb .tr-post{border-radius:18px;padding:1.2rem;border:1px solid;margin-bottom:1rem;transition:border-color .25s,transform .25s;animation:trFadeUp .4s ease both;}
.trdb .tr-post:hover{transform:translateY(-1px);}
@keyframes trFadeUp{from{opacity:0;transform:translateY(12px);}to{opacity:1;transform:translateY(0);}}
.trdb .tr-post-av{width:42px;height:42px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:.82rem;font-weight:800;flex-shrink:0;font-family:'Syne',sans-serif;}
.trdb .tr-post-name{font-family:'Syne',sans-serif;font-size:.9rem;font-weight:700;display:flex;align-items:center;gap:5px;flex-wrap:wrap;}
.trdb .tr-verified-badge{width:16px;height:16px;border-radius:50%;flex-shrink:0;background:linear-gradient(135deg,#fbc2eb,#a6c0ee);display:inline-flex;align-items:center;justify-content:center;}
.trdb .tr-badge-pill{font-size:.6rem;font-weight:700;padding:2px 8px;border-radius:100px;letter-spacing:.05em;text-transform:uppercase;}
.trdb .tr-post-body{margin:.85rem 0 1rem;font-size:.92rem;line-height:1.65;}
.trdb .tr-post-img{border-radius:13px;margin-bottom:1rem;overflow:hidden;width:100%;max-height:340px;object-fit:cover;display:block;}
.trdb .tr-action-btn{display:flex;align-items:center;gap:5px;padding:6px 10px;border-radius:100px;font-size:.75rem;font-weight:600;cursor:pointer;border:none;background:transparent;transition:all .18s;font-family:'DM Sans',sans-serif;}
.trdb .tr-action-btn:hover{transform:scale(1.07);}
.trdb .tr-more-btn{display:block;width:100%;padding:.75rem;text-align:center;font-size:.78rem;font-weight:600;cursor:pointer;border-radius:12px;border:1px dashed;transition:all .2s;margin-top:.5rem;background:transparent;font-family:'DM Sans',sans-serif;}
.trdb .tr-more-btn:hover{transform:scale(1.01);}
.trdb .tr-comment-input{flex:1;border:1px solid;border-radius:100px;padding:7px 14px;background:transparent;font-family:'DM Sans',sans-serif;font-size:.78rem;outline:none;}
.trdb .tr-right{position:sticky;top:1.75rem;align-self:flex-start;}
.trdb .tr-right-card{border-radius:18px;padding:1.1rem 1.2rem;border:1px solid;margin-bottom:1.1rem;transition:background .4s,border-color .4s;}
.trdb .tr-right-title{font-family:'Syne',sans-serif;font-size:.82rem;font-weight:700;margin-bottom:.85rem;display:flex;align-items:center;gap:6px;}
.trdb .tr-trend-row{display:flex;justify-content:space-between;align-items:center;padding:.5rem 0;border-bottom:1px solid;cursor:pointer;transition:opacity .2s;}
.trdb .tr-trend-row:last-child{border-bottom:none;padding-bottom:0;}
.trdb .tr-trend-row:hover{opacity:.65;}
.trdb .tr-suggest-row{display:flex;align-items:center;gap:9px;padding:.5rem 0;}
.trdb .tr-suggest-av{width:36px;height:36px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:.75rem;font-weight:800;flex-shrink:0;font-family:'Syne',sans-serif;}
.trdb .tr-follow-btn{padding:5px 13px;border-radius:100px;font-size:.68rem;font-weight:700;cursor:pointer;border:1px solid;transition:all .22s;background:transparent;font-family:'DM Sans',sans-serif;display:flex;align-items:center;gap:4px;}
.trdb .tr-follow-btn:hover{transform:scale(1.05);}
.trdb .tr-follow-btn.followed{background:linear-gradient(135deg,#fbc2eb,#a6c0ee);border-color:transparent;color:#2a0038;}
.trdb .tr-mob-top{position:fixed;top:0;left:0;right:0;height:54px;display:flex;align-items:center;justify-content:space-between;padding:0 1rem;z-index:50;border-bottom:1px solid;transition:background .4s;backdrop-filter:blur(12px);}
.trdb .tr-mob-menu{width:34px;height:34px;border-radius:9px;display:flex;align-items:center;justify-content:center;cursor:pointer;border:1px solid;background:none;}
.trdb .tr-overlay{position:fixed;inset:0;z-index:48;background:rgba(4,14,41,0.55);backdrop-filter:blur(6px);animation:trDFade .22s ease;}
.trdb .tr-drawer{position:fixed;top:0;left:0;bottom:0;width:268px;z-index:49;display:flex;flex-direction:column;animation:trDSlide .26s cubic-bezier(0.22,1,0.36,1);overflow:hidden;}
@keyframes trDFade{from{opacity:0;}to{opacity:1;}}
@keyframes trDSlide{from{transform:translateX(-100%);}to{transform:translateX(0);}}
.trdb .tr-drawer-scroll{flex:1;overflow-y:auto;padding:.25rem .75rem 1rem;scrollbar-width:none;}
.trdb .tr-sv-overlay{position:fixed;inset:0;z-index:200;background:rgba(0,0,0,0.93);display:flex;align-items:center;justify-content:center;animation:trDFade .2s ease;}
.trdb .tr-sv-box{width:340px;max-width:95vw;height:600px;border-radius:20px;overflow:hidden;position:relative;background:#111;}
.trdb .tr-sv-img{width:100%;height:100%;object-fit:cover;}
.trdb .tr-sv-progress{position:absolute;top:12px;left:12px;right:12px;display:flex;gap:4px;}
.trdb .tr-sv-bar{height:3px;border-radius:2px;background:rgba(255,255,255,0.3);flex:1;overflow:hidden;}
.trdb .tr-sv-fill{height:100%;background:#fff;border-radius:2px;animation:trBarFill 4s linear forwards;}
@keyframes trBarFill{from{width:0%;}to{width:100%;}}
.trdb .tr-sv-close{position:absolute;top:40px;right:14px;cursor:pointer;color:#fff;z-index:10;background:none;border:none;}
.trdb .tr-sv-nav{position:absolute;top:50%;transform:translateY(-50%);display:flex;align-items:center;justify-content:center;width:36px;height:36px;border-radius:50%;background:rgba(255,255,255,0.15);cursor:pointer;border:none;color:#fff;transition:background .18s;}
.trdb .tr-sv-nav:hover{background:rgba(255,255,255,0.28);}
.trdb .tr-sv-gradient{position:absolute;bottom:0;left:0;right:0;height:200px;background:linear-gradient(to top,rgba(0,0,0,0.85),transparent);}
.trdb .tr-sv-bottom{position:absolute;bottom:0;left:0;right:0;padding:16px;}
.trdb .tr-sv-input{flex:1;background:rgba(255,255,255,0.15);border:1px solid rgba(255,255,255,0.25);border-radius:100px;padding:8px 14px;color:#fff;font-family:'DM Sans',sans-serif;font-size:.8rem;outline:none;}
.trdb .tr-sv-input::placeholder{color:rgba(255,255,255,0.5);}
.trdb .tr-share-overlay{position:fixed;inset:0;z-index:300;display:flex;align-items:flex-end;justify-content:center;animation:trDFade .2s ease;}
.trdb .tr-share-bg{position:absolute;inset:0;background:rgba(0,0,0,0.5);}
.trdb .tr-share-box{position:relative;width:100%;max-width:480px;border-radius:20px 20px 0 0;padding:1.5rem;animation:trShareUp .28s cubic-bezier(0.22,1,0.36,1);}
@keyframes trShareUp{from{transform:translateY(100%);}to{transform:translateY(0);}}
.trdb .tr-share-opt{display:flex;flex-direction:column;align-items:center;gap:6px;cursor:pointer;padding:.8rem;border-radius:14px;border:1px solid;transition:all .18s;background:none;font-family:'DM Sans',sans-serif;}
.trdb .tr-share-opt:hover{transform:translateY(-3px);}
.trdb .tr-notif-dot{position:absolute;top:7px;right:7px;width:7px;height:7px;border-radius:50%;background:#fbc2eb;}
.trdb .tr-search-overlay{position:fixed;inset:0;z-index:100;display:flex;align-items:flex-start;justify-content:center;padding-top:80px;animation:trDFade .18s ease;}
.trdb .tr-search-box{width:100%;max-width:520px;border-radius:18px;padding:1rem 1.2rem;border:1px solid;box-shadow:0 24px 60px rgba(0,0,0,0.3);display:flex;align-items:center;gap:10px;}
.trdb .tr-search-input{flex:1;border:none;outline:none;background:transparent;font-family:'DM Sans',sans-serif;font-size:1rem;}

/* ── MOBILE: main takes remaining screen below mobile topbar ── */
@media(max-width:1199px){.trdb .tr-layout{grid-template-columns:1fr;}.trdb .tr-right{display:none;}}
@media(max-width:1023px){
  .trdb .tr-sidebar,.trdb .tr-topbar{display:none;}
  .trdb .tr-main{
    position:fixed;
    top:54px;
    left:0;
    right:0;
    bottom:0;
    overflow-y:auto;
  }
  .trdb .tr-layout{padding:1rem;}
}
@media(min-width:1024px){.trdb .tr-mob-top{display:none;}}
`;

export const DashBoardPage = () => {
  const { handleSelect, selectedItem } = useContext(ContentContext);
  const [mobile, setMobile] = useState(false);
  const [dark, setDark] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);
  const [posts, setPosts] = useState(POSTS_DATA);
  const [postText, setPostText] = useState("");
  const [postFocused, setPostFocused] = useState(false);
  const [storyViewer, setStoryViewer] = useState(null);
  const [shareTarget, setShareTarget] = useState(null);
  const [notifications, setNotifications] = useState(3);
  const [suggested, setSuggested] = useState(SUGGESTED_DATA);

  // ── Scroll to top of dashboard main whenever tab changes ──
  useEffect(() => {
    const el = document.getElementById("dashboard-main-scroll");
    if (el) el.scrollTo({ top: 0, behavior: "instant" });
  }, [selectedItem]);

  useEffect(() => {
    const fn = () => {
      if (window.innerWidth >= 1024) setMobile(false);
    };
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);

  const d = dark ? TR_THEME.dark : TR_THEME.light;

  const toggleLike = (id) =>
    setPosts((p) =>
      p.map((post) =>
        post.id === id
          ? {
              ...post,
              liked: !post.liked,
              likes: post.liked ? post.likes - 1 : post.likes + 1,
            }
          : post,
      ),
    );
  const toggleSave = (id) =>
    setPosts((p) =>
      p.map((post) =>
        post.id === id ? { ...post, saved: !post.saved } : post,
      ),
    );
  const addComment = (id, text) =>
    setPosts((p) =>
      p.map((post) =>
        post.id === id
          ? {
              ...post,
              comments: post.comments + 1,
              commentsList: [
                ...post.commentsList,
                {
                  id: Date.now(),
                  user: "Faith",
                  initials: "F",
                  color: "#fbc2eb",
                  text,
                  time: "Just now",
                },
              ],
            }
          : post,
      ),
    );
  const handlePost = () => {
    if (!postText.trim()) return;
    setPosts((p) => [
      {
        id: Date.now(),
        user: "Faith",
        handle: "@faith_twin",
        initials: "F",
        avatarColor: "#fbc2eb",
        avatarBg: "rgba(251,194,235,0.18)",
        time: "Just now",
        verified: false,
        content: postText,
        img: null,
        likes: 0,
        comments: 0,
        shares: 0,
        liked: false,
        saved: false,
        badge: null,
        commentsList: [],
      },
      ...p,
    ]);
    setPostText("");
    setPostFocused(false);
  };
  const toggleFollow = (id) =>
    setSuggested((s) =>
      s.map((u) => (u.id === id ? { ...u, followed: !u.followed } : u)),
    );

  const renderContent = () => {
  if (selectedItem === "friends") return <Friend dark={dark} />;
if (selectedItem === "community") return <CommPage dark={dark} />;
    if (selectedItem === "settings") return <Settings />;
    if (selectedItem === "events") return <Events />;
    if (selectedItem === "messages") return <Message />;
    if (selectedItem === "notifications") return <NotificationsPage />;
    return (
      <HomeFeed
        d={d}
        dark={dark}
        posts={posts}
        suggested={suggested}
        toggleLike={toggleLike}
        toggleSave={toggleSave}
        addComment={addComment}
        postText={postText}
        setPostText={setPostText}
        postFocused={postFocused}
        setPostFocused={setPostFocused}
        handlePost={handlePost}
        setStoryViewer={setStoryViewer}
        setShareTarget={setShareTarget}
        toggleFollow={toggleFollow}
      />
    );
  };

  const currentLabel =
    navItems.find((n) => n.id === selectedItem)?.label || "Home";

  const SidebarInner = ({ onSelect }) => (
    <>
      {/* <div className="tr-logo-wrap">
        <div className="tr-logo-icon">
          <img src="/twinrally_icon-removebg-preview (1).png" alt="TwinRally" />
        </div>
        <span className="tr-logo-txt" style={{ color: d.text }}>TwinRally</span>
      </div> */}

      <div className="tr-logo-wrap">
        <img
          src="/twinrally_lg_06-removebg-preview (1).png"
          alt="TwinRally"
          style={{ height: "60px", width: "auto", objectFit: "contain" }}
        />
      </div>

      <div className="tr-sb-scroll">
        <NavItems
          items={navItems}
          selected={selectedItem}
          onSelect={onSelect}
          d={d}
        />
      </div>
      <div className="tr-sb-footer" style={{ borderColor: d.border }}>
        <div
          className="tr-user-chip"
          onMouseEnter={(e) => (e.currentTarget.style.background = d.hover)}
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = "transparent")
          }
        >
          <div className="tr-av-sm">F</div>
          <div>
            <div className="tr-uname" style={{ color: d.text }}>
              Faith
            </div>
            <div className="tr-urole" style={{ color: d.text }}>
              Twin · Lagos
            </div>
          </div>
          <ChevronRight
            size={13}
            style={{ marginLeft: "auto", opacity: 0.25, color: d.text }}
          />
        </div>
      </div>
    </>
  );

  return (
    <div
      className="trdb"
      style={{ background: d.bg, color: d.text, minHeight: "100vh" }}
    >
      <style>{SCOPED_CSS}</style>

      {/* STORY VIEWER */}
      {storyViewer && (
        <StoryViewer
          story={storyViewer}
          stories={STORIES_DATA.filter((s) => !s.isOwn)}
          onClose={() => setStoryViewer(null)}
          d={d}
        />
      )}

      {/* SHARE MODAL */}
      {shareTarget && (
        <ShareModal
          d={d}
          onClose={() => setShareTarget(null)}
          postId={shareTarget}
        />
      )}

      {/* SEARCH */}
      {searchOpen && (
        <div
          className="tr-search-overlay"
          style={{ background: d.overlay }}
          onClick={() => setSearchOpen(false)}
        >
          <div
            className="tr-search-box"
            style={{ background: d.surface, borderColor: d.border }}
            onClick={(e) => e.stopPropagation()}
          >
            <Search size={18} style={{ opacity: 0.4, color: d.text }} />
            <input
              className="tr-search-input"
              style={{ color: d.text }}
              placeholder="Search twins, events, stories…"
              autoFocus
            />
            <X
              size={16}
              style={{ opacity: 0.35, cursor: "pointer", color: d.text }}
              onClick={() => setSearchOpen(false)}
            />
          </div>
        </div>
      )}

      {/* DESKTOP SIDEBAR */}
      <aside
        className="tr-sidebar"
        style={{ background: d.sidebar, borderRight: `1px solid ${d.border}` }}
      >
        <SidebarInner onSelect={handleSelect} />
      </aside>

      {/* DESKTOP TOPBAR */}
      <header
        className="tr-topbar"
        style={{ background: d.topbar, borderColor: d.border }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span style={{ opacity: 0.3, fontSize: "0.72rem", color: d.text }}>
            Pages
          </span>
          <ChevronRight size={11} style={{ opacity: 0.3, color: d.text }} />
          <span className="tr-topbar-title" style={{ color: d.text }}>
            {currentLabel}
          </span>
        </div>
        <div className="tr-topbar-right">
          <button
            className="tr-pill-btn"
            style={{
              background: d.btnBg,
              borderColor: d.border,
              color: d.text,
            }}
            onClick={() => setDark(!dark)}
          >
            {dark ? (
              <>
                <Sun size={13} /> Light
              </>
            ) : (
              <>
                <Moon size={13} /> Dark
              </>
            )}
          </button>
          <div
            className="tr-icon-btn"
            style={{
              background: d.btnBg,
              borderColor: d.border,
              color: d.text,
            }}
            onClick={() => setSearchOpen(true)}
          >
            <Search size={15} />
          </div>
          <div
            className="tr-icon-btn"
            style={{
              background: d.btnBg,
              borderColor: d.border,
              color: d.text,
              position: "relative",
            }}
            onClick={() => {
              handleSelect("notifications");
              setNotifications(0);
            }}
          >
            <Bell size={15} />
            {notifications > 0 && <div className="tr-notif-dot" />}
          </div>
          <button className="tr-logout-btn">
            <LogOut size={13} /> Log out
          </button>
        </div>
      </header>

      {/* DESKTOP MAIN — id used by scroll reset useEffect above */}
      <main
        id="dashboard-main-scroll"
        className="tr-main"
        style={{ background: d.bg }}
      >
        <div className="tr-layout">{renderContent()}</div>
      </main>

      {/* MOBILE TOPBAR */}
      <header
        className="tr-mob-top"
        style={{ background: d.sidebar, borderColor: d.border }}
      >
        {/* <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div className="tr-logo-icon" style={{ width: 30, height: 30 }}>
            <img
              src="/twinrally_icon-removebg-preview (1).png"
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </div>
          <span
            style={{
              fontFamily: "'Syne',sans-serif",
              fontWeight: 800,
              fontSize: "1rem",
              color: d.text,
            }}
          >
            TwinRally
          </span>
        </div> */}

        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <img
            src="/twinrally_lg_06-removebg-preview (1).png"
            alt="TwinRally"
            style={{ height: "50px", width: "auto", objectFit: "contain" }}
          />
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div
            className="tr-icon-btn"
            style={{
              background: d.btnBg,
              borderColor: d.border,
              color: d.text,
            }}
            onClick={() => setDark(!dark)}
          >
            {dark ? <Sun size={14} /> : <Moon size={14} />}
          </div>
          <div
            className="tr-mob-menu"
            style={{
              background: d.btnBg,
              borderColor: d.border,
              color: d.text,
            }}
            onClick={() => setMobile(true)}
          >
            <IoMdMenu size={17} />
          </div>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      {mobile && (
        <>
          <div className="tr-overlay" onClick={() => setMobile(false)} />
          <div
            className="tr-drawer"
            style={{
              background: d.sidebar,
              borderRight: `1px solid ${d.border}`,
            }}
          >
            <SidebarInner
              onSelect={(id) => {
                handleSelect(id);
                setMobile(false);
              }}
            />
            <div style={{ padding: "0.75rem" }}>
              <button
                className="tr-logout-btn"
                style={{ width: "100%", justifyContent: "center" }}
              >
                <LogOut size={13} /> Log out
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

/* ---- HOME FEED ---- */
function HomeFeed({
  d,
  dark,
  posts,
  suggested,
  toggleLike,
  toggleSave,
  addComment,
  postText,
  setPostText,
  postFocused,
  setPostFocused,
  handlePost,
  setStoryViewer,
  setShareTarget,
  toggleFollow,
}) {
  const [feedTab, setFeedTab] = useState("for-you");

  return (
    <>
      <div className="tr-feed">
        {/* GREETING + TWIN CHIP */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "1.3rem",
            gap: 12,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "'Syne',sans-serif",
                fontSize: "1.45rem",
                fontWeight: 800,
                letterSpacing: "-0.5px",
                color: d.text,
              }}
            >
              Good morning, Faith
            </div>
            <div
              style={{
                fontSize: "0.82rem",
                opacity: 0.38,
                marginTop: 2,
                color: d.text,
              }}
            >
              Here's what's happening in your twin world
            </div>
          </div>
          <TwinProfileChip d={d} />
        </div>

        {/* STORIES */}
        <div className="tr-stories-wrap">
          {STORIES_DATA.map((s, i) => (
            <div
              key={s.id}
              className="tr-story"
              style={{ animationDelay: `${i * 50}ms` }}
              onClick={() => !s.isOwn && setStoryViewer(s)}
            >
              <div
                className="tr-story-ring"
                style={{
                  background: s.isOwn
                    ? "transparent"
                    : s.viewed
                      ? "rgba(130,130,130,0.3)"
                      : "linear-gradient(135deg,#fbc2eb,#a6c0ee)",
                  border: s.isOwn ? "2px dashed rgba(251,194,235,0.4)" : "none",
                  padding: s.isOwn ? "2px" : "2.5px",
                }}
              >
                <div
                  className="tr-story-inner"
                  style={{
                    background: d.surface,
                    border: `2px solid ${d.card}`,
                    color: s.color,
                  }}
                >
                  {s.isOwn ? (
                    <div style={{ position: "relative" }}>
                      <span>F</span>
                      <div
                        style={{
                          position: "absolute",
                          bottom: -8,
                          right: -8,
                          width: 18,
                          height: 18,
                          borderRadius: "50%",
                          background: "linear-gradient(135deg,#fbc2eb,#a6c0ee)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          border: `2px solid ${d.surface}`,
                        }}
                      >
                        <Plus size={9} color="#2a0038" strokeWidth={3} />
                      </div>
                    </div>
                  ) : s.img ? (
                    <img src={s.img} alt={s.name} />
                  ) : (
                    <span>{s.initials}</span>
                  )}
                </div>
              </div>
              <span className="tr-story-name" style={{ color: d.text }}>
                {s.name}
              </span>
            </div>
          ))}
        </div>

        {/* COMPOSER */}
        <div
          className="tr-composer"
          style={{
            background: d.card,
            borderColor: postFocused
              ? dark
                ? "#fbc2eb55"
                : "#c4507a55"
              : d.border,
          }}
        >
          <div className="tr-composer-top">
            <div className="tr-av-sm" style={{ marginTop: 3 }}>
              F
            </div>
            <textarea
              className="tr-composer-input"
              style={{ color: d.text, minHeight: postFocused ? 90 : 42 }}
              placeholder="What's your twin moment today?"
              value={postText}
              onFocus={() => setPostFocused(true)}
              onChange={(e) => setPostText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) handlePost();
              }}
            />
          </div>
          {postFocused && (
            <div
              className="tr-composer-actions"
              style={{ borderColor: d.border }}
            >
              {[
                { icon: ImageIcon, label: "Photo", color: "#a6c0ee" },
                { icon: Video, label: "Video", color: "#fbc2eb" },
                { icon: MapPin, label: "Location", color: "#86efac" },
                { icon: Smile, label: "Feeling", color: "#fcd34d" },
              ].map(({ icon: Icon, label, color }) => (
                <button
                  key={label}
                  className="tr-media-btn"
                  style={{ borderColor: d.border, color: d.mutedText }}
                >
                  <Icon size={14} style={{ color }} /> {label}
                </button>
              ))}
              <button
                className="tr-post-btn"
                onClick={handlePost}
                disabled={!postText.trim()}
              >
                <Send size={13} /> Post
              </button>
            </div>
          )}
        </div>

        {/* FEED TABS */}
        <div
          style={{
            display: "flex",
            gap: 2,
            marginBottom: "1rem",
            borderBottom: `1px solid ${d.border}`,
          }}
        >
          {[
            { id: "for-you", label: "For You" },
            { id: "following", label: "Following" },
            { id: "local", label: "Local" },
            { id: "global", label: "Global" },
          ].map((t) => (
            <button
              key={t.id}
              className="tr-feed-tab"
              style={{
                color: feedTab === t.id ? d.accent1 : d.mutedText,
                borderBottom: `2px solid ${feedTab === t.id ? d.accent1 : "transparent"}`,
                marginBottom: -1,
              }}
              onClick={() => setFeedTab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* POSTS */}
        {posts.map((post, idx) => (
          <PostCard
            key={post.id}
            post={post}
            d={d}
            dark={dark}
            idx={idx}
            toggleLike={toggleLike}
            toggleSave={toggleSave}
            addComment={addComment}
            setShareTarget={setShareTarget}
          />
        ))}

        <button
          className="tr-more-btn"
          style={{ borderColor: d.border, color: d.mutedText }}
        >
          Load more posts
        </button>
      </div>

      {/* RIGHT SIDEBAR */}
      <aside className="tr-right">
        {/* Stats */}
        <div
          className="tr-right-card"
          style={{ background: d.card, borderColor: d.border }}
        >
          <div className="tr-right-title" style={{ color: d.text }}>
            <Sparkles size={14} style={{ color: d.accent1 }} /> Your Twin Stats
          </div>
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}
          >
            {[
              { label: "Connections", val: "128" },
              { label: "Events Joined", val: "7" },
              { label: "Posts", val: "34" },
              { label: "Circles", val: "5" },
            ].map(({ label, val }) => (
              <div
                key={label}
                style={{
                  background: d.inputBg,
                  borderRadius: 12,
                  padding: "0.65rem 0.7rem",
                  border: `1px solid ${d.border}`,
                }}
              >
                <div
                  style={{
                    fontFamily: "'Syne',sans-serif",
                    fontSize: "1.25rem",
                    fontWeight: 800,
                    color: d.text,
                  }}
                >
                  {val}
                </div>
                <div
                  style={{
                    fontSize: "0.65rem",
                    opacity: 0.38,
                    marginTop: 2,
                    color: d.text,
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trending */}
        <div
          className="tr-right-card"
          style={{ background: d.card, borderColor: d.border }}
        >
          <div className="tr-right-title" style={{ color: d.text }}>
            <TrendingUp size={14} style={{ color: d.accent2 }} /> Trending
          </div>
          {TRENDING_DATA.map((t) => (
            <div
              key={t.tag}
              className="tr-trend-row"
              style={{ borderColor: d.border }}
            >
              <div>
                <div
                  style={{
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    color: d.accent1,
                  }}
                >
                  {t.tag}
                </div>
                <div
                  style={{ fontSize: "0.68rem", opacity: 0.4, color: d.text }}
                >
                  {t.count}
                </div>
              </div>
              <TrendingUp size={12} style={{ opacity: 0.25, color: d.text }} />
            </div>
          ))}
        </div>

        {/* Suggested */}
        <div
          className="tr-right-card"
          style={{ background: d.card, borderColor: d.border }}
        >
          <div className="tr-right-title" style={{ color: d.text }}>
            <Users size={14} style={{ color: d.accent1 }} /> Suggested Twins
          </div>
          {suggested.map((s) => (
            <div key={s.id} className="tr-suggest-row">
              <div
                className="tr-suggest-av"
                style={{ background: `${s.color}22`, color: s.color }}
              >
                {s.initials}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    color: d.text,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {s.name}
                </div>
                <div
                  style={{ fontSize: "0.65rem", opacity: 0.38, color: d.text }}
                >
                  {s.mutual} mutual
                </div>
              </div>
              <button
                className={`tr-follow-btn${s.followed ? " followed" : ""}`}
                style={
                  !s.followed
                    ? { borderColor: d.accent1, color: d.accent1 }
                    : {}
                }
                onClick={() => toggleFollow(s.id)}
              >
                {s.followed ? (
                  <>
                    <UserCheck size={11} /> Following
                  </>
                ) : (
                  <>
                    <UserPlus size={11} /> Follow
                  </>
                )}
              </button>
            </div>
          ))}
        </div>

        {/* Event banner */}
        <div
          style={{
            borderRadius: 18,
            padding: "1.1rem 1.2rem",
            background:
              "linear-gradient(135deg,rgba(251,194,235,0.18),rgba(166,192,238,0.18))",
            border: `1px solid ${d.accent1}33`,
          }}
        >
          <img
            src="https://picsum.photos/seed/eventbanner55/280/120"
            alt="Lagos Twin Festival"
            style={{
              width: "100%",
              height: 110,
              objectFit: "cover",
              borderRadius: 12,
              marginBottom: 10,
            }}
          />
          <div
            style={{
              fontSize: "0.65rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              opacity: 0.5,
              marginBottom: 4,
              color: d.text,
            }}
          >
            Upcoming Event
          </div>
          <div
            style={{
              fontFamily: "'Syne',sans-serif",
              fontWeight: 800,
              fontSize: "0.92rem",
              color: d.text,
              marginBottom: 3,
            }}
          >
            Lagos Twin Festival
          </div>
          <div
            style={{
              fontSize: "0.72rem",
              opacity: 0.45,
              marginBottom: 12,
              color: d.text,
              display: "flex",
              alignItems: "center",
              gap: 5,
            }}
          >
            <Calendar size={12} /> Aug 14, 2025 · Eko Convention Ctr
          </div>
          <button
            style={{
              width: "100%",
              padding: "8px 0",
              borderRadius: 100,
              background: "linear-gradient(135deg,#fbc2eb,#a6c0ee)",
              border: "none",
              fontFamily: "'Syne',sans-serif",
              fontWeight: 700,
              fontSize: "0.78rem",
              color: "#2a0038",
              cursor: "pointer",
              transition: "opacity .2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            RSVP Now
          </button>
        </div>
      </aside>
    </>
  );
}

/* ---- TWIN PROFILE CHIP ---- */
function TwinProfileChip({ d }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const fn = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, []);

  return (
    <div style={{ position: "relative", flexShrink: 0 }} ref={ref}>
      <div className="tr-twin-chip" onClick={() => setOpen((v) => !v)}>
        <div
          className="tr-twin-av"
          style={{
            background: "linear-gradient(135deg,#fbc2eb,#e879a0)",
            borderColor: d.card,
            color: "#2a0038",
            zIndex: 2,
          }}
        >
          F
        </div>
        <div
          className="tr-twin-av"
          style={{
            background: "linear-gradient(135deg,#a6c0ee,#5a8fd4)",
            borderColor: d.card,
            color: "#001838",
            marginLeft: -14,
            zIndex: 1,
          }}
        >
          G
        </div>
      </div>
      {open && (
        <div
          style={{
            position: "absolute",
            top: "calc(100% + 10px)",
            right: 0,
            background: d.surface,
            border: `1px solid ${d.border}`,
            borderRadius: 14,
            padding: "0.75rem 1rem",
            minWidth: 210,
            boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
            zIndex: 50,
            animation: "trFadeUp .18s ease",
          }}
        >
          <div
            style={{
              fontSize: "0.62rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              opacity: 0.32,
              color: d.text,
              marginBottom: 10,
            }}
          >
            Twin Profile
          </div>
          {[
            {
              name: "Faith A.",
              role: "You · Lagos",
              color: "linear-gradient(135deg,#fbc2eb,#e879a0)",
              txt: "#2a0038",
              initial: "F",
            },
            {
              name: "Grace A.",
              role: "Your Twin · Abuja",
              color: "linear-gradient(135deg,#a6c0ee,#5a8fd4)",
              txt: "#001838",
              initial: "G",
            },
          ].map((p) => (
            <div
              key={p.name}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 9,
                padding: "5px 0",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  width: 33,
                  height: 33,
                  borderRadius: "50%",
                  background: p.color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "'Syne',sans-serif",
                  fontWeight: 800,
                  fontSize: "0.75rem",
                  color: p.txt,
                  flexShrink: 0,
                }}
              >
                {p.initial}
              </div>
              <div>
                <div
                  style={{ fontSize: "0.8rem", fontWeight: 600, color: d.text }}
                >
                  {p.name}
                </div>
                <div
                  style={{ fontSize: "0.65rem", opacity: 0.4, color: d.text }}
                >
                  {p.role}
                </div>
              </div>
            </div>
          ))}
          <div
            style={{
              marginTop: 10,
              paddingTop: 10,
              borderTop: `1px solid ${d.border}`,
              display: "flex",
              gap: 6,
            }}
          >
            <button
              style={{
                flex: 1,
                padding: "6px 0",
                borderRadius: 100,
                background: "linear-gradient(135deg,#fbc2eb,#a6c0ee)",
                border: "none",
                fontFamily: "'DM Sans',sans-serif",
                fontWeight: 700,
                fontSize: "0.68rem",
                color: "#2a0038",
                cursor: "pointer",
              }}
            >
              Edit Profile
            </button>
            <button
              style={{
                flex: 1,
                padding: "6px 0",
                borderRadius: 100,
                background: "transparent",
                border: `1px solid ${d.border}`,
                fontFamily: "'DM Sans',sans-serif",
                fontWeight: 700,
                fontSize: "0.68rem",
                color: d.text,
                cursor: "pointer",
              }}
            >
              View Full
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/* ---- POST CARD ---- */
function PostCard({
  post,
  d,
  dark,
  idx,
  toggleLike,
  toggleSave,
  addComment,
  setShareTarget,
}) {
  const [showComments, setShowComments] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [imgLoaded, setImgLoaded] = useState(false);
  const fmtNum = (n) => (n >= 1000 ? (n / 1000).toFixed(1) + "K" : String(n));

  const badgeStyles = {
    Trending: { bg: "rgba(251,194,235,0.18)", color: "#9a3060" },
    Event: {
      bg: "rgba(166,192,238,0.18)",
      color: dark ? "#7aabee" : "#3060a0",
    },
    Spotlight: { bg: "rgba(196,181,253,0.18)", color: "#6030a0" },
  };
  const badgeStyle = post.badge ? badgeStyles[post.badge] : null;

  return (
    <div
      className="tr-post"
      style={{
        background: d.card,
        borderColor: d.border,
        animationDelay: `${idx * 70}ms`,
      }}
    >
      <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
        <div
          className="tr-post-av"
          style={{ background: post.avatarBg, color: post.avatarColor }}
        >
          {post.initials}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div className="tr-post-name" style={{ color: d.text }}>
            {post.user}
            {post.verified && (
              <span className="tr-verified-badge" title="Verified">
                <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                  <path
                    d="M2 5l2 2 4-4"
                    stroke="#2a0038"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            )}
            {badgeStyle && (
              <span
                className="tr-badge-pill"
                style={{ background: badgeStyle.bg, color: badgeStyle.color }}
              >
                {post.badge}
              </span>
            )}
          </div>
          <div style={{ fontSize: "0.72rem", opacity: 0.38, color: d.text }}>
            {post.handle} · {post.time}
          </div>
        </div>
        <button
          className="tr-icon-btn"
          style={{
            background: "transparent",
            borderColor: "transparent",
            color: d.mutedText,
            width: 30,
            height: 30,
            flexShrink: 0,
          }}
        >
          <MoreHorizontal size={15} />
        </button>
      </div>

      <div className="tr-post-body" style={{ color: d.text }}>
        {post.content}
      </div>

      {post.img && (
        <div
          style={{
            borderRadius: 13,
            marginBottom: "1rem",
            overflow: "hidden",
            background: d.inputBg,
            minHeight: imgLoaded ? 0 : 200,
            transition: "min-height .3s",
          }}
        >
          <img
            src={post.img}
            alt="post"
            style={{
              width: "100%",
              maxHeight: 340,
              objectFit: "cover",
              display: "block",
              borderRadius: 13,
            }}
            onLoad={() => setImgLoaded(true)}
          />
        </div>
      )}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          paddingTop: "0.35rem",
          borderTop: `1px solid ${d.border}`,
          marginTop: "0.5rem",
        }}
      >
        <button
          className="tr-action-btn"
          onClick={() => toggleLike(post.id)}
          style={{ color: post.liked ? d.like : d.mutedText }}
        >
          <Heart
            size={15}
            fill={post.liked ? d.like : "none"}
            color={post.liked ? d.like : d.mutedText}
          />
          {fmtNum(post.likes)}
        </button>
        <button
          className="tr-action-btn"
          style={{ color: d.mutedText }}
          onClick={() => setShowComments((v) => !v)}
        >
          <MessageCircle size={15} /> {fmtNum(post.comments)}
        </button>
        <button className="tr-action-btn" style={{ color: d.mutedText }}>
          <Repeat2 size={15} /> {fmtNum(post.shares)}
        </button>
        <button
          className="tr-action-btn"
          style={{ color: d.mutedText }}
          onClick={() => setShareTarget(post.id)}
        >
          <Share2 size={15} />
        </button>
        <button
          className="tr-action-btn"
          style={{
            marginLeft: "auto",
            color: post.saved ? d.accent2 : d.mutedText,
          }}
          onClick={() => toggleSave(post.id)}
        >
          <Bookmark
            size={15}
            fill={post.saved ? d.accent2 : "none"}
            color={post.saved ? d.accent2 : d.mutedText}
          />
        </button>
      </div>

      {showComments && (
        <div
          style={{
            marginTop: "0.85rem",
            paddingTop: "0.85rem",
            borderTop: `1px solid ${d.border}`,
          }}
        >
          {post.commentsList.map((c) => (
            <div
              key={c.id}
              style={{
                display: "flex",
                gap: 8,
                marginBottom: "0.65rem",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: "50%",
                  background: `${c.color}22`,
                  color: c.color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.65rem",
                  fontWeight: 800,
                  fontFamily: "'Syne',sans-serif",
                  flexShrink: 0,
                }}
              >
                {c.initials}
              </div>
              <div
                style={{
                  background: d.inputBg,
                  borderRadius: "0 12px 12px 12px",
                  padding: "7px 11px",
                  flex: 1,
                }}
              >
                <div
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    color: d.text,
                    marginBottom: 2,
                    fontFamily: "'Syne',sans-serif",
                  }}
                >
                  {c.user}
                </div>
                <div
                  style={{ fontSize: "0.8rem", color: d.text, lineHeight: 1.5 }}
                >
                  {c.text}
                </div>
              </div>
            </div>
          ))}
          <div
            style={{
              display: "flex",
              gap: 8,
              alignItems: "center",
              marginTop: "0.5rem",
            }}
          >
            <div
              className="tr-av-sm"
              style={{
                width: 30,
                height: 30,
                fontSize: "0.65rem",
                flexShrink: 0,
              }}
            >
              F
            </div>
            <input
              className="tr-comment-input"
              style={{ borderColor: d.border, color: d.text }}
              placeholder="Write a comment…"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && commentText.trim()) {
                  addComment(post.id, commentText.trim());
                  setCommentText("");
                }
              }}
            />
            <button
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                flexShrink: 0,
              }}
              onClick={() => {
                if (commentText.trim()) {
                  addComment(post.id, commentText.trim());
                  setCommentText("");
                }
              }}
            >
              <Send size={15} style={{ color: d.accent1 }} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/* ---- STORY VIEWER ---- */
function StoryViewer({ story, stories, onClose, d }) {
  const [idx, setIdx] = useState(
    Math.max(
      0,
      stories.findIndex((s) => s.id === story.id),
    ),
  );
  const [reply, setReply] = useState("");
  const current = stories[idx] || story;
  const timerRef = useRef(null);

  const goNext = () => {
    if (idx < stories.length - 1) setIdx((i) => i + 1);
    else onClose();
  };
  const goPrev = () => {
    if (idx > 0) setIdx((i) => i - 1);
  };

  useEffect(() => {
    timerRef.current = setTimeout(goNext, 4000);
    return () => clearTimeout(timerRef.current);
  }, [idx]);

  useEffect(() => {
    const fn = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, []);

  return (
    <div className="tr-sv-overlay" onClick={onClose}>
      <div className="tr-sv-box" onClick={(e) => e.stopPropagation()}>
        {current.img ? (
          <img src={current.img} alt={current.name} className="tr-sv-img" />
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              background: `linear-gradient(135deg,${current.color}33,#040e29)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                fontFamily: "'Syne',sans-serif",
                fontWeight: 800,
                fontSize: "4rem",
                color: current.color,
                opacity: 0.7,
              }}
            >
              {current.initials}
            </div>
          </div>
        )}
        <div className="tr-sv-progress">
          {stories.map((_, i) => (
            <div key={i} className="tr-sv-bar">
              {i === idx && <div className="tr-sv-fill" key={`fill-${idx}`} />}
              {i < idx && (
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    background: "#fff",
                    borderRadius: 2,
                  }}
                />
              )}
            </div>
          ))}
        </div>
        <div
          style={{
            position: "absolute",
            top: 28,
            left: 0,
            right: 0,
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "0 14px",
          }}
        >
          <div
            style={{
              width: 34,
              height: 34,
              borderRadius: "50%",
              background: `${current.color}33`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "'Syne',sans-serif",
              fontWeight: 800,
              fontSize: "0.78rem",
              color: current.color,
            }}
          >
            {current.initials}
          </div>
          <div style={{ flex: 1 }}>
            <div
              style={{
                color: "#fff",
                fontWeight: 700,
                fontSize: "0.82rem",
                fontFamily: "'Syne',sans-serif",
              }}
            >
              {current.name}
            </div>
            <div
              style={{
                color: "rgba(255,255,255,0.5)",
                fontSize: "0.65rem",
                display: "flex",
                alignItems: "center",
                gap: 4,
              }}
            >
              5m ago · <Eye size={10} /> 142
            </div>
          </div>
          <button className="tr-sv-close" onClick={onClose}>
            <X size={20} />
          </button>
        </div>
        {idx > 0 && (
          <button className="tr-sv-nav" style={{ left: 10 }} onClick={goPrev}>
            <ChevronLeft size={18} />
          </button>
        )}
        {idx < stories.length - 1 && (
          <button className="tr-sv-nav" style={{ right: 10 }} onClick={goNext}>
            <ChevronR size={18} />
          </button>
        )}
        <div className="tr-sv-gradient" />
        <div className="tr-sv-bottom">
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <input
              className="tr-sv-input"
              placeholder={`Reply to ${current.name}…`}
              value={reply}
              onChange={(e) => setReply(e.target.value)}
            />
            <button
              style={{
                background: "linear-gradient(135deg,#fbc2eb,#a6c0ee)",
                border: "none",
                borderRadius: "50%",
                width: 36,
                height: 36,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                flexShrink: 0,
              }}
            >
              <Send size={14} color="#2a0038" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---- SHARE MODAL ---- */
function ShareModal({ d, onClose, postId }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard
      ?.writeText(`https://twinrally.com/post/${postId}`)
      .catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="tr-share-overlay">
      <div className="tr-share-bg" onClick={onClose} />
      <div
        className="tr-share-box"
        style={{ background: d.surface, borderTop: `1px solid ${d.border}` }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "1rem",
          }}
        >
          <div
            style={{
              fontFamily: "'Syne',sans-serif",
              fontWeight: 800,
              fontSize: "1rem",
              color: d.text,
            }}
          >
            Share Post
          </div>
          <button
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: d.mutedText,
            }}
            onClick={onClose}
          >
            <X size={18} />
          </button>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: 8,
            marginBottom: "1rem",
          }}
        >
          {[
            { icon: Twitter, label: "X / Twitter", color: "#1d9bf0" },
            { icon: Users, label: "WhatsApp", color: "#25d366" },
            { icon: Link2, label: "Instagram", color: "#e1306c" },
            { icon: Share2, label: "Facebook", color: "#1877f2" },
          ].map(({ icon: Icon, label, color }) => (
            <button
              key={label}
              className="tr-share-opt"
              style={{ borderColor: d.border, color: d.mutedText }}
            >
              <Icon size={20} style={{ color }} />
              <span
                style={{ color: d.text, fontSize: "0.68rem", fontWeight: 600 }}
              >
                {label}
              </span>
            </button>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            gap: 8,
            padding: "0.6rem 0.8rem",
            background: d.inputBg,
            borderRadius: 100,
            border: `1px solid ${d.border}`,
          }}
        >
          <span
            style={{
              flex: 1,
              fontSize: "0.78rem",
              color: d.mutedText,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            twinrally.com/post/{postId}
          </span>
          <button
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 4,
              fontSize: "0.75rem",
              fontWeight: 700,
              color: d.accent1,
              flexShrink: 0,
            }}
            onClick={copy}
          >
            {copied ? (
              <>
                <Check size={13} /> Copied!
              </>
            ) : (
              <>
                <Copy size={13} /> Copy
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---- NAV ITEMS ---- */
function NavItems({ items, selected, onSelect, d }) {
  const main = items.filter((i) => !i.section || i.section === "main");
  const other = items.filter((i) => i.section === "other");
  const renderItem = (el) => {
    const Icon = el.icon;
    const isActive = selected === el.id;
    return (
      <div
        key={el.id}
        className={`tr-nav-item${isActive ? " active" : ""}`}
        style={{
          background: isActive ? d.activeItem : "transparent",
          color: isActive ? d.activeText : d.mutedText,
        }}
        onMouseEnter={(e) => {
          if (!isActive) {
            e.currentTarget.style.background = d.hover;
            e.currentTarget.style.color = d.text;
          }
        }}
        onMouseLeave={(e) => {
          if (!isActive) {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = d.mutedText;
          }
        }}
        onClick={() => onSelect(el.id)}
      >
        <Icon size={17} />
        <span>{el.label}</span>
        {el.badge && <span className="tr-nav-badge">{el.badge}</span>}
      </div>
    );
  };
  return (
    <>
      <div>
        <div className="tr-sec-label" style={{ color: d.text }}>
          Menu
        </div>
        {(main.length ? main : items).map(renderItem)}
      </div>
      {other.length > 0 && (
        <div style={{ marginTop: "0.5rem" }}>
          <div className="tr-sec-label" style={{ color: d.text }}>
            Other
          </div>
          {other.map(renderItem)}
        </div>
      )}
    </>
  );
}

export default DashBoardPage;
