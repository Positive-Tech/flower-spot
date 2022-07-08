import styled from 'styled-components';

export const H1 = styled.h1`
  font-size: ${(props) => props.theme.text.size.xxl};
  line-height: ${(props) => props.theme.text.lineHeight.xxl};
  font-weight: ${(props) => props.theme.fontWeight.midBold};
  font-family: ${(props) => props.theme.font.default};
  color: ${(props) => props.theme.text.color.tertiary};
`;
