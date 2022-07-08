import { Button } from '../Button/Button';
import { InputWitLabel } from '../InputWithLabel';
import { AccountContainer } from './components/AccountContainer';
import { AccountHeader } from './components/AccountHeader';

export const Login = () => {
  return (
    <AccountContainer>
      <AccountHeader variant="primary">Welcome Back</AccountHeader>
      <InputWitLabel label="Email Address" />
      <InputWitLabel label="Password" type="password" />
      <Button>Login to your Account</Button>
    </AccountContainer>
  );
};
