"use client";

import { useEffect, useState } from "react";

export function TitleBar() {
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const scrollEl = document.querySelector("main");
    if (!scrollEl) return;
    const onScroll = () => setAtTop(scrollEl.scrollTop <= 4);
    onScroll();
    scrollEl.addEventListener("scroll", onScroll, { passive: true });
    return () => scrollEl.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`shrink-0 grid overflow-hidden transition-[grid-template-rows] duration-200 ease-out ${
        atTop ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
      }`}
    >
      <div className="overflow-hidden min-h-0">
        <div className="h-9 bg-bg-titlebar border-b border-border flex items-center px-3 text-xs text-fg-dim select-none">
          <span className="text-green mr-2">&#9642;</span>
          <span>vfk@archlinux</span>
          <span className="mx-1">:</span>
          <span className="text-blue">~/portfolio</span>
          <span className="mx-1">&mdash;</span>
          <span>zsh</span>
          <div className="ml-auto hidden sm:flex items-center gap-3">
            <span>80x24</span>
            <span className="w-3 h-px bg-fg-dim inline-block" />
            <span className="w-2.5 h-2.5 border border-fg-dim inline-block" />
            <span className="text-red">&times;</span>
          </div>
        </div>
      </div>
    </div>
  );
}
