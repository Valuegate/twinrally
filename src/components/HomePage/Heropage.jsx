import React, { useEffect, useRef, useState } from 'react';
import { Button } from '../ui/button';
import { motion, useScroll, useTransform } from "framer-motion";
import { gallery } from '@/data/images'

export const Heropage = () => {

  const [index, setIndex] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    if (!gallery || gallery.length === 0) {
      return
    }

    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % gallery.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [gallery]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])

  return (
    <div>
      <div ref={ref} className="h-screen w-full relative overflow-hidden">
        <motion.div
          style={{
            backgroundImage: `url(${gallery[index]?.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            y: backgroundY,
          }}
          className="absolute inset-0 w-full h-[120%]"
        />

        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-blue-900/70 to-pink-900/80"></div>
        <div className="absolute inset-0 bg-black/40"></div>

        <motion.div
          className="absolute inset-0 opacity-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 2 }}
        >
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-pink-300 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-blue-300 rounded-full animate-pulse delay-500"></div>
        </motion.div>

        <motion.div style={{ y: textY }} className="relative z-10 flex justify-center items-center h-screen px-8">
          {/* desktop */}
          <div className="hidden lg:flex flex-col justify-center items-center text-center max-w-4xl">
            <motion.h1
              className="text-[24px] text-[#FBC2EB] leading-relaxed font-bold drop-shadow-lg lg:text-6xl"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 1.2,
                ease: "easeOut",
                type: "spring",
                stiffness: 100,
              }}
            >
              Twin Rally Global Twins
            </motion.h1>

            <motion.h1
              className="text-[20px] text-[#A6C0EE] leading-relaxed font-bold drop-shadow-md lg:text-5xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              Community Platform
            </motion.h1>

            <motion.p
              className="text-[#A6C0EE] text-[18px] font-bold drop-shadow-sm mt-4 lg:text-[20px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            >
              A world where twins are united through lifelong connections both online and offline.
            </motion.p>

            <motion.div
              className="flex gap-4 mt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <motion.div
                whileHover={{
                  scale: 1.08,
                  rotate: 1,
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button className="bg-[#A6C0EE] text-white rounded-full w-32 hover:bg-gradient-to-r from-[#A6C0EE] to-[#667EEA]">
                  Signup
                </Button>
              </motion.div>

              <motion.div
                whileHover={{
                  scale: 1.08,
                  rotate: -1,
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button className="bg-[#FBC2EB] text-white rounded-full w-32 hover:bg-gradient-to-r from-[#FBC2EB] to-[#A6C0EE]">
                  Download
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* mobile */}

          <div className="flex flex-col justify-center items-center text-center max-w-4xl lg:hidden">
            <motion.h1
              className="text-6xl text-[#FBC2EB] leading-relaxed font-bold drop-shadow-lg lg:text-6xl"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 1.2,
                ease: "easeOut",
                type: "spring",
                stiffness: 100,
              }}
            >
              TwinRally
            </motion.h1>

            <motion.h1
              className="text-4xl text-[#FBC2EB] leading-relaxed font-bold drop-shadow-lg lg:text-6xl"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 1.2,
                ease: "easeOut",
                type: "spring",
                stiffness: 100,
              }}
            >
              Global Twins
            </motion.h1>

            <motion.h1
              className="text-3xl text-[#A6C0EE] leading-relaxed font-bold drop-shadow-md lg:text-5xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              Community Platform
            </motion.h1>

            <motion.p
              className="text-[#A6C0EE] text-[18px] font-bold drop-shadow-sm mt-4 lg:text-[20px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            >
              A world where twins are united through lifelong connections both online and offline.
            </motion.p>

            <motion.div
              className="flex flex-col gap-4 mt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <motion.div
                whileHover={{
                  scale: 1.08,
                  rotate: 1,
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button className="bg-[#A6C0EE] text-white rounded-full w-44 hover:bg-gradient-to-r from-[#A6C0EE] to-[#667EEA]">
                  Signup
                </Button>
              </motion.div>

              <motion.div
                whileHover={{
                  scale: 1.08,
                  rotate: -1,
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button className="bg-[#FBC2EB] text-white rounded-full w-44 hover:bg-gradient-to-r from-[#FBC2EB] to-[#A6C0EE]">
                  Download
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center cursor-pointer"
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            whileHover={{ scale: 1.1 }}
          >
            <motion.div
              className="w-1 h-3 bg-white/70 rounded-full mt-2"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            ></motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
