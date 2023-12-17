import { useContext } from 'react';

import { useBool } from '/src/hooks';

import { AuthCtx } from './AuthCtx';
import { SignIn } from './SignInForm';
import { SignUp } from './SignUpForm';

export function AuthRequired({ children }) {
  const { user, signIn, signUp } = useContext(AuthCtx);

  const [shouldDisplaySignUpForm, showSignUpForm, showSignInForm] = useBool(false);

  if (!user) {
    return shouldDisplaySignUpForm ? (
      <SignUp goToSignIn={showSignInForm} signUp={signUp} />
    ) : (
      <SignIn goToSignUp={showSignUpForm} signIn={signIn} />
    );
  }

  return children;
}
