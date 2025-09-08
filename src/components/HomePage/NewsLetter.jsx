import React from 'react'
import { motion } from "framer-motion"
import { Input } from '../ui/input'
import { Button } from '../ui/button'

export const NewsLetter = () => {
    return (
        <div>
            <section className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 py-16 lg:py-20">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <div className="mb-8">
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
                                className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6"
                            >
                                <i className="fas fa-envelope-open text-white text-2xl"></i>
                            </motion.div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 text-balance">Stay Connected</h2>
                            <p className="text-lg text-blue-100 max-w-2xl mx-auto text-pretty">
                                Get the latest updates on twin events, community highlights, and platform features delivered to your
                                inbox.
                            </p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="max-w-md mx-auto"
                        >
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="flex-1 px-6 rounded-full border-0 bg-white/10 backdrop-blur-sm text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Button className="bg-white text-blue-900 hover:bg-blue-50 px-8 rounded-full font-semibold whitespace-nowrap">
                                        Subscribe
                                    </Button>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
