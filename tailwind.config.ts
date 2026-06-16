import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        pearl:   '#F5F5F1',
        cobalt: {
          DEFAULT: '#1A4FAD',
          dark:    '#0F3580',
          light:   '#2D66CC',
        },
        'rose-gold': '#C4906A',
        gold:    '#C8A96E',
        ink:     '#0A0A0A',
        muted:   '#6B6B65',
        'glossy-black': '#1A1A1A',
      },
      fontFamily: {
        serif:  ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans:   ['var(--font-tenor)', 'system-ui', 'sans-serif'],
        mono:   ['var(--font-space-mono)', 'monospace'],
      },
      borderRadius: {
        steel: '10px',
        stamp: '17px',
      },
      spacing: {
        col:     '56px',
        section: '44px',
      },
      boxShadow: {
        'cmd-btn':
          '3px 3px 7px rgba(0,0,0,0.58), -1px -1px 3px rgba(255,255,255,0.10), inset 0 1.5px 2px rgba(255,255,255,0.20), inset 0 -2px 5px rgba(0,0,0,0.50)',
        'cmd-pressed':
          '1px 1px 3px rgba(0,0,0,0.72), inset 3px 3px 7px rgba(0,0,0,0.50), inset -1px -1px 2px rgba(255,255,255,0.06)',
        card:    '0 2px 16px rgba(26,79,173,0.07)',
        modal:   '0 28px 64px rgba(0,0,0,0.22)',
        stamp:   '1px 3px 6px rgba(26,79,173,0.18), 0 1px 2px rgba(0,0,0,0.10)',
      },
      backgroundImage: {
        'pearl-silk':
          'radial-gradient(ellipse at 18% 12%, #F9F9F5 0%, transparent 58%), radial-gradient(ellipse at 82% 88%, #ECEBE3 0%, transparent 52%), radial-gradient(ellipse at 55% 42%, #F1F0E8 0%, transparent 45%), linear-gradient(155deg, #F8F8F4 0%, #F1F0E8 45%, #EDECEA 100%)',
        'cobalt-bar':
          'linear-gradient(90deg, #0F3580 0%, #1A4FAD 50%, #0F3580 100%)',
        'cmd-btn':
          'radial-gradient(circle at 36% 30%, #4d84d8 0%, #2358b5 28%, #1A4FAD 54%, #0d3282 80%, #07205a 100%)',
        'modal-bg':
          'radial-gradient(ellipse at 30% 20%, #F9F9F5 0%, #EDECEA 100%)',
      },
      keyframes: {
        stampDrop: {
          from: { transform: 'scale(0.35) rotate(-14deg)', opacity: '0', filter: 'blur(5px)' },
          to:   { transform: 'scale(1) rotate(-5deg)',     opacity: '1', filter: 'blur(0)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(14px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        splitLeft: {
          to: { transform: 'translateX(-100%)' },
        },
        splitRight: {
          to: { transform: 'translateX(100%)' },
        },
      },
      animation: {
        'stamp-drop': 'stampDrop 0.75s cubic-bezier(0.34,1.56,0.64,1) both',
        'fade-up':    'fadeUp 0.9s ease both',
        'split-left':
