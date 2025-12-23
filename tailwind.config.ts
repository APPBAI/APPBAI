import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                black: {
                    DEFAULT: '#000000',
                    soft: '#0a0a0a',
                    medium: '#141414',
                },
                white: {
                    DEFAULT: '#ffffff',
                    soft: '#f5f5f5',
                },
                gray: {
                    100: '#e5e5e5',
                    200: '#cccccc',
                    300: '#b3b3b3',
                    400: '#999999',
                    500: '#808080',
                    600: '#666666',
                    700: '#4d4d4d',
                    800: '#333333',
                    900: '#1a1a1a',
                },
            },
            fontFamily: {
                display: ['var(--font-display)', 'system-ui', 'sans-serif'],
                body: ['var(--font-body)', 'system-ui', 'sans-serif'],
            },
            fontSize: {
                // Editorial scale with dramatic jumps - balanced for impact and fit
                'display-xl': ['clamp(4rem, 15vw, 12rem)', { lineHeight: '0.85', letterSpacing: '-0.05em', fontWeight: '700' }],
                'display-lg': ['clamp(3rem, 10vw, 8rem)', { lineHeight: '0.9', letterSpacing: '-0.04em', fontWeight: '700' }],
                'display-md': ['clamp(2.5rem, 7vw, 5rem)', { lineHeight: '1', letterSpacing: '-0.02em', fontWeight: '600' }],
                'display-sm': ['clamp(1.75rem, 4vw, 3rem)', { lineHeight: '1.1', letterSpacing: '-0.01em', fontWeight: '600' }],
                'body-lg': ['1.25rem', { lineHeight: '1.6', letterSpacing: '0', fontWeight: '400' }],
                'body-md': ['1rem', { lineHeight: '1.6', letterSpacing: '0', fontWeight: '400' }],
                'body-sm': ['0.875rem', { lineHeight: '1.5', letterSpacing: '0.01em', fontWeight: '400' }],
            },
            animation: {
                // Slow, confident animations
                'fade-in-slow': 'fadeIn 1.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                'slide-up-slow': 'slideUp 2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                'reveal-text': 'revealText 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(60px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                revealText: {
                    '0%': { clipPath: 'inset(0 100% 0 0)' },
                    '100%': { clipPath: 'inset(0 0 0 0)' },
                },
            },
            transitionDuration: {
                '1200': '1200ms',
                '1500': '1500ms',
                '2000': '2000ms',
            },
            transitionTimingFunction: {
                'confident': 'cubic-bezier(0.16, 1, 0.3, 1)',
            },
        },
    },
    plugins: [],
};

export default config;
