"use client";

import { useEffect, useRef, useState } from "react";

const SECTION_LINKS = ["about", "experience", "projects", "skills", "contact"];

const COMMANDS: Record<string, string> = {
  help: "comandos: help, whoami, ls, about, experience, projects, skills, contact, echo <msg>, clear",
  whoami: "vfk -- Valentino Franco Kvolek",
};

export function ShellPrompt() {
  const [value, setValue] = useState("");
  const [log, setLog] = useState<{ cmd: string; out: string }[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight });
  }, [log]);

  function run(raw: string) {
    const cmd = raw.trim();
    if (!cmd) return;
    const [base, ...rest] = cmd.split(" ");
    let out: string;

    if (base === "clear") {
      setLog([]);
      setValue("");
      return;
    } else if (SECTION_LINKS.includes(base)) {
      document.getElementById(base)?.scrollIntoView({ behavior: "smooth" });
      out = `abriendo #${base} ...`;
    } else if (base === "echo") {
      out = rest.join(" ");
    } else if (base === "sudo") {
      out = "vfk no está en el archivo sudoers. Este incidente será reportado.";
    } else if (base === "ls") {
      out = SECTION_LINKS.join("  ");
    } else if (COMMANDS[base]) {
      out = COMMANDS[base];
    } else {
      out = `bash: ${base}: command not found`;
    }

    setLog((l) => [...l, { cmd, out }]);
    setValue("");
  }

  return (
    <section id="shell" className="mb-14 scroll-mt-16">
      <div className="border border-border rounded-sm overflow-hidden bg-bg-raised shadow-lg shadow-black/40">
        <div className="h-8 bg-bg-titlebar border-b border-border flex items-center px-3 text-xs text-fg-dim select-none">
          <span className="text-green mr-2">&#9642;</span>
          <span>vfk@archlinux</span>
          <span className="mx-1">:</span>
          <span className="text-blue">~/portfolio</span>
          <span className="mx-1">&mdash;</span>
          <span>zsh</span>
          <div className="ml-auto hidden sm:flex items-center gap-3">
            <span className="w-3 h-px bg-fg-dim inline-block" />
            <span className="w-2.5 h-2.5 border border-fg-dim inline-block" />
            <span className="text-red">&times;</span>
          </div>
        </div>

        <div
          ref={bodyRef}
          className="p-4 min-h-[180px] max-h-[360px] overflow-y-auto cursor-text"
          onClick={() => inputRef.current?.focus()}
        >
          <div className="space-y-2 mb-2">
            {log.map((l, i) => (
              <div key={i}>
                <div className="flex flex-wrap items-baseline gap-x-2">
                  <span className="text-green">vfk</span>
                  <span className="text-fg-dim">@</span>
                  <span className="text-cyan">portfolio</span>
                  <span className="text-fg-dim">:~$</span>
                  <span className="text-fg-bright">{l.cmd}</span>
                </div>
                <div className="text-fg-dim whitespace-pre-wrap">{l.out}</div>
              </div>
            ))}
          </div>

          <div className="flex items-baseline gap-x-2">
            <span className="text-green">vfk</span>
            <span className="text-fg-dim">@</span>
            <span className="text-cyan">portfolio</span>
            <span className="text-fg-dim">:~$</span>
            <input
              ref={inputRef}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") run(value);
              }}
              className="flex-1 bg-transparent outline-none text-fg-bright caret-green min-w-[2ch]"
              spellCheck={false}
              autoComplete="off"
              aria-label="terminal input"
            />
          </div>
          <p className="text-fg-dim text-xs mt-3">
            proba escribir: <span className="text-amber">help</span>,{" "}
            <span className="text-amber">about</span>,{" "}
            <span className="text-amber">projects</span>,{" "}
            <span className="text-amber">sudo</span>...
          </p>
        </div>
      </div>
    </section>
  );
}
