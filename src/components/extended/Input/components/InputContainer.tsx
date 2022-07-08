import styled from 'styled-components';

export const InputContainer = styled.input`
  background: ${(props) => props.theme.text.color.tertiary};
  box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.05);
  border-radius: 3px;

  border: none;
  outline: none;
  padding: 26px 19px;
  text-align: left;
  width: 100%;

  font-size: ${(props) => props.theme.text.size.lg};
  line-height: ${(props) => props.theme.text.lineHeight.lg};
  font-weight: ${(props) => props.theme.fontWeight.normal};
  font-family: ${(props) => props.theme.font.default};
  color: ${(props) => props.theme.text.color.secondary};
`;
