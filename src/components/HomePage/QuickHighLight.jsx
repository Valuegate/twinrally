import React from 'react'
import { motion } from "framer-motion"

export const QuickHighlight = () => {
  return (
    <div>
         <section className="bg-[#040E28] py-16 lg:py-20 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl text-[#FBC2EB] font-bold mb-4 text-balance">
              Everything You Need in One Place
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Discover the core features that make our platform the ultimate destination for twins worldwide.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {/* Connect */}
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
              whileHover={{ y: -8, scale: 1.02 }}
              className="group cursor-pointer"
            >
              <div className="relative h-64 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl overflow-hidden group-hover:shadow-xl transition-all duration-300">
                <img
                  src="https://plus.unsplash.com/premium_photo-1723579502296-d7c0e46174d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29ubmVjdCUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D"
                  alt="Twins connecting"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-90 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                    <i className="fas fa-handshake text-white text-xl"></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Connect</h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    Find and connect with twins from around the world who share your interests and experiences.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Events */}
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
              whileHover={{ y: -8, scale: 1.02 }}
              className="group cursor-pointer"
            >
              <div className="relative h-64 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl overflow-hidden group-hover:shadow-xl transition-all duration-300">
                <img
                  src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZXZlbnR8ZW58MHx8MHx8fDA%3D"
                  alt="Twins at festival"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-90 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                    <i className="fas fa-calendar-star text-white text-xl"></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Events</h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    Join exclusive twin festivals, local meetups, and virtual events celebrating twin culture.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Stories */}
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
              whileHover={{ y: -8, scale: 1.02 }}
              className="group cursor-pointer"
            >
              <div className="relative h-64 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl overflow-hidden group-hover:shadow-xl transition-all duration-300">
                <img
                  src="https://plus.unsplash.com/premium_photo-1664106242816-cf9c4f3150d2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3Rvcmllc3xlbnwwfHwwfHx8MA%3D%3D"
                  alt="Twins sharing stories"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-90 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                    <i className="fas fa-book-heart text-white text-xl"></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Stories</h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    Share your unique twin journey and discover inspiring stories from the community.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Festivals */}
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
              whileHover={{ y: -8, scale: 1.02 }}
              className="group cursor-pointer"
            >
              <div className="relative h-64 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl overflow-hidden group-hover:shadow-xl transition-all duration-300">
                <img
                  src="https://images.unsplash.com/photo-1506157786151-b8491531f063?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmVzdGl2YWxzfGVufDB8fDB8fHww"
                  alt="Twins festival stage"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-90 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                    <i className="fas fa-sparkles text-white text-xl"></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Festivals</h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    Celebrate twin culture at annual festivals with competitions, workshops, and recognition.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}