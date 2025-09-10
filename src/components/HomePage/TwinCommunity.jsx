import React from 'react'
import { motion } from "framer-motion"
import { Button } from '../ui/button'

export const TwinCommunity = () => {
  return (
    <div className='bg-[#040E28] max-w-7xl mx-auto px-6 lg:px-8'>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-center mt-16"
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 lg:p-12 border border-border"
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-[#FBC2EB] mb-4 text-balance">
            Ready to Connect with Your Twin Community?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Join thousands of twins worldwide who are already building meaningful connections, sharing experiences,
            and celebrating their unique bond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant='ghost' className="bg-blue-800  hover:bg-blue-600 text-white px-8 py-3 
             focus:border-2 focus:border-white focus:outline-none"
              >
                Get Started Today
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                className="border-primary bg-[#A6C0EE] text-white hover:bg-pink-300 px-8 py-3
             focus:ring-1 focus:ring-primary focus:ring-offset-1 focus:outline-none"
              >
                Learn More
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
