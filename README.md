# lokie.in

My personal portfolio. One page, five sections, scrolled sideways.

Vertical wheel and trackpad input drives a horizontal camera pan across Hero, Origin, Arsenal,
Works and a closing scene. On small screens and for anyone with reduced motion turned on, the
whole mechanism drops away and the sections stack normally.

## Stack

- Next.js 14 (App Router) and TypeScript
- Tailwind CSS
- GSAP with ScrollTrigger for the scroll engine and every reveal

No animation library besides GSAP, no state library, no CMS. The site is fully static.

## Running it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm start       # serve the production build
npm run lint
```

## How it fits together

```
src/
  app/
    layout.tsx        fonts, metadata, nav
    page.tsx          renders the scroll container
    icon.ts           favicon, drawn from the theme colours
    globals.css       layout switch between filmstrip and stack, plus the z-scale
  components/
    HorizontalScroll  the scroll engine and the master timeline
    Terminal          the typewriter prop in the hero
    ProjectCard       project cards, styled as app windows
    Logomark          the </> mark
    WaveDivider       wavy seam where two section colours meet
    sections/         Hero, Origin, Arsenal, Works, Closing
  config/
    theme.js          every colour and font in the project
```

Two things worth knowing before editing:

**Colours and fonts live in `src/config/theme.js`.** `tailwind.config.js` imports from it, so
changing the palette or the type stack is a one file job. Nothing else should carry a hex value.

**The scroll layering is deliberate.** `.hscroll-track` is transformed, which makes it the
containing block for any fixed child, so the background texture layer lives inside the track and
the timeline counter-translates it to keep it still while the camera pans. Section colour sits at
the base, wave dividers at `z-10`, the texture layer at `z-20`, section content at `z-30`.

## Deploying

Built for Vercel. Push to `main` and it deploys; there is nothing to configure.
