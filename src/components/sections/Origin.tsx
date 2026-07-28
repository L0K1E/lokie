import Image from 'next/image';

// each word is a span the scroll timeline brightens in sequence (see HorizontalScroll)
const STORY: { t: string; accent?: string }[] = [
  { t: 'Ever since I was a kid I have been fascinated by computers. They felt a little ' },
  { t: 'magical', accent: 'text-accent-yellow' },
  { t: ' — I was endlessly curious about how they worked. Third grade. We got our first one, an early-2000s desktop with a bulky ' },
  { t: 'CRT', accent: 'text-accent-orange' },
  { t: " monitor, and like most kids I spent hours playing games on it. Then one day I picked up my brother's 12th-grade computer science textbook and tried the exercises myself. That was my introduction to " },
  { t: 'HTML and CSS', accent: 'text-accent-blue' },
  { t: '. Later I did the same with ' },
  { t: 'C', accent: 'text-accent-green' },
  { t: ' — experimenting, making mistakes, figuring it out. I never waited for a classroom. ' },
  { t: 'That habit of teaching myself stuck', accent: 'text-accent-blue' },
  { t: ', and it still shapes how I pick up anything new.' },
];

type Token = { w: string; accent?: string } | { space: true };

function tokenize(segments: { t: string; accent?: string }[]): Token[] {
  const tokens: Token[] = [];
  segments.forEach((seg) => {
    seg.t.split(/(\s+)/).forEach((part) => {
      if (part === '') return;
      if (/^\s+$/.test(part)) tokens.push({ space: true });
      else tokens.push({ w: part, accent: seg.accent });
    });
  });
  return tokens;
}

const TOKENS = tokenize(STORY);

export default function Origin() {
  return (
    <div className="relative z-30 flex min-h-[100svh] w-full flex-col justify-center px-[7vw] py-24">
      <h2
        data-reveal
        className="mb-10 font-display text-7xl font-extrabold tracking-wordmark md:text-8xl"
      >
        Origin<span className="text-accent-yellow">.</span>
      </h2>

      <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:gap-[4vw]">
        <p
          data-scrub
          className="font-body text-lg font-medium leading-relaxed text-ink md:max-w-xl md:text-xl md:leading-[1.6] lg:max-w-2xl"
        >
          {TOKENS.map((token, i) =>
            'space' in token ? (
              ' '
            ) : (
              <span key={i} data-word className={token.accent}>
                {token.w}
              </span>
            )
          )}
        </p>

        <Image
          data-avatar
          src="/avatar-origin.png"
          alt="Illustration of a kid writing his first HTML on a CRT computer"
          width={1402}
          height={1122}
          className="w-full max-w-md md:w-[36vw] md:max-w-[560px]"
        />
      </div>
    </div>
  );
}
