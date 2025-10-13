import React from 'react'
import { motion } from "framer-motion"

export const FeatureOne = () => {
  return (
    <div>
      <section className="bg-[#040E28] py-16 lg:py-24 text-muted-foreground text-pretty">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl text-[#FBC2EB] lg:text-4xl font-bold mb-4 text-balance">
              Connect, Celebrate, and Grow Together
            </h2>
            <p className="text-lg max-w-3xl mx-auto text-pretty text-muted-foreground">
              Discover the ultimate platform designed exclusively for twins to build meaningful connections, share
              experiences, and celebrate the unique bond that makes you special.
            </p>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* Community & Networking */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.9 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="bg-[#FBC2EB] rounded-lg border border-border p-6 hover:shadow-xl transition-all duration-300 cursor-pointer hover:border-b-[#A6C0EE] border-b-[5px] border-b-[#FBC2EB]"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 200 }}
                className="flex items-center mb-4 "
              >
                <div className="w-12 h-12 bg-[#A6C0EE] rounded-lg flex items-center justify-center mr-4">
                  <i className="fas fa-users text-primary-foreground text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">Community & Networking</h3>
              </motion.div>
              <div className="space-y-3">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="flex items-start gap-2 text-muted-foreground text-pretty"
                >
                  <i className="fas fa-user-circle mt-1 text-sm"></i>
                  <span className="text-sm text-muted-foreground text-pretty">Create joint twin profiles or individual linked accounts</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="flex items-start gap-2"
                >
                  <i className="fas fa-search-location mt-1 text-sm"></i>
                  <span className="text-sm">Discover twins in your city, state, or across the world</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  className="flex items-start gap-2"
                >
                  <i className="fas fa-heart mt-1 text-sm"></i>
                  <span className="text-sm">Join interest groups for sports, music, careers, and more</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  className="flex items-start gap-2"
                >
                  <i className="fas fa-book-open mt-1 text-sm"></i>
                  <span className="text-sm">Share twin stories and unique experiences</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Event Hosting */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.9 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="bg-[#A6C0EE] rounded-lg border border-border p-6 hover:shadow-xl transition-all duration-300 cursor-pointer hover:border-b-[#FBC2EB] border-b-[5px] border-b-[#A6C0EE]"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 200 }}
                className="flex items-center mb-4"
              >
                <div className="w-12 h-12 bg-[#FBC2EB] rounded-lg flex items-center justify-center mr-4">
                  <i className="fas fa-calendar-alt text-white text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">Event Hosting</h3>
              </motion.div>
              <div className="space-y-3 text-muted-foreground text-pretty">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="flex items-start gap-2"
                >
                  <i className="fas fa-star mt-1 text-sm"></i>
                  <span className="text-sm">Annual twins festivals celebrating twin culture</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="flex items-start gap-2"
                >
                  <i className="fas fa-plus-circle mt-1 text-sm"></i>
                  <span className="text-sm">Create local meetups, workshops, and talent shows</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  className="flex items-start gap-2"
                >
                  <i className="fas fa-ticket-alt mt-1 text-sm"></i>
                  <span className="text-sm">Integrated ticketing and RSVP system</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  className="flex items-start gap-2"
                >
                  <i className="fas fa-video mt-1 text-sm"></i>
                  <span className="text-sm">Live streaming for global participation</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Communication */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.9 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="bg-[#A6C0EE] text-white rounded-lg border border-border p-6 hover:shadow-xl transition-all duration-300 cursor-pointer
              hover:border-b-[#FBC2EB] border-b-[5px] border-b-[#A6C0EE]"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 200 }}
                className="flex items-center mb-4"
              >
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mr-4">
                  <i className="fas fa-comments text-secondary-foreground text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">Communication</h3>
              </motion.div>
              <div className="space-y-3 ">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="flex items-start gap-2 text-muted-foreground text-pretty"
                >
                  <i className="fas fa-envelope mt-1 text-sm"></i>
                  <span className="text-sm">Private messaging between twins</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="flex items-start gap-2 text-muted-foreground text-pretty"
                >
                  <i className="fas fa-users-cog mt-1 text-muted-foreground text-pretty text-sm"></i>
                  <span className="text-sm">Topic-based and location-based group chats</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  className="flex items-start gap-2 text-muted-foreground text-pretty"
                >
                  <i className="fas fa-phone-alt mt-1 text-muted-foreground text-pretty text-sm"></i>
                  <span className="text-sm">Voice and video calls for closer connections</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  className="flex items-start gap-2 text-muted-foreground text-pretty"
                >
                  <i className="fas fa-comments-dollar mt-1 text-muted-foreground text-pretty text-sm"></i>
                  <span className="text-sm">Discussion forums for advice and experiences</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Engagement & Recognition */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.9 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="bg-[#A6C0EE] rounded-lg border border-border p-6 hover:shadow-xl transition-all duration-300 cursor-pointer hover:border-b-[#FBC2EB] border-b-[5px] border-b-[#A6C0EE]"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 200 }}
                className="flex items-center mb-4"
              >
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                  <i className="fas fa-trophy text-primary-foreground text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">Engagement & Recognition</h3>
              </motion.div>
              <div className="space-y-3 text-muted-foreground">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="flex items-start gap-2 text-muted-foreground text-pretty"
                >
                  <i className="fas fa-medal mt-1 text-sm"></i>
                  <span className="text-sm">Twin challenges and competitions</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="flex items-start gap-2"
                >
                  <i className="fas fa-spotlight mt-1 text-sm"></i>
                  <span className="text-sm">Feature inspiring twins in various fields</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  className="flex items-start gap-2"
                >
                  <i className="fas fa-award mt-1 text-sm"></i>
                  <span className="text-sm">Achievements and badges for participation</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Accessibility */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.9 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="bg-[#FBC2EB]  rounded-lg border border-border p-6 hover:shadow-xl transition-all duration-300 md:col-span-2 lg:col-span-1 cursor-pointer hover:border-b-[#FBC2EB] border-b-[5px] border-b-[#A6C0EE]"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 200 }}
                className="flex items-center mb-4"
              >
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mr-4">
                  <i className="fas fa-universal-access text-accent-foreground text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">Accessibility</h3>
              </motion.div>
              <div className="space-y-3 text-muted-foreground">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="flex items-start gap-2 text-muted-foreground text-pretty"
                >
                  <i className="fas fa-mobile-alt mt-1 text-sm"></i>
                  <span className="text-sm">Cross-platform access on mobile and web</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="flex items-start gap-2"
                >
                  <i className="fas fa-globe mt-1 text-sm"></i>
                  <span className="text-sm">Multilingual support for global community</span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}