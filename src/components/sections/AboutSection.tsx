import { CommandLine } from "../CommandLine";
import { profile } from "@/data/content";

export function AboutSection() {
  return (
    <CommandLine id="about" command="cat about.txt">
      <p className="whitespace-pre-line leading-relaxed text-fg">
        {profile.bio.join("\n")}
      </p>
    </CommandLine>
  );
}
