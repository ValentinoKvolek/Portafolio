import { CommandLine } from "../CommandLine";
import { contact } from "@/data/content";

export function ContactSection() {
  return (
    <CommandLine id="contact" command="./contact.sh">
      <div className="flex flex-wrap items-baseline gap-x-2 mb-4">
        <span className="text-green">&gt;</span>
        <span className="text-fg">
          Disponible para roles full-time (Backend &amp; Data Engineer) y para proyectos freelance de desarrollo web. También buscando acercarme a roles en Redes y Seguridad Informática.
        </span>
      </div>
      <div className="space-y-2">
        <div>
          <span className="text-fg-dim">email&nbsp;&nbsp;</span>
          <a
            href={`mailto:${contact.email}`}
            className="text-green hover:text-green-bright hover:underline"
          >
            {contact.email}
          </a>
        </div>
        <div>
          <span className="text-fg-dim">github&nbsp;</span>
          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            className="text-green hover:text-green-bright hover:underline"
          >
            {contact.githubLabel}
          </a>
        </div>
        <div>
          <span className="text-fg-dim">linkedin</span>{" "}
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-green hover:text-green-bright hover:underline"
          >
            {contact.linkedinLabel}
          </a>
        </div>
      </div>
      <div className="mt-6 text-fg-dim text-xs">process exited, status=0</div>
    </CommandLine>
  );
}
