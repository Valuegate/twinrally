import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Bell, Trash2, Check } from "lucide-react";

// Sample notifications
const notifications = [
    {
        id: "1",
        type: "connection",
        user: { name: "Sarah Chen", avatar: "SC" },
        title: "New Connection Request",
        description: "Sarah Chen sent you a connection request",
        timestamp: "2 hours ago",
        read: false,
    },
    {
        id: "2",
        type: "event",
        user: { name: "Twins Meetup", avatar: "TM" },
        title: "Event Reminder",
        description: "Twin Bonding Brunch starts in 3 hours",
        timestamp: "3 hours ago",
        read: false,
    },
    {
        id: "3",
        type: "message",
        user: { name: "Alex Rivera", avatar: "AR" },
        title: "New Message",
        description: "Hey! How are you doing today?",
        timestamp: "5 hours ago",
        read: true,
    },
    {
        id: "4",
        type: "activity",
        user: { name: "Jordan Lee", avatar: "JL" },
        title: "Liked Your Post",
        description: "Jordan Lee liked your community post",
        timestamp: "1 day ago",
        read: true,
    },
    {
        id: "5",
        type: "connection",
        user: { name: "Morgan Davis", avatar: "MD" },
        title: "Connection Accepted",
        description: "Morgan Davis accepted your connection request",
        timestamp: "2 days ago",
        read: true,
    },
];

const typeColors = {
    connection: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200",
    event: "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-200",
    message: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200",
    activity: "bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-200",
};

export function NotificationsPage() {
    const [notifs, setNotifs] = useState(notifications);

    const unreadCount = notifs.filter((n) => !n.read).length;

    const markAsRead = (id) => {
        setNotifs(notifs.map((n) => (n.id === id ? { ...n, read: true } : n)));
    };

    const deleteNotification = (id) => {
        setNotifs(notifs.filter((n) => n.id !== id));
    };

    const markAllAsRead = () => {
        setNotifs(notifs.map((n) => ({ ...n, read: true })));
    };

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="sticky top-0 z-10 border-b border-border bg-card/95 backdrop-blur">
                <div className="container  px-4 py-4 flex items-center justify-between justify-items-center">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2">
                            <Bell className="w-4 h-4 text-primary" />
                            <h1 className="text-2xl font-bold text-foreground">Notifications</h1>
                        </div>
                    </div>
                    {unreadCount > 0 && (
                        <Button variant="outline" size="sm" onClick={markAllAsRead}>
                            Mark all as read
                        </Button>
                    )}
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-8">
                {notifs.length === 0 ? (
                    <div className="text-center py-12">
                        <Bell className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
                        <p className="text-muted-foreground text-lg">No notifications yet</p>
                    </div>
                ) : (
                    <div className="space-y-3 ">
                        {notifs.map((notif) => (
                            <Card
                                key={notif.id}
                                className={`p-4 transition-all ${!notif.read ? "bg-secondary border-primary/30 shadow-sm" : "bg-card hover:bg-secondary/50"
                                    }`}
                            >
                                <div className="flex gap-4">
                                    <Avatar className="h-12 w-12 flex-shrink-0">
                                        <AvatarImage
                                            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${notif.user.avatar}`}
                                        />
                                        <AvatarFallback>{notif.user.avatar}</AvatarFallback>
                                    </Avatar>

                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-start justify-between gap-2">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <h3 className="font-semibold text-foreground">{notif.title}</h3>
                                                    <span
                                                        className={`text-xs px-2 py-1 rounded-full font-medium ${typeColors[notif.type]}`}
                                                    >
                                                        {notif.type}
                                                    </span>
                                                </div>
                                                <p className="text-sm text-muted-foreground">{notif.description}</p>
                                                <p className="text-xs text-muted-foreground mt-2">{notif.timestamp}</p>
                                            </div>
                                            <div className="flex gap-2 flex-shrink-0">
                                                {!notif.read && (
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        onClick={() => markAsRead(notif.id)}
                                                        className="h-8 w-8"
                                                    >
                                                        <Check className="w-4 h-4" />
                                                    </Button>
                                                )}
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    onClick={() => deleteNotification(notif.id)}
                                                    className="h-8 w-8 text-destructive hover:text-destructive"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
}
