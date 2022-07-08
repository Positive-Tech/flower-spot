import { Button } from '../Button/Button';
import { InputWitLabel } from '../InputWithLabel';
import { AccountContainer } from './components/AccountContainer';
import { AccountHeader } from './components/AccountHeader';
import { AccountInfo } from './components/AccountInfo';

export const CreateAccount = () => {
  return (
    <AccountContainer>
      <AccountHeader variant="primary">Create an Account</AccountHeader>
      <AccountInfo>
        <InputWitLabel label="First name" />
        <InputWitLabel label="Last name" />
      </AccountInfo>
      <InputWitLabel label="Date of Birth" />
      <InputWitLabel label="Email" />
      <InputWitLabel label="Password" type="password" />
      <Button>Create Account</Button>
    </AccountContainer>
  );
};
