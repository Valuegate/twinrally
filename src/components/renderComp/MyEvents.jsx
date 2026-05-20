"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, Trash2, Edit2 } from "lucide-react"
import { MOCK_MY_EVENTS } from "@/data/dashboard/host-event"

export function MyEvents({ onViewEvent }) {
    const [events, setEvents] = useState(MOCK_MY_EVENTS)
    const [deletingId, setDeletingId] = useState(null)

    const handleDelete = (id) => {
        setDeletingId(id)
        setTimeout(() => {
            setEvents(events.filter((e) => e.id !== id))
            setDeletingId(null)
        }, 500)
    }

    const getStatusColor = (status) => {
        switch (status) {
            case "upcoming":
                return "bg-blue-100 text-blue-800"
            case "ongoing":
                return "bg-green-100 text-green-800"
            case "completed":
                return "bg-gray-100 text-gray-800"
            default:
                return "bg-gray-100 text-gray-800"
        }
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="mb-12">
                <h2 className="text-4xl font-bold text-foreground mb-2">My Events</h2>
                <p className="text-muted-foreground">Manage events you've created, joined, or saved</p>
            </div>

            {events.length === 0 ? (
                <Card className="p-12 text-center">
                    <p className="text-muted-foreground text-lg mb-4">You haven't created any events yet</p>
                    <Button>Create Your First Event</Button>
                </Card>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {events.map((event) => (
                        <Card
                            key={event.id}
                            className={`relative overflow-hidden transition-all flex flex-col ${deletingId === event.id ? "opacity-50 scale-95" : ""
                                }`}
                        >
                            {/* 🔥 Image absolutely positioned — fills top completely */}
                            <div className="absolute inset-x-0 top-0 h-48">
                                <img
                                    src={event.coverImage || "/placeholder.svg"}
                                    alt={event.title}
                                    className="w-full h-full object-cover block"
                                />
                            </div>

                            {/* 🔖 Status badge — sits on top of the image */}
                            <div className="absolute top-3 right-3 flex gap-2 z-10">
                                <div
                                    className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(event.status)}`}
                                >
                                    {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                                </div>
                            </div>

                            {/* 🧱 Content — pushed down by the image height */}
                            <div className="pt-48 p-4 flex flex-col flex-grow bg-background">
                                <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2">
                                    {event.title}
                                </h3>
                                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                                    {event.description}
                                </p>

                                <div className="space-y-2 mb-4">
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <Calendar className="w-4 h-4" />
                                        <span>
                                            {event.date} at {event.time}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <MapPin className="w-4 h-4" />
                                        <span>{event.location}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <Users className="w-4 h-4" />
                                        <span>
                                            {event.attendees} / {event.capacity} attending
                                        </span>
                                    </div>
                                </div>

                                <div className="flex gap-2 mt-auto">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="flex-1 bg-transparent"
                                        onClick={() => onViewEvent(event)}
                                    >
                                        <Edit2 className="w-4 h-4 mr-1" />
                                        View
                                    </Button>
                                    <Button
                                        variant="destructive"
                                        size="sm"
                                        className="flex-1"
                                        onClick={() => handleDelete(event.id)}
                                    >
                                        <Trash2 className="w-4 h-4 mr-1" />
                                        Delete
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

            )}
        </div>
    )
}
