import { motion } from 'motion/react';

export default function Heritage() {
  return (
    <div className="section-shell pb-14 min-h-screen">
      <div className="section-inner surface-card p-6 md:p-10 space-y-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
          <span className="text-gold-brushed text-[10px] font-semibold tracking-[0.3em] uppercase">House Story</span>
          <h1 className="text-4xl md:text-6xl">The <span className="italic font-light">Heritage</span></h1>
          <p className="max-w-3xl text-obsidian/70">From 1894 to today, L'Horizon Chronos has fused classic watchmaking craft with modern precision standards and discreet collector services.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { year: '1894', title: 'Foundation', text: 'The first atelier opened in Lyon with a focus on hand-regulated pocket movements.' },
            { year: '1957', title: 'Chronometer Era', text: 'Marine-certified chronometers became a house signature for reliability under pressure.' },
            { year: '2026', title: 'Modern Legacy', text: 'Today, the maison delivers highly curated references with concierge-led ownership.' },
          ].map((item) => (
            <article key={item.year} className="rounded-2xl border border-black/10 bg-white p-5 space-y-3">
              <p className="text-[10px] uppercase tracking-[0.16em] text-gold-brushed font-semibold">{item.year}</p>
              <h2 className="text-2xl">{item.title}</h2>
              <p className="text-obsidian/65 text-sm leading-relaxed">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
