import { motion } from 'motion/react';
import { ArrowRight, Bookmark } from 'lucide-react';

const ARTICLES = [
  {
    id: 1,
    title: "The Revival of the Tourbillon",
    category: "Horology",
    date: "April 12, 2024",
    excerpt: "Exploring the technical mastery required to counteract gravity in modern mechanical movements.",
    img: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=800"
  },
  {
    id: 2,
    title: "Quiet Luxury: A Style Guide",
    category: "Style",
    date: "March 28, 2024",
    excerpt: "How to pair heritage timepieces with contemporary minimalist fashion for an effortless aesthetic.",
    img: "https://images.unsplash.com/photo-1491336477066-31156b5e4f35?q=80&w=800"
  },
  {
    id: 3,
    title: "Inside the Black Edition",
    category: "In Focus",
    date: "March 15, 2024",
    excerpt: "A deep dive into the materials used in our latest obsidian ceramic complications.",
    img: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=800"
  }
];

export default function Journal() {
  return (
    <div className="section-shell min-h-screen">
      <header className="section-inner py-10 md:py-14 border-b border-black/10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-10">
          <div className="space-y-6">
            <span className="text-gold-brushed text-[10px] font-semibold tracking-[0.3em] uppercase">Editorial</span>
            <h1 className="text-5xl md:text-7xl">The <span className="italic font-light">Journal</span></h1>
          </div>
          <div className="flex gap-8 text-[10px] tracking-[0.15em] uppercase font-semibold text-obsidian/55">
             <button className="text-obsidian hover:text-gold-brushed transition-colors">Latest</button>
             <button className="hover:text-gold-brushed transition-colors">Horology</button>
             <button className="hover:text-gold-brushed transition-colors">Style</button>
             <button className="hover:text-gold-brushed transition-colors">Heritage</button>
          </div>
        </div>
      </header>

      <section className="section-inner py-12 md:py-14">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="surface-card p-5 md:p-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center"
        >
          <div className="aspect-16/9 md:aspect-video overflow-hidden group rounded-xl">
            <img 
              src="https://images.unsplash.com/photo-1509048191080-d2984bad6ad5?q=80&w=1200" 
              alt="Featured Article" 
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000"
            />
          </div>
          <div className="space-y-8">
            <div className="flex gap-6 text-[10px] font-semibold tracking-[0.14em] uppercase text-gold-brushed">
              <span>Feature</span>
              <span className="text-obsidian/40">|</span>
              <span>15 Min Read</span>
            </div>
            <h2 className="text-3xl md:text-5xl leading-tight">Beyond the Minute: <br /> <span className="italic font-light">The Future of Ticks</span></h2>
            <p className="text-obsidian/70 text-base md:text-lg leading-relaxed">
              We sit down with our lead engineers to discuss high-frequency movements and the sonic signature of the next generation.
            </p>
            <button className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.14em] uppercase text-obsidian group">
              Read Article <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </motion.div>
      </section>

      <section className="section-inner py-12 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ARTICLES.map((article, i) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group space-y-6 cursor-pointer surface-card p-4"
            >
              <div className="aspect-video overflow-hidden relative rounded-xl">
                <img 
                  src={article.img} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <button className="absolute top-3 right-3 rounded-full bg-white/90 p-2 hover:bg-gold-champagne transition-colors">
                  <Bookmark size={14} className="text-obsidian" />
                </button>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between text-[10px] font-semibold tracking-[0.14em] uppercase text-gold-brushed">
                  <span>{article.category}</span>
                  <span className="text-obsidian/35">{article.date}</span>
                </div>
                <h3 className="text-2xl group-hover:text-gold-brushed transition-colors">{article.title}</h3>
                <p className="text-obsidian/65 text-sm leading-relaxed line-clamp-2">
                  {article.excerpt}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section-inner py-12 md:py-16 text-center">
        <button className="btn-secondary">
          Explore The Archive
        </button>
      </section>
    </div>
  );
}
