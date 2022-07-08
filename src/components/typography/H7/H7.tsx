import styled from 'styled-components';

export const H7 = styled.h2`
  font-size: ${(props) => props.theme.text.size.xs};
  line-height: ${(props) => props.theme.text.lineHeight.xs};
  font-weight: ${(props) => props.theme.fontWeight.normal};
  font-family: ${(props) => props.theme.font.default};
  color: ${(props) => props.theme.text.color.tertiary};
`;
