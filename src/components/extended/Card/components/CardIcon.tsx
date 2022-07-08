import styled from 'styled-components';

export const CardIcon = styled.div<{ isFav?: boolean }>`
  position: absolute;
  top: 20px;
  right: 20px;
  height: 30px;
  width: 30px;
  background-color: ${(props) =>
    props.isFav ? props.theme.text.color.accent : props.theme.text.color.tertiary};
  border-radius: 50%;
`;
