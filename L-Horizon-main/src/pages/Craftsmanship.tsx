import { motion } from 'motion/react';

export default function Craftsmanship() {
  return (
    <div className="section-shell min-h-screen">
      <section className="section-inner surface-card relative overflow-hidden px-6 py-16 md:px-10 md:py-20 text-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=2000"
            alt="Macro Movement"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-obsidian/68" />
        </div>
        
        <div className="relative z-10 space-y-6 px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
          >
            <span className="text-gold-champagne text-[10px] font-semibold tracking-[0.45em] uppercase block mb-6">The Art of Precision</span>
            <h1 className="text-5xl md:text-7xl text-paper">Horological <span className="italic font-light">Soul</span></h1>
          </motion.div>
        </div>
      </section>

      {[
        {
          title: "The Heartbeat",
          subtitle: "Balance & Hairspring",
          content: "At the core of every L'Horizon Chronos timepiece lies the balance wheel, beating 28,800 times per hour. Our master watchmakers adjust each movement in six positions to ensure chronometric performance that defies even the most rigorous conditions.",
          img: "https://images.unsplash.com/photo-1509048191080-d2984bad6ad5?q=80&w=1200",
          reverse: false
        },
        {
          title: "The Finish",
          subtitle: "Anglage & Polishing",
          content: "Invisible to the naked eye, every bridge and screw is hand-finished with anglage polishing and Côtes de Genève stripes. This devotion to hidden beauty is the hallmark of true haute horlogerie.",
          img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200",
          reverse: true
        }
      ].map((block, i) => (
        <section key={i} className={`section-inner py-14 md:py-16 flex flex-col ${block.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-16`}>
          <div className="w-full lg:w-1/2 space-y-8">
            <span className="text-gold-brushed text-[10px] font-semibold tracking-[0.26em] uppercase">{block.subtitle}</span>
            <h2 className="text-4xl md:text-5xl leading-tight">{block.title}</h2>
            <p className="text-obsidian/72 leading-relaxed text-base md:text-lg max-w-xl">
              {block.content}
            </p>
            <div className="h-px w-24 bg-gold-brushed/40" />
          </div>
          <div className="w-full lg:w-1/2 surface-card p-3">
            <motion.img 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 1.5 }}
              src={block.img} 
              alt={block.title} 
              className="w-full aspect-video rounded-xl object-cover transition-all duration-700"
            />
          </div>
        </section>
      ))}

      <section className="section-inner surface-card py-16 px-6 md:px-12 text-center mb-14">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="w-12 h-1 bg-gold-brushed mx-auto mb-16" />
          <h3 className="text-2xl md:text-4xl leading-relaxed italic font-light">
            "A watch does not merely tell time; it captures the eternal tension between the ephemeral second and the infinite horizon."
          </h3>
          <div className="space-y-1">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase">Jean-Luc Horizon</p>
            <p className="text-[10px] tracking-[0.16em] uppercase text-obsidian/45">Founder & Master Watchmaker</p>
          </div>
        </div>
      </section>
    </div>
  );
}
