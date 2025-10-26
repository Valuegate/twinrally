import React, { useState } from "react";
import { Navigation } from "../renderComp/Navigation";
import { DiscoverEvents } from "../renderComp/DiscoverEvents";
import { HostEvent } from "../renderComp/HostEvent";
import { MyEvents } from "../renderComp/MyEvents";
import { EventDetails } from "../renderComp/EventDetails";

export function Events() {
    const [currentPage, setCurrentPage] = useState("discover");
    const [selectedEvent, setSelectedEvent] = useState(null);

    const handleViewEvent = (event) => {
        setSelectedEvent(event);
        setCurrentPage("detail");
    };

    const handleNavigate = (page) => {
        setCurrentPage(page);
        setSelectedEvent(null);
    };

    return (
        <div className="min-h-screen bg-background rounded-[10px]">
            <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
            <main className="">
                

                {currentPage === "discover" && <DiscoverEvents onViewEvent={handleViewEvent} />}
                {currentPage === "host" && <HostEvent onEventCreated={() => handleNavigate("my-events")} />}
                {currentPage === "my-events" && <MyEvents onViewEvent={handleViewEvent} />}
                {currentPage === "detail" && selectedEvent && (
                    <EventDetails event={selectedEvent} onBack={() => handleNavigate("discover")} />
                )}
            </main>
        </div>
    );
}