"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function CommandLine({
  command,
  cwd = "~/portfolio",
  children,
  id,
}: {
  command: string;
  cwd?: string;
  children?: ReactNode;
  id?: string;
}) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="mb-12 scroll-mt-16"
    >
      <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
        <span className="text-green">vfk</span>
        <span className="text-fg-dim">@</span>
        <span className="text-cyan">portfolio</span>
        <span className="text-fg-dim">:</span>
        <span className="text-blue">{cwd}</span>
        <span className="text-fg-dim">$</span>
        <span className="text-fg-bright">{command}</span>
      </div>
      {children && <div className="mt-4">{children}</div>}
    </motion.section>
  );
}
