import { useCallback, useState } from 'react';

import { ButtonColored, ButtonOutlined } from '/src/components/Button';
import { Input, INPUT_TYPE } from '/src/components/Input';

import { AuthPage } from './AuthPage';

export function SignUp({ goToSignIn, signUp }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const sendSignUpRequest = useCallback(() => {
    signUp({ email, password });
  }, [email, password, signUp]);

  return (
    <AuthPage>
      <h1>Sign Up</h1>

      <Input name="email" onChange={setEmail} type={INPUT_TYPE.email} value={email} />

      <Input name="password" onChange={setPassword} type={INPUT_TYPE.password} value={password} />

      <ButtonOutlined onClick={sendSignUpRequest}>Sign Up</ButtonOutlined>

      <ButtonColored onClick={goToSignIn}>Sign In</ButtonColored>
    </AuthPage>
  );
}
