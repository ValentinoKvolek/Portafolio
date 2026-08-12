"use client";

import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "about", label: "about" },
  { id: "experience", label: "experience" },
  { id: "projects", label: "projects" },
  { id: "skills", label: "skills" },
  { id: "contact", label: "contact" },
];

export function StatusBar() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () =>
      setTime(
        new Date().toLocaleTimeString("es-AR", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );
    update();
    const t = setInterval(update, 30_000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="shrink-0 h-8 pb-[env(safe-area-inset-bottom)] bg-bg-titlebar border-t border-border text-[12px] flex items-center justify-between px-2 select-none overflow-x-auto">
      <div className="flex items-center gap-0.5">
        {SECTIONS.map((s, i) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={`px-2 py-1 hover:text-bg hover:bg-green transition-colors whitespace-nowrap ${
              s.id === "contact" ? "text-green" : "text-fg-dim"
            }`}
          >
            {i + 1}:{s.label}
          </a>
        ))}
      </div>
      <div className="flex items-center gap-2 text-fg-dim pr-1 whitespace-nowrap">
        <span className="text-amber">&#9679;</span>
        <span className="hidden sm:inline">vfk@portfolio</span>
        <span>|</span>
        <span suppressHydrationWarning>{time || "--:--"}</span>
      </div>
    </div>
  );
}
