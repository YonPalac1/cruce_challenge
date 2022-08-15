module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Bebas Neue',
      body: 'Inter',
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '3rem',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#505050',
        tertiary: '#7D5A94',
        green: '#76B043',
        red: '#EC2227',
        orange: '#F26522',
        accent: {
          DEFAULT: '#16F1FF',
          hover: '#BEF2F5',
        },
        paragraph: '#878e99',
      },
    },
  },
  plugins: [],
};
