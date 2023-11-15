import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundColor: {
                'cool-gray': 'var(--background-color)',
            },

            colors: {
                'accent-color': 'var(--accent-color)',
                'font-gray': 'var(--font-gray)',
                'shadow-base': 'var(--shadow-base)',
            },
            fontFamily: {
                sans: ['Helvetica Neue'],
            },
            animation: {
                wiggle: 'wiggle 120s linear',
            },
            keyframes: {
                wiggle: {
                    '0%': {
                        width: '100%',
                    },
                    '100%': {
                        width: '0%',
                    },
                },
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
};
export default config;
