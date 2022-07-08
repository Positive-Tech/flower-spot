import styled from 'styled-components';

export const H4 = styled.h1`
  font-size: ${(props) => props.theme.text.size.lg};
  line-height: ${(props) => props.theme.text.lineHeight.lg};
  font-weight: ${(props) => props.theme.fontWeight.normal};
  font-family: ${(props) => props.theme.font.default};
  color: ${(props) => props.theme.text.color.tertiary};
`;
