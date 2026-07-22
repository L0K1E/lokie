// Scratch page for eyeballing theme tokens and type; not linked from the site.

const backgrounds = [
  { name: 'background-hero', label: 'Hero / Origin', className: 'bg-background-hero' },
  { name: 'background-arsenal', label: 'Arsenal / Works', className: 'bg-background-arsenal' },
  { name: 'background-closing', label: 'Closing', className: 'bg-background-closing' },
];

const accents = [
  { name: 'accent-yellow', className: 'bg-accent-yellow' },
  { name: 'accent-blue', className: 'bg-accent-blue' },
  { name: 'accent-green', className: 'bg-accent-green' },
  { name: 'accent-orange', className: 'bg-accent-orange' },
];

function Swatch({ label, sub, className }: { label: string; sub: string; className: string }) {
  return (
    <div>
      <div className={`h-24 w-full rounded-lg border border-ink/10 ${className}`} />
      <p className="mt-2 font-display text-sm font-semibold">{label}</p>
      <p className="font-body text-sm text-ink/50">{sub}</p>
    </div>
  );
}

export default function StyleGuide() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-28">
      <h1 className="font-display text-4xl font-extrabold">Style guide</h1>
      <p className="mt-2 font-body text-body text-ink/60">
        Token and type review. All values resolve from src/config/theme.js.
      </p>

      <section className="mt-14">
        <h2 className="font-display text-heading font-bold">Section backgrounds</h2>
        <p className="font-body text-sm text-ink/50">
          Light-to-dark mood progression across the scroll.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {backgrounds.map((b) => (
            <Swatch key={b.name} label={b.label} sub={b.name} className={b.className} />
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-heading font-bold">Accent palette</h2>
        <p className="font-body text-sm text-ink/50">
          Used only in the wordmark and highlighted keywords — never large fields.
        </p>
        <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {accents.map((a) => (
            <Swatch key={a.name} label="" sub={a.name} className={a.className} />
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-heading font-bold">Wordmark treatment</h2>
        <p className="font-body text-sm text-ink/50">
          Display font, ~150px, -3% tracking, 120% leading.
        </p>
        <div className="mt-6 overflow-x-auto">
          <span className="font-display text-wordmark font-extrabold">Lokie</span>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-heading font-bold">Display — Bricolage Grotesque</h2>
        <div className="mt-4 space-y-2 font-display">
          <p className="text-5xl font-extrabold">The quick brown fox</p>
          <p className="text-3xl font-bold">The quick brown fox jumps</p>
          <p className="text-heading font-semibold">The quick brown fox jumps over the lazy dog</p>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-heading font-bold">Body — Inter</h2>
        <div className="mt-4 max-w-2xl space-y-4 font-body">
          <p className="text-body">
            Body copy at 16px and 130% line-height. Ever since I was a kid, I have
            been fascinated by computers. They felt a little magical — I was
            endlessly curious how they worked.
          </p>
          <p className="text-sm text-ink/60">
            Smaller functional text for nav, arsenal lists, and captions.
          </p>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-heading font-bold">Accent-on-headline</h2>
        <p className="mt-4 font-display text-3xl font-bold">
          A dev who cares about{' '}
          <span className="text-accent-blue">design</span> and has{' '}
          <span className="text-accent-yellow">personality</span>.
        </p>
      </section>
    </main>
  );
}
