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
      },
      // overwrite dark theme properties
      dark: {
      //   colors: {
      //   danger100: '#24292d', // TOGGLE OFF BG
      //   danger700: '#bf4c69', // TOGGLE OFF COLOR
      //   neutral0: '#1f2428', // BACKGROUND SIDEBAR
      //   neutral100: '#24292d', // BACKGROUND CONTENT
      //   neutral150: '#1f2428', // DISABLED BUTTON BG
      //   neutral200: '#1e2327', // LINE THROUGH MIDDLE
      //   neutral500: '#9b9faa', // MENU IDLE COLOR
      //   neutral600: '#9b9faa', // MENU HOVER COLOR
      //   neutral700: '#9b9faa', // MENU ACTIVE ICON COLOR
      //   neutral800: '#74787b', // TITLE COLORS
      //   neutral900: '#24292d', // TOOLTIP BG
      //   primary100: '#24292d', // MENU ACTIVE BG
      //   primary200: '#1f2428', // PLUS SIGN BG
      //   primary500: '#6584ac', // PRIMARY BUTTON HOVER
      //   primary600: '#7d9fbf', // PRIMARY BUTTON COLOR
      //   primary700: '#af5d6c', // HIGHLIGHT COLOR
      //   secondary100: '#1f2428', // INFO BOX COLOR
      //   success100: '#1f2428', // SUCCESS BOX BG
      // }
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
