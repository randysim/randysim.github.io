'use client'
import { motion } from 'framer-motion'
import { RetroGrid } from "@/components/magicui/retro-grid";

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center">
      <RetroGrid />
      <div className="h-full flex flex-col justify-center items-center">
          <div className="relative">
            <motion.p 
              className="text-4xl -mb-10 ml-2 absolute left-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              HI 👋, I'M
            </motion.p> 
            <motion.p 
              className="text-[125px] font-bold bg-clip-text text-transparent whitespace-nowrap"
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
              className="text-4xl -mt-10 absolute right-0 mr-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              CS @ <span className="font-bold text-[#4E3629]">BROWN</span>
            </motion.p>
          </div>
      </div>
    </div>
  );
}
