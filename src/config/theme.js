// Single source of truth for colors and fonts; tailwind.config.js imports from here.

const colors = {
  background: {
    hero: '#FFFFFF',
    origin: '#FFFFFF',
    arsenal: '#F1F1F0',
    works: '#F1F1F0',
    closing: '#E6E6E6',
  },
  accent: {
    yellow: '#F0C020',
    blue: '#3D98EC',
    green: '#54CE51',
    orange: '#F2994A',
  },
  ink: '#000000',
  paper: '#FFFFFF',
};

const fonts = {
  display: ['var(--font-bricolage)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
  body: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
  mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'Liberation Mono', 'monospace'],
};

module.exports = { colors, fonts };
