// reserves the real render's footprint so the swap is a drop-in
export default function AvatarPlaceholder({
  pose,
  className = '',
}: {
  pose: string;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={`Avatar placeholder — ${pose}`}
      className={`flex items-center justify-center rounded-3xl border-2 border-dashed border-ink/15 bg-ink/[0.03] ${className}`}
    >
      <span className="px-3 text-center font-body text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-ink/35">
        Avatar
        <br />
        {pose}
      </span>
    </div>
  );
}
