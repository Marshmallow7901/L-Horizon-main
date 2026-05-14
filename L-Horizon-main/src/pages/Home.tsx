import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight, Play, Pause, ChevronRight, MapPin } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Page } from '../App';
import WatchCard from '../components/common/WatchCard';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

type Boutique = {
  city: string;
  address: string;
  hours: string;
  phone: string;
  marker: { top: string; left: string };
};

const BOUTIQUES: Boutique[] = [
  {
    city: 'Paris',
    address: '12 Place Vendome, 75001',
    hours: 'Mon-Sat, 10:00-19:00',
    phone: '+33 1 45 00 11 22',
    marker: { top: '28%', left: '48%' },
  },
  {
    city: 'Geneva',
    address: '8 Quai du General-Guisan, 1204',
    hours: 'Mon-Fri, 09:30-18:30',
    phone: '+41 22 700 33 40',
    marker: { top: '40%', left: '56%' },
  },
  {
    city: 'Dubai',
    address: 'Dubai International Financial Centre',
    hours: 'Daily, 11:00-22:00',
    phone: '+971 4 300 55 20',
    marker: { top: '62%', left: '72%' },
  },
];

const STORY_STEPS = [
  {
    title: 'Design Architecture',
    body: 'Every reference begins with proportion studies and dial legibility tests before movement integration starts.',
    image: 'https://images.unsplash.com/photo-1509048191080-d2984bad6ad5?q=80&w=1400',
  },
  {
    title: 'Movement Calibration',
    body: 'Chronometry tuning is performed across multiple positions and temperatures for practical daily reliability.',
    image: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=1400',
  },
  {
    title: 'Collector Delivery',
    body: 'Final handover includes private consultation, fit adjustments, and a complete ownership profile.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1400',
  },
];

