import Image from 'next/image';

// app-window chrome matching the hero terminal; the shot sits where the app window's viewport would
export default function ProjectCard({
  id,
  title,
  blurb,
  image,
  url,
  code,
  accentBg,
}: {
  id: string;
  title: string;
  blurb: string;
  image: string;
  url: string;
  code: string;
  accentBg: string;
}) {
  return (
    <article
      id={id}
      className="group scroll-mt-20 flex h-full flex-col overflow-hidden rounded-xl bg-ink shadow-lg ring-1 ring-ink/10 transition-shadow duration-300 hover:shadow-2xl"
    >
      <div className="flex items-center gap-2 bg-white/[0.06] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-accent-orange" />
        <span className="h-3 w-3 rounded-full bg-accent-yellow" />
        <span className="h-3 w-3 rounded-full bg-accent-green" />
        <span className="ml-3 truncate font-mono text-xs text-paper/50">{id} — app</span>
      </div>
      {/* accent shows through only while the shot is still decoding */}
      <div className={`relative aspect-video overflow-hidden ${accentBg}`}>
        <Image
          src={image}
          alt={`Screenshot of ${title}`}
          fill
          sizes="(min-width: 768px) 30vw, (min-width: 640px) 45vw, 86vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-1 flex-col bg-paper p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-xl font-bold">{title}</h3>
          <div className="flex shrink-0 items-center gap-3 pt-1">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} live demo`}
              className="inline-flex items-center gap-1 font-body text-xs font-medium text-ink transition-colors hover:text-accent-blue"
            >
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <path d="M15 3h6v6M10 14 21 3" />
              </svg>
              Live
            </a>
            <a
              href={code}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} source code`}
              className="inline-flex items-center gap-1 font-body text-xs font-medium text-ink/70 transition-colors hover:text-ink"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.34.85.01 1.7.12 2.5.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z" />
              </svg>
              Code
            </a>
          </div>
        </div>
        <p className="mt-2 font-body text-sm leading-relaxed text-ink/70">{blurb}</p>
      </div>
    </article>
  );
}
