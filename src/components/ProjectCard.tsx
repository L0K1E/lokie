import Image from 'next/image';

// app-window chrome matching the hero terminal; the shot sits where the app window's viewport would
export default function ProjectCard({
  id,
  title,
  blurb,
  image,
  accentBg,
}: {
  id: string;
  title: string;
  blurb: string;
  image: string;
  accentBg: string;
}) {
  return (
    <article
      id={id}
      className="group flex h-full flex-col overflow-hidden rounded-xl bg-ink shadow-lg ring-1 ring-ink/10 transition-shadow duration-300 hover:shadow-2xl"
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
        <h3 className="font-display text-xl font-bold">{title}</h3>
        <p className="mt-2 font-body text-sm leading-relaxed text-ink/70">{blurb}</p>
      </div>
    </article>
  );
}
