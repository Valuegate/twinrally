import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, ArrowRight, CheckCircle } from 'lucide-react'

export const NewsLetter = () => {
    const [email, setEmail] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = () => {
        if (email) setSubmitted(true)
    }

    return (
        <section className="bg-[#040E28] py-20 relative overflow-hidden">

            {/* Ambient glows */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[360px] h-[360px] rounded-full bg-[#fbc2eb] opacity-[0.07] blur-[90px]" />
                <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[360px] h-[360px] rounded-full bg-[#a6c0ee] opacity-[0.07] blur-[90px]" />
            </div>

            <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">

                {/* Icon */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.7 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, type: 'spring', stiffness: 220 }}
                    className="mx-auto mb-7 w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{
                        background: 'linear-gradient(135deg, rgba(251,194,235,0.15), rgba(166,192,238,0.15))',
                        border: '1px solid rgba(251,194,235,0.2)',
                    }}
                >
                    <Mail size={26} className="text-[#fbc2eb]" strokeWidth={1.7} />
                </motion.div>

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: 0.05 }}
                >
                    <h2
                        className="text-3xl lg:text-4xl font-bold mb-4 leading-tight"
                        style={{ fontFamily: "'OneNineNineFour-Regular', 'DM Sans', sans-serif" }}
                    >
                        <span
                            style={{
                                background: 'linear-gradient(90deg, #fbc2eb, #a6c0ee)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                            }}
                        >
                            Stay Connected
                        </span>
                    </h2>
                    <p className="text-[rgba(255,255,255,0.55)] text-base lg:text-[17px] leading-relaxed max-w-md mx-auto">
                        Get the latest twin events, community highlights, and platform updates — straight to your inbox.
                    </p>
                </motion.div>

                {/* Input row */}
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: 0.15 }}
                    className="mt-9"
                >
                    <AnimatePresence mode="wait">
                        {!submitted ? (
                            <motion.div
                                key="form"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                            >
                                <div
                                    className="flex-1 flex items-center px-5 rounded-full"
                                    style={{
                                        background: 'rgba(255,255,255,0.06)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        backdropFilter: 'blur(10px)',
                                    }}
                                >
                                    <Mail size={15} color="rgba(255,255,255,0.3)" className="flex-shrink-0 mr-3" />
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        onKeyDown={e => e.key === 'Enter' && handleSubmit()}
                                        placeholder="your@email.com"
                                        className="flex-1 bg-transparent border-none outline-none text-white placeholder-[rgba(255,255,255,0.3)] text-sm py-4"
                                    />
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.04 }}
                                    whileTap={{ scale: 0.97 }}
                                    onClick={handleSubmit}
                                    className="flex items-center justify-center gap-2 px-7 py-4 rounded-full font-bold text-sm whitespace-nowrap text-[#040E28] cursor-pointer border-0"
                                    style={{
                                        background: 'linear-gradient(135deg, #fbc2eb, #a6c0ee)',
                                        boxShadow: '0 0 28px rgba(251,194,235,0.2)',
                                    }}
                                >
                                    Subscribe
                                    <ArrowRight size={15} strokeWidth={2.5} />
                                </motion.button>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex items-center justify-center gap-3 max-w-md mx-auto py-4 px-6 rounded-full"
                                style={{
                                    background: 'rgba(166,192,238,0.1)',
                                    border: '1px solid rgba(166,192,238,0.25)',
                                }}
                            >
                                <CheckCircle size={18} color="#a6c0ee" />
                                <span className="text-[#a6c0ee] font-semibold text-sm">You're on the list — see you inside!</span>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                {/* Fine print */}
                {!submitted && (
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="mt-5 text-[rgba(255,255,255,0.25)] text-xs"
                    >
                        No spam · Unsubscribe anytime
                    </motion.p>
                )}

            </div>
        </section>
    )
}

export default NewsLetter