import styled from 'styled-components';

export const H6 = styled.h2`
  font-size: ${(props) => props.theme.text.size.md};
  line-height: ${(props) => props.theme.text.lineHeight.md};
  font-weight: ${(props) => props.theme.fontWeight.normal};
  font-family: ${(props) => props.theme.font.default};
  color: ${(props) => props.theme.text.color.secondary};
`;
