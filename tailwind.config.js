module.exports = {
  purge: {
    mode: 'layers',
    layers: ['base', 'components', 'utilities'],
    content: [
      './src/**/*.html',
      './src/**/*.vue'
    ]
  },
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
    container: {
      center: true,
      padding: {
        default: '1rem',
        sm: '2rem',
        lg: '3rem',
        xl: '4rem'
      }
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', 'Noto Sans TC'],
        mono: ['Inter var', 'Noto Sans TC']
      }
    }
  },
  variants: {},
  plugins: [
    // require('@tailwindcss/ui'),
    // require('@tailwindcss/custom-forms'),
  ]
}
