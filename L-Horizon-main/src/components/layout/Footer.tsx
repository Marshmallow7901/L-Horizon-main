import { Page } from '../../App';
import { Instagram, Twitter, Linkedin, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="section-shell py-16">
      <div className="section-inner surface-card p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-serif tracking-[0.16em] font-medium text-obsidian">L'HORIZON</h2>
            <p className="text-[10px] tracking-[0.36em] text-gold-brushed uppercase opacity-80">Chronos</p>
          </div>
          <p className="text-obsidian/65 text-sm leading-relaxed max-w-xs font-light">
            Dedicated to the art of exceptional horology since 1894. Curating the world's most precise and beautiful complications.
          </p>
          <div className="flex gap-6">
            <Instagram size={20} strokeWidth={1.5} className="text-obsidian/55 hover:text-gold-brushed transition-colors cursor-pointer" />
            <Twitter size={20} strokeWidth={1.5} className="text-obsidian/55 hover:text-gold-brushed transition-colors cursor-pointer" />
            <Linkedin size={20} strokeWidth={1.5} className="text-obsidian/55 hover:text-gold-brushed transition-colors cursor-pointer" />
          </div>
        </div>

        <div className="space-y-8">
          <h3 className="text-xs tracking-[0.26em] font-semibold uppercase text-gold-brushed">Exploration</h3>
          <ul className="space-y-4">
            {[
              { label: 'The Vault', page: 'vault' as Page },
              { label: 'Heritage', page: 'heritage' as Page },
              { label: 'Limited Editions', page: 'limitedEditions' as Page },
              { label: 'Journal', page: 'journal' as Page }
            ].map((item) => (
               <li key={item.label}>
                 <button 
                  onClick={() => onNavigate(item.page)}
                  className="group flex items-center gap-2 text-obsidian/65 hover:text-obsidian transition-all text-sm"
                 >
                   <span className="tracking-wide font-light">{item.label}</span>
                   <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                 </button>
               </li>
            ))}
          </ul>
        </div>

        <div className="space-y-8">
          <h3 className="text-xs tracking-[0.26em] font-semibold uppercase text-gold-brushed">Concierge</h3>
          <ul className="space-y-4">
            {[
              { label: 'Private Viewing', page: 'privateViewing' as Page },
              { label: 'Watch Servicing', page: 'watchServicing' as Page },
              { label: 'Bespoke Orders', page: 'bespokeOrders' as Page },
              { label: 'Estate Services', page: 'estateServices' as Page },
            ].map((item) => (
              <li key={item.label}>
                 <button 
                  onClick={() => onNavigate(item.page)}
                  className="group flex items-center gap-2 text-obsidian/65 hover:text-obsidian transition-all text-sm"
                 >
                   <span className="tracking-wide font-light">{item.label}</span>
                   <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                 </button>
               </li>
            ))}
          </ul>
        </div>

        <div className="space-y-8">
          <h3 className="text-xs tracking-[0.26em] font-semibold uppercase text-gold-brushed">The Journal</h3>
          <div className="space-y-6">
            <p className="text-sm font-light text-obsidian/65">Exclusive horological insights delivered to your inbox.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="w-full rounded-xl border border-obsidian/15 bg-white/80 py-3 px-4 pr-20 text-xs tracking-[0.14em] focus:border-gold-brushed transition-colors"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gold-brushed text-[10px] font-semibold tracking-[0.14em] uppercase hover:text-obsidian transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 pt-6 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-5">
        <p className="text-[10px] text-obsidian/45 tracking-[0.2em] uppercase">
          © 2026 L'HORIZON CHRONOS. All rights reserved.
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          <button 
            onClick={() => onNavigate('privacy')}
            className="text-[10px] text-obsidian/45 tracking-[0.2em] uppercase hover:text-obsidian transition-colors"
          >
            Privacy Policy
          </button>
          <button 
            onClick={() => onNavigate('terms')}
            className="text-[10px] text-obsidian/45 tracking-[0.2em] uppercase hover:text-obsidian transition-colors"
          >
            Terms of Service
          </button>
          <button 
            onClick={() => onNavigate('cookieSettings')}
            className="text-[10px] text-obsidian/45 tracking-[0.2em] uppercase hover:text-obsidian transition-colors"
          >
            Cookie Settings
          </button>
          <button 
            onClick={() => onNavigate('features')}
            className="text-[10px] text-obsidian/45 tracking-[0.2em] uppercase hover:text-obsidian transition-colors"
          >
            Features
          </button>
        </div>
      </div>
      </div>
    </footer>
  );
}
