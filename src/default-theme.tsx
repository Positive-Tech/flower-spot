import { DefaultTheme } from 'styled-components';

export const defaultTheme: DefaultTheme = {
  background: {
    default: '#FFFFFF',
    primary: '#ECF0F3BF',
    secondary: '#DFE5EA'
  },
  font: {
    default: 'Nunito, sans-serif'
  },
  fontWeight: {
    bold: 700,
    midBold: 600,
    semiBold: 500,
    normal: 400
  },
  text: {
    size: {
      xxl: '40px',
      xl: '20px',
      lg: '18px',
      md: '14px',
      sm: '12px',
      xs: '10px'
    },
    lineHeight: {
      xxl: '40px',
      xl: '20px',
      lg: '18px',
      md: '14px',
      sm: '12px',
      xs: '10px'
    },
    color: {
      primary: '#334144', //tamna crna
      secondary: '#949EA0', //siva
      tertiary: '#FFFFFF', //bela
      accent: '#EAA79E' //naran
    }
  }
};
