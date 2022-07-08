import styled from 'styled-components';
import hero from '../../../assets/png/hero.png';

export const HomeImage = styled.div`
  display: flex;
  height: 500px;
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.8) 100%),
    url(${hero});
  background-size: cover;
  background-position: top;
  position: relative;
  margin-bottom: 69px;
`;
