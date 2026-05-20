import React from 'react'
import { quickStats, upcomingEvents, reminders, activityFeed } from '@/data/dashboard/dashboard';
import { Bell, Calendar, Clock, Eye, Globe, Heart, MapPin, MessageCircle, TrendingUp, Users } from 'lucide-react';

export const FeaturesForDashboard = () => {
    // Mock data for dashboard features
    const user = {
        name: 'Faith',
        avatar: 'https://i.pravatar.cc/40?img=5'
    };

    return (
        <div className="space-y-6 ">
            {/* Personalized Welcome Section */}
            <div className="bg-transparent border rounded-2xl p-8 text-white">
                <div className="flex justify-between items-start">
                    <div>
                        <h1 className="text-3xl font-bold mb-2">Hi, {user.name}! 👋</h1>
                        <p className="text-blue-100 text-lg">
                            Welcome to your social hub. Here's what's happening today.
                        </p>
                    </div>
                    <div className="bg-white/20 rounded-lg p-3">
                        <TrendingUp className="w-6 h-6" />
                    </div>
                </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {quickStats.map((stat, index) => {
                    const Icon = stat.icon;
                    const colorClasses = {
                        blue: 'text-blue-500 bg-blue-50 border-blue-100',
                        green: 'text-green-500 bg-green-50 border-green-100',
                        purple: 'text-purple-500 bg-purple-50 border-purple-100'
                    };

                    return (
                        <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-sm font-semibold text-gray-500">{stat.label}</h3>
                                <div className={`p-2 rounded-lg ${colorClasses[stat.color]}`}>
                                    <Icon className="w-5 h-5" />
                                </div>
                            </div>
                            <p className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</p>
                            <div className="flex items-center">
                                <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                                <span className="text-sm text-green-500 font-medium">{stat.change}</span>
                                <span className="text-sm text-gray-500 ml-2">this week</span>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Main Content Grid */}
            <div className=" ">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-bold text-gray-900 flex items-center">
                            <Calendar className="w-5 h-5 mr-2 text-blue-500" />
                            Upcoming Events
                        </h2>
                        <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                            View All
                        </button>
                    </div>
                    <div className=" grid grid-cols-1 gap-4 lg:grid-cols-3">
                        {upcomingEvents.map((event) => (
                            <div key={event.id} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                                <h3 className="font-semibold text-gray-900 mb-2">{event.title}</h3>
                                <div className="space-y-2 text-sm text-gray-600">
                                    <div className="flex items-center">
                                        <Clock className="w-4 h-4 mr-2" />
                                        {event.date}
                                    </div>
                                    <div className="flex items-center">
                                        <MapPin className="w-4 h-4 mr-2" />
                                        {event.location}
                                    </div>
                                    <div className="flex items-center justify-between mt-3">
                                        <span className="flex items-center text-xs text-gray-500">
                                            <Users className="w-3 h-3 mr-1" />
                                            {event.attendees} attending
                                        </span>
                                        <button className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                                            Join
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 mt-8">
                    <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <Bell className="w-5 h-5 mr-2 text-orange-500" />
                        Reminders
                    </h2>
                    <div className="space-y-3">
                        {reminders.map((reminder) => (
                            <div key={reminder.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                <div className="flex items-center">
                                    <div className={`p-2 rounded-lg mr-3 ${reminder.type === 'event' ? 'bg-blue-100 text-blue-600' :
                                        reminder.type === 'message' ? 'bg-green-100 text-green-600' :
                                            'bg-purple-100 text-purple-600'
                                        }`}>
                                        {reminder.type === 'event' && <Calendar className="w-4 h-4" />}
                                        {reminder.type === 'message' && <MessageCircle className="w-4 h-4" />}
                                        {reminder.type === 'community' && <Users className="w-4 h-4" />}
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">{reminder.title}</p>
                                        <p className="text-xs text-gray-500">{reminder.due}</p>
                                    </div>
                                </div>
                                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                                    Action
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Activity Feed */}
                <div className="lg:col-span-1 xl:col-span-2 mt-8">
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold text-gray-900 flex items-center">
                                <Eye className="w-5 h-5 mr-2 text-green-500" />
                                Activity Feed
                            </h2>
                            <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                                See More
                            </button>
                        </div>
                        <div className="space-y-4">
                            {activityFeed.map((activity) => (
                                <div key={activity.id} className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg">
                                    <img
                                        src={activity.avatar}
                                        alt={activity.user}
                                        className="w-10 h-10 rounded-full"
                                    />
                                    <div className="flex-1">
                                        <p className="text-sm text-gray-900">
                                            <span className="font-semibold">{activity.user}</span> {activity.action}
                                            {activity.target && <span className="font-semibold text-blue-600"> {activity.target}</span>}
                                        </p>
                                        <p className="text-xs text-gray-500 flex items-center">
                                            <Clock className="w-3 h-3 mr-1" />
                                            {activity.time}
                                        </p>
                                    </div>
                                    <div className={`p-2 rounded-full ${activity.type === 'event' ? 'bg-blue-50 text-blue-500' :
                                        activity.type === 'join' ? 'bg-green-50 text-green-500' :
                                            activity.type === 'comment' ? 'bg-purple-50 text-purple-500' :
                                                'bg-red-50 text-red-500'
                                        }`}>
                                        {activity.type === 'event' && <Calendar className="w-4 h-4" />}
                                        {activity.type === 'join' && <Users className="w-4 h-4" />}
                                        {activity.type === 'comment' && <MessageCircle className="w-4 h-4" />}
                                        {activity.type === 'like' && <Heart className="w-4 h-4" />}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Actions */}
                    {/* <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 mt-6">
                        <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                            <button className="p-4 bg-blue-50 rounded-lg border border-blue-100 hover:bg-blue-100 transition-colors text-center">
                                <Users className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                                <span className="text-sm font-medium text-blue-700">Add Friends</span>
                            </button>
                            <button className="p-4 bg-green-50 rounded-lg border border-green-100 hover:bg-green-100 transition-colors text-center">
                                <Calendar className="w-6 h-6 text-green-600 mx-auto mb-2" />
                                <span className="text-sm font-medium text-green-700">Create Event</span>
                            </button>
                            <button className="p-4 bg-purple-50 rounded-lg border border-purple-100 hover:bg-purple-100 transition-colors text-center">
                                <Globe className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                                <span className="text-sm font-medium text-purple-700">Join Community</span>
                            </button>
                            <button className="p-4 bg-orange-50 rounded-lg border border-orange-100 hover:bg-orange-100 transition-colors text-center">
                                <MessageCircle className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                                <span className="text-sm font-medium text-orange-700">Send Message</span>
                            </button>
                        </div>
                    </div> */}
                </div>

            </div>
        </div>
    )
}