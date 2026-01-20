"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function MenuHeader() {
  return (
    <header className="relative overflow-hidden bg-card pb-8 pt-6">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-primary rounded-full" />
        <div className="absolute top-20 right-16 w-20 h-20 border border-primary rounded-full" />
        <div className="absolute bottom-10 left-1/2 w-16 h-16 border border-primary rounded-full" />
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex flex-col items-center px-6"
      >
        <div className="relative w-36 h-24 mb-2">
          <Image
            src="/logo.jpg"
            alt="hissi.co logo"
            fill
            className="object-contain"
            priority
          />
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center"
        >
          <p className="font-serif text-sm text-muted-foreground tracking-widest uppercase">
            Her yudumda bir his
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="w-24 h-px bg-primary/30 mt-6"
        />
      </motion.div>
    </header>
  );
}
