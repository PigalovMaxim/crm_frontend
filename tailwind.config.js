export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg': '#14142A',
        'element': '#16172A',
        'block': '#1F203C',
        'block-highlighted': '#3a3b69',
        'c-green': '#01953F',
        'c-green-light': '#13bd5a',
        'c-red': '#e51b00',
        'c-red-light': '#fc4a32',
        'c-red-dark': '#ad1400',
      },
      transitionProperty: {
        width: "width"
      },
      spacing: {
        '1/10': '10%',
        '2/10': '20%',
        '3/10': '30%',
        '4/10': '40%',
        '5/10': '50%',
        '6/10': '60%',
        '7/10': '70%',
        '8/10': '80%',
        '9/10': '90%',
        '10/10': '100%',
        'gap': '10px',
        'side-menu': '230px',
        'home-widget-height': '500px',
        'side-menu-closed': '70px',
        'min-screen-width': '1280px',
        'main-screen': 'calc(100% - 230px)',
        'main-screen-full': 'calc(100% - 70px)',
        'content-height': 'calc(100% - 56px)',
      }
    }
  },
  plugins: [],
}