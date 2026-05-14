import { motion } from 'motion/react';
import React from 'react';

interface WatchCardProps {
  watch: {
    name: string;
    series: string;
    price: string;
    img: string;
  };
  delay: number;
  key?: React.Key;
}

export default function WatchCard({ watch, delay }: WatchCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      className="group apple-panel p-4 md:p-5"
    >
      <div className="relative aspect-3/4 overflow-hidden rounded-xl bg-slate-luxury mb-6">
        <img 
          src={watch.img} 
          alt={watch.name} 
          className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-900"
        />
        <div className="absolute inset-0 bg-obsidian/0 group-hover:bg-obsidian/12 transition-colors" />
        <button className="absolute bottom-3 left-3 right-3 rounded-full bg-white/92 text-obsidian py-3 text-[10px] font-semibold tracking-[0.12em] uppercase translate-y-[130%] group-hover:translate-y-0 transition-transform duration-500 shadow-md backdrop-blur-sm">
          Request Information
        </button>
      </div>
      <div className="text-center space-y-1">
        <p className="text-gold-brushed text-[10px] font-semibold tracking-[0.22em] uppercase">{watch.series}</p>
        <h3 className="text-xl md:text-2xl font-serif text-obsidian">{watch.name}</h3>
        <p className="text-obsidian/60 text-sm font-light tracking-wide italic">{watch.price}</p>
      </div>
    </motion.div>
  );
}
