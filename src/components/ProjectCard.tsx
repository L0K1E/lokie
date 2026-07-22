'use client';

import { useState } from 'react';

// app-window chrome matching the hero terminal; static cover at rest, richer preview on
// hover, media area is a stand-in until real clips exist
export default function ProjectCard({
  id,
  title,
  blurb,
  accentBg,
}: {
  id: string;
  title: string;
  blurb: string;
  accentBg: string;
}) {
  const [active, setActive] = useState(false);

  return (
    <article
      id={id}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      className="group flex h-full flex-col overflow-hidden rounded-xl bg-ink shadow-lg ring-1 ring-ink/10 transition-shadow duration-300 hover:shadow-2xl"
    >
      <div className="flex items-center gap-2 bg-white/[0.06] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-accent-orange" />
        <span className="h-3 w-3 rounded-full bg-accent-yellow" />
        <span className="h-3 w-3 rounded-full bg-accent-green" />
        <span className="ml-3 truncate font-mono text-xs text-paper/50">{id} — app</span>
      </div>
      <div className="relative aspect-video overflow-hidden bg-ink">
        <div
          className={`absolute inset-0 transition-opacity duration-300 ${accentBg} ${
            active ? 'opacity-90' : 'opacity-40'
          }`}
        />
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-0 overflow-hidden transition-opacity duration-300 ${
            active ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-y-0 left-0 w-1/3 animate-shimmer bg-gradient-to-r from-transparent via-paper/40 to-transparent motion-reduce:hidden" />
        </div>
        <span className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-ink/70 px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-widest text-paper">
          {active ? (
            <>
              <svg width="8" height="8" viewBox="0 0 10 10" fill="currentColor" aria-hidden="true">
                <path d="M2 1l6 4-6 4z" />
              </svg>
              Preview
            </>
          ) : (
            'Hover to preview'
          )}
        </span>
      </div>
      <div className="flex flex-1 flex-col bg-paper p-5">
        <h3 className="font-display text-xl font-bold">{title}</h3>
        <p className="mt-2 font-body text-sm leading-relaxed text-ink/70">{blurb}</p>
      </div>
    </article>
  );
}
