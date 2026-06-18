import React from "react";
import {
  Users,
  Search,
  Calendar,
  MessageSquare,
  LayoutDashboard,
  Sparkles,
} from "lucide-react";

import { Header } from "../HomePage/Header";
// import Footer from '@/components/layout/Footer';

const FeaturesSection = () => {
  const features = [
    {
      icon: Users,
      title: "Community Hub",
      description:
        "Join topic-based groups, share twin stories, and connect with twins who share your interests — from parenting to sports, music to careers.",
      gradient: "from-purple-500/20 to-pink-500/20",
      iconColor: "text-purple-400",
    },
    {
      icon: Search,
      title: "Twin Finder",
      description:
        "Discover twins in your city or around the world. Filter by interests, age, language, and more to build meaningful connections.",
      gradient: "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-400",
    },
    {
      icon: Calendar,
      title: "Events",
      description:
        "Attend global Twin Festivals or host your own meetup, talent show, or workshop — with ticketing, RSVPs, and live streaming support.",
      gradient: "from-green-500/20 to-emerald-500/20",
      iconColor: "text-green-400",
    },
    {
      icon: MessageSquare,
      title: "Messaging",
      description:
        "Chat privately, join group circles, or go live with voice and video calls — all designed to help twins stay close, no matter the distance.",
      gradient: "from-orange-500/20 to-red-500/20",
      iconColor: "text-orange-400",
    },
    {
      icon: LayoutDashboard,
      title: "Dashboard",
      description:
        "Your personal hub for upcoming events, messages, achievements, and activity — everything in one place, built for twin life.",
      gradient: "from-indigo-500/20 to-purple-500/20",
      iconColor: "text-indigo-400",
    },
  ];

  return (
    <>
      {/* ✅ Header appears at the top */}
      <Header />

      <section className="py-24 bg-[color:var(--bg)] text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[color:var(--pink)]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[color:var(--blue)]/20 rounded-full blur-3xl"></div>
          <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-[color:var(--pink)]/10 to-[color:var(--blue)]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative container mx-auto px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium mb-6 border border-white/20 animate-float">
              <Sparkles className="w-4 h-4 mr-2 text-[color:var(--pink)]" />
              Platform Features
            </div>

            <h2 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in bg-gradient-to-r from-white via-[color:var(--pink)] to-[color:var(--blue)] bg-clip-text text-transparent leading-tight">
              Everything You Need to Connect
            </h2>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-slide-up-delay-1">
              Discover, connect, and celebrate with twins worldwide through our
              comprehensive platform designed specifically for the twin
              community.
            </p>
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className={`group relative p-8 rounded-2xl backdrop-blur-lg border border-white/10
                  bg-gradient-to-br ${feature.gradient}
                  hover:border-white/20 hover:scale-105 hover:-translate-y-2
                  transition-all duration-500 cursor-pointer ${
                    index < 3
                      ? "animate-slide-up-delay-1"
                      : "animate-slide-up-delay-2"
                  }`}
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative">
                    <div
                      className={`inline-flex p-3 rounded-xl mb-6 backdrop-blur-sm border border-white/10
                      bg-gradient-to-br from-white/10 to-white/5
                      group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon
                        className={`w-8 h-8 ${feature.iconColor} group-hover:text-white transition-colors duration-300`}
                      />
                    </div>

                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[color:var(--pink)] transition-colors duration-300">
                      {feature.title}
                    </h3>

                    <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      {feature.description}
                    </p>

                    <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="inline-flex items-center text-sm font-medium text-[color:var(--pink)] hover:text-white cursor-pointer">
                        Learn more
                        <svg
                          className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[color:var(--pink)] to-[color:var(--blue)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl"></div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA section */}
          <div className="text-center mt-20 animate-slide-up-delay-3">
            <div className="inline-flex items-center justify-center space-x-8 text-sm text-gray-400">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                5+ Core Features
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
                Always Free Tier
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></div>
                Premium Upgrades
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <Footer /> */}
    </>
  );
};

export default FeaturesSection;
