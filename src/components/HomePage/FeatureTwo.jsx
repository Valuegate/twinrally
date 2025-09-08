import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { Button } from '../ui/button'
import { accordionFeatures } from '@/data/accordion'

export const FeatureTwo = () => {

  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index)
  }

  return (
    <div>
      <section className="bg-[#040E28] py-16 lg:py-24 text-white font">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Explore Our Features</h2>
            <p className="text-lg max-w-2xl mx-auto text-pretty">
              Dive deeper into what makes our twins community platform special. Click on each feature to learn more.
            </p>
          </motion.div>

          {/* Accordion */}
          <div className="space-y-4 ">
            {accordionFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden font"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-slate-50 transition-colors duration-200 cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center`}
                    >
                      <i className={`${feature.icon} text-white text-xl`}></i>
                    </div>
                    <h3 className=" font-semibold text-slate-900 text-left font">{feature.title}</h3>
                  </div>
                  <motion.div animate={{ rotate: openAccordion === index ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <i className={`fas ${openAccordion === index ? "fa-minus" : "fa-plus"} text-slate-400 text-lg`}></i>
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openAccordion === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2">
                        <div className="pl-16">
                          <ul className="space-y-3">
                            {feature.features.map((item, itemIndex) => (
                              <motion.li
                                key={itemIndex}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: itemIndex * 0.1 }}
                                className="flex items-start gap-3 text-slate-600"
                              >
                                <div
                                  className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.color} mt-2 flex-shrink-0`}
                                ></div>
                                <span className="text-sm leading-relaxed">{item}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Experience All Features Today</h3>
              <p className="text-blue-100 mb-6 max-w-xl mx-auto">
                Join our growing community and unlock the full potential of twin connections worldwide.
              </p>
              <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg font-semibold">
                Start Your Journey
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}