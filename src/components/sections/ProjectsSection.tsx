import Link from "next/link";
import { CommandLine } from "../CommandLine";
import { projects } from "@/data/content";

export function ProjectsSection() {
  return (
    <CommandLine id="projects" command="ls projects/">
      <div className="grid sm:grid-cols-2 gap-4">
        {projects.map((p) => (
          <div
            key={p.id}
            className="relative border border-border bg-bg-raised p-4 hover:border-green/60 transition-colors"
          >
            <Link
              href={`/projects/${p.id}`}
              className="absolute inset-0 z-0"
              aria-label={`Ver detalle de ${p.name}`}
            />
            <div className="flex items-center justify-between gap-2">
              <span className="text-blue text-sm">{p.dir}</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 border ${
                  p.status === "live"
                    ? "border-green text-green"
                    : "border-amber text-amber"
                }`}
              >
                {p.status === "live" ? "live" : "wip"}
              </span>
            </div>
            <div className="text-fg-bright font-semibold mt-1">{p.name}</div>
            <p className="text-fg-dim text-sm mt-1 leading-relaxed">{p.desc}</p>
            <div className="flex flex-wrap gap-1.5 mt-3">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="text-[11px] text-cyan border border-border px-1.5 py-0.5"
                >
                  {s}
                </span>
              ))}
            </div>
            {p.link ? (
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="relative z-10 inline-block mt-3 text-sm text-green hover:text-green-bright hover:underline"
              >
                &rarr; {p.linkLabel}
              </a>
            ) : (
              <div className="mt-3 text-sm text-fg-dim">{p.linkLabel}</div>
            )}
          </div>
        ))}
      </div>
    </CommandLine>
  );
}
