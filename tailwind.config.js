/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#e7eaef',      // app background / letterbox
        surface: '#f1f3f6',     // screen canvas
        navy: '#0f1b34',        // primary dark
        accent: '#1f7ae0',      // links / accents
        ink: '#12326e',         // buttons / active state
        muted: '#5b6478',       // secondary text
        hairline: '#d7dce6',    // borders
        hairline2: '#dde2ec',   // borders (lighter)
        success: '#3d9a6b',
        warning: '#e6b45a',
        wash: '#f4f8fe',        // pale blue info panels
        amberwash: '#fdf6ec',   // pale amber warning panels
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        app: '430px',
      },
      borderRadius: {
        card: '20px',
      },
      keyframes: {
        rise: { from: { opacity: '0', transform: 'translateY(10px)' }, to: { opacity: '1', transform: 'none' } },
        sheet: { from: { transform: 'translateY(100%)' }, to: { transform: 'none' } },
      },
      animation: {
        rise: 'rise .35s ease-out',
        sheet: 'sheet .3s ease-out',
      },
    },
  },
  plugins: [],
}
