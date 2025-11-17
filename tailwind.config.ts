import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif']
      },
      colors: {
        indigo: {
          950: '#0A0D2D'
        },
        accent: '#7C3AED',
        highlight: '#F59E0B'
      },
      boxShadow: {
        glow: '0 30px 60px -15px rgba(124, 58, 237, 0.45)'
      }
    }
  },
  plugins: []
};

export default config;
