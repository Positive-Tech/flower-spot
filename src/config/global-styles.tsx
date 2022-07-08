import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle(
  ({ theme }) => `
  body {
    background: ${theme.background.default};
    font-family: ${theme.font.default};
    font-size: ${theme.text.size.md};
    color: ${theme.text.color.primary};
  }
`
);
