import AvatarPlaceholder from '@/components/placeholders/AvatarPlaceholder';

// the resume card is the download button itself — a native <a download>, so it works even without JS
export default function Closing() {
  return (
    <div className="flex min-h-[100svh] w-full flex-col items-center justify-center px-[7vw] py-24 text-center">
      <p
        data-reveal
        className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-ink/40"
      >
        05 / 05 — The end
      </p>
      <h2
        data-reveal
        className="mt-5 font-display text-5xl font-extrabold leading-[1.05] tracking-wordmark sm:text-7xl md:text-8xl"
      >
        Let&apos;s build
        <br />
        something<span className="text-accent-blue">.</span>
      </h2>

      <div
        data-reveal
        className="mt-14 flex flex-col items-center gap-8 sm:flex-row sm:items-end sm:gap-12"
      >
        <AvatarPlaceholder
          pose="Pose 5 · Glasses + finger-gun"
          className="h-64 w-52 shrink-0"
        />

        <a
          href="/resume.pdf"
          download
          aria-label="Download resume (PDF)"
          className="group relative block w-60 -rotate-3 rounded-xl border border-ink/10 bg-paper p-6 text-left shadow-2xl transition-transform duration-300 hover:-translate-y-1.5 hover:rotate-0"
        >
          {/* mock CV layout so the card reads as a resume */}
          <div className="h-3 w-28 rounded bg-ink/80" />
          <div className="mt-2 h-2 w-20 rounded bg-accent-blue" />
          <div className="mt-5 space-y-2">
            <div className="h-1.5 w-full rounded bg-ink/15" />
            <div className="h-1.5 w-full rounded bg-ink/15" />
            <div className="h-1.5 w-4/5 rounded bg-ink/15" />
          </div>
          <div className="mt-4 space-y-2">
            <div className="h-1.5 w-1/2 rounded bg-ink/25" />
            <div className="h-1.5 w-full rounded bg-ink/15" />
            <div className="h-1.5 w-5/6 rounded bg-ink/15" />
          </div>
          <div className="mt-6 flex items-center justify-center gap-2 rounded-lg bg-ink px-4 py-2.5 font-body text-xs font-semibold uppercase tracking-wide text-paper transition-colors duration-300 group-hover:bg-accent-blue">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 19h16" />
            </svg>
            Download resume
          </div>
        </a>
      </div>
    </div>
  );
}
