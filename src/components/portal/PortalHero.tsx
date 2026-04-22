"use client";

import { motion } from "framer-motion";

export function PortalHero() {
  return (
    <motion.section initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mb-8 rounded-2xl border border-border bg-gradient-to-r from-card to-[#1a2646] p-8 shadow-premium">
      <p className="text-xs uppercase tracking-[0.2em] text-accent2">Portail d'entrée</p>
      <h1 className="mt-2 text-4xl font-semibold">Pratiquez votre posture de Scrum Master</h1>
      <p className="mt-3 max-w-3xl text-muted">Ateliers autonomes, simulations immersives, quiz pédagogiques et suivi de progression dans une expérience premium.</p>
    </motion.section>
  );
}
