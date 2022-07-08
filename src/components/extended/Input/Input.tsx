import { ComponentPropsWithoutRef } from 'react';
import { IconWrapper } from './components/IconWrapper';
import { InputContainer } from './components/InputContainer';
import { InputWrapper } from './components/InputWrapper';

type InputProps = {
  placeholder?: string;
  withIcon?: boolean;
} & ComponentPropsWithoutRef<'input'>;

export const Input = (props: InputProps) => {
  const { placeholder = '', withIcon = false, ...rest } = props;

  return (
    <InputWrapper>
      <InputContainer placeholder={placeholder} {...rest} />
      {withIcon && <IconWrapper />}
    </InputWrapper>
  );
};
