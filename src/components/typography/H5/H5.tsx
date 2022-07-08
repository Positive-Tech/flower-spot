import styled from 'styled-components';
import { ColorVariants } from '../../../styled';

type Props = {
  variant?: keyof ColorVariants;
};
export const H5 = styled.h2<Props>`
  font-size: ${(props) => props.theme.text.size.xl};
  line-height: ${(props) => props.theme.text.lineHeight.md};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  font-family: ${(props) => props.theme.font.default};
  color: ${(props) => props.theme.text.color[props.variant!]};
`;

H5.defaultProps = {
  variant: 'accent'
};
