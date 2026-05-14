import { motion } from 'motion/react';

export default function Privacy() {
  return (
    <div className="section-shell pb-14 min-h-screen">
      <div className="section-inner max-w-3xl mx-auto space-y-10 surface-card p-6 md:p-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <span className="text-gold-brushed text-[10px] font-semibold tracking-[0.3em] uppercase">Legal</span>
          <h1 className="text-4xl md:text-5xl">Privacy <span className="italic font-light">Policy</span></h1>
        </motion.div>

        <div className="space-y-8 text-obsidian/72 leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-obsidian text-xl">1. Information Collection</h2>
            <p>At L'Horizon Chronos, we treat your data with the same precision as our timepieces. We collect information only necessary to provide our bespoke services, including your name, contact details, and horological interests.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-obsidian text-xl">2. Exclusive Security</h2>
            <p>Your data is encrypted using military-grade protocols and is never shared with third parties for marketing purposes. Access is restricted to our dedicated concierge team.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-obsidian text-xl">3. Your Rights</h2>
            <p>You may request a full export or deletion of your personal record at any time by contacting our boutique privacy officer.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
