const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    textDecoration: ['responsive', 'hover', 'focus', 'group-hover'],
    extend: {
      cursor: ['hover', 'focus'],
    },
  },
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',
      gray: defaultTheme.colors.gray,
      primary: defaultTheme.colors.red,
      secondary: defaultTheme.colors.purple,
      tertiary: defaultTheme.colors.amber,
      link: defaultTheme.colors.blue,
    },
    inset: {
      0: 0,
      auto: 'auto',
      '1/2': '50%',
      0.25: '0.0875rem',
      0.5: '0.175rem',
      1: '0.25rem',
      1.5: '0.375rem',
      2: '0.5rem',
      2.5: '0.625rem',
      3: '0.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem',
      32: '8rem',
      '-1': '-0.25rem',
      '-2': '-0.5rem',
      '-3': '-0.75rem',
      '-4': '-1rem',
      '-6': '-1.5rem',
      '-8': '-2rem',
      '-20': '-5rem',
    },
    extend: {
      height: {
        '5/6': '83.3333%',
      },
      fontSize: {
        '10xl': '10rem',
      },
    },
  },
};
