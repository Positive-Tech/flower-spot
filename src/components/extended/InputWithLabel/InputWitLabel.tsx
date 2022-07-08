import { ComponentPropsWithoutRef } from 'react';
import { InputContainer } from './components/InputContainer';
import { InputWrapper } from './components/InputWrapper';
import { Label } from './components/Label';

type InputProps = {
  placeholder?: boolean;
  label: string;
} & ComponentPropsWithoutRef<'input'>;

export const InputWitLabel = (props: InputProps) => {
  const { placeholder = '', label, ...rest } = props;

  return (
    <InputWrapper>
      <Label>{label}</Label>
      <InputContainer placeholder={placeholder} {...rest} />
    </InputWrapper>
  );
};
