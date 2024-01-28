import { useCallback, useState } from 'react';

import { ButtonColored, ButtonOutlined } from '/src/components/Button';
import { Input, INPUT_TYPE } from '/src/components/Input';

import { AuthPage } from './AuthPage';

export function SignIn({ goToSignUp, signIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const sendSignInRequest = useCallback(() => {
    signIn({ email, password });
  }, [email, password, signIn]);

  return (
    <AuthPage>
      <h1>Sign In</h1>

      <Input label="Email" name="email" onChange={setEmail} type={INPUT_TYPE.email} value={email} />

      <Input label="Password" name="password" onChange={setPassword} type={INPUT_TYPE.password} value={password} />

      <ButtonOutlined onClick={sendSignInRequest}>Sign In</ButtonOutlined>

      <ButtonColored onClick={goToSignUp}>Sign Up</ButtonColored>
    </AuthPage>
  );
}
