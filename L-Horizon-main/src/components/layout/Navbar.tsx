import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Search, User } from 'lucide-react';
import { useState } from 'react';
import { Page } from '../../App';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  isScrolled: boolean;
}

export default function Navbar({ currentPage, onNavigate, isScrolled }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { label: string; value: Page }[] = [
    { label: 'The Heritage', value: 'heritage' },
    { label: 'The Vault', value: 'vault' },
    { label: 'Craftsmanship', value: 'craftsmanship' },
    { label: 'Concierge', value: 'concierge' },
    { label: 'The Journal', value: 'journal' },
    { label: 'Features', value: 'features' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 section-shell ${
        isScrolled ? 'py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="section-inner flex items-center justify-between gap-6">
        <button 
          onClick={() => onNavigate('home')}
          className="group flex flex-col items-center cursor-pointer"
        >
          <span className="font-serif text-2xl lg:text-3xl tracking-[0.16em] font-medium text-obsidian group-hover:text-gold-brushed transition-colors">
            L'HORIZON
          </span>
          <span className="text-[10px] tracking-[0.36em] font-medium text-gold-brushed uppercase -mt-1 opacity-80">
            Chronos
          </span>
        </button>

        <div className="hidden lg:flex items-center gap-8 apple-glass px-6 py-2.5">
          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => onNavigate(item.value)}
              aria-current={currentPage === item.value ? 'page' : undefined}
              className={`relative text-[10px] font-semibold tracking-[0.14em] uppercase transition-colors hover:text-gold-brushed ${
                currentPage === item.value ? 'text-obsidian' : 'text-obsidian/60'
              }`}
            >
              {item.label}
              {currentPage === item.value && (
                <motion.div 
                  layoutId="navUnderline"
                  className="absolute -bottom-2 left-0 right-0 h-px bg-gold-brushed"
                />
              )}
            </button>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3 apple-glass px-3 py-2">
          <button aria-label="Search" className="rounded-full border border-black/10 bg-white p-2.5 text-obsidian/70 hover:text-gold-brushed transition-colors">
            <Search size={18} strokeWidth={1.5} />
          </button>
          <button aria-label="Account" className="rounded-full border border-black/10 bg-white p-2.5 text-obsidian/70 hover:text-gold-brushed transition-colors">
            <User size={18} strokeWidth={1.5} />
          </button>
          <button 
            onClick={() => onNavigate('concierge')}
            className="btn-apple"
          >
            Book Concierge
          </button>
        </div>

        <button 
          className="lg:hidden rounded-full border border-black/10 bg-white/80 p-2 text-obsidian"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-nav-menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
            className="fixed inset-0 z-40 bg-paper/95 backdrop-blur-xl flex flex-col items-center justify-center gap-7 p-10"
          >
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => {
                  onNavigate(item.value);
                  setMobileMenuOpen(false);
                }}
                className={`text-2xl font-serif tracking-wide uppercase ${
                  currentPage === item.value ? 'text-gold-brushed' : 'text-obsidian'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="mt-4 flex flex-col items-center gap-5 w-full max-w-xs">
              <button 
                onClick={() => {
                  onNavigate('concierge');
                  setMobileMenuOpen(false);
                }}
                className="w-full rounded-full bg-obsidian py-4 text-[11px] tracking-widest uppercase font-semibold text-paper"
              >
                Book Concierge
              </button>
              <div className="flex gap-8">
                <Search size={24} className="text-obsidian/55" />
                <User size={24} className="text-obsidian/55" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