export default function Home({ onNavigate }: HomeProps) {
  const [activeBoutiqueIndex, setActiveBoutiqueIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [videoUnavailable, setVideoUnavailable] = useState(false);
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);
  const activeBoutique = BOUTIQUES[activeBoutiqueIndex];
  const prefersReducedMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsVideoPlaying(false);
    }
  }, [prefersReducedMotion]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || videoUnavailable) {
      return;
    }

    if (isVideoPlaying && !prefersReducedMotion) {
      video.play().catch(() => setVideoUnavailable(true));
    } else {
      video.pause();
    }
  }, [isVideoPlaying, prefersReducedMotion, videoUnavailable]);

  return (
    <div className="flex flex-col">
      <section className="section-shell pb-14 md:pb-20">
        <div className="section-inner apple-panel relative overflow-hidden px-6 py-14 md:px-12 md:py-20 lg:px-20 lg:py-24">
          <div className="absolute inset-0 z-0">
            {!videoUnavailable ? (
              <video
                ref={videoRef}
                className="h-full w-full object-cover"
                muted
                loop
                playsInline
                poster="https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=2000&auto=format&fit=crop"
                autoPlay={!prefersReducedMotion}
                onError={() => setVideoUnavailable(true)}
              >
                <source src="https://cdn.coverr.co/videos/coverr-close-up-shot-of-a-luxury-watch-1579/1080p.mp4" type="video/mp4" />
              </video>
            ) : (
              <img
                src="https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=2000&auto=format&fit=crop"
                alt="Luxury Watch Macro"
                className="h-full w-full object-cover"
              />
            )}
            <div className="absolute inset-0 bg-linear-to-r from-obsidian/76 via-obsidian/32 to-obsidian/8" />
          </div>

          <div className="relative z-10 mx-auto max-w-4xl space-y-10 text-center lg:mx-0 lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="space-y-4"
            >
              <span className="inline-block rounded-full bg-white/20 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-paper/90 backdrop-blur-sm">
                New Product Experience
              </span>
              <h1 className="apple-hero-title text-paper">
                Beautifully engineered
                <br />
                <span className="font-light text-paper/85">for the modern collector.</span>
              </h1>
              <p className="mx-auto max-w-xl text-sm leading-relaxed text-paper/72 lg:mx-0 md:text-base">
                Discover a refined selection of exceptional watches, backed by discreet concierge guidance and world-class servicing.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.8 }}
              className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
            >
              <motion.button
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 420, damping: 25 }}
                onClick={() => onNavigate('vault')}
                className="btn-apple bg-paper text-obsidian border-white/20 tap-feedback"
              >
                Explore The Vault
                <ArrowRight size={15} />
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 420, damping: 25 }}
                onClick={() => setIsVideoPlaying((prev) => !prev)}
                className="inline-flex items-center gap-3 rounded-full border border-paper/35 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-paper transition hover:bg-paper/10 tap-feedback"
                aria-label={isVideoPlaying ? 'Pause hero video' : 'Play hero video'}
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-paper/40">
                  {isVideoPlaying ? <Pause size={11} /> : <Play size={11} className="ml-0.5 fill-current" />}
                </span>
                {isVideoPlaying ? 'Pause Film' : 'Play Film'}
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl"
            >
              {[
                { label: 'References', value: '120+' },
                { label: 'Boutiques', value: '14' },
                { label: 'Avg Response', value: '< 2h' },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/22 bg-white/15 px-4 py-3 backdrop-blur-md text-left">
                  <p className="text-[10px] uppercase tracking-[0.14em] text-paper/70">{stat.label}</p>
                  <p className="text-2xl text-paper mt-1">{stat.value}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-shell py-16 md:py-20">
        <motion.div
          className="section-inner space-y-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-18% 0px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
            <div className="space-y-6 max-w-2xl">
              <p className="apple-eyebrow">Curated for quiet luxury</p>
              <h2 className="text-4xl md:text-5xl leading-tight text-obsidian">
                The Heritage <span className="italic font-light text-obsidian/45">Collection</span>
              </h2>
              <p className="max-w-xl apple-subtext md:text-lg">
                A selection balancing historic watchmaking codes with contemporary proportion, finishing, and wearability.
              </p>
            </div>
            <motion.button
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 420, damping: 24 }}
              onClick={() => onNavigate('vault')}
              className="inline-flex items-center gap-2 border-b border-transparent pb-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-gold-brushed transition hover:border-gold-brushed tap-feedback"
            >
              View Full Collection <ChevronRight size={14} className="transition-transform group-hover:translate-x-1" />
            </motion.button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                name: 'Celestial Comet',
                series: 'Legacy Series',
                price: 'POA',
                img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000',
              },
              {
                name: 'Midnight Tourbillon',
                series: 'Masters Series',
                price: 'EUR 142,000',
                img: 'https://images.unsplash.com/photo-1524805444758-089113ddfb6c?q=80&w=1000',
              },
              {
                name: 'Obsidian Chrono',
                series: 'Black Edition',
                price: 'EUR 68,500',
                img: 'https://images.unsplash.com/photo-1539874754764-5a96559165b0?q=80&w=1000',
              },
            ].map((watch, i) => (
              <WatchCard key={i} watch={watch} delay={i * 0.2} />
            ))}
          </div>
        </motion.div>
      </section>

      <section className="section-shell py-6 md:py-10">
        <div className="section-inner grid grid-cols-1 lg:grid-cols-[0.95fr_1fr] gap-8 items-start">
          <div className="sticky top-28 apple-panel p-4 md:p-5">
            <img
              src={STORY_STEPS[activeStoryIndex].image}
              alt={STORY_STEPS[activeStoryIndex].title}
              className="w-full aspect-[4/5] object-cover rounded-2xl"
            />
            <div className="p-4">
              <p className="apple-eyebrow">Storytelling Journey</p>
              <h3 className="text-3xl mt-2">{STORY_STEPS[activeStoryIndex].title}</h3>
              <p className="apple-subtext mt-3">{STORY_STEPS[activeStoryIndex].body}</p>
            </div>
          </div>

          <div className="space-y-5">
            {STORY_STEPS.map((step, index) => (
              <motion.article
                key={step.title}
                initial={{ opacity: 0.35, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.6, margin: '-10% 0px -10% 0px' }}
                onViewportEnter={() => setActiveStoryIndex(index)}
                transition={{ duration: 0.45 }}
                className={`apple-panel p-7 min-h-[16rem] border ${activeStoryIndex === index ? 'border-gold-brushed/35' : 'border-black/8'}`}
              >
                <p className="apple-eyebrow">Step {index + 1}</p>
                <h4 className="text-3xl mt-2">{step.title}</h4>
                <p className="apple-subtext mt-4 max-w-xl">{step.body}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-16 md:py-20">
        <motion.div
          className="section-inner grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-10"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15% 0px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="apple-panel p-4 md:p-5">
            <div className="relative rounded-xl overflow-hidden bg-[linear-gradient(140deg,#e9dfcd,#f8f5ed)] aspect-[16/11]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(167,128,60,0.25),transparent_33%),radial-gradient(circle_at_80%_75%,rgba(196,154,82,0.24),transparent_38%)]" />
              {BOUTIQUES.map((boutique, index) => (
                <motion.button
                  key={boutique.city}
                  type="button"
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 420, damping: 24 }}
                  onClick={() => setActiveBoutiqueIndex(index)}
                  className={`absolute z-20 -translate-x-1/2 -translate-y-1/2 rounded-full px-3 py-1 text-[10px] font-semibold tracking-[0.14em] uppercase transition tap-feedback ${
                    activeBoutiqueIndex === index
                      ? 'bg-obsidian text-paper'
                      : 'bg-white/85 text-obsidian hover:bg-obsidian hover:text-paper'
                  }`}
                  style={{ top: boutique.marker.top, left: boutique.marker.left }}
                  aria-label={`Select ${boutique.city} boutique`}
                  aria-pressed={activeBoutiqueIndex === index}
                >
                  {boutique.city}
                </motion.button>
              ))}
              <div className="absolute bottom-4 left-4 rounded-lg bg-white/90 px-3 py-2 text-xs text-obsidian/70">
                Interactive boutique locator
              </div>
            </div>
          </div>

          <div className="apple-panel p-6 md:p-8 space-y-6">
            <div className="flex items-center gap-2 text-gold-brushed">
              <MapPin size={16} />
              <span className="text-[10px] font-semibold tracking-[0.28em] uppercase">Boutique Locator</span>
            </div>
            <h2 className="text-3xl md:text-4xl tracking-tight">
              Visit {activeBoutique.city}
              <br />
              <span className="italic font-light text-obsidian/55">in private comfort</span>
            </h2>
            <div className="space-y-3 text-obsidian/70">
              <p>{activeBoutique.address}</p>
              <p>{activeBoutique.hours}</p>
              <p>{activeBoutique.phone}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3" role="listbox" aria-label="Select boutique">
              {BOUTIQUES.map((boutique, index) => (
                <motion.button
                  key={boutique.city}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 420, damping: 24 }}
                  onClick={() => setActiveBoutiqueIndex(index)}
                  className={`rounded-xl border px-4 py-3 text-left transition tap-feedback ${
                    activeBoutiqueIndex === index
                      ? 'border-obsidian bg-obsidian text-paper'
                      : 'border-obsidian/15 bg-white hover:border-obsidian/40'
                  }`}
                  aria-selected={activeBoutiqueIndex === index}
                >
                  <p className="text-[10px] tracking-[0.14em] uppercase font-semibold">{boutique.city}</p>
                </motion.button>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 420, damping: 24 }}
                onClick={() => onNavigate('concierge')}
                className="btn-primary tap-feedback"
              >
                Book Private Viewing
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 420, damping: 24 }}
                className="btn-secondary tap-feedback"
              >
                Contact Boutique
              </motion.button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
