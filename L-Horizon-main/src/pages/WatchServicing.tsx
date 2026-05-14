import { motion } from 'motion/react';

export default function WatchServicing() {
  return (
    <div className="section-shell pb-14 min-h-screen">
      <div className="section-inner surface-card p-6 md:p-10 space-y-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
          <span className="text-gold-brushed text-[10px] font-semibold tracking-[0.3em] uppercase">Concierge Service</span>
          <h1 className="text-4xl md:text-6xl">Watch <span className="italic font-light">Servicing</span></h1>
          <p className="max-w-3xl text-obsidian/70">Factory-standard maintenance, performance testing, and restoration delivered by certified horologists.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {['Diagnostics', 'Movement Overhaul', 'Pressure + Accuracy Tests'].map((service) => (
            <article key={service} className="rounded-2xl border border-black/10 bg-white p-4 text-sm text-obsidian/70">
              {service}
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
