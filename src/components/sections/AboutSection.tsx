import { CommandLine } from "../CommandLine";
import { profile } from "@/data/content";

const bioParagraphs = profile.bio
  .join("\n")
  .split(/\n\s*\n/)
  .map((p) => p.replace(/\n/g, " ").trim())
  .filter(Boolean);

export function AboutSection() {
  return (
    <CommandLine id="about" command="cat about.txt">
      <div className="space-y-4 leading-relaxed text-fg">
        {bioParagraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </CommandLine>
  );
}
