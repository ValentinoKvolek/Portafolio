import { CommandLine } from "../CommandLine";
import { skills } from "@/data/content";

export function SkillsSection() {
  return (
    <CommandLine id="skills" command="cat skills.txt">
      <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <div className="text-amber text-xs uppercase tracking-wider mb-2">
              [{category}]
            </div>
            <div className="flex flex-wrap gap-1.5">
              {items.map((s) => (
                <span
                  key={s}
                  className="text-sm text-fg border border-border px-2 py-0.5 hover:border-green hover:text-green-bright transition-colors"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </CommandLine>
  );
}
