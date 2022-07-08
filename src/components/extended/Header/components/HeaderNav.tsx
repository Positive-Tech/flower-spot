import styled from 'styled-components';

export const HeaderNav = styled.nav`
  display: flex;
  flex-direction: row;
  cursor: pointer;

  li {
    &:not(:last-child) {
      padding-right: 57px;
    }
  }

  ul {
    display: flex;
    align-items: center;
  }
`;
