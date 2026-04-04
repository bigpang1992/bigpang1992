/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layouts/**/*.html',
    './content/**/*.md',
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          DEFAULT: '#00d4ff',
          50: '#e6fbff',
          100: '#b3f3ff',
          200: '#80ebff',
          300: '#4de3ff',
          400: '#1adbff',
          500: '#00d4ff',
          600: '#00a8cc',
          700: '#007d99',
          800: '#005266',
          900: '#002733',
        },
        neon: { pink: '#ff006e', violet: '#8b5cf6', gold: '#ffd700', green: '#00ff88' },
        dark: { DEFAULT: '#0a0a1a', alt: '#12122a', card: '#121230' },
      },
      fontFamily: {
        body: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'PingFang SC', 'Microsoft YaHei', 'sans-serif'],
        mono: ['JetBrains Mono', 'Courier New', 'monospace'],
      },
      maxWidth: { container: '1200px' },
      animation: {
        'glow': 'glow 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        glow: {
          '0%, 100%': { boxShadow: '0 4px 15px rgba(0,212,255,0.3)' },
          '50%': { boxShadow: '0 4px 30px rgba(0,212,255,0.6), 0 0 60px rgba(0,212,255,0.2)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    }
  },
  plugins: [],
}
