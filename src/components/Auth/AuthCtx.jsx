import { createContext } from 'react';

import { noop } from '/src/utils';

const DEFAULT_AUTH_VALUES = {
  user: null,
  userIsPending: false,
  userError: null,
  signIn: noop,
  signOut: noop,
  signUp: noop,
};

export const AuthCtx = createContext(DEFAULT_AUTH_VALUES);
