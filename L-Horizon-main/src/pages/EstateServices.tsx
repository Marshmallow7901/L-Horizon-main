import { motion } from 'motion/react';

export default function EstateServices() {
  return (
    <div className="section-shell pb-14 min-h-screen">
      <div className="section-inner surface-card p-6 md:p-10 space-y-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
          <span className="text-gold-brushed text-[10px] font-semibold tracking-[0.3em] uppercase">Concierge Service</span>
          <h1 className="text-4xl md:text-6xl">Estate <span className="italic font-light">Services</span></h1>
          <p className="max-w-3xl text-obsidian/70">Discreet support for valuation, authentication, transfer planning, and collection succession.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <article className="rounded-2xl border border-black/10 bg-white p-5">
            <h2 className="text-2xl mb-2">Valuation Reports</h2>
            <p className="text-sm text-obsidian/70">Independent market-backed estimates for insurance, audit, or disposition planning.</p>
          </article>
          <article className="rounded-2xl border border-black/10 bg-white p-5">
            <h2 className="text-2xl mb-2">Collection Transfer</h2>
            <p className="text-sm text-obsidian/70">Structured handover guidance for intergenerational collections and private trusts.</p>
          </article>
        </div>
      </div>
    </div>
  );
}
