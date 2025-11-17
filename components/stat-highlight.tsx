'use client';

import { motion } from 'framer-motion';

interface StatHighlightProps {
  value: string;
  label: string;
  delay?: number;
}

export function StatHighlight({ value, label, delay = 0 }: StatHighlightProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="glass flex flex-col gap-2 rounded-3xl px-8 py-10 text-white shadow-lg shadow-indigo-950/20"
    >
      <span className="font-display text-4xl font-semibold text-white sm:text-5xl">{value}</span>
      <span className="text-sm uppercase tracking-[0.25em] text-white/60">{label}</span>
    </motion.div>
  );
}
