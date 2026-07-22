// wavy edge where two sections of different background meet; orientation follows the layout (globals.css)

const SIZE = 72; // divider thickness in px
const VBOX = 900; // stretched to the panel's length via preserveAspectRatio="none"

function verticalPath(w: number, h: number, humps: number, amp: number) {
  const cx = w / 2;
  const step = h / (humps * 2);
  let d = `M ${w} 0 L ${cx} 0`;
  for (let i = 1; i <= humps * 2; i++) {
    const ctrlX = i % 2 === 1 ? cx + amp : cx - amp;
    d += ` Q ${ctrlX} ${step * (i - 0.5)} ${cx} ${step * i}`;
  }
  return `${d} L ${w} ${h} Z`;
}

function horizontalPath(w: number, h: number, humps: number, amp: number) {
  const cy = h / 2;
  const step = w / (humps * 2);
  let d = `M 0 ${h} L 0 ${cy}`;
  for (let i = 1; i <= humps * 2; i++) {
    const ctrlY = i % 2 === 1 ? cy - amp : cy + amp;
    d += ` Q ${step * (i - 0.5)} ${ctrlY} ${step * i} ${cy}`;
  }
  return `${d} L ${w} ${h} Z`;
}

export default function WaveDivider({ fillClass }: { fillClass: string }) {
  return (
    <>
      <div
        aria-hidden="true"
        className="wave-desktop pointer-events-none absolute left-0 top-0 z-10 h-full w-[72px] -translate-x-full"
      >
        <svg viewBox={`0 0 ${SIZE} ${VBOX}`} preserveAspectRatio="none" className="h-full w-full">
          <path d={verticalPath(SIZE, VBOX, 7, 26)} className={fillClass} />
        </svg>
      </div>
      <div
        aria-hidden="true"
        className="wave-mobile pointer-events-none absolute left-0 top-0 z-10 h-[72px] w-full -translate-y-full"
      >
        <svg viewBox={`0 0 ${VBOX} ${SIZE}`} preserveAspectRatio="none" className="h-full w-full">
          <path d={horizontalPath(VBOX, SIZE, 6, 24)} className={fillClass} />
        </svg>
      </div>
    </>
  );
}
