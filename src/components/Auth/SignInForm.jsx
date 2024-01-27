import { useCallback, useState } from 'react';
import { ButtonColored, ButtonOutlined } from '/src/components/Button';
import { Input, INPUT_TYPE } from '/src/components/Input';
import { Page } from '/src/components/Page';
import { PageHeaderAuth } from '/src/components/Page/PageHeaderAuth';

export function SignIn({ goToSignUp, signIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const sendSignInRequest = useCallback(() => {
    signIn({ email, password });
  }, [email, password, signIn]);

  return (
    <Page header={<PageHeaderAuth />}>
      <h1>Sign In</h1>

      <Input name="email" onChange={setEmail} type={INPUT_TYPE.email} value={email} />

      <Input name="password" onChange={setPassword} type={INPUT_TYPE.password} value={password} />

      <ButtonOutlined onClick={sendSignInRequest}>Sign In</ButtonOutlined>

      <ButtonColored onClick={goToSignUp}>Sign Up</ButtonColored>
    </Page>
  );
}
