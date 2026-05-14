import { motion } from 'motion/react';

export default function PrivateViewing() {
  return (
    <div className="section-shell pb-14 min-h-screen">
      <div className="section-inner surface-card p-6 md:p-10 space-y-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
          <span className="text-gold-brushed text-[10px] font-semibold tracking-[0.3em] uppercase">Concierge Service</span>
          <h1 className="text-4xl md:text-6xl">Private <span className="italic font-light">Viewing</span></h1>
          <p className="max-w-3xl text-obsidian/70">Book one-on-one appointments in a boutique lounge with direct access to rare references and expert guidance.</p>
        </motion.div>

        <div className="rounded-2xl border border-black/10 bg-white p-6 space-y-4">
          <p className="text-sm text-obsidian/70">Appointments include reference consultation, wrist fit review, and collection strategy advice.</p>
          <button className="btn-primary">Schedule A Session</button>
        </div>
      </div>
    </div>
  );
}
