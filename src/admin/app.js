import favicon from './extensions/favicon.png'
import AuthLogo from './extensions/favicon.png'
import MenuLogo from './extensions/favicon.png'

export default {
  config: {
    head: {
      favicon: favicon,
    },
    auth: {
      logo: AuthLogo,
    },
    menu: {
      logo: MenuLogo,
    },
    // Override or extend the theme
    theme: {
       // overwrite default theme properties
      colors: {
        buttonPrimary600: '#D14532', // main button colour
        buttonPrimary500: '#B03A2A', // main button hover styles colour

        primary100: '#F5E7E5', // lightopacity background background
        primary600: '#D14532', // avatar background colour + content manager & collection type "right bar active"
        primary200: '#D14532', // border color
        primary400: '#D14532', // 
        primary500: '#D14532', // 
        primary700: '#D14532', // 

        // neutral500: '#D14532', // text ??
        // neutral600: '#D14532', // text ??
      },
       // overwrite light theme properties
      light: {
          // ...
      },
      // overwrite dark theme properties
      dark: {
         // ...
      }
    },
    // Disable video tutorials
    tutorials: false,
    // Disable notifications about new Strapi releases
    notifications: { release: false },
  },
  bootstrap(app) {
    console.log(app);
  },
};
