/** @type {import('tailwindcss').Config} */
    export default {
      content: [
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx}'
      ],
      theme: {
        extend: {
          fontFamily: {
            'orbitron': ['Orbitron', 'sans-serif'],
            'press-start': ['"Press Start 2P"', 'cursive'],
            'mono': ['"Space Mono"', 'monospace']
          },
          colors: {
            'matrix-green': '#00ff41',
            'cyber-purple': '#8a2be2',
            'neon-pink': '#ff00ff',
            'hacker-blue': '#00ffff',
            'terminal-black': '#0d0208',
            'cyber-yellow': '#ffff00',
            'neon-orange': '#ff5e00'
          },
          animation: {
            'glow': 'glow 2s ease-in-out infinite alternate',
            'terminal-typing': 'typing 3.5s steps(40, end)',
            'pulse-glow': 'pulse-glow 1.5s infinite'
          },
          keyframes: {
            glow: {
              '0%': { 'text-shadow': '0 0 5px #00ff41' },
              '100%': { 'text-shadow': '0 0 20px #00ff41, 0 0 30px #00ff41' }
            },
            typing: {
              '0%': { width: '0' },
              '100%': { width: '100%' }
            },
            'pulse-glow': {
              '0%, 100%': { 'box-shadow': '0 0 5px #00ff41' },
              '50%': { 'box-shadow': '0 0 20px #00ff41, 0 0 30px #00ff41' }
            }
          }
        }
      },
      plugins: []
    }
