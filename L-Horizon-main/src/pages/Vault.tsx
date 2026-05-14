import { motion, AnimatePresence } from 'motion/react';
import { Search, ChevronDown, Globe, ShieldCheck, Scale, X, Eye, Keyboard } from 'lucide-react';
import React, { useEffect, useMemo, useRef, useState } from 'react';

const CURRENCIES = {
  EUR: { symbol: 'EUR', rate: 1 },
  USD: { symbol: 'USD', rate: 1.08 },
  GBP: { symbol: 'GBP', rate: 0.85 },
  CHF: { symbol: 'CHF', rate: 0.96 },
};

type CurrencyKey = keyof typeof CURRENCIES;

type Watch = {
  id: number;
  name: string;
  series: string;
  price: number;
  material: string;
  movement: string;
  complication: string;
  img: string;
  limited: boolean;
};

const WATCHES: Watch[] = [
  { id: 1, name: 'Oceanic Chronometer', series: 'Maritime', price: 12500, material: 'Brushed Steel', movement: 'Automatic', complication: 'Date', img: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=800', limited: false },
  { id: 2, name: 'Royal Gold Reserve', series: 'Gold Edition', price: 42000, material: '18K Yellow Gold', movement: 'Manual', complication: 'Tourbillon', img: 'https://images.unsplash.com/photo-1508685096489-7aac296839e8?q=80&w=800', limited: true },
  { id: 3, name: 'Aero Skeleton', series: 'Modernist', price: 18800, material: 'Titanium', movement: 'Automatic', complication: 'Skeleton', img: 'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=800', limited: false },
  { id: 4, name: 'Lunar Phase II', series: 'Celestial', price: 28500, material: 'Rose Gold', movement: 'Automatic', complication: 'Moonphase', img: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=800', limited: true },
  { id: 5, name: 'Obsidian Night', series: 'Stealth', price: 9800, material: 'Ceramic', movement: 'Quartz', complication: 'GMT', img: 'https://images.unsplash.com/photo-1639037687665-9df03fc42981?q=80&w=800', limited: false },
  { id: 6, name: 'Heritage 1894', series: 'Historical', price: 22200, material: 'Platinum', movement: 'Manual', complication: 'Chrono', img: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=800', limited: true },
  { id: 7, name: 'Stellar Abyss', series: 'Deep Space', price: 85000, material: 'Tantalum', movement: 'Automatic', complication: 'Perpetual Calendar', img: 'https://images.unsplash.com/photo-1509048191080-d2984bad6ad5?q=80&w=800', limited: true },
  { id: 8, name: 'Alpine Chronograph', series: 'Summit', price: 15400, material: 'White Gold', movement: 'Manual', complication: 'Chronograph', img: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=800', limited: false },
  { id: 9, name: 'Ivory Sovereign', series: 'Royal', price: 110000, material: 'Diamond Encrusted', movement: 'Automatic', complication: 'Minute Repeater', img: 'https://images.unsplash.com/photo-1491336477066-31156b5e4f35?q=80&w=800', limited: true },
  { id: 10, name: 'Mercury Flux', series: 'Avant-Garde', price: 31000, material: 'Liquid Metal Alloy', movement: 'Hybrid', complication: 'Digital-Analog', img: 'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=800', limited: false },
  { id: 11, name: 'Veridian Horizon', series: 'Nature', price: 19500, material: 'Bronze', movement: 'Automatic', complication: 'Date/Day', img: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=800', limited: false },
  { id: 12, name: 'Grand Zenith', series: 'Astronomical', price: 250000, material: 'Meteorite Dial', movement: 'Manual High-Beat', complication: 'Equation of Time', img: 'https://images.unsplash.com/photo-1508685096489-7aac296839e8?q=80&w=800', limited: true },
];

function useFocusTrap(enabled: boolean, containerRef: React.RefObject<HTMLElement | null>, onEscape?: () => void) {
  useEffect(() => {
    if (!enabled || !containerRef.current) {
      return;
    }

    const container = containerRef.current;
    const selectors = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const focusable = (Array.from(container.querySelectorAll(selectors)) as HTMLElement[]).filter(
      (el) => !el.hasAttribute('disabled'),
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    first?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && onEscape) {
        onEscape();
      }

      if (event.key !== 'Tab' || focusable.length === 0) {
        return;
      }

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [enabled, containerRef, onEscape]);
}

export default function Vault() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [currency, setCurrency] = useState<CurrencyKey>('EUR');
  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);
  const [selectedWatch, setSelectedWatch] = useState<Watch | null>(null);
  const [compareIds, setCompareIds] = useState<number[]>([]);
  const [isCompareOpen, setIsCompareOpen] = useState(false);
  const searchRef = useRef<HTMLInputElement | null>(null);

  const filterOptions = ['All', 'Limited Editions', 'Automatic', 'Manual', 'Tourbillon', 'Chronograph'];

  const formatPrice = (price: number) => {
    const info = CURRENCIES[currency];
    const converted = price * info.rate;
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
      maximumFractionDigits: 0,
    }).format(converted);
  };

  const filteredWatches = useMemo(() => {
    return WATCHES.filter((watch) => {
      const matchesFilter =
        activeFilter === 'All' ||
        (activeFilter === 'Limited Editions' && watch.limited) ||
        (activeFilter === 'Automatic' && watch.movement === 'Automatic') ||
        (activeFilter === 'Manual' && watch.movement.includes('Manual')) ||
        (activeFilter === 'Tourbillon' && watch.complication.includes('Tourbillon')) ||
        (activeFilter === 'Chronograph' && watch.complication.includes('Chrono'));

      const normalizedSearch = searchTerm.trim().toLowerCase();
      const matchesSearch =
        normalizedSearch.length === 0 ||
        [watch.name, watch.series, watch.material, watch.complication].some((value) =>
          value.toLowerCase().includes(normalizedSearch),
        );

      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchTerm]);

  const comparedWatches = useMemo(() => WATCHES.filter((watch) => compareIds.includes(watch.id)), [compareIds]);

  const toggleCompare = (watchId: number) => {
    setCompareIds((current) => {
      if (current.includes(watchId)) {
        return current.filter((id) => id !== watchId);
      }
      if (current.length >= 3) {
        return current;
      }
      return [...current, watchId];
    });
  };

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      const typing = !!target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA');

      if (event.key === '/' && !typing) {
        event.preventDefault();
        searchRef.current?.focus();
      }

      if (event.key.toLowerCase() === 'c' && !typing && compareIds.length >= 2) {
        setIsCompareOpen(true);
      }

      if (event.key === 'Escape') {
        setShowCurrencyDropdown(false);
      }

      if (selectedWatch && (event.key === 'ArrowRight' || event.key === 'ArrowLeft')) {
        const direction = event.key === 'ArrowRight' ? 1 : -1;
        const currentIndex = WATCHES.findIndex((watch) => watch.id === selectedWatch.id);
        const nextIndex = (currentIndex + direction + WATCHES.length) % WATCHES.length;
        setSelectedWatch(WATCHES[nextIndex]);
      }
    };

    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [selectedWatch, compareIds.length]);

  return (
    <div className="section-shell min-h-screen">
      <header className="section-inner py-10 md:py-14 text-center space-y-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
          <span className="text-gold-brushed text-[10px] font-semibold tracking-[0.3em] uppercase">The Collection</span>
          <h1 className="text-5xl md:text-6xl">
            The <span className="italic">Vault</span>
          </h1>
          <p className="text-obsidian/70 max-w-xl mx-auto leading-relaxed">
            Explore signature references, compare as you browse, and open details in an immersive shared transition drawer.
          </p>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/80 border border-black/10 px-3 py-1 text-[10px] tracking-[0.14em] uppercase text-obsidian/60">
            <Keyboard size={12} /> Shortcuts: / search, C compare, ESC close, arrows switch watch
          </div>
        </motion.div>
      </header>

      <div className="sticky top-[72px] z-30 py-4">
        <div className="section-inner apple-glass p-4 md:p-5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-10 overflow-x-auto pb-2 md:pb-0 no-scrollbar w-full md:w-auto" role="tablist" aria-label="Vault filters">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                role="tab"
                aria-selected={activeFilter === filter}
                className={`text-[10px] tracking-[0.14em] uppercase font-semibold whitespace-nowrap transition-colors ${
                  activeFilter === filter ? 'text-obsidian' : 'text-obsidian/50 hover:text-obsidian'
                }`}
              >
                {filter} {filter !== 'All' && filter !== 'Limited Editions' && <ChevronDown size={12} className="inline ml-1" />}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-6 w-full md:w-auto">
            <div className="relative">
              <button
                aria-haspopup="menu"
                aria-expanded={showCurrencyDropdown}
                onClick={() => setShowCurrencyDropdown(!showCurrencyDropdown)}
                className="flex items-center gap-2 rounded-full border border-obsidian/15 bg-white px-4 py-2.5 text-[10px] font-semibold tracking-[0.12em] uppercase hover:bg-slate-luxury transition-all"
              >
                <Globe size={14} className="text-gold-brushed" /> {currency}
              </button>
              <AnimatePresence>
                {showCurrencyDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 w-32 rounded-xl bg-white border border-obsidian/10 p-2 z-50 shadow-xl"
                    role="menu"
                  >
                    {Object.keys(CURRENCIES).map((curr) => (
                      <button
                        key={curr}
                        role="menuitem"
                        onClick={() => {
                          setCurrency(curr as CurrencyKey);
                          setShowCurrencyDropdown(false);
                        }}
                        className={`w-full rounded-lg text-left px-3 py-2 text-[10px] tracking-[0.12em] font-semibold uppercase transition-colors hover:text-gold-brushed ${
                          currency === curr ? 'text-gold-brushed bg-slate-luxury' : 'text-obsidian/65'
                        }`}
                      >
                        {curr}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="relative flex-1 md:w-56">
              <label htmlFor="vault-search" className="sr-only">Search watches</label>
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-obsidian/30" size={14} />
              <input
                id="vault-search"
                ref={searchRef}
                type="text"
                placeholder="SEARCH"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-full border border-obsidian/15 bg-white py-2.5 pl-10 pr-4 text-[10px] tracking-[0.12em] uppercase outline-none focus:border-gold-brushed transition-colors"
              />
            </div>
          </div>
        </div>
      </div>

      <section className="section-inner py-10 md:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {filteredWatches.map((watch, i) => (
            <React.Fragment key={watch.id}>
              <WatchItem
                watch={watch}
                index={i}
                formatPrice={formatPrice}
                isCompared={compareIds.includes(watch.id)}
                onOpenDetails={() => setSelectedWatch(watch)}
                onToggleCompare={() => toggleCompare(watch.id)}
              />
            </React.Fragment>
          ))}
        </div>

        {filteredWatches.length === 0 && (
          <div className="surface-card py-16 px-6 text-center mt-12">
            <p className="text-obsidian/65 uppercase tracking-[0.2em] text-xs font-semibold">No matching references found</p>
            <p className="mt-2 text-sm text-obsidian/60">Try a different filter or broader search term.</p>
          </div>
        )}
      </section>

      <AnimatePresence>
        {compareIds.length > 0 && (
          <motion.aside
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 18 }}
            className="fixed bottom-5 right-5 z-40 apple-glass p-3 min-w-[17rem]"
            aria-live="polite"
          >
            <p className="text-[10px] uppercase tracking-[0.14em] text-obsidian/60">Compare Dock</p>
            <p className="mt-1 text-sm text-obsidian/75">{compareIds.length} reference{compareIds.length > 1 ? 's' : ''} selected</p>
            <div className="mt-3 flex items-center gap-2">
              <motion.button
                whileTap={{ scale: 0.96 }}
                transition={{ type: 'spring', stiffness: 420, damping: 24 }}
                className="btn-secondary !px-4 !py-2 tap-feedback"
                onClick={() => setCompareIds([])}
              >
                Clear
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.96 }}
                transition={{ type: 'spring', stiffness: 420, damping: 24 }}
                className="btn-primary !px-4 !py-2 tap-feedback"
                onClick={() => setIsCompareOpen(true)}
                disabled={compareIds.length < 2}
                aria-disabled={compareIds.length < 2}
              >
                <Scale size={14} /> Compare
              </motion.button>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      <ProductDetailDrawer watch={selectedWatch} formatPrice={formatPrice} onClose={() => setSelectedWatch(null)} />
      <CompareModal watches={comparedWatches} formatPrice={formatPrice} isOpen={isCompareOpen} onClose={() => setIsCompareOpen(false)} />
    </div>
  );
}

type WatchItemProps = {
  watch: Watch;
  index: number;
  isCompared: boolean;
  formatPrice: (price: number) => string;
  onOpenDetails: () => void;
  onToggleCompare: () => void;
};

function WatchItem({ watch, index, isCompared, formatPrice, onOpenDetails, onToggleCompare }: WatchItemProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [inquiryStep, setInquiryStep] = useState<'details' | 'form' | 'success'>('details');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquiryStep('success');
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      viewport={{ once: true, margin: '-20% 0px -10% 0px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setTimeout(() => setInquiryStep('details'), 400);
      }}
      className="group apple-panel p-4"
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-slate-luxury mb-5">
        <motion.img
          layoutId={`watch-image-${watch.id}`}
          src={watch.img}
          alt={watch.name}
          animate={{ scale: isHovered ? 1.08 : 1 }}
          transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
          className="w-full h-full object-cover"
        />

        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="absolute inset-0 bg-obsidian/88 backdrop-blur-md p-5 flex flex-col justify-end z-20"
            >
              <AnimatePresence mode="wait">
                {inquiryStep === 'details' && (
                  <motion.div key="details" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="space-y-4">
                    <div className="space-y-2.5">
                      <div className="flex justify-between items-center text-[10px] tracking-[0.12em] uppercase font-semibold border-b border-white/10 pb-2">
                        <span className="text-gold-champagne">Material</span>
                        <span className="text-paper">{watch.material}</span>
                      </div>
                      <div className="flex justify-between items-center text-[10px] tracking-[0.12em] uppercase font-semibold border-b border-white/10 pb-2">
                        <span className="text-gold-champagne">Movement</span>
                        <span className="text-paper">{watch.movement}</span>
                      </div>
                      <div className="flex justify-between items-center text-[10px] tracking-[0.12em] uppercase font-semibold">
                        <span className="text-gold-champagne">Complication</span>
                        <span className="text-paper">{watch.complication}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => setInquiryStep('form')}
                      className="w-full rounded-full py-3 bg-gold-champagne text-obsidian text-[10px] font-semibold tracking-[0.2em] uppercase hover:bg-paper transition-all"
                    >
                      Request Viewing
                    </button>
                  </motion.div>
                )}

                {inquiryStep === 'form' && (
                  <motion.form key="form" onSubmit={handleFormSubmit} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="space-y-3">
                    <h4 className="text-[10px] font-semibold tracking-[0.16em] uppercase text-gold-champagne">Private Inquiry</h4>
                    <input required placeholder="YOUR NAME" className="w-full rounded-lg bg-white/5 border border-white/20 p-2.5 text-[10px] outline-none focus:border-gold-champagne" />
                    <input required type="email" placeholder="EMAIL ADDRESS" className="w-full rounded-lg bg-white/5 border border-white/20 p-2.5 text-[10px] outline-none focus:border-gold-champagne" />
                    <button className="w-full rounded-full py-3 border border-gold-champagne text-gold-champagne text-[10px] font-semibold tracking-[0.16em] uppercase hover:bg-gold-champagne hover:text-obsidian transition-all">
                      Confirm
                    </button>
                    <button type="button" onClick={() => setInquiryStep('details')} className="w-full text-[9px] uppercase tracking-widest text-paper/50 hover:text-paper transition-colors">
                      Back
                    </button>
                  </motion.form>
                )}

                {inquiryStep === 'success' && (
                  <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center space-y-3 py-6">
                    <div className="w-10 h-10 bg-gold-champagne/20 rounded-full flex items-center justify-center mx-auto">
                      <ShieldCheck className="text-gold-champagne" size={18} />
                    </div>
                    <p className="text-[10px] font-light text-paper/70 uppercase tracking-[0.14em]">Concierge will contact you shortly.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between items-end">
          <p className="text-gold-brushed text-[10px] font-semibold tracking-[0.2em] uppercase">{watch.series}</p>
          <p className="text-obsidian/50 text-[10px] font-semibold tracking-[0.12em]">{formatPrice(watch.price)}</p>
        </div>
        <h3 className="text-2xl text-obsidian group-hover:text-gold-brushed transition-colors">{watch.name}</h3>
        <div className="flex flex-wrap gap-2 pt-1">
          <motion.button
            whileTap={{ scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 420, damping: 24 }}
            onClick={onOpenDetails}
            className="btn-secondary !px-4 !py-2 tap-feedback"
            aria-label={`Open details for ${watch.name}`}
          >
            <Eye size={14} /> Details
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 420, damping: 24 }}
            onClick={onToggleCompare}
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-[10px] uppercase tracking-[0.14em] font-semibold transition tap-feedback ${
              isCompared
                ? 'bg-obsidian text-paper'
                : 'border border-obsidian/20 text-obsidian hover:border-obsidian hover:bg-obsidian hover:text-paper'
            }`}
            aria-pressed={isCompared}
            aria-label={isCompared ? `Remove ${watch.name} from comparison` : `Add ${watch.name} to comparison`}
          >
            <Scale size={14} /> {isCompared ? 'Selected' : 'Compare'}
          </motion.button>
        </div>
      </div>
    </motion.article>
  );
}

type ProductDetailDrawerProps = {
  watch: Watch | null;
  formatPrice: (price: number) => string;
  onClose: () => void;
};

function ProductDetailDrawer({ watch, formatPrice, onClose }: ProductDetailDrawerProps) {
  const drawerRef = useRef<HTMLElement | null>(null);
  useFocusTrap(!!watch, drawerRef, onClose);

  return (
    <AnimatePresence>
      {watch && (
        <>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-obsidian/45"
            aria-label="Close product detail drawer"
          />
          <motion.aside
            ref={drawerRef}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed right-0 top-0 z-50 h-full w-full max-w-xl bg-paper border-l border-black/10 overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label={`${watch.name} details`}
          >
            <div className="p-5 md:p-8 space-y-6">
              <div className="flex items-center justify-between">
                <p className="text-[10px] tracking-[0.2em] uppercase text-obsidian/55">Reference REF. {watch.id}00-LX</p>
                <button onClick={onClose} className="rounded-full border border-obsidian/15 p-2 text-obsidian/70 hover:bg-white" aria-label="Close details drawer">
                  <X size={16} />
                </button>
              </div>

              <motion.img layoutId={`watch-image-${watch.id}`} src={watch.img} alt={watch.name} className="w-full aspect-[4/3] rounded-2xl object-cover" />

              <div className="space-y-3">
                <p className="text-[10px] uppercase tracking-[0.2em] text-gold-brushed font-semibold">{watch.series}</p>
                <h2 className="text-4xl leading-tight">{watch.name}</h2>
                <p className="text-lg text-obsidian/70">{formatPrice(watch.price)}</p>
              </div>

              <div className="surface-card p-4 space-y-3">
                <SpecRow label="Material" value={watch.material} />
                <SpecRow label="Movement" value={watch.movement} />
                <SpecRow label="Complication" value={watch.complication} />
                <SpecRow label="Edition" value={watch.limited ? 'Limited' : 'Standard'} />
              </div>

              <div className="flex flex-wrap gap-3">
                <motion.button whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 420, damping: 24 }} className="btn-primary tap-feedback">
                  Request Boutique Viewing
                </motion.button>
                <motion.button whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 420, damping: 24 }} className="btn-secondary tap-feedback">
                  Download Spec Sheet
                </motion.button>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

type CompareModalProps = {
  watches: Watch[];
  formatPrice: (price: number) => string;
  isOpen: boolean;
  onClose: () => void;
};

function CompareModal({ watches, formatPrice, isOpen, onClose }: CompareModalProps) {
  const modalRef = useRef<HTMLDivElement | null>(null);
  useFocusTrap(isOpen, modalRef as React.RefObject<HTMLElement | null>, onClose);

  const rows: { label: string; key: keyof Watch | 'priceFormatted' }[] = [
    { label: 'Series', key: 'series' },
    { label: 'Price', key: 'priceFormatted' },
    { label: 'Material', key: 'material' },
    { label: 'Movement', key: 'movement' },
    { label: 'Complication', key: 'complication' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] bg-obsidian/50 p-4 md:p-10" role="dialog" aria-modal="true" aria-label="Compare watches modal">
          <motion.div ref={modalRef} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 16 }} className="mx-auto max-w-6xl surface-card p-5 md:p-7 overflow-x-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl md:text-3xl">Compare References</h3>
              <button onClick={onClose} className="rounded-full border border-obsidian/15 p-2" aria-label="Close compare modal">
                <X size={16} />
              </button>
            </div>

            <div className="min-w-[680px] grid grid-cols-[160px_repeat(3,minmax(0,1fr))] gap-3">
              <div />
              {[0, 1, 2].map((slotIndex) => {
                const watch = watches[slotIndex];
                return (
                  <div key={slotIndex} className="rounded-xl border border-black/10 bg-white p-3">
                    {watch ? (
                      <>
                        <img src={watch.img} alt={watch.name} className="w-full h-28 object-cover rounded-lg" />
                        <p className="text-[10px] uppercase tracking-[0.14em] text-gold-brushed mt-3">{watch.series}</p>
                        <p className="text-lg mt-1">{watch.name}</p>
                      </>
                    ) : (
                      <div className="h-full min-h-36 flex items-center justify-center text-sm text-obsidian/45">Add one more watch</div>
                    )}
                  </div>
                );
              })}

              {rows.map((row) => (
                <React.Fragment key={row.label}>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-obsidian/55 self-center">{row.label}</div>
                  {[0, 1, 2].map((slotIndex) => {
                    const watch = watches[slotIndex];
                    const value = !watch ? '-' : row.key === 'priceFormatted' ? formatPrice(watch.price) : String(watch[row.key]);

                    return (
                      <div key={`${row.label}-${slotIndex}`} className="rounded-xl border border-black/10 bg-white px-3 py-2 text-sm text-obsidian/80">
                        {value}
                      </div>
                    );
                  })}
                </React.Fragment>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between text-sm border-b border-black/8 pb-2 last:border-0 last:pb-0">
      <span className="text-obsidian/55 uppercase tracking-[0.12em] text-[10px]">{label}</span>
      <span className="text-obsidian/80">{value}</span>
    </div>
  );
}
