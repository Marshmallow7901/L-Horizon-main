import { motion } from 'motion/react';

export default function Terms() {
  return (
    <div className="section-shell pb-14 min-h-screen">
      <div className="section-inner max-w-3xl mx-auto space-y-10 surface-card p-6 md:p-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="space-y-4"
        >
          <span className="text-gold-brushed text-[10px] font-semibold tracking-[0.3em] uppercase">Legal</span>
          <h1 className="text-4xl md:text-5xl">Terms of <span className="italic font-light">Service</span></h1>
        </motion.div>

        <div className="space-y-8 text-obsidian/72 leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-obsidian text-xl">1. Authenticity Guarantee</h2>
            <p>All timepieces listed on L'Horizon Chronos are guaranteed authentic. Every purchase includes a certificate of heritage and a rigorous inspection report from our master watchmakers.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-obsidian text-xl">2. Acquisition Process</h2>
            <p>Our pieces are strictly available for boutique pickup or secure white-glove delivery. Online "ordering" is a request for acquisition; final sales are finalized through our concierge desk to ensure person-to-person excellence.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-obsidian text-xl">3. Limited Editions</h2>
            <p>Selection for limited edition pieces is at the discretion of the boutique to ensure fair distribution among collectors and enthusiasts.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
