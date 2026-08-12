import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mb-14">
      <div className="flex flex-wrap items-baseline gap-x-2">
        <span className="text-green">vfk</span>
        <span className="text-fg-dim">@</span>
        <span className="text-cyan">portfolio</span>
        <span className="text-fg-dim">:~$</span>
        <span className="text-fg-bright">cd projects/&lt;slug&gt;</span>
      </div>
      <p className="mt-3 text-red">
        bash: cd: No such file or directory
      </p>
      <p className="mt-1 text-fg-dim text-sm">
        Ese proyecto no existe (o todavía no lo escribí).
      </p>
      <Link
        href="/#projects"
        className="inline-block mt-4 text-sm text-green hover:text-green-bright hover:underline"
      >
        &larr; cd ../projects
      </Link>
    </div>
  );
}
