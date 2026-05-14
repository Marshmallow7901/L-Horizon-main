import { motion } from 'motion/react';

export default function LimitedEditions() {
  return (
    <div className="section-shell pb-14 min-h-screen">
      <div className="section-inner surface-card p-6 md:p-10 space-y-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
          <span className="text-gold-brushed text-[10px] font-semibold tracking-[0.3em] uppercase">Curated Release</span>
          <h1 className="text-4xl md:text-6xl">Limited <span className="italic font-light">Editions</span></h1>
          <p className="max-w-3xl text-obsidian/70">Small-batch references reserved for collectors with a proven relationship with the maison.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { name: 'Stellar Abyss', run: '20 pieces', status: 'Allocation Open' },
            { name: 'Ivory Sovereign', run: '10 pieces', status: 'By Invitation' },
            { name: 'Grand Zenith', run: '6 pieces', status: 'Waitlist' },
          ].map((watch) => (
            <article key={watch.name} className="rounded-2xl border border-black/10 bg-white p-5 space-y-3">
              <p className="text-[10px] uppercase tracking-[0.16em] text-gold-brushed font-semibold">{watch.run}</p>
              <h2 className="text-2xl">{watch.name}</h2>
              <p className="text-sm text-obsidian/65">{watch.status}</p>
              <button className="btn-secondary !px-4 !py-2">Request Allocation</button>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
