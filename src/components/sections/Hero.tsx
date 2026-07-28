import Image from 'next/image';
import Terminal from '@/components/Terminal';
import Logomark from '@/components/Logomark';

export default function Hero() {
  return (
    <div className="relative z-30 h-[100svh] w-full overflow-hidden">
      <div className="absolute left-[7vw] top-[11%] z-20 max-w-3xl md:top-1/2 md:-translate-y-1/2">
        <h1 className="font-display text-6xl font-extrabold leading-[0.92] tracking-wordmark sm:text-7xl md:text-8xl lg:text-9xl">
          Lokie
          <span className="text-accent-yellow">.</span>
        </h1>
        <p className="mt-5 max-w-md font-body text-base text-ink/60 sm:text-lg">
          Software engineer who <span className="text-accent-blue">actually cares</span>{' '}
          what it looks like.
        </p>
      </div>

      <Logomark className="absolute right-[7vw] top-[11%] z-10 w-[24vw] max-w-[120px] md:top-[26%] md:w-[15vw] md:max-w-[280px]" />

      <Image
        src="/avatar-hero.png"
        alt="Illustration of Logesh with arms crossed"
        width={1254}
        height={1254}
        priority
        className="absolute bottom-[26vh] left-1/2 z-10 h-[38vh] w-auto -translate-x-1/2 md:bottom-[24vh] md:h-[52vh]"
      />

      {/* not a control, just an affordance for the sideways scroll -- desktop only, the
          mobile stack scrolls vertically so "this way" has nothing to point at */}
      <div
        data-scroll-hint
        aria-hidden="true"
        className="absolute right-[5vw] top-auto z-20 hidden items-start gap-6 font-body text-5xl text-ink/70 md:bottom-[12%] md:flex"
      >
        <p className="leading-[1.1]">
          Exhibition <span className="block">this way</span>
        </p>
        <span className="mt-[0.35em] inline-block shrink-0">
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 12h17M14 6l6 6-6 6" />
          </svg>
        </span>
      </div>

      {/* terminal docked half off-screen */}
      <div className="absolute bottom-0 left-1/2 z-30 w-[92%] max-w-xl -translate-x-1/2 translate-y-1/2">
        <Terminal />
      </div>
    </div>
  );
}
