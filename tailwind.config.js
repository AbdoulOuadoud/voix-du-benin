/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'vert-beninois': 'var(--vert-beninois)',
        'jaune-sable': 'var(--jaune-sable)',
        'rouge-terre': 'var(--rouge-terre)',
        'texte-principal': 'var(--texte-principal)',
        'texte-secondaire': 'var(--texte-secondaire)',
      },
      backgroundColor: {
        'primary': 'var(--vert-beninois)',
        'secondary': 'var(--jaune-sable)',
        'danger': 'var(--rouge-terre)',
      },
      textColor: {
        'primary': 'var(--texte-principal)',
        'secondary': 'var(--texte-secondaire)',
        'light': 'var(--text-light)',
      },
      borderColor: {
        'primary': 'var(--vert-beninois)',
        'secondary': 'var(--jaune-sable)',
        'danger': 'var(--rouge-terre)',
      },
      fontFamily: {
        'satoshi': ['Satoshi', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        'custom': '0 4px 20px rgba(0, 0, 0, 0.05)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}