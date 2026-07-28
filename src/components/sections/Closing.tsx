import Image from 'next/image';

// the resume overlay is the download link itself — a native <a download>, so it works even without JS
export default function Closing() {
  return (
    <div className="relative z-30 flex min-h-[100svh] w-full flex-col items-center justify-center px-[7vw] py-20 text-center">
      <h2
        data-reveal
        className="font-display text-5xl font-extrabold leading-[1.05] tracking-wordmark sm:text-6xl md:text-7xl"
      >
        Let&apos;s build
        <br />
        something<span className="text-accent-blue">.</span>
      </h2>

      {/* square render, so capping width against svh keeps the whole scene in one viewport */}
      <div data-reveal className="relative mt-8 w-[min(88vw,52svh)]">
        <Image
          src="/avatar-closing.png"
          alt="Illustration of Logesh winking and pointing at his resume"
          width={1254}
          height={1254}
          className="h-auto w-full"
        />
        {/* positioned over the sheet he holds in the render; percentages track the artwork */}
        <a
          href="/resume.pdf"
          download
          aria-label="Download resume (PDF)"
          className="group absolute left-[50.5%] top-[38%] flex h-[42%] w-[34%] rotate-[6deg] flex-col justify-between p-[3.5%] text-left"
        >
          <div className="mt-5">
            <span className="h-[0.45rem] font-semibold">My Resume</span>
            <div className="mt-[6%] h-[0.35rem] w-2/5 rounded bg-accent-blue" />
            <div className="mt-[10%] space-y-[6%]">
              <div className="h-[0.3rem] w-full rounded bg-ink/15" />
              <div className="h-[0.3rem] w-full rounded bg-ink/15" />
              <div className="h-[0.3rem] w-4/5 rounded bg-ink/15" />
            </div>
          </div>
          <div className="flex items-center justify-center gap-1.5 whitespace-nowrap rounded-md bg-ink px-1.8 py-[4%] font-body text-[0.5rem] font-semibold text-paper transition-colors duration-300 group-hover:bg-accent-blue sm:text-xs">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="shrink-0"
            >
              <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 19h16" />
            </svg>
            <span className="sm:hidden">Resume</span>
            <span className="hidden sm:inline">Download</span>
          </div>
        </a>
      </div>
    </div>
  );
}
