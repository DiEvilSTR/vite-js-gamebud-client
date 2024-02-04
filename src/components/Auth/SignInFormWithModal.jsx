import { SignInModal } from '/src/components/Auth';

import { AuthPage } from './AuthPage';

export function SignInFormWithModal({ goToSignUp }) {
  return (
    <AuthPage>
      <SignInModal opened goToSignUp={goToSignUp} />
    </AuthPage>
  );
}
