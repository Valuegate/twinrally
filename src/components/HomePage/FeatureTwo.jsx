import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { Button } from '../ui/button'
import { accordionFeatures } from '@/data/accordion'

export const FeatureTwo = () => {
  const [openAccordion, setOpenAccordion] = useState(null);
  const [activeFeature, setActiveFeature] = useState(0);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index)
    setActiveFeature(index)
  }

  return (
    <div className="w-full">
      <section className="bg-[#040E28] py-16 lg:py-24 text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-10 w-40 h-40 bg-[#FBC2EB] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-32 h-32 bg-[#A6C0EE] rounded-full blur-3xl"></div>
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

            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-balance bg-gradient-to-r from-[#FBC2EB] via-[#FBC2EB] to-[#A6C0EE] bg-clip-text text-transparent">
              Powerful Features for Twins
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto text-pretty leading-relaxed">
              Discover the innovative tools and experiences designed specifically for the twin community. 
              Everything you need to connect, share, and grow together.
            </p>
          </motion.div>

          {/* Modern Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Side - Visual Showcase */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Main Feature Visual */}
              <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-3xl p-8 border border-white/10 backdrop-blur-sm">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeFeature}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                  >
                    <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${accordionFeatures[activeFeature]?.color} flex items-center justify-center shadow-2xl`}>
                      <i className={`${accordionFeatures[activeFeature]?.icon} text-white text-3xl`}></i>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {accordionFeatures[activeFeature]?.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      {accordionFeatures[activeFeature]?.description}
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* Feature Preview Cards */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  {accordionFeatures[activeFeature]?.features.slice(0, 4).map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="bg-white/5 rounded-xl p-4 border border-white/5 text-center"
                    >
                      <div className="text-[#FBC2EB] text-sm font-semibold mb-2">
                        {feature.split(':')[0]}
                      </div>
                      <div className="text-white/60 text-xs">
                        {feature.split(':')[1] || feature}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-[#FBC2EB] rounded-full blur-sm"
              />
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#A6C0EE] rounded-full blur-sm"
              />
            </motion.div>

            {/* Right Side - Interactive Accordion */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              {accordionFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bg-gradient-to-r from-white/5 to-white/10 rounded-2xl overflow-hidden border backdrop-blur-sm transition-all duration-300 ${
                    openAccordion === index 
                      ? 'border-[#FBC2EB]/30 shadow-2xl shadow-[#FBC2EB]/10' 
                      : 'border-white/10 hover:border-white/20'
                  }`}
                >
                  <motion.button
                    onClick={() => toggleAccordion(index)}
                    className="w-full px-6 py-6 flex items-center justify-between group cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <i className={`${feature.icon} text-white text-xl`}></i>
                      </div>
                      <div className="text-left">
                        <h3 className="text-lg font-bold text-white group-hover:text-[#FBC2EB] transition-colors duration-300">
                          {feature.title}
                        </h3>
                        <p className="text-white/60 text-sm mt-1">
                          {feature.features.length} key benefits
                        </p>
                      </div>
                    </div>
                    <motion.div 
                      animate={{ rotate: openAccordion === index ? 180 : 0 }} 
                      transition={{ duration: 0.3 }}
                      className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300"
                    >
                      <i className={`fas ${openAccordion === index ? "fa-minus" : "fa-plus"} text-white text-sm`}></i>
                    </motion.div>
                  </motion.button>

                  <AnimatePresence>
                    {openAccordion === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6">
                          <div className="space-y-3">
                            {feature.features.map((item, itemIndex) => (
                              <motion.div
                                key={itemIndex}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: itemIndex * 0.1 }}
                                className="flex items-start gap-4 p-3 bg-white/5 rounded-lg border border-white/5"
                              >
                                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#FBC2EB] to-[#A6C0EE] flex items-center justify-center flex-shrink-0 mt-0.5">
                                  <i className="fas fa-check text-white text-xs"></i>
                                </div>
                                <span className="text-white/80 text-sm leading-relaxed">{item}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
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
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FBC2EB] rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#A6C0EE] rounded-full blur-2xl"></div>
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
                  <Button className="bg-gradient-to-r from-[#FBC2EB] to-[#A6C0EE] text-white font-bold rounded-full px-8 py-4 text-base shadow-2xl hover:shadow-3xl transition-all duration-300 border-0">
                    Start Your Twin Journey Today
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}