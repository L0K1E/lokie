const groups = [
  { label: 'Languages', tools: ['JavaScript', 'TypeScript'] },
  { label: 'Frontend', tools: ['React', 'Next.js', 'Remix', 'Tailwind CSS'] },
  { label: 'State Management', tools: ['Zustand', 'React Context'] },
  { label: 'Backend', tools: ['Express.js', 'Node.js', 'Directus'] },
  { label: 'Build Tools', tools: ['Vite', 'Webpack'] },
  { label: 'Testing', tools: ['Vitest'] },
  { label: 'Database & Infra', tools: ['PostgreSQL', 'Docker Compose', 'GitHub Actions'] },
  { label: 'DevOps & Server', tools: ['Linux', 'Nginx', 'PM2', 'Firewall config', 'AWS', 'GitHub'] },
  { label: 'Design & Craft', tools: ['Photoshop', 'Illustrator', 'Premiere Pro'] },
];

// full class strings so Tailwind's scanner keeps them
const accentText = ['text-accent-yellow', 'text-accent-blue', 'text-accent-green', 'text-accent-orange'];
const accentDot = ['bg-accent-yellow', 'bg-accent-blue', 'bg-accent-green', 'bg-accent-orange'];

export default function Arsenal() {
  return (
    <div className="flex min-h-[100svh] w-full flex-col justify-center px-[7vw] py-24">
      <h2
        data-reveal
        className="mb-12 font-display text-7xl font-extrabold tracking-wordmark md:text-8xl"
      >
        My Arsenal<span className="text-accent-green">.</span>
      </h2>

      <div className="grid grid-cols-2 gap-x-10 gap-y-8 md:grid-cols-3">
        {groups.map((group, i) => (
          <div key={group.label} data-reveal>
            <h3
              className={`flex items-center gap-2 font-display text-sm font-bold uppercase tracking-[0.12em] ${accentText[i % 4]}`}
            >
              <span className={`h-2 w-2 shrink-0 rounded-full ${accentDot[i % 4]}`} />
              {group.label}
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.tools.map((tool) => (
                <li
                  key={tool}
                  className="rounded-full border border-ink/15 bg-paper px-3 py-1 font-body text-xs text-ink/80"
                >
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
