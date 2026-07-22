export default function CatPlaceholder({ className = '' }: { className?: string }) {
  return (
    <div
      role="img"
      aria-label="Cat mascot placeholder"
      className={`flex items-center justify-center rounded-xl border-2 border-dashed border-paper/25 bg-paper/5 ${className}`}
    >
      <span className="font-body text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-paper/40">
        Cat
      </span>
    </div>
  );
}
