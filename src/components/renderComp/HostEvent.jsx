import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export function HostEvent({ onEventCreated }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    location: "",
    coverImageUrl: "",
    liveStreamUrl: "",
    category: "Meetup",
    capacity: "100",
    ticketPrice: "0",
  })

  const [submitted, setSubmitted] = useState(false)

  // ✅ FIXED: added `e` parameter
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // ✅ FIXED: added `e` parameter here too
  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      onEventCreated?.()
    }, 2000)
  }

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card className="p-12 text-center">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl text-primary-foreground">✓</span>
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-2">Event Created Successfully!</h2>
          <p className="text-muted-foreground mb-6">
            Your event "{formData.title}" has been published and is now visible to the community.
          </p>
          <Button onClick={onEventCreated}>View My Events</Button>
        </Card>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h2 className="text-4xl font-bold text-foreground mb-2">Host an Event</h2>
        <p className="text-muted-foreground">Create and publish your event to the community</p>
      </div>

      <Card className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Event Title */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Event Title *</label>
            <Input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g., Twin Festival 2025"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Description *</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe your event in detail..."
              required
              rows={4}
              className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Date and Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Date *</label>
              <Input type="date" name="date" value={formData.date} onChange={handleChange} required />
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Time *</label>
              <Input type="time" name="time" value={formData.time} onChange={handleChange} required />
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Location *</label>
            <Input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="e.g., Central Park, New York"
              required
            />
          </div>

          {/* Cover Image */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Cover Image URL *</label>
            <Input
              type="url"
              name="coverImageUrl"
              value={formData.coverImageUrl}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
              required
            />
            {formData.coverImageUrl && (
              <div className="mt-2 h-32 rounded-md overflow-hidden">
                <img
                  src={formData.coverImageUrl || "/placeholder.svg"}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>

          {/* Live Stream URL */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Live Stream URL (Optional)</label>
            <Input
              type="url"
              name="liveStreamUrl"
              value={formData.liveStreamUrl}
              onChange={handleChange}
              placeholder="https://example.com/stream"
            />
            <p className="text-xs text-muted-foreground mt-1">Leave empty if you don't have a live stream</p>
          </div>

          {/* Category, Capacity, Ticket Price */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Category *</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option>Meetup</option>
                <option>Festival</option>
                <option>Workshop</option>
                <option>Conference</option>
                <option>Sports</option>
                <option>Exhibition</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Capacity *</label>
              <Input type="number" name="capacity" value={formData.capacity} onChange={handleChange} min="1" required />
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Ticket Price ($) *</label>
              <Input
                type="number"
                name="ticketPrice"
                value={formData.ticketPrice}
                onChange={handleChange}
                min="0"
                step="0.01"
                required
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-6">
            <Button type="submit" className="flex-1">
              Publish Event
            </Button>
            <Button type="button" variant="outline" className="flex-1 bg-transparent">
              Save as Draft
            </Button>
          </div>
        </form>
      </Card>
    </div>
  )
}
