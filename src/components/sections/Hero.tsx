import Image from 'next/image';
import Terminal from '@/components/Terminal';

export default function Hero() {
  return (
    <div className="relative h-[100svh] w-full overflow-hidden">
      {/* decorative backdrop */}
      <svg
        aria-hidden="true"
        viewBox="0 0 400 400"
        fill="none"
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[74vh] w-[74vh] -translate-x-1/2 -translate-y-[44%]"
      >
        <circle cx="176" cy="212" r="118" className="fill-accent-yellow" />
        <path
          d="M250 96 A142 142 0 0 1 250 328"
          className="stroke-accent-blue"
          strokeWidth="30"
          strokeLinecap="round"
        />
        <path
          d="M256 140 A100 100 0 0 1 256 284"
          className="stroke-accent-green"
          strokeWidth="26"
          strokeLinecap="round"
        />
        <circle cx="66" cy="120" r="19" className="fill-accent-orange" />
        <circle cx="48" cy="182" r="13" className="fill-accent-orange" />
      </svg>

      <div className="absolute left-[7vw] top-[13%] z-20 max-w-3xl">
        <h1 className="font-display text-6xl font-extrabold leading-[0.92] tracking-wordmark sm:text-7xl md:text-8xl">
          Lokie
          <span className="text-accent-yellow">.</span>
        </h1>
        {/* tagline is still draft copy */}
        <p className="mt-5 max-w-md font-body text-base text-ink/60 sm:text-lg">
          Full-stack engineer with a <span className="text-accent-blue">design eye</span>{' '}
          most developers skip.
        </p>
      </div>

      <Image
        src="/avatar-hero.png"
        alt="Illustration of Logesh with arms crossed"
        width={1254}
        height={1254}
        priority
        className="absolute bottom-[8vh] left-1/2 z-10 h-[52vh] w-auto -translate-x-1/2"
      />

      {/* terminal docked half off-screen */}
      <div className="absolute bottom-0 left-1/2 z-30 w-[92%] max-w-xl -translate-x-1/2 translate-y-1/2">
        <Terminal />
      </div>
    </div>
  );
}
