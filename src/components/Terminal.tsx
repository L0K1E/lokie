'use client';

import { useEffect, useState } from 'react';

type Line = { kind: 'cmd' | 'out'; text: string; href?: string };

const PROMPT = '$';

// clearAfter wipes the screen; out entries with an href render as project links
const script: {
  cmd: string;
  out?: { text: string; href?: string }[];
  clearAfter?: boolean;
}[] = [
  { cmd: 'whoami', out: [{ text: 'logeshwaran' }] },
  { cmd: 'clear', clearAfter: true },
  { cmd: 'cd Projects' },
  {
    cmd: 'ls',
    out: [
      { text: 'visual-prompt-builder', href: '#visual-prompt-builder' },
      { text: 'roast-a-website', href: '#roast-a-website' },
      { text: 'rythemix', href: '#rythemix' },
    ],
  },
];

// resting state after the script; reduced-motion users see this immediately
const finalLines: Line[] = [
  { kind: 'cmd', text: 'cd Projects' },
  { kind: 'cmd', text: 'ls' },
  ...(script[3].out ?? []).map((o) => ({ kind: 'out' as const, text: o.text, href: o.href })),
];

const Cursor = () => (
  <span className="ml-0.5 inline-block h-[1em] w-[0.55em] translate-y-[0.12em] bg-accent-green align-baseline animate-blink motion-reduce:animate-none" />
);

export default function Terminal() {
  const [lines, setLines] = useState<Line[]>([]);
  const [typing, setTyping] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setLines(finalLines);
      setDone(true);
      return;
    }

    let cancelled = false;
    const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

    async function run() {
      await sleep(500);
      for (const step of script) {
        for (let i = 1; i <= step.cmd.length; i++) {
          if (cancelled) return;
          setTyping(step.cmd.slice(0, i));
          await sleep(50 + Math.random() * 45); // slight jitter reads more human
        }
        if (cancelled) return;
        await sleep(260);
        setLines((prev) => [...prev, { kind: 'cmd', text: step.cmd }]);
        setTyping('');

        if (step.clearAfter) {
          await sleep(320);
          if (cancelled) return;
          setLines([]);
          await sleep(260);
          continue;
        }
        if (step.out) {
          await sleep(140);
          for (const o of step.out) {
            if (cancelled) return;
            setLines((prev) => [...prev, { kind: 'out', text: o.text, href: o.href }]);
            await sleep(130);
          }
        }
        await sleep(520);
      }
      if (!cancelled) setDone(true);
    }

    run();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="overflow-hidden rounded-t-xl bg-ink shadow-2xl ring-1 ring-ink/10">
      <div className="flex items-center gap-2 bg-white/[0.06] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-accent-orange" />
        <span className="h-3 w-3 rounded-full bg-accent-yellow" />
        <span className="h-3 w-3 rounded-full bg-accent-green" />
        <span className="ml-3 font-mono text-xs text-paper/50">logeshwaran — zsh</span>
      </div>
      {/* tall body, content anchored top — the hero docks the window half off-screen so only the empty bottom clips */}
      <div className="min-h-[360px] space-y-1.5 px-5 py-4 font-mono text-sm leading-relaxed text-paper">
        {lines.map((line, i) =>
          line.kind === 'cmd' ? (
            <div key={i}>
              <span className="text-accent-green">{PROMPT}</span> {line.text}
            </div>
          ) : line.href ? (
            <div key={i}>
              {/* desktop scroll engine intercepts these clicks; mobile falls back to the hash anchor */}
              <a
                href={line.href}
                data-project-link
                className="text-accent-blue underline-offset-4 hover:underline"
              >
                {line.text}
              </a>
            </div>
          ) : (
            <div key={i} className="text-paper/80">
              {line.text}
            </div>
          )
        )}
        <div>
          <span className="text-accent-green">{PROMPT}</span> {typing}
          <Cursor />
        </div>
      </div>
    </div>
  );
}
