import styled from 'styled-components';
import { H7 } from '../../../typography/H7';

export const CardDesc = styled(H7)<{ mb?: string }>`
  margin-bottom: ${(props) => props.mb};
`;
