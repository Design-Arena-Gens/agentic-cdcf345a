'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  avatar: string;
  index: number;
}

export function TestimonialCard({ quote, name, role, avatar, index }: TestimonialCardProps) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass flex flex-col gap-6 rounded-3xl p-8"
    >
      <blockquote className="text-lg leading-relaxed text-white/80">“{quote}”</blockquote>
      <figcaption className="flex items-center gap-4">
        <div className="relative h-12 w-12 overflow-hidden rounded-full">
          <Image src={avatar} alt={name} fill className="object-cover" sizes="48px" />
        </div>
        <div className="flex flex-col text-sm text-white/70">
          <span className="font-medium text-white">{name}</span>
          <span>{role}</span>
        </div>
      </figcaption>
    </motion.figure>
  );
}
