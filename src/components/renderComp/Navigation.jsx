"use client"

import { Button } from "@/components/ui/button"

export function Navigation({ currentPage, onNavigate }) {
  return (
    <nav className="fixed  top-1  z-50 bg-background border-b border-border">
      <div className="flex gap-2">
        <Button
          variant={currentPage === "discover" ? "default" : "outline"}
          onClick={() => onNavigate("discover")}
          className="hidden sm:inline-flex"
        >
          Discover
        </Button>
        <Button
          variant={currentPage === "host" ? "default" : "outline"}
          onClick={() => onNavigate("host")}
          className="hidden sm:inline-flex"
        >
          Host Event
        </Button>
        <Button
          variant={currentPage === "my-events" ? "default" : "outline"}
          onClick={() => onNavigate("my-events")}
          className="hidden sm:inline-flex"
        >
          My Events
        </Button>
      </div>
    </nav>
  )
}
