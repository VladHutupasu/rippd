import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        cupcake: {
          ...require('daisyui/src/theming/themes')['cupcake'],
          'base-100': '#f5f4f1',
        },
      },
    ],
  },
};
export default config;
