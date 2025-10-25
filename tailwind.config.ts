import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}','./components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#F8F5F0',
        ink: '#3B3B3B',
        gold: { light: '#F8E8A1', DEFAULT: '#D4AF37', dark: '#B38E1E' },
      },
      boxShadow: {
        card: '0 10px 25px rgba(212,175,55,0.08)',
        soft: '0 8px 20px rgba(0,0,0,0.06)',
      },
      borderRadius: { xl2: '1.25rem' },
    },
  },
  plugins: [],
} satisfies Config
