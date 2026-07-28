'use client';

import { useEffect, useState } from 'react';

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/L0K1E',
    path: 'M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.34.85.01 1.7.12 2.5.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/m-logeshwaran',
    path: 'M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8h4.52v14H.24V8zm7.5 0h4.33v1.92h.06c.6-1.14 2.07-2.34 4.26-2.34 4.56 0 5.4 3 5.4 6.9V22h-4.52v-6.62c0-1.58-.03-3.6-2.2-3.6-2.2 0-2.53 1.72-2.53 3.49V22H7.74V8z',
  },
  {
    label: 'Email',
    href: 'mailto:logeshwaran.m222@gmail.com',
    path: 'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z',
  },
];

export default function Nav() {
  // the hero has its own big wordmark, so the nav one stays hidden until the hero is scrolled past
  const [showWordmark, setShowWordmark] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('hero');
    if (!hero) {
      setShowWordmark(true);
      return;
    }
    // ratio check instead of isIntersecting: the scroll engine can park the hero
    // exactly at the viewport edge, which still counts as intersecting at ratio 0
    const observer = new IntersectionObserver(
      ([entry]) => setShowWordmark(entry.intersectionRatio < 0.01),
      { threshold: [0, 0.01] }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <header className="nav-scrim fixed left-0 top-0 z-50 flex w-full items-center justify-between px-6 py-4">
      <span
        aria-hidden={!showWordmark}
        className={`font-display text-2xl font-extrabold tracking-wordmark transition-opacity duration-500 ${
          showWordmark ? 'opacity-100' : 'opacity-0'
        }`}
      >
        Lokie
      </span>
      <nav className="flex items-center gap-5">
        {socials.map(({ label, href, path }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            target={href.startsWith('mailto:') ? undefined : '_blank'}
            rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
            className="text-ink/60 transition-colors hover:text-ink"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d={path} />
            </svg>
          </a>
        ))}
      </nav>
    </header>
  );
}
