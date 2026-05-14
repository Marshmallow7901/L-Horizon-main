import { motion } from 'motion/react';

export default function BespokeOrders() {
  return (
    <div className="section-shell pb-14 min-h-screen">
      <div className="section-inner surface-card p-6 md:p-10 space-y-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
          <span className="text-gold-brushed text-[10px] font-semibold tracking-[0.3em] uppercase">Concierge Service</span>
          <h1 className="text-4xl md:text-6xl">Bespoke <span className="italic font-light">Orders</span></h1>
          <p className="max-w-3xl text-obsidian/70">Collaborate with our specialists to commission personalized combinations of case, dial, finishing, and straps.</p>
        </motion.div>

        <div className="rounded-2xl border border-black/10 bg-white p-6 space-y-4">
          <p className="text-sm text-obsidian/70">Each bespoke order includes concept review, feasibility sign-off, and a white-glove delivery timeline.</p>
          <button className="btn-primary">Start Bespoke Consultation</button>
        </div>
      </div>
    </div>
  );
}
