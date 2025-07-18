'use client'
import { motion } from 'framer-motion'
import { Particles } from "@/components/magicui/particles";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from 'react';
import Projects from '@/components/home/projects';

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
          quantity={isMobile ? 30 : 100}
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
      <div className=" bg-white py-20 px-4 md:px-8 mb-12">
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
                className="text-4xl md:text-5xl font-bold mb-8 text-black text-center md:text-left"
              >
                About Me
              </motion.h2>
              <motion.div
                className="space-y-6 text-lg md:text-xl text-black text-center md:text-left"
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
      <div className="min-h-screen bg-white pb-32 md:pb-20 px-4 md:px-8">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-black text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Projects />
        </motion.div>
      </div>
      
      <div className="bg-gray-50 py-20 md:px-8">
        <motion.div 
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-black text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Productivity Tools
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="bg-white rounded-xl p-6 hover:shadow-xl transition-shadow duration-300"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <Link href="/eyetimer" className="block">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8l3 3m6-3a9 9 11-189" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Eye Timer</h3>
                  <p className="text-gray-600">Take care of your eyes with regular breaks</p>
                </div>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
