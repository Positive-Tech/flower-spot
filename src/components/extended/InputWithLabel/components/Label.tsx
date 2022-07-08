import styled from 'styled-components';
import { H7 } from '../../../typography/H7';

export const Label = styled(H7)`
  position: absolute;
  top: 11px;
  left: 15px;
  margin-bottom: 7px;
  color: ${(props) => props.theme.text.color.secondary};
`;
