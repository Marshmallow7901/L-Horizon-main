import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, ShieldCheck, ArrowRight } from 'lucide-react';

export default function Concierge() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // In a real app, you'd send data to a backend here
  };

  return (
    <div className="section-shell min-h-screen">
      <section className="section-inner py-10 md:py-14 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <div className="w-full lg:w-1/2 space-y-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <span className="text-gold-brushed text-[10px] font-semibold tracking-[0.3em] uppercase">Private Services</span>
            <h1 className="text-5xl md:text-7xl leading-tight">The Bespoke <br /> <span className="italic font-light">Concierge</span></h1>
            <p className="text-obsidian/70 text-base md:text-lg leading-relaxed max-w-lg">
              Unlock the world of L'Horizon Chronos through our private consultation services. From acquisition advice to world-class servicing, your timepiece is in master hands.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 pt-4">
            <div className="flex items-start gap-4">
              <Calendar className="text-gold-brushed shrink-0" size={22} />
              <div className="space-y-1">
                <h4 className="text-xs font-semibold tracking-[0.14em] uppercase">Private Viewing</h4>
                <p className="text-xs text-obsidian/60">Exclusive 1-on-1 session at our flagship.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <ShieldCheck className="text-gold-brushed shrink-0" size={22} />
              <div className="space-y-1">
                <h4 className="text-xs font-semibold tracking-[0.14em] uppercase">Master Servicing</h4>
                <p className="text-xs text-obsidian/60">Restoration by certified master horologists.</p>
              </div>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 aspect-square relative surface-card p-3"
        >
          <img 
            src="https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=1500" 
            alt="Consultation Room" 
            className="w-full h-full object-cover relative z-10 rounded-xl"
          />
        </motion.div>
      </section>

      <section className="section-inner surface-card text-obsidian py-12 md:py-14 px-6 md:px-10 mb-14">
        <div className="max-w-4xl mx-auto space-y-12">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-16"
              >
                <div className="text-center space-y-4">
                  <h2 className="text-4xl md:text-5xl font-serif">Inquire <span className="italic font-light">Privately</span></h2>
                  <p className="text-obsidian/65 max-w-lg mx-auto">
                    Please provide your details and our dedicated concierge will contact you within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                  <div className="space-y-2">
                    <label className="text-[10px] font-semibold tracking-[0.14em] uppercase text-obsidian/45">Full Name</label>
                    <input required type="text" className="w-full rounded-xl border border-obsidian/15 bg-white py-3 px-4 outline-none focus:border-gold-brushed transition-colors text-sm" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-semibold tracking-[0.14em] uppercase text-obsidian/45">Email Address</label>
                    <input required type="email" className="w-full rounded-xl border border-obsidian/15 bg-white py-3 px-4 outline-none focus:border-gold-brushed transition-colors text-sm" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-semibold tracking-[0.14em] uppercase text-obsidian/45">Interest Area</label>
                    <select className="w-full rounded-xl border border-obsidian/15 bg-white py-3 px-4 outline-none focus:border-gold-brushed transition-colors appearance-none cursor-pointer text-sm">
                      <option>Private Acquisition</option>
                      <option>Vintage Restoration</option>
                      <option>Servicing & Maintenance</option>
                      <option>Estate Appraisal</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-semibold tracking-[0.14em] uppercase text-obsidian/45">Phone Number</label>
                    <input type="tel" className="w-full rounded-xl border border-obsidian/15 bg-white py-3 px-4 outline-none focus:border-gold-brushed transition-colors text-sm" />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-[10px] font-semibold tracking-[0.14em] uppercase text-obsidian/45">Your Inquiry</label>
                    <textarea rows={4} className="w-full rounded-xl border border-obsidian/15 bg-white py-3 px-4 outline-none focus:border-gold-brushed transition-colors resize-none text-sm" />
                  </div>
                  <div className="md:col-span-2 pt-6">
                    <button type="submit" className="w-full md:w-fit btn-primary justify-center">
                      Send Inquiry
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-20 space-y-8"
              >
                <div className="w-20 h-20 bg-gold-champagne/10 rounded-full flex items-center justify-center mx-auto">
                   <ShieldCheck className="text-gold-brushed" size={40} />
                </div>
                <div className="space-y-4">
                  <h2 className="text-4xl font-serif">Inquiry <span className="italic">Received</span></h2>
                  <p className="text-obsidian/65 max-w-md mx-auto leading-relaxed">
                    Thank you for your interest in L'Horizon Chronos. Our senior concierge has been notified and will contact you shortly to arrange a private viewing.
                  </p>
                </div>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-[11px] font-semibold tracking-[0.14em] uppercase text-gold-brushed hover:text-obsidian transition-colors underline underline-offset-8"
                >
                  Return to Form
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
