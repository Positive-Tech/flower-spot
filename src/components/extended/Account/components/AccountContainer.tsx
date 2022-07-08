import styled from 'styled-components';

export const AccountContainer = styled.div`
  background: ${(props) => props.theme.text.color.tertiary};
  box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.05);
  border-radius: 3px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 440px;
`;
