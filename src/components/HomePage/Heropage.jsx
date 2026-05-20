import React, { useEffect, useRef, useState } from 'react';
import { Button } from '../ui/button';
import { motion, useScroll, useTransform } from "framer-motion";
import { gallery } from '@/data/images'

export const Heropage = () => {
  const [index, setIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const ref = useRef(null);

  // Preload images for smoother transitions
  useEffect(() => {
    if (!gallery || gallery.length === 0) return;

    const preloadImages = () => {
      gallery.forEach((item) => {
        const img = new Image();
        img.src = item.image;
      });
      setIsLoading(false);
    };

    preloadImages();
  }, [gallery]);

  // Background image slideshow
  useEffect(() => {
    if (!gallery || gallery.length === 0 || isLoading) return;

    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % gallery.length);
    }, 4000); // Slightly longer interval for better UX

    return () => clearInterval(interval);
  }, [gallery, isLoading]);

  // Scroll animations
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="relative">
      <div ref={ref} className="h-screen w-full relative overflow-hidden bg-[#040E28]">
        {/* Background Images with Smooth Transitions */}
        {gallery?.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: i === index ? 1 : 0,
              scale: i === index ? 1 : 1.1 
            }}
            transition={{ 
              duration: 1.5,
              ease: "easeInOut"
            }}
            style={{ y: backgroundY }}
            className="absolute inset-0 w-full h-[120%]"
          >
            <div
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              className="w-full h-full"
            />
          </motion.div>
        ))}

        {/* Enhanced Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#040E28]/90 via-[#040E28]/70 to-[#040E28]/80"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#040E28] via-transparent to-[#040E28]/30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#040E28]/50 to-[#040E28]/50"></div>

        {/* Animated Background Particles */}
        <motion.div
          className="absolute inset-0 opacity-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 2 }}
        >
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-[#FBC2EB] to-[#A6C0EE]"
              style={{
                width: Math.random() * 4 + 1,
                height: Math.random() * 4 + 1,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </motion.div>

        {/* Main Content */}
        <motion.div 
          style={{ y: textY, opacity }} 
          className="relative z-10 flex justify-center items-center h-screen px-6 lg:px-8"
        >
          {/* Desktop Version */}
          <div className="hidden lg:flex flex-col justify-center items-center text-center max-w-6xl space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 1.2,
                ease: "easeOut",
                type: "spring",
                stiffness: 80 
              }}
              className="space-y-4"
            >
              <h1 className="text-7xl lg:text-8xl font-black bg-gradient-to-r from-[#FBC2EB] via-[#FBC2EB] to-[#A6C0EE] bg-clip-text text-transparent drop-shadow-2xl leading-none">
                Twin Rally
              </h1>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex items-center justify-center gap-4"
              >
                <div className="h-1 w-20 bg-gradient-to-r from-[#FBC2EB] to-[#A6C0EE] rounded-full"></div>
                <h2 className="text-4xl lg:text-5xl font-bold text-white drop-shadow-lg">
                  Global Twins
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-[#A6C0EE] to-[#FBC2EB] rounded-full"></div>
              </motion.div>

              <motion.h3
                className="text-2xl lg:text-3xl font-semibold text-[#A6C0EE] drop-shadow-md mt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Community Platform
              </motion.h3>
            </motion.div>

            <motion.p
              className="text-xl lg:text-2xl text-white/90 font-medium max-w-3xl leading-relaxed drop-shadow-sm mt-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              Where twins forge <span className="text-[#FBC2EB] font-bold">lifelong connections</span>, 
              celebrate unique bonds, and create unforgettable memories together.
            </motion.p>

            <motion.div
              className="flex gap-6 mt-8"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  y: -2 
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button className="bg-gradient-to-r from-[#A6C0EE] to-[#667EEA] text-white font-bold rounded-full px-12 py-6 text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 border-0">
                  Join Now ✨
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  y: -2 
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button className="bg-gradient-to-r from-[#FBC2EB] to-[#A6C0EE] text-white font-bold rounded-full px-12 py-6 text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 border-0">
                  Download App 📱
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="flex gap-12 mt-12 text-white/80"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-[#FBC2EB]">10K+</div>
                <div className="text-sm">Twins Connected</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#A6C0EE]">50+</div>
                <div className="text-sm">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#FBC2EB]">100+</div>
                <div className="text-sm">Events Yearly</div>
              </div>
            </motion.div>
          </div>

          {/* Mobile Version */}
          <div className="flex flex-col justify-center items-center text-center max-w-md lg:hidden space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="space-y-4"
            >
              <h1 className="text-5xl font-black bg-gradient-to-r from-[#FBC2EB] via-[#FBC2EB] to-[#A6C0EE] bg-clip-text text-transparent drop-shadow-2xl">
                Twin Rally
              </h1>
              
              <h2 className="text-2xl font-bold text-white drop-shadow-lg">
                Global Twins
              </h2>

              <h3 className="text-xl font-semibold text-[#A6C0EE] drop-shadow-md">
                Community Platform
              </h3>
            </motion.div>

            <motion.p
              className="text-lg text-white/90 font-medium leading-relaxed drop-shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Where twins forge lifelong connections and celebrate unique bonds together.
            </motion.p>

            <motion.div
              className="flex flex-col gap-4 mt-6 w-full"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button className="bg-gradient-to-r from-[#A6C0EE] to-[#667EEA] text-white font-bold rounded-full w-full py-6 text-base shadow-xl">
                  Join Now ✨
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button className="bg-gradient-to-r from-[#FBC2EB] to-[#A6C0EE] text-white font-bold rounded-full w-full py-6 text-base shadow-xl">
                  Download App 📱
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <motion.div
            className="flex flex-col items-center cursor-pointer group"
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{ scale: 1.1 }}
          >
            <span className="text-white/70 text-sm mb-2 group-hover:text-white transition-colors">
              Scroll to explore
            </span>
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center group-hover:border-white/80 transition-colors">
              <motion.div
                className="w-1 h-3 bg-white/70 rounded-full mt-2 group-hover:bg-white"
                animate={{ y: [0, 12, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};