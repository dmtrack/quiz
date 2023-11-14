import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'background-color': 'var(--background-color)',
            },
            colors: {
                'accent-color': 'var(--accent-color)',
                'font-gray': 'var(--font-color)',
                'shadow-base': 'var(--shadow-base)',
            },
            fontFamily: {
                sans: ['Helvetica Neue'],
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
};
export default config;
