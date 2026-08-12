import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CommandLine } from "@/components/CommandLine";
import { projects } from "@/data/content";

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif"]);
const VIDEO_EXTENSIONS = new Set([".mp4", ".webm", ".mov"]);

function getProjectMedia(slug: string) {
  const dir = path.join(process.cwd(), "public", "projects", slug);
  let files: string[] = [];
  try {
    files = fs.readdirSync(dir);
  } catch {
    return { images: [] as string[], video: null as string | null };
  }

  files.sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  const images: string[] = [];
  let video: string | null = null;
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (IMAGE_EXTENSIONS.has(ext)) {
      images.push(`/projects/${slug}/${file}`);
    } else if (!video && VIDEO_EXTENSIONS.has(ext)) {
      video = `/projects/${slug}/${file}`;
    }
  }
  return { images, video };
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);
  if (!project) return {};
  return {
    title: `${project.name} — Valentino Kvolek`,
    description: project.desc,
  };
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);
  if (!project) notFound();
  const { images, video } = getProjectMedia(slug);

  return (
    <div className="mb-14">
      <Link
        href="/#projects"
        className="text-sm text-green hover:text-green-bright hover:underline"
      >
        &larr; cd ../projects
      </Link>

      <div className="mt-6 flex items-center justify-between gap-2">
        <span className="text-blue text-sm">{project.dir}</span>
        <span
          className={`text-[10px] px-1.5 py-0.5 border ${
            project.status === "live"
              ? "border-green text-green"
              : "border-amber text-amber"
          }`}
        >
          {project.status === "live" ? "live" : "wip"}
        </span>
      </div>
      <h1 className="text-2xl sm:text-3xl font-bold text-fg-bright mt-1 tracking-tight">
        {project.name}
      </h1>
      <p className="text-fg-dim mt-2">{project.desc}</p>
      <div className="flex flex-wrap gap-1.5 mt-3">
        {project.stack.map((s) => (
          <span
            key={s}
            className="text-[11px] text-cyan border border-border px-1.5 py-0.5"
          >
            {s}
          </span>
        ))}
      </div>
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-3 text-sm text-green hover:text-green-bright hover:underline"
        >
          &rarr; {project.linkLabel}
        </a>
      )}

      <div className="mt-10">
        <CommandLine command="cat problem.md">
          <div className="space-y-4 leading-relaxed text-fg">
            {project.story.problem.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </CommandLine>

        <CommandLine command="cat process.log">
          <div className="space-y-4 leading-relaxed text-fg">
            {project.story.process.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </CommandLine>

        <CommandLine command="cat outcome.md">
          <div className="space-y-4 leading-relaxed text-fg">
            {project.story.outcome.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </CommandLine>

        {(images.length > 0 || video) && (
          <CommandLine command="ls media/">
            <div className="space-y-4">
              {images.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {images.map((src) => (
                    <img
                      key={src}
                      src={src}
                      alt={project.name}
                      className="border border-border object-cover aspect-video w-full"
                    />
                  ))}
                </div>
              )}
              {video && (
                // eslint-disable-next-line jsx-a11y/media-has-caption
                <video controls muted playsInline className="w-full border border-border">
                  <source src={video} />
                </video>
              )}
            </div>
          </CommandLine>
        )}
      </div>
    </div>
  );
}
