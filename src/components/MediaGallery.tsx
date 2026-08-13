"use client";

import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

export function MediaGallery({
  images,
  video,
  name,
}: {
  images: string[];
  video: string | null;
  name: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const close = useCallback(() => setOpenIndex(null), []);
  const prev = useCallback(
    () => setOpenIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length)),
    [images.length]
  );
  const next = useCallback(
    () => setOpenIndex((i) => (i === null ? i : (i + 1) % images.length)),
    [images.length]
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex, close, prev, next]);

  return (
    <div className="space-y-4">
      {images.length > 0 && (
        <div className="columns-2 sm:columns-3 gap-3">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setOpenIndex(i)}
              className="block w-full mb-3 break-inside-avoid border border-border hover:border-green/60 transition-colors"
            >
              <img
                src={src}
                alt={`${name} — captura ${i + 1}`}
                className="w-full h-auto block"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      )}

      {video && (
        // eslint-disable-next-line jsx-a11y/media-has-caption
        <video controls muted playsInline className="w-full border border-border">
          <source src={video} />
        </video>
      )}

      {mounted &&
        createPortal(
          <AnimatePresence>
            {openIndex !== null && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
                className="fixed inset-0 z-[60] bg-bg/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-10"
                onClick={close}
              >
                <div className="absolute top-4 left-4 text-fg-dim text-xs">
                  [ESC] cerrar &middot; [&larr;/&rarr;] navegar &middot; {openIndex + 1}/{images.length}
                </div>
                <button
                  type="button"
                  onClick={close}
                  aria-label="Cerrar"
                  className="absolute top-3 right-4 text-fg-dim hover:text-fg-bright text-3xl leading-none"
                >
                  &times;
                </button>
                {images.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        prev();
                      }}
                      aria-label="Anterior"
                      className="absolute left-1 sm:left-6 text-fg-dim hover:text-green-bright text-4xl px-2 select-none"
                    >
                      &lsaquo;
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        next();
                      }}
                      aria-label="Siguiente"
                      className="absolute right-1 sm:right-6 text-fg-dim hover:text-green-bright text-4xl px-2 select-none"
                    >
                      &rsaquo;
                    </button>
                  </>
                )}
                <AnimatePresence mode="wait">
                  <motion.img
                    key={openIndex}
                    src={images[openIndex]}
                    alt={`${name} — captura ${openIndex + 1}`}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="max-w-full max-h-full border border-border object-contain"
                    onClick={(e) => e.stopPropagation()}
                  />
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </div>
  );
}
