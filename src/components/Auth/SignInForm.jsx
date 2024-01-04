import { useCallback, useState } from 'react';
import { Button, LinkButton } from '/src/components/Button';
import { Input, INPUT_TYPE } from '/src/components/Input';
import { Page } from '/src/components/Page';

export function SignIn({ goToSignUp, signIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const sendSignInRequest = useCallback(() => {
    signIn({ email, password });
  }, [email, password, signIn]);

  return (
    <Page>
      <h1>Sign In</h1>

      <Input name="email" onChange={setEmail} type={INPUT_TYPE.email} value={email} />

      <Input name="password" onChange={setPassword} type={INPUT_TYPE.password} value={password} />

      <Button onClick={sendSignInRequest}>Sign In</Button>

      <LinkButton onClick={goToSignUp}>Sign Up</LinkButton>
    </Page>
  );
}
