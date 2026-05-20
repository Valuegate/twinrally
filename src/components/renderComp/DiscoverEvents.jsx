import React, { useState } from "react";
import { Card } from "../ui/card";
import { Calendar, MapPin, Users, Search } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { MOCK_EVENTS } from "@/data/dashboard/host-event";

export function DiscoverEvents({ onViewEvent }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = ["All", "Festival", "Meetup", "Workshop", "Conference", "Sports", "Exhibition"];

    const filteredEvents = MOCK_EVENTS.filter((event) => {
        const matchesSearch =
            event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            event.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === "All" || event.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className=" px-4 sm:px-6 lg:px-8 py-12 ">
            
            <div className="">
               
                <h2 className="text-4xl font-bold text-foreground mb-4">Discover Events</h2>
                <p className="text-muted-foreground text-lg mb-8">
                    Find and join amazing twin events happening around the world
                </p>

                <div className="flex gap-2 mb-6">
                    <div className="flex-1 relative">
                        <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                        <Input
                            placeholder="Search events..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10"
                        />
                    </div>
                </div>

                <div className="flex gap-2 flex-wrap">
                    {categories.map((category) => (
                        <Button
                            key={category}
                            variant={selectedCategory === category ? "default" : "outline"}
                            onClick={() => setSelectedCategory(category)}
                            size="sm"
                        >
                            {category}
                        </Button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                {filteredEvents.map((event) => (
                    <Card
                        key={event.id}
                        className="relative overflow-hidden hover:shadow-lg transition-shadow cursor-pointer flex flex-col"
                        onClick={() => onViewEvent(event)}
                    >
                        {/* absolute image — guaranteed flush to card top */}
                        <div className="absolute inset-x-0 top-0 h-56">
                            <img
                                src={event.coverImage || "/placeholder.svg"}
                                alt={event.title}
                                className="w-full h-full object-cover block"
                            />
                        </div>

                        {/* badge sits over the absolute image */}
                        <div className="absolute top-3 right-3 z-10 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                            {event.category}
                        </div>

                        {/* push the content down so it doesn't overlap the image */}
                        <div className="pt-56 p-4 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold text-foreground mb-2 line-clamp-2">
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

                            <Button
                                className="w-full mt-auto"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onViewEvent(event);
                                }}
                            >
                                View Details
                            </Button>
                        </div>
                    </Card>
                ))}
            </div>


            {filteredEvents.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-muted-foreground text-lg">No events found matching your criteria</p>
                </div>
            )}
        </div>
    );
}
