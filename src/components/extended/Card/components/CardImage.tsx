import styled from 'styled-components';
import card from '../../../../assets/png/card.png';

export const CardImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;

  height: 100%;
  width: 100%;
  padding: 20px;
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.7) 89.5%),
    url(${card});
  background-size: cover;
  background-position: top;
  position: relative;

  border-radius: 3px;
`;
