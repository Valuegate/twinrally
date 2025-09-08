import React from 'react'
import { motion } from "framer-motion"
import { Button } from '../ui/button'

export const CallToAction = () => {
  return (
    <div>
         <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        
        <div className="absolute inset-0 z-0">
          <img
            src="https://plus.unsplash.com/premium_photo-1733317391601-b1651d6d4be9?w=1920&auto=format&fit=crop&q=100&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODh8fGJhY2tncm91bmQlMjBpbWFnZSUyMHdpdGglMjBwZW9wbGUlMjBjb25uZWN0aW5nfGVufDB8fDB8fHww"
            alt="Twins Community Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
        </div>

        
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl lg:text-7xl font-bold text-white mb-6 text-balance">Join the Twin Revolution</h2>
            <p className="text-xl lg:text-2xl text-white/90 mb-12 max-w-3xl mx-auto text-pretty">
              Connect with twins worldwide, celebrate your unique bond, and be part of a community that truly
              understands you.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
                <Button className="bg-black text-white hover:bg-primary/90 px-12 py-4 text-xs font-semibold rounded-full shadow-2xl">
                  <i className="fas fa-user-plus mr-3"></i>
                  Sign Up Free
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-12 py-4 text-xs font-semibold rounded-full shadow-2xl">
                  <i className="fas fa-download mr-3"></i>
                  Download App
                </Button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-sm text-white/80"
            >
              <p>Available on iOS and Android • Free to join • No credit card required</p>
            </motion.div>
          </motion.div>
        </div>

        
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
      </section>
    </div>
  )
}