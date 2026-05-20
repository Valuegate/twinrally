import React from 'react'
import { motion } from "framer-motion"

export const QuickHighlight = () => {
  return (
    <div className="w-full">
      <section className="bg-[#040E28] py-16 lg:py-24 text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#FBC2EB] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#A6C0EE] rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-[#FBC2EB] rounded-full blur-2xl"></div>
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
            {/* Logo/Badge - Fixed Visibility */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring" }}
              className="inline-flex items-center justify-center mb-6"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-white/20">
                <img 
                  src="/twinrally_lg_02-removebg-preview.png" 
                  alt="Twin Rally" 
                  className="w-16 h-16 object-contain drop-shadow-lg"
                  loading="lazy"
                />
              </div>
            </motion.div>

            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-balance bg-gradient-to-r from-[#FBC2EB] via-[#FBC2EB] to-[#A6C0EE] bg-clip-text text-transparent">
              Everything You Need in One Place
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto text-pretty leading-relaxed">
              Discover the core features that make Twin Rally the ultimate destination for twins worldwide. 
              Connect, celebrate, and share your unique bond.
            </p>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          >
            {/* Connect Card */}
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
              whileHover={{ y: -12, scale: 1.03 }}
              className="group cursor-pointer"
            >
              <div className="relative h-80 bg-gradient-to-br from-[#FBC2EB]/20 to-[#A6C0EE]/20 rounded-3xl overflow-hidden group-hover:shadow-2xl transition-all duration-500 border border-white/10 backdrop-blur-sm">
                {/* Background Image with Overlay */}
                <img
                  src="https://plus.unsplash.com/premium_photo-1723579502296-d7c0e46174d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29ubmVjdCUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D"
                  alt="Twins connecting"
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-500"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#040E28] via-[#040E28]/80 to-transparent"></div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-gradient-to-r from-[#FBC2EB] to-[#A6C0EE] rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">🤝</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-[#FBC2EB] transition-colors duration-300">
                    Connect
                  </h3>
                  <p className="text-white/90 text-base leading-relaxed font-medium">
                    Find and connect with twins from around the world who share your interests, experiences, 
                    and unique twin bond.
                  </p>
                  
                  {/* Hover Indicator */}
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-white">→</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Events Card */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.9 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.6, ease: "easeOut", delay: 0.1 },
                },
              }}
              whileHover={{ y: -12, scale: 1.03 }}
              className="group cursor-pointer"
            >
              <div className="relative h-80 bg-gradient-to-br from-[#A6C0EE]/20 to-[#FBC2EB]/20 rounded-3xl overflow-hidden group-hover:shadow-2xl transition-all duration-500 border border-white/10 backdrop-blur-sm">
                <img
                  src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZXZlbnR8ZW58MHx8MHx8fDA%3D"
                  alt="Twins at festival"
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#040E28] via-[#040E28]/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="w-14 h-14 bg-gradient-to-r from-[#A6C0EE] to-[#FBC2EB] rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">🎪</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-[#A6C0EE] transition-colors duration-300">
                    Events
                  </h3>
                  <p className="text-white/90 text-base leading-relaxed font-medium">
                    Join exclusive twin festivals, local meetups, and virtual events celebrating the unique twin culture and connections.
                  </p>
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-white">→</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Stories Card */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.9 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
                },
              }}
              whileHover={{ y: -12, scale: 1.03 }}
              className="group cursor-pointer"
            >
              <div className="relative h-80 bg-gradient-to-br from-[#FBC2EB]/20 to-[#A6C0EE]/20 rounded-3xl overflow-hidden group-hover:shadow-2xl transition-all duration-500 border border-white/10 backdrop-blur-sm">
                <img
                  src="https://plus.unsplash.com/premium_photo-1664106242816-cf9c4f3150d2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3Rvcmllc3xlbnwwfHwwfHx8MA%3D%3D"
                  alt="Twins sharing stories"
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#040E28] via-[#040E28]/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="w-14 h-14 bg-gradient-to-r from-[#FBC2EB] to-[#A6C0EE] rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">📖</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-[#FBC2EB] transition-colors duration-300">
                    Stories
                  </h3>
                  <p className="text-white/90 text-base leading-relaxed font-medium">
                    Share your unique twin journey and discover inspiring, heartwarming stories from twins around the globe.
                  </p>
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-white">→</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Festivals Card */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.9 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.6, ease: "easeOut", delay: 0.3 },
                },
              }}
              whileHover={{ y: -12, scale: 1.03 }}
              className="group cursor-pointer"
            >
              <div className="relative h-80 bg-gradient-to-br from-[#A6C0EE]/20 to-[#FBC2EB]/20 rounded-3xl overflow-hidden group-hover:shadow-2xl transition-all duration-500 border border-white/10 backdrop-blur-sm">
                <img
                  src="https://images.unsplash.com/photo-1506157786151-b8491531f063?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmVzdGl2YWxzfGVufDB8fDB8fHww"
                  alt="Twins festival stage"
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#040E28] via-[#040E28]/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="w-14 h-14 bg-gradient-to-r from-[#A6C0EE] to-[#FBC2EB] rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">🎉</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-[#A6C0EE] transition-colors duration-300">
                    Festivals
                  </h3>
                  <p className="text-white/90 text-base leading-relaxed font-medium">
                    Celebrate twin culture at spectacular annual festivals with competitions, workshops, and special recognition.
                  </p>
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-white">→</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-16"
          >
            <p className="text-white/70 text-lg mb-6">
              Ready to explore all these features and more?
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#FBC2EB] to-[#A6C0EE] text-white font-bold rounded-full px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Join Twin Rally Today
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}