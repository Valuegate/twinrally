import React from 'react'
import { motion } from "framer-motion"
import { Button } from '../ui/button'

export const TwinCommunity = () => {
  return (
    <div className='bg-[#040E28] w-full relative overflow-hidden'>
      {/* Full width background with optimized elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-[#FBC2EB] rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-[#A6C0EE] rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-[#FBC2EB] rounded-full blur-lg"></div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-[#A6C0EE] rounded-full blur-lg"></div>
      </div>

      {/* Floating Twin Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute -top-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
      >
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="bg-white/10 backdrop-blur-sm rounded-full p-2 border border-white/20"
        >
          <img 
            src="/twinrally_lg_02-removebg-preview.png" 
            alt="Twin Rally" 
            className="w-16 h-16 object-contain"
            loading="lazy"
          />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-center relative z-20 w-full"
      >
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
          className="bg-gradient-to-br from-primary/15 via-transparent to-accent/15 rounded-3xl p-8 lg:p-12 border border-white/10 backdrop-blur-sm relative overflow-hidden mx-6 lg:mx-8 my-8"
        >
          {/* Animated Gradient Border */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#FBC2EB] to-[#A6C0EE] opacity-20 blur-sm"></div>
          <div className="absolute inset-[1px] rounded-3xl bg-[#040E28]"></div>
          
          <div className="relative z-10">
            {/* Animated Title */}
            <motion.h3 
              className="text-3xl lg:text-4xl font-bold mb-6 text-balance bg-gradient-to-r from-[#FBC2EB] via-[#FBC2EB] to-[#A6C0EE] bg-clip-text text-transparent px-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Discover Your Twin Soul Community
            </motion.h3>

            {/* Enhanced Description */}
            <motion.p 
              className="text-lg text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed text-pretty px-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Join <span className="text-[#FBC2EB] font-semibold">10,000+ twins</span> worldwide who are forging unbreakable bonds, 
              sharing unique experiences, and celebrating the extraordinary connection that only twins understand. 
              Your mirror soul is waiting.
            </motion.p>

            {/* Stats Counter */}
            <motion.div 
              className="flex justify-center gap-8 mb-8 text-white/70 flex-wrap px-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-[#FBC2EB]">10K+</div>
                <div className="text-sm">Twins Connected</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#A6C0EE]">50+</div>
                <div className="text-sm">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#FBC2EB]">98%</div>
                <div className="text-sm">Satisfaction</div>
              </div>
            </motion.div>

            {/* Enhanced Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#FBC2EB] to-[#A6C0EE] rounded-full blur-md opacity-75"></div>
                <Button
                  className="relative bg-gradient-to-r from-[#FBC2EB] to-[#A6C0EE] text-white font-semibold rounded-full px-8 py-3 
                    hover:from-[#F9B2E4] hover:to-[#9BB5F0] transition-all duration-300 
                    border-0 shadow-lg hover:shadow-xl"
                >
                  ✨ Start Your Twin Journey
                </Button>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  className="border-2 border-white/30 bg-white/5 text-white font-semibold rounded-full px-8 py-3
                    hover:bg-white/10 hover:border-white/50 backdrop-blur-sm
                    transition-all duration-300 hover:shadow-lg"
                >
                  Discover Stories
                </Button>
              </motion.div>
            </motion.div>

            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-6 text-white/50 text-sm px-4"
            >
              🛡️ Trusted by twins worldwide • Secure & Private
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}