'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import Hero from '@/components/sections/Hero';
import Origin from '@/components/sections/Origin';
import Arsenal from '@/components/sections/Arsenal';
import Works from '@/components/sections/Works';
import Closing from '@/components/sections/Closing';
import WaveDivider from '@/components/WaveDivider';

// timeline units: 1 == one viewport of scroll; each section pans in, then dwells while its content reveals
const PAN = 1;
const DWELL_STORY = 1; // Origin holds longer for the word-by-word reveal
const DWELL = 0.7;
const DWELL_AT = [0, DWELL_STORY, DWELL, DWELL, DWELL]; // extra hold at each panel shift, indexed by shift

export default function HorizontalScroll() {
  const rootRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    const mm = gsap.matchMedia();

    // same query as the CSS layout switch in globals.css; outside it the panels just stack
    mm.add('(min-width: 768px) and (prefers-reduced-motion: no-preference)', () => {
      const track = trackRef.current;
      if (!track) return;
      const W = () => window.innerWidth;
      const paperLayer = track.querySelector<HTMLElement>('.paper-layer');
      const scrollHint = document.querySelector<HTMLElement>('#hero [data-scroll-hint]');

      const originTitle = gsap.utils.toArray<HTMLElement>('#origin [data-reveal]');
      const originWords = gsap.utils.toArray<HTMLElement>('#origin [data-word]');
      const originAvatar = gsap.utils.toArray<HTMLElement>('#origin [data-avatar]');
      const arsenalReveals = gsap.utils.toArray<HTMLElement>('#arsenal [data-reveal]');
      const worksReveals = gsap.utils.toArray<HTMLElement>('#works [data-reveal]');
      const closingReveals = gsap.utils.toArray<HTMLElement>('#closing [data-reveal]');

      // when each section is fully in view, and when its dwell ends
      const arrive = { origin: PAN } as Record<string, number>;
      const originEnd = arrive.origin + DWELL_STORY;
      arrive.arsenal = originEnd + PAN;
      const arsenalEnd = arrive.arsenal + DWELL;
      arrive.works = arsenalEnd + PAN;
      const worksEnd = arrive.works + DWELL;
      arrive.closing = worksEnd + PAN;

      // stagger that spreads n items of duration dur across span
      const fill = (n: number, dur: number, span: number) =>
        n > 1 ? (span - dur) / (n - 1) : 0;

      const tl = gsap.timeline({ defaults: { ease: 'none' } });

      // function-based x re-resolves on refresh, so resizing stays correct
      tl.to(track, { x: () => -1 * W(), duration: PAN }, 0);
      tl.to(track, { x: () => -2 * W(), duration: PAN }, originEnd);
      tl.to(track, { x: () => -3 * W(), duration: PAN }, arsenalEnd);
      tl.to(track, { x: () => -4 * W(), duration: PAN }, worksEnd);

      // mirrors the pans so the paper stays put while the camera moves across it
      if (paperLayer) {
        tl.to(paperLayer, { x: () => W(), duration: PAN }, 0);
        tl.to(paperLayer, { x: () => 2 * W(), duration: PAN }, originEnd);
        tl.to(paperLayer, { x: () => 3 * W(), duration: PAN }, arsenalEnd);
        tl.to(paperLayer, { x: () => 4 * W(), duration: PAN }, worksEnd);
      }

      if (scrollHint) {
        tl.to(scrollHint, { opacity: 0, duration: PAN * 0.5 }, 0);
        const arrow = scrollHint.querySelector('svg');
        if (arrow) gsap.to(arrow, { x: 10, duration: 1.1, repeat: -1, yoyo: true, ease: 'sine.inOut' });
      }

      // reveals are slotted into each section's dwell, while the track is held
      if (originTitle.length) {
        tl.from(originTitle, { opacity: 0, y: 28, duration: 0.5, ease: 'power2.out' }, arrive.origin - 0.5);
      }
      if (originWords.length) {
        tl.fromTo(
          originWords,
          { opacity: 0.15 },
          { opacity: 1, duration: 0.15, stagger: fill(originWords.length, 0.15, DWELL_STORY) },
          arrive.origin
        );
      }
      if (originAvatar.length) {
        tl.fromTo(
          originAvatar,
          { opacity: 0, x: 48 },
          { opacity: 1, x: 0, duration: 0.5, ease: 'power2.out' },
          arrive.origin + 0.2
        );
      }
      if (arsenalReveals.length) {
        tl.from(
          arsenalReveals,
          { opacity: 0, y: 24, duration: 0.3, stagger: fill(arsenalReveals.length, 0.3, DWELL), ease: 'power2.out' },
          arrive.arsenal
        );
      }
      if (worksReveals.length) {
        tl.from(
          worksReveals,
          { opacity: 0, y: 24, duration: 0.3, stagger: fill(worksReveals.length, 0.3, DWELL), ease: 'power2.out' },
          arrive.works
        );
      }
      if (closingReveals.length) {
        tl.from(
          closingReveals,
          { opacity: 0, y: 24, duration: 0.3, stagger: fill(closingReveals.length, 0.3, DWELL), ease: 'power2.out' },
          arrive.closing
        );
      }

      const st = ScrollTrigger.create({
        animation: tl,
        trigger: rootRef.current,
        pin: true,
        scrub: 1,
        end: () => '+=' + tl.duration() * W(),
        invalidateOnRefresh: true,
      });

      // terminal ls-name -> card jump: land on the card's panel fully parked and revealed, not
      // just camera-centered on the card -- a card left of its panel's centre (like the first
      // works card) would otherwise land mid-reveal, still at opacity 0
      const jumpToCard = (card: HTMLElement) => {
        const trackRect = track.getBoundingClientRect();
        const cardRect = card.getBoundingClientRect();
        const cardCentre = cardRect.left - trackRect.left + cardRect.width / 2;
        const shift = (cardCentre - window.innerWidth / 2) / window.innerWidth;
        const panel = Math.round(shift);
        let time = panel;
        for (let k = 1; k <= panel; k++) time += DWELL_AT[k];
        const progress = gsap.utils.clamp(0, 1, time / tl.duration());
        gsap.to(window, {
          duration: 1,
          ease: 'power2.inOut',
          scrollTo: st.start + progress * (st.end - st.start),
        });
        card.classList.add('ring-4', 'ring-accent-blue');
        window.setTimeout(() => card.classList.remove('ring-4', 'ring-accent-blue'), 2600);
      };

      const onTrackClick = (e: Event) => {
        const link = (e.target as HTMLElement).closest('[data-project-link]');
        if (!link) return;
        const id = link.getAttribute('href')?.slice(1);
        const card = id ? document.getElementById(id) : null;
        if (!card) return;
        e.preventDefault();
        jumpToCard(card);
      };
      track.addEventListener('click', onTrackClick);

      // matchMedia reverts the GSAP work itself; the DOM listener needs manual cleanup
      return () => track.removeEventListener('click', onTrackClick);
    });

    // vertical stack gets its own lighter animations: fade-ups per element plus the word read-along
    mm.add('(max-width: 767.98px) and (prefers-reduced-motion: no-preference)', () => {
      const reveals = gsap.utils.toArray<HTMLElement>(
        '.hscroll-panel [data-reveal], .hscroll-panel [data-avatar]'
      );
      reveals.forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 24,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 85%', once: true },
        });
      });

      const words = gsap.utils.toArray<HTMLElement>('#origin [data-word]');
      if (words.length) {
        gsap.fromTo(
          words,
          { opacity: 0.15 },
          {
            opacity: 1,
            stagger: 0.02,
            ease: 'none',
            scrollTrigger: {
              trigger: '#origin [data-scrub]',
              start: 'top 75%',
              end: 'bottom 55%',
              scrub: true,
            },
          }
        );
      }

    });

    return () => mm.revert();
  }, []);

  return (
    <main ref={rootRef} className="hscroll">
      <div ref={trackRef} className="hscroll-track">
        <div className="paper-layer" aria-hidden="true" />
        <section id="hero" className="hscroll-panel relative overflow-hidden bg-background-hero">
          <Hero />
        </section>
        <section id="origin" className="hscroll-panel relative bg-background-origin">
          <Origin />
        </section>
        {/* background steps down from white here — wave the boundary */}
        <section id="arsenal" className="hscroll-panel relative bg-background-arsenal">
          <WaveDivider fillClass="fill-background-arsenal" />
          <Arsenal />
        </section>
        <section id="works" className="hscroll-panel relative bg-background-works">
          <Works />
        </section>
        {/* background steps down again — wave the boundary */}
        <section id="closing" className="hscroll-panel relative bg-background-closing">
          <WaveDivider fillClass="fill-background-closing" />
          <Closing />
        </section>
      </div>
    </main>
  );
}
