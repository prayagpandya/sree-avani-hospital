import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  /** Stagger index — adds up to 4 steps of 60ms delay. */
  index?: number;
  direction?: 'up' | 'left' | 'right' | 'none';
  className?: string;
  as?: 'div' | 'section' | 'li' | 'article' | 'header';
}

const offset = { up: { y: 22 }, left: { x: -28 }, right: { x: 28 }, none: {} };

export function Reveal({
  children,
  index = 0,
  direction = 'up',
  className,
  as = 'div'
}: RevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  if (reduce) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, ...offset[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.55,
        delay: Math.min(index, 4) * 0.06,
        ease: [0.23, 1, 0.32, 1]
      }}>
      
      {children}
    </MotionTag>);

}