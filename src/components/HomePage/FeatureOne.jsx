import React from 'react'
import { motion } from "framer-motion"

export const FeatureOne = () => {
  const features = [
    {
      title: "Community & Networking",
      icon: "fas fa-users",
      color: "from-[#FBC2EB] to-[#FF9ECF]",
      bgColor: "bg-[#FBC2EB]/10",
      items: [
        "Create joint twin profiles or individual linked accounts",
        "Discover twins in your city, state, or across the world",
        "Join interest groups for sports, music, careers, and more",
        "Share twin stories and unique experiences"
      ]
    },
    {
      title: "Event Hosting",
      icon: "fas fa-calendar-alt",
      color: "from-[#A6C0EE] to-[#7BA6F9]",
      bgColor: "bg-[#A6C0EE]/10",
      items: [
        "Annual twins festivals celebrating twin culture",
        "Create local meetups, workshops, and talent shows",
        "Integrated ticketing and RSVP system",
        "Live streaming for global participation"
      ]
    },
    {
      title: "Communication",
      icon: "fas fa-comments",
      color: "from-[#FF9ECF] to-[#FBC2EB]",
      bgColor: "bg-[#FF9ECF]/10",
      items: [
        "Private messaging between twins",
        "Topic-based and location-based group chats",
        "Voice and video calls for closer connections",
        "Discussion forums for advice and experiences"
      ]
    },
    {
      title: "Engagement & Recognition",
      icon: "fas fa-trophy",
      color: "from-[#7BA6F9] to-[#A6C0EE]",
      bgColor: "bg-[#7BA6F9]/10",
      items: [
        "Twin challenges and competitions",
        "Feature inspiring twins in various fields",
        "Achievements and badges for participation",
        "Monthly twin spotlight features"
      ]
    },
    {
      title: "Accessibility",
      icon: "fas fa-universal-access",
      color: "from-[#FBC2EB] to-[#A6C0EE]",
      bgColor: "bg-gradient-to-br from-[#FBC2EB]/10 to-[#A6C0EE]/10",
      items: [
        "Cross-platform access on mobile and web",
        "Multilingual support for global community",
        "Accessibility features for all abilities",
        "Offline mode for basic functionality"
      ]
    }
  ]

  return (
    <div className="w-full">
      <section className="bg-[#040E28] py-16 lg:py-24 text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 bg-[#FBC2EB] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#A6C0EE] rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-[#FF9ECF] rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 lg:mb-20"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center justify-center mb-6"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/20">
                <img 
                  src="/twinrally_lg_02-removebg-preview.png" 
                  alt="Twin Rally" 
                  className="w-12 h-12 object-contain"
                  loading="lazy"
                />
              </div>
            </motion.div>

            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-balance bg-gradient-to-r from-[#FBC2EB] via-[#FF9ECF] to-[#A6C0EE] bg-clip-text text-transparent">
              Designed for Twin Connections
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto text-pretty leading-relaxed">
              Experience a platform built from the ground up to celebrate and strengthen the unique bond between twins. 
              Every feature is crafted with your connection in mind.
            </p>
          </motion.div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className={`relative group cursor-pointer ${feature.bgColor} rounded-3xl p-6 lg:p-8 border border-white/10 backdrop-blur-sm h-full group-hover:border-white/20 transition-all duration-500`}
              >
                {/* Icon with Gradient */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 shadow-lg mx-auto`}
                >
                  <i className={`${feature.icon} text-white text-xl`}></i>
                </motion.div>

                {/* Title */}
                <h3 className="text-xl lg:text-2xl font-bold text-white text-center mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#FBC2EB] group-hover:to-[#A6C0EE] group-hover:bg-clip-text transition-all duration-300">
                  {feature.title}
                </h3>

                {/* Feature Items */}
                <div className="space-y-3">
                  {feature.items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: itemIndex * 0.1 + index * 0.1 }}
                      className="flex items-start gap-3 group/item"
                    >
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.color} mt-2 flex-shrink-0`}
                      />
                      <span className="text-white/80 text-sm leading-relaxed group-hover/item:text-white transition-colors duration-300">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-16 lg:mt-20"
          >
            <div className="bg-gradient-to-r from-[#FBC2EB]/10 to-[#A6C0EE]/10 rounded-3xl p-8 lg:p-12 border border-white/10 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-20 h-20 bg-[#FBC2EB] rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-[#A6C0EE] rounded-full blur-2xl"></div>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-2xl lg:text-3xl font-bold mb-4 bg-gradient-to-r from-[#FBC2EB] to-[#A6C0EE] bg-clip-text text-transparent">
                  Ready to Experience All Features?
                </h3>
                <p className="text-white/70 mb-6 max-w-2xl mx-auto text-lg">
                  Join thousands of twins who are already building meaningful connections and creating unforgettable memories together.
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block"
                >
                  <button className="bg-gradient-to-r from-[#FBC2EB] to-[#A6C0EE] text-white font-bold rounded-full px-8 py-4 text-base shadow-2xl hover:shadow-3xl transition-all duration-300">
                    Start Your Twin Journey Today
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}