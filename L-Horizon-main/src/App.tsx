/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Vault from './pages/Vault';
import Craftsmanship from './pages/Craftsmanship';
import Concierge from './pages/Concierge';
import Journal from './pages/Journal';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Heritage from './pages/Heritage';
import LimitedEditions from './pages/LimitedEditions';
import PrivateViewing from './pages/PrivateViewing';
import WatchServicing from './pages/WatchServicing';
import BespokeOrders from './pages/BespokeOrders';
import EstateServices from './pages/EstateServices';
import CookieSettings from './pages/CookieSettings';
import FeaturesPage from './pages/Features';

export type Page =
  | 'home'
  | 'heritage'
  | 'vault'
  | 'limitedEditions'
  | 'craftsmanship'
  | 'concierge'
  | 'privateViewing'
  | 'watchServicing'
  | 'bespokeOrders'
  | 'estateServices'
  | 'journal'
  | 'privacy'
  | 'terms'
  | 'cookieSettings'
  | 'features';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home onNavigate={setCurrentPage} />;
      case 'heritage': return <Heritage />;
      case 'vault': return <Vault />;
      case 'limitedEditions': return <LimitedEditions />;
      case 'craftsmanship': return <Craftsmanship />;
      case 'concierge': return <Concierge />;
      case 'privateViewing': return <PrivateViewing />;
      case 'watchServicing': return <WatchServicing />;
      case 'bespokeOrders': return <BespokeOrders />;
      case 'estateServices': return <EstateServices />;
      case 'journal': return <Journal />;
      case 'privacy': return <Privacy />;
      case 'terms': return <Terms />;
      case 'cookieSettings': return <CookieSettings />;
      case 'features': return <FeaturesPage />;
      default: return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          className="ambient-orb h-[36rem] w-[36rem] bg-gold-champagne/35 -top-40 -left-20"
          animate={{ x: [0, 30, -10, 0], y: [0, 20, -20, 0], opacity: [0.26, 0.34, 0.24, 0.26] }}
          transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="ambient-orb h-[30rem] w-[30rem] bg-gold-brushed/30 top-20 right-[-8rem]"
          animate={{ x: [0, -25, 10, 0], y: [0, -15, 20, 0], opacity: [0.2, 0.3, 0.2, 0.2] }}
          transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
      <Navbar 
        currentPage={currentPage} 
        onNavigate={setCurrentPage} 
        isScrolled={isScrolled} 
      />
      
      <main className="overflow-hidden pt-24 md:pt-28">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}
