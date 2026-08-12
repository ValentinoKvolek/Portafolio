export function TitleBar() {
  return (
    <div className="shrink-0 h-9 bg-bg-titlebar border-b border-border flex items-center px-3 text-xs text-fg-dim select-none">
      <span className="text-green mr-2">&#9642;</span>
      <span>vfk@archlinux</span>
      <span className="mx-1">:</span>
      <span className="text-blue">~/portfolio</span>
      <span className="mx-1">&mdash;</span>
      <span>zsh</span>
      <div className="ml-auto hidden sm:flex items-center gap-3">
        <span>80x24</span>
        <span className="w-3 h-px bg-fg-dim inline-block" />
        <span className="w-2.5 h-2.5 border border-fg-dim inline-block" />
        <span className="text-red">&times;</span>
      </div>
    </div>
  );
}
