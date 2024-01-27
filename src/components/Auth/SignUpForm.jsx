import { useCallback, useState } from 'react';
import { ButtonColored, ButtonOutlined } from '/src/components/Button';
import { INPUT_TYPE, Input } from '/src/components/Input';
import { Page } from '/src/components/Page';
import { PageHeaderAuth } from '/src/components/Page/PageHeaderAuth';

export function SignUp({ goToSignIn, signUp }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const sendSignUpRequest = useCallback(() => {
    signUp({ email, password });
  }, [email, password, signUp]);

  return (
    <Page header={<PageHeaderAuth />}>
      <h1>Sign Up</h1>

      <Input name="email" onChange={setEmail} type={INPUT_TYPE.email} value={email} />

      <Input name="password" onChange={setPassword} type={INPUT_TYPE.password} value={password} />

      <ButtonOutlined onClick={sendSignUpRequest}>Sign Up</ButtonOutlined>

      <ButtonColored onClick={goToSignIn}>Sign In</ButtonColored>
    </Page>
  );
}
