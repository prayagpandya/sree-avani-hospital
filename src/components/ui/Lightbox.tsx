import React, { useCallback, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon, XIcon } from 'lucide-react';
import type { GalleryImage } from '../../types/content';

interface LightboxProps {
  images: GalleryImage[];
  /** Index of the open image, or null when closed. */
  index: number | null;
  onClose: () => void;
  onChange: (index: number) => void;
}

export function Lightbox({ images, index, onClose, onChange }: LightboxProps) {
  const open = index !== null;

  const step = useCallback(
    (delta: number) => {
      if (index === null) return;
      onChange((index + delta + images.length) % images.length);
    },
    [index, images.length, onChange]
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose, step]);

  const current = index !== null ? images[index] : null;

  return (
    <AnimatePresence>
      {open && current &&
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label="Image viewer"
        className="fixed inset-0 z-[60] flex flex-col bg-plum-900/95 p-4 sm:p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}>
        
          <div className="flex items-center justify-between text-ivory">
            <p className="text-[0.75rem] tracking-[0.15em] text-gold-400">
              {current.category.toUpperCase()}
              <span className="ml-3 text-ivory/50">
                {(index ?? 0) + 1} / {images.length}
              </span>
            </p>
            <button
            type="button"
            onClick={onClose}
            aria-label="Close image viewer"
            autoFocus
            className="flex h-11 w-11 items-center justify-center rounded-full border border-ivory/25 transition-colors duration-200 ease-premium hover:bg-ivory/10">
            
              <XIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <div className="flex min-h-0 flex-1 items-center justify-center gap-3 py-5 sm:gap-6">
            <button
            type="button"
            onClick={() => step(-1)}
            aria-label="Previous image"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ivory/25 text-ivory transition-colors duration-200 ease-premium hover:bg-ivory/10">
            
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </button>

            <motion.img
            key={current.src}
            src={current.src}
            alt={current.alt}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
            className="max-h-full min-h-0 w-auto max-w-full rounded-xl object-contain" />
          

            <button
            type="button"
            onClick={() => step(1)}
            aria-label="Next image"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ivory/25 text-ivory transition-colors duration-200 ease-premium hover:bg-ivory/10">
            
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <p className="text-center text-[0.8rem] text-ivory/60">{current.alt}</p>
        </motion.div>
      }
    </AnimatePresence>);

}