import styled from 'styled-components';

export const AccountInfo = styled.div`
  display: flex;

  & > * {
    &:not(:last-child) {
      margin-right: 10px;
    }
  }
`;
