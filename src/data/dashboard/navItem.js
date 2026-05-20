import {
    Home,
    Users,
    Globe,
    Calendar,
    MessageCircle,
    Bell,
    User,
    Settings,
} from "lucide-react";

export const navItems = [
    { id: "dashboard", label: "Dashboard", icon: Home },
    { id: "friends", label: "Friends", icon: Users },
    { id: "community", label: "Community", icon: Globe },
    { id: "events", label: "Events", icon: Calendar },
    { id: "messages", label: "Messages", icon: MessageCircle, badge: 3 },
    { id: "notifications", label: "Notifications", icon: Bell, badge: 5 },
    { id: "profile", label: "Profile", icon: User },
    { id: "settings", label: "Settings", icon: Settings },
];


export const notifications = [
    {
        id: 1,
        user: 'Sarah Johnson',
        avatar: 'https://i.pravatar.cc/40?img=1',
        message: 'accepted your friend request',
        time: '2 min ago',
        unread: true
    },
    {
        id: 2,
        user: 'Mike Chen',
        avatar: 'https://i.pravatar.cc/40?img=2',
        message: 'commented on your post',
        time: '1 hour ago',
        unread: true
    }
];