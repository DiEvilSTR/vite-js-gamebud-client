import { useCallback, useState } from 'react';
import { Button, LinkButton } from '/src/components/Button';
import { INPUT_TYPE, Input } from '/src/components/Input';
import { Page } from '/src/components/Page';

export function SignUp({ goToSignIn, signUp }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const sendSignUpRequest = useCallback(() => {
    signUp({ email, password });
  }, [email, password, signUp]);

  return (
    <Page>
      <h1>Sign Up</h1>

      <Input name="email" onChange={setEmail} type={INPUT_TYPE.email} value={email} />

      <Input name="password" onChange={setPassword} type={INPUT_TYPE.password} value={password} />

      <Button onClick={sendSignUpRequest}>Sign Up</Button>

      <LinkButton onClick={goToSignIn}>Sign In</LinkButton>
    </Page>
  );
}
