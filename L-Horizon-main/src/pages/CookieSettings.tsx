import { motion } from 'motion/react';

export default function CookieSettings() {
  return (
    <div className="section-shell pb-14 min-h-screen">
      <div className="section-inner max-w-3xl surface-card p-6 md:p-10 space-y-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
          <span className="text-gold-brushed text-[10px] font-semibold tracking-[0.3em] uppercase">Legal</span>
          <h1 className="text-4xl md:text-5xl">Cookie <span className="italic font-light">Settings</span></h1>
          <p className="text-obsidian/70">Manage how L'Horizon Chronos uses cookies to improve performance, personalization, and analytics.</p>
        </motion.div>

        <div className="space-y-3">
          {[
            { label: 'Essential Cookies', description: 'Required for secure navigation and core site functionality.', checked: true, disabled: true },
            { label: 'Analytics Cookies', description: 'Help us understand visits and improve page performance.', checked: true, disabled: false },
            { label: 'Preference Cookies', description: 'Remember currency, browsing preferences, and display settings.', checked: false, disabled: false },
          ].map((item) => (
            <label key={item.label} className="flex items-start gap-3 rounded-xl border border-black/10 bg-white p-4">
              <input type="checkbox" defaultChecked={item.checked} disabled={item.disabled} className="mt-1" />
              <span>
                <span className="block text-sm font-medium text-obsidian">{item.label}</span>
                <span className="block text-xs text-obsidian/65 mt-1">{item.description}</span>
              </span>
            </label>
          ))}
        </div>

        <div className="flex gap-3 flex-wrap">
          <button className="btn-primary">Save Preferences</button>
          <button className="btn-secondary">Accept All</button>
        </div>
      </div>
    </div>
  );
}
