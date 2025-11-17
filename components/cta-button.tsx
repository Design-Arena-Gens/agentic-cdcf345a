import Link from 'next/link';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

interface CTAButtonProps {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary';
  size?: 'md' | 'lg';
}

export function CTAButton({ label, href, variant = 'primary', size = 'md' }: CTAButtonProps) {
  const baseStyles =
    'group inline-flex items-center justify-center gap-2 rounded-full border text-sm font-semibold uppercase tracking-[0.22em] transition-all duration-300';
  const variantStyles =
    variant === 'primary'
      ? 'border-accent bg-accent text-white shadow-glow hover:shadow-glow/70 hover:-translate-y-0.5'
      : 'border-white/20 bg-white/5 text-white hover:border-white/40 hover:bg-white/10';
  const sizeStyles = size === 'lg' ? 'px-8 py-4 text-xs sm:text-sm' : 'px-6 py-3';

  return (
    <Link href={href} className={clsx(baseStyles, variantStyles, sizeStyles)}>
      <span>{label}</span>
      <ArrowUpRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
    </Link>
  );
}
