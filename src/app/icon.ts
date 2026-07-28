import { LOGOMARK_PATHS, LOGOMARK_VIEWBOX } from '@/components/Logomark';
import theme from '@/config/theme';

export const contentType = 'image/svg+xml';
export const size = { width: 64, height: 64 };

const { yellow, blue, green } = theme.colors.accent;
const FILLS = [yellow, blue, green];

// the mark is much wider than it is tall, so it is padded into a square viewBox to sit right in a tab
const PAD_X = 6;
const [, , markWidth, markHeight] = LOGOMARK_VIEWBOX.split(' ').map(Number);
const boxWidth = markWidth + PAD_X * 2;
const offsetY = (boxWidth - markHeight) / 2;

export default function Icon() {
  const paths = LOGOMARK_PATHS.map((d, i) => `<path d="${d}" fill="${FILLS[i]}"/>`).join('');

  return new Response(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${boxWidth} ${boxWidth}">` +
      `<g transform="translate(${PAD_X} ${offsetY})">${paths}</g>` +
      `</svg>`,
    { headers: { 'Content-Type': contentType } }
  );
}
