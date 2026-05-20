"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Calendar, MapPin, Users, Share2, Play, Heart } from "lucide-react"

export  function EventDetails({ event, onBack }) {
    const [isLiked, setIsLiked] = useState(false)
    const [showShareMenu, setShowShareMenu] = useState(false)

    const shareOnSocial = (platform) => {
        const text = `Check out this amazing event: ${event.title} on EventHub!`
        const url = window.location.href

        const shareUrls = {
            twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
            facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
            linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
            whatsapp: `https://wa.me/?text=${encodeURIComponent(text + " " + url)}`,
        }

        if (shareUrls[platform]) {
            window.open(shareUrls[platform], "_blank", "width=600,height=400")
        }
    }

    const copyToClipboard = () => {
        navigator.clipboard.writeText(window.location.href)
        alert("Event link copied to clipboard!")
    }

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex items-center justify-between mb-6">
                <Button variant="outline" onClick={onBack} className="bg-transparent">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back
                </Button>
            </div>

            <div className="mb-8">
                <div className="relative h-96 rounded-lg overflow-hidden mb-6">
                    <img src={event.coverImage || "/placeholder.svg"} alt={event.title} className="w-full h-full object-cover" />
                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full font-semibold">
                        {event.category}
                    </div>
                </div>

                <div className="flex justify-between items-start mb-6 gap-4">
                    <div className="flex-1">
                        <h1 className="text-4xl font-bold text-foreground mb-2">{event.title}</h1>
                        <p className="text-muted-foreground text-lg">{event.description}</p>
                    </div>
                    <div className="flex gap-2 flex-shrink-0">
                        <Button variant={isLiked ? "default" : "outline"} size="icon" onClick={() => setIsLiked(!isLiked)}>
                            <Heart className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`} />
                        </Button>
                        <div className="relative">
                            <Button variant="outline" size="icon" onClick={() => setShowShareMenu(!showShareMenu)}>
                                <Share2 className="w-5 h-5" />
                            </Button>
                            {showShareMenu && (
                                <div className="absolute right-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg z-10">
                                    <button
                                        onClick={() => shareOnSocial("twitter")}
                                        className="w-full text-left px-4 py-2 hover:bg-muted text-foreground"
                                    >
                                        Share on Twitter
                                    </button>
                                    <button
                                        onClick={() => shareOnSocial("facebook")}
                                        className="w-full text-left px-4 py-2 hover:bg-muted text-foreground"
                                    >
                                        Share on Facebook
                                    </button>
                                    <button
                                        onClick={() => shareOnSocial("linkedin")}
                                        className="w-full text-left px-4 py-2 hover:bg-muted text-foreground"
                                    >
                                        Share on LinkedIn
                                    </button>
                                    <button
                                        onClick={() => shareOnSocial("whatsapp")}
                                        className="w-full text-left px-4 py-2 hover:bg-muted text-foreground"
                                    >
                                        Share on WhatsApp
                                    </button>
                                    <button
                                        onClick={copyToClipboard}
                                        className="w-full text-left px-4 py-2 hover:bg-muted text-foreground border-t border-border"
                                    >
                                        Copy Link
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <Card className="p-4">
                        <div className="flex items-center gap-3">
                            <Calendar className="w-6 h-6 text-primary" />
                            <div>
                                <p className="text-sm text-muted-foreground">Date & Time</p>
                                <p className="font-semibold text-foreground">
                                    {event.date} at {event.time}
                                </p>
                            </div>
                        </div>
                    </Card>
                    <Card className="p-4">
                        <div className="flex items-center gap-3">
                            <MapPin className="w-6 h-6 text-primary" />
                            <div>
                                <p className="text-sm text-muted-foreground">Location</p>
                                <p className="font-semibold text-foreground">{event.location}</p>
                            </div>
                        </div>
                    </Card>
                    <Card className="p-4">
                        <div className="flex items-center gap-3">
                            <Users className="w-6 h-6 text-primary" />
                            <div>
                                <p className="text-sm text-muted-foreground">Attendees</p>
                                <p className="font-semibold text-foreground">
                                    {event.attendees} / {event.capacity}
                                </p>
                            </div>
                        </div>
                    </Card>
                </div>

                {event.liveStreamUrl && (
                    <Card className="p-6 mb-8 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                                    <Play className="w-6 h-6 text-primary-foreground fill-current" />
                                </div>
                                <div>
                                    <p className="font-semibold text-foreground">Live Stream Available</p>
                                    <p className="text-sm text-muted-foreground">Watch this event live or view recordings</p>
                                </div>
                            </div>
                            <Button onClick={() => window.open(event.liveStreamUrl, "_blank")}>Watch Now</Button>
                        </div>
                    </Card>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Button size="lg" className="w-full">
                        RSVP to Event
                    </Button>
                    <Button size="lg" variant="outline" className="w-full bg-transparent">
                        Save Event
                    </Button>
                </div>
            </div>
        </div>
    )
}
