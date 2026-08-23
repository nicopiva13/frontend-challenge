/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // Design tokens taken from the Figma / DESIGN.md.
      colors: {
        banner: '#F5F5F5', // banner background
        ink: '#121212', // titles
        muted: '#494B4D', // body copy
        brand: '#00C266', // green quarter-circles & accents
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'sans-serif'], // titles
        body: ['Manrope', 'sans-serif'], // body copy
      },
      borderRadius: {
        media: '20px', // image corners (per Figma)
      },
    },
    screens: {
      // Single responsive band from the design: the "1024px" compact desktop.
      // Desktop-first — base styles are the full 1440 desktop; `laptop:` compacts
      // them (same row layout, smaller sizes) at 1430px and below. It never stacks.
      laptop: { max: '1430px' },
    },
  },
  plugins: [],
}
