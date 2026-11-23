/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent: {
          editorial: '#8B7355',
          DEFAULT: '#8B7355',
        },
        industrial: {
          950: '#ffffff',
          900: '#f8fafc',
          850: '#f1f5f9',
          800: '#e2e8f0',
          750: '#cbd5e1',
          700: '#94a3b8',
          600: '#64748b',
          500: '#475569',
          400: '#334155',
          300: '#1e293b',
          200: '#0f172a',
          100: '#09090b',
          50: '#000000',
        },
        brand: {
          DEFAULT: '#7e22ce',
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#a855f7',
          500: '#9333ea',
          600: '#7e22ce',
          700: '#6b21a8',
          800: '#581c87',
          900: '#3b0764',
          950: '#2e0249',
        },
        metallic: {
          light: '#0f172a',
          silver: '#475569',
          dark: '#e2e8f0',
          steel: '#f8fafc'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        sora: ['Sora', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        caveat: ['Caveat', 'cursive'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'purple-glow': '0 4px 20px -2px rgba(126, 34, 206, 0.15)',
        'purple-glow-lg': '0 10px 30px -4px rgba(126, 34, 206, 0.25)',
        'metallic': '0 4px 12px -2px rgba(0, 0, 0, 0.08)',
      }
    },
  },
  plugins: [],
}
