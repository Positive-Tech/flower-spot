import styled from 'styled-components';

export const IconWrapper = styled.div`
  height: 20px;
  width: 20px;
  position: absolute;
  top: 26px;
  right: 19px;
  background-color: ${(props) => props.theme.text.color.accent};
  border-radius: 50%;
`;
