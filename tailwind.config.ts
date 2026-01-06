import type { Config } from 'tailwindcss';
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F2C94C',
        accent: '#F2C94C',
        navy: '#1F4E78',
        surface: '#ffffff',
        muted: '#6B7280',
        border: '#E6E7EB'
      },
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui']
      }
    }
  },
  plugins: []
};
export default config;
