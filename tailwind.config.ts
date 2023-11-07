import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        'primary': '#231f20',
        'secondary': '#f8f6e7',
      },
      textColor: {
        'primary': '#3490dc',
      },
      fontFamily: {
        'primary': ['Roboto', "sans-serif"],
        'secondary': ['var(--font-avo)'],
      },

    },
  },
  plugins: [],
}
export default config
