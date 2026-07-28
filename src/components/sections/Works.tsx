import ProjectCard from '@/components/ProjectCard';

// card ids match the hero terminal's ls targets so a name click jumps here
const projects = [
  {
    id: 'visual-prompt-builder',
    title: 'Visual Prompt Builder',
    blurb:
      'A tap-based tool for building photo and design AI prompts — no prompt-engineering skill required, just point and tap.',
    image: '/visual-prompt-builder.png',
    accentBg: 'bg-accent-blue',
  },
  {
    id: 'roast-a-website',
    title: 'Roast-a-Website',
    blurb:
      'A website audit tool that tells you the truth about your site — with jokes instead of a dry report.',
    image: '/roast-my-website.png',
    accentBg: 'bg-accent-orange',
  },
  {
    id: 'rythemix',
    title: 'Rythemix',
    blurb:
      'A drum-kit beat-maker in the browser — pick instruments, drop beats on a grid, and loop your own track.',
    image: '/rhythemix.png',
    accentBg: 'bg-accent-green',
  },
];

export default function Works() {
  return (
    <div className="relative z-30 flex min-h-[100svh] w-full flex-col justify-center px-[7vw] py-24">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4" data-reveal>
        <h2 className="font-display text-7xl font-extrabold tracking-wordmark md:text-8xl">
          Works<span className="text-accent-orange">.</span>
        </h2>
        <a
          href="https://github.com/L0K1E"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-full border border-ink/20 px-5 py-2.5 font-body text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-paper"
        >
          See more on GitHub
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
            className="transition-transform group-hover:translate-x-0.5"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((project) => (
          <div key={project.id} data-reveal className="h-full">
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </div>
  );
}
