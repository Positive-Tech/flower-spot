import { ForwardedRef, forwardRef, HTMLProps } from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button<HTMLProps<HTMLButtonElement> & { variant: string }>`
  box-shadow: 0px 15px 20px rgba(234, 168, 159, 0.2);
  border-radius: 3px;
  border: none;
  outline: none;
  padding: 18px 22px;
  cursor: pointer;
  width: 100%;

  font-size: ${(props) => props.theme.text.size.lg};
  line-height: ${(props) => props.theme.text.lineHeight.lg};
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
  font-family: ${(props) => props.theme.font.default};
  //   color: ${(props) => props.theme.text.color.tertiary};

  ${(props) => {
    switch (props?.variant) {
      case 'base':
        return `
        background: ${props.theme.text.color.accent};
        color: ${props.theme.text.color.tertiary};
        `;
      case 'inverted':
        return `
        background: ${props.theme.text.color.tertiary};
        color: ${props.theme.text.color.accent};
        `;
      case 'rounded-base':
        return `
        padding: 12px 22px;
        font-size: ${props.theme.text.size.md};
        line-height: ${props.theme.text.lineHeight.md};
        background: ${props.theme.text.color.accent};
        color: ${props.theme.text.color.tertiary};
        border-radius: 50px;
        `;
      default:
        return `
        background: ${props.theme.text.color.accent};
        color: ${props.theme.text.color.tertiary};
        `;
    }
  }}
`;

const ButtonContainer = styled.div<{ variant?: string }>`
  display: flex;
  flex-direction: row;
  width: ${(props) => props.variant !== 'rounded-base' && '100%'};
`;

export type ButtonProps = {
  variant?: 'base' | 'inverted' | 'rounded-base';
} & HTMLProps<HTMLButtonElement>;

// eslint-disable-next-line no-unused-vars
export const Button = forwardRef((props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
  const { children, variant = 'base', ...rest } = props;
  return (
    <ButtonContainer variant={variant}>
      <ButtonWrapper variant={variant} {...rest} as="button" type="submit" ref={ref}>
        {children}
      </ButtonWrapper>
    </ButtonContainer>
  );
});

Button.displayName = 'Button';
