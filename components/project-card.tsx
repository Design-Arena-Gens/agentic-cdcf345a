'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  href: string;
  image: string;
  index: number;
}

export function ProjectCard({ title, description, tags, href, image, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-3xl bg-white/5"
    >
      <div className="absolute inset-px rounded-[calc(24px-1px)] bg-gradient-to-br from-white/20 via-white/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative flex flex-col gap-6 p-6 sm:flex-row sm:p-8">
        <div className="relative h-48 w-full overflow-hidden rounded-2xl sm:h-56 sm:w-96">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, 420px"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/90 via-indigo-950/0 to-transparent" />
          <span className="absolute bottom-4 left-4 rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-white/80">
            {tags[0]}
          </span>
        </div>
        <div className="flex flex-1 flex-col justify-between gap-5">
          <div className="flex flex-col gap-4">
            <h3 className="font-display text-2xl font-semibold text-white">{title}</h3>
            <p className="text-base text-white/70">{description}</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70"
              >
                {tag}
              </span>
            ))}
            <Link
              href={href}
              className="ml-auto inline-flex items-center gap-2 text-sm font-semibold text-accent transition-transform duration-300 hover:translate-x-1"
            >
              View case study
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M7 17 17 7" />
                <path d="M10 7h7v7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
