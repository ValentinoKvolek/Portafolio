import { CommandLine } from "../CommandLine";
import { experience, education } from "@/data/content";

export function ExperienceSection() {
  return (
    <CommandLine id="experience" command="ls -la experience/">
      <div className="text-fg-dim mb-4 text-xs">total {experience.length}</div>
      <div className="space-y-6">
        {experience.map((job) => (
          <div key={job.id} className="border-l-2 border-border pl-4">
            <div className="flex flex-wrap items-baseline gap-x-2">
              <span className="text-blue">drwxr-xr-x</span>
              <span className="text-amber font-semibold">{job.org}/</span>
            </div>
            <div className="text-fg-bright mt-1">{job.role}</div>
            <div className="text-fg-dim text-xs">
              {job.period} &middot; {job.duration} &middot; {job.location}
            </div>
            <ul className="mt-2 space-y-1">
              {job.bullets.map((b) => (
                <li key={b} className="text-fg text-sm pl-4 relative">
                  <span className="absolute left-0 text-green">&gt;</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-border">
        <div className="text-fg-dim text-xs mb-1"># education.log</div>
        <div className="space-y-4">
          {education.map((edu) => (
            <div key={edu.school}>
              <div className="text-fg-bright">{edu.school}</div>
              <div className="text-green-bright">{edu.degree}</div>
              {edu.period && <div className="text-fg-dim text-xs">{edu.period}</div>}
            </div>
          ))}
        </div>
      </div>
    </CommandLine>
  );
}
