import Image from 'next/image';

// each word is a span the scroll timeline brightens in sequence (see HorizontalScroll)
const STORY: { t: string; accent?: string }[] = [
  { t: 'As a kid, computers felt a little ' },
  { t: 'magical', accent: 'text-accent-yellow' },
  { t: ' — I was endlessly curious how they worked. Our first one arrived in third grade: a bulky early-2000s ' },
  { t: 'CRT', accent: 'text-accent-orange' },
  { t: ". Out of curiosity I opened my brother's 12th-grade computer science textbook and worked the exercises myself. That was " },
  { t: 'HTML and CSS', accent: 'text-accent-blue' },
  { t: '. ' },
  { t: 'C', accent: 'text-accent-green' },
  { t: ' came next, the same way — experimenting, breaking things, figuring it out. No classroom, no curriculum. ' },
  { t: 'I still learn that way today', accent: 'text-accent-blue' },
  { t: '.' },
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
    <div className="flex min-h-[100svh] w-full flex-col justify-center px-[7vw] py-24">
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
