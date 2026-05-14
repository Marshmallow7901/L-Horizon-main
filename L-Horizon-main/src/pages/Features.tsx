
import { motion } from "framer-motion";
import React from "react";

/**
 * FeaturesPage - Project Portfolio Overview
 *
 * This page summarizes the features, design philosophy, and technical highlights
 * of the L-Horizon project for portfolio and documentation purposes.
 */
export default function FeaturesPage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen bg-gradient-to-br from-zinc-100 to-zinc-300 dark:from-zinc-900 dark:to-zinc-800 px-4 py-12 flex flex-col items-center"
    >
      <motion.section
        initial={{ scale: 0.96, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-3xl w-full bg-white/80 dark:bg-zinc-900/80 rounded-3xl shadow-xl p-8 backdrop-blur-lg border border-zinc-200 dark:border-zinc-800"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl font-bold mb-4 text-center tracking-tight"
        >
          L-Horizon: Modern Watch Boutique Platform
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg text-zinc-600 dark:text-zinc-300 mb-8 text-center"
        >
          A premium, Apple-inspired single-page application for luxury watch discovery, comparison, and boutique services.
        </motion.p>
        <motion.ul
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
                delayChildren: 0.8,
              },
            },
          }}
          className="space-y-6 text-zinc-700 dark:text-zinc-200 text-base"
        >
          {[
            [
              "Modern Apple-like Design:",
              "Glassmorphism, depth, cinematic hero, and ambient backgrounds for a premium feel.",
            ],
            [
              "Advanced UI/UX:",
              "Shared element transitions, floating compare dock, product detail drawer, micro-interactions, and haptic feedback.",
            ],
            [
              "Accessibility First:",
              "ARIA roles, keyboard navigation, focus traps, and reduced-motion support for inclusive access.",
            ],
            [
              "Comprehensive Navigation:",
              "All header/footer links mapped to real, dedicated pages (Home, Vault, Journal, Craftsmanship, Concierge, Heritage, Limited Editions, Private Viewing, Watch Servicing, Bespoke Orders, Estate Services, Cookie Settings, Privacy, Terms).",
            ],
            [
              "Watch Vault:",
              "Compare Mode, floating dock, product detail drawer with shared transitions, and advanced filtering/search.",
            ],
            [
              "Cinematic Home:",
              "Video hero, scroll-driven storytelling, boutique locator, and Apple-style section reveals.",
            ],
            [
              "Performance & SPA Routing:",
              "Vite-powered, React 19, TypeScript, and custom state-based routing (no react-router).",
            ],
            [
              "Custom Theming:",
              "Tailwind CSS with bespoke Apple-inspired tokens/utilities for color, radius, and typography.",
            ],
            [
              "Responsive & Mobile Ready:",
              "Fully responsive layouts, touch-friendly controls, and mobile-first design.",
            ],
            [
              "Portfolio-Ready Code:",
              "Clean, modular, and well-documented codebase suitable for demonstration and further extension.",
            ],
          ].map(([title, desc], i) => (
            <motion.li
              key={title}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <b>{title}</b> {desc}
            </motion.li>
          ))}
        </motion.ul>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 text-center text-zinc-500 dark:text-zinc-400 text-sm"
        >
          <p>
            Designed and engineered as a showcase of modern frontend craftsmanship.<br />
            All features are implemented with a focus on beauty, usability, and performance.
          </p>
        </motion.div>
      </motion.section>
    </motion.main>
  );
}
