'use client'
import { motion } from 'framer-motion'
import { Particles } from "@/components/magicui/particles";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from 'react';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
      setIsMobile(window.innerWidth < 768);

  }, []);

  return (
    <div>
      <div className="h-screen flex flex-col items-center">
        <Particles 
          className="absolute inset-0 z-0"
          quantity={isMobile ? 50 : 100}
          ease={80}
          color="#000000"
          size={1.5}
          refresh
        />
        <div className="h-full flex flex-col justify-center items-center min-h-[600px]">
            <div className="relative">
              <motion.p 
                className="text-2xl md:text-4xl -mb-6 md:-mb-10 ml-1 md:ml-2 absolute left-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                { "HI 👋, I'M" }
              </motion.p> 
              <motion.p 
                className="text-[80px] md:text-[125px] font-bold bg-clip-text text-transparent whitespace-nowrap"
                style={{
                  backgroundImage: 'linear-gradient(90deg, #ff6b6b, #4ecdc4, #54a0ff, #ff6b6b)',
                  backgroundSize: '300% 100%'
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  backgroundPosition: ['300% 0%', '0% 0%']
                }}
                transition={{
                  opacity: { duration: 0.5 },
                  y: { duration: 0.5 },
                  backgroundPosition: {
                    duration: 15,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "loop"
                  }
                }}
              >
                { "RANDY" }
              </motion.p>
              <motion.p 
                className="text-2xl md:text-4xl -mt-6 md:-mt-10 absolute right-0 mr-4 md:mr-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                CS @ <span className="font-bold text-[#4E3629]">BROWN</span>
              </motion.p>
            </div>
        </div>
      </div>
      <div className="min-h-screen bg-white py-20 px-4 md:px-8">
        <motion.div 
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <motion.div 
              className="flex-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.h2 
                className="text-4xl md:text-5xl font-bold mb-8 text-black"
              >
                About Me
              </motion.h2>
              <motion.div
                className="space-y-6 text-lg md:text-xl text-black"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <p>
                  { `I'm a developer passionate about building feature rich experiences. 
                  Particularly, I love building products that serve people and communities. 
                  Whether it's building the `} 
                  <Link href="https://epsilon.stuysu.org/" target="_blank" className="text-blue-500 underline">everything</Link> 
                  { ` app for my school, tools for my organizations, 
                  or `} 
                  <Link href="https://github.com/randysim/fish-net" target="_blank" className="text-blue-500 underline">breaking</Link> {` other people's projects, I hope to do some cool things and meet some cool people
                  along the way :)`}
                </p>
              </motion.div>
            </motion.div>

            <motion.div 
              className="flex-1 w-full"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="relative w-[85%] mx-auto aspect-square rounded-2xl overflow-hidden bg-gray-100 shadow-2xl">
                <Image
                  src="/me.jpg"
                  alt="Randy Sim"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
