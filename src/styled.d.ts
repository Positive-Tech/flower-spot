import 'styled-components';
//10 12 14 18 20 40
export type TextVariants = {
  xxl: string;
  xl: string;
  lg: string;
  md: string;
  sm: string;
  xs: string;
};
export type ColorVariants = {
  primary: string;
  secondary: string;
  accent: string;
  tertiary: string;
};

declare module 'styled-components' {
  export interface DefaultTheme {
    background: {
      default: string;
      primary: string;
      secondary: string;
    };
    font: {
      default: string;
    };
    fontWeight: {
      bold: number;
      midBold: number;
      semiBold: number;
      normal: number;
    };
    text: {
      size: TextVariants;
      lineHeight: TextVariants;
      color: ColorVariants;
    };
  }
}
