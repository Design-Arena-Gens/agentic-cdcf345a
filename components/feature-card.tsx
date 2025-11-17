'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  index: number;
}

export function FeatureCard({ icon, title, description, index }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="glass flex flex-col gap-4 rounded-3xl p-6 shadow-xl shadow-indigo-950/30"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/20 text-accent">
        {icon}
      </div>
      <h3 className="font-display text-xl font-semibold text-white">{title}</h3>
      <p className="text-sm leading-relaxed text-white/70">{description}</p>
    </motion.div>
  );
}
