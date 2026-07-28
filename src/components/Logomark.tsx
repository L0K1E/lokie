// outlined </> mark; paths carry no font dependency so the same shapes drive the favicon
export const LOGOMARK_VIEWBOX = '0 0 198.15 117.3';

export const LOGOMARK_PATHS = [
  'm60.6,93L0,69.15v-27.45l60.6-23.85v23.4l-40.35,13.65v.6l40.35,14.1v23.4Z',
  'm69.9,117.3L105.45,0h22.8l-35.55,117.3h-22.8Z',
  'm137.55,93v-23.4l40.35-14.1v-.6l-40.35-13.65v-23.4l60.6,23.85v27.45l-60.6,23.85Z',
];

const FILLS = ['fill-accent-yellow', 'fill-accent-blue', 'fill-accent-green'];

export default function Logomark({ className }: { className?: string }) {
  return (
    <svg viewBox={LOGOMARK_VIEWBOX} aria-hidden="true" className={className}>
      {LOGOMARK_PATHS.map((d, i) => (
        <path key={d} d={d} className={FILLS[i]} />
      ))}
    </svg>
  );
}
