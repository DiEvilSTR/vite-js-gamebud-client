import { useCallback, useEffect, useMemo, useReducer } from 'react';

import { assertNever, authRequest, HTTP_METHOD } from '/src/utils';

import { AuthCtx } from './AuthCtx';

const AUTH_ACTION = {
  checkSession: 'CHECK_SESSION',
  signIn: 'SIGN_IN',
  signInSuccess: 'SIGN_IN_SUCCESS',
  signInError: 'SIGN_IN_ERROR',
  signOut: 'SIGN_OUT',
  signOutSuccess: 'SIGN_OUT_SUCCESS',
  signOutError: 'SIGN_OUT_ERROR',
  signUp: 'SIGN_UP',
  signUpSuccess: 'SIGN_UP_SUCCESS',
  signUpError: 'SIGN_UP_ERROR',
};

const initialState = {
  user: null,
  userIsPending: false,
  userError: null,
};

function authReducer(state, action) {
  switch (action.type) {
    case AUTH_ACTION.signIn:
      return {
        ...state,
        userIsPending: true,
        userError: null,
      };
    case AUTH_ACTION.signInSuccess:
      return {
        ...state,
        user: action.user,
        userIsPending: false,
        userError: null,
      };
    case AUTH_ACTION.signInError:
      return {
        ...state,
        user: null,
        userIsPending: false,
        userError: action.error,
      };

    case AUTH_ACTION.signOut:
      return {
        ...state,
        userIsPending: true,
        userError: null,
      };
    case AUTH_ACTION.signOutSuccess:
      return {
        ...state,
        user: null,
        userIsPending: false,
        userError: null,
      };
    case AUTH_ACTION.signOutError:
      return {
        ...state,
        userIsPending: false,
        userError: action.error,
      };

    case AUTH_ACTION.signUp:
      return {
        ...state,
        userIsPending: true,
        userError: null,
      };
    case AUTH_ACTION.signUpSuccess:
      return {
        ...state,
        user: action.user,
        userIsPending: false,
        userError: null,
      };
    case AUTH_ACTION.signUpError:
      return {
        ...state,
        user: null,
        userIsPending: false,
        userError: action.error,
      };

    default:
      assertNever(action.type, authReducer.name);
  }
}

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Function to sign in
  const signIn = useCallback(values => {
    dispatch({ type: AUTH_ACTION.signIn });

    authRequest({
      url: 'v1/user/login',
      method: HTTP_METHOD.post,
      body: JSON.stringify(values),
    })
      .then(user => dispatch({ type: AUTH_ACTION.signInSuccess, user }))
      .catch(error => dispatch({ type: AUTH_ACTION.signInError, error: error.response ? error.response.data : error }));
  }, []);

  // Function to sign out
  const signOut = useCallback(() => {
    dispatch({ type: AUTH_ACTION.signOut });

    authRequest({
      url: 'v1/user/logout',
      method: HTTP_METHOD.post,
    })
      .then(() => dispatch({ type: AUTH_ACTION.signOutSuccess }))
      .catch(error =>
        dispatch({ type: AUTH_ACTION.signOutError, error: error.response ? error.response.data : error })
      );
  }, []);

  // Function to check user session
  const checkUserSession = useCallback(() => {
    authRequest({
      url: 'v1/user/me',
      method: HTTP_METHOD.get,
    })
      .then(user => {
        // User is authenticated, update state
        dispatch({ type: AUTH_ACTION.signInSuccess, user });
      })
      .catch(error => {
        if (error.response && error.response.status === 401) {
          // Unauthorized, clear user state
          dispatch({ type: AUTH_ACTION.signOutSuccess });
        } else {
          // Other errors
          console.error('Error checking user session', error);
        }
      });
  }, []);

  // Check user session on component mount
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  // Memoize the context value to avoid unnecessary re-renders
  const ctx = useMemo(() => {
    return {
      ...state,
      signIn,
      signOut,
      signUp: console.error.bind(null, 'Not implemented'),
    };
  }, [state, signIn, signOut]);

  return <AuthCtx.Provider value={ctx}>{children}</AuthCtx.Provider>;
}
