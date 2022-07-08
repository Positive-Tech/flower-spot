import styled from 'styled-components';

export const FlowersListContainer = styled.div`
  display: grid;
  margin-left: 20px;
  margin-right: 20px;

  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 350px);
  grid-gap: 20px;

  margin-bottom: 69px;
`;
