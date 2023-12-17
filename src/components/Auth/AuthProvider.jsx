import { useCallback, useMemo, useReducer } from 'react';

import { HTTP_METHOD, assertNever, request } from '/src/utils';

import { AuthCtx } from './AuthCtx';

const AUTH_ACTION = {
  getAuthToken: 'GET_AUTH_TOKEN',
  getAuthTokenSuccess: 'GET_AUTH_TOKEN_SUCCESS',
  getAuthTokenError: 'GET_AUTH_TOKEN_ERROR',

  getUser: 'GET_USER',
  getUserSuccess: 'GET_USER_SUCCESS',
  getUserError: 'GET_USER_ERROR',

  signOut: 'SIGN_OUT',
  signOutSuccess: 'SIGN_OUT_SUCCESS',
  signOutError: 'SIGN_OUT_ERROR',

  signUp: 'SIGN_UP',
  signUpSuccess: 'SIGN_UP_SUCCESS',
  signUpError: 'SIGN_UP_ERROR',
};

const initialState = {
  accessToken: null,
  accessTokenType: null,
  user: null,
  userIsPending: false,
  userError: null,
};

function authReducer(state, action) {
  switch (action.type) {
    // case AUTH_ACTION.signIn:
    //   return {
    //     ...state,
    //     userIsPending: true,
    //     userError: null,
    //   };
    // case AUTH_ACTION.signInSuccess:
    //   return {
    //     ...state,
    //     user: action.user,
    //     userIsPending: false,
    //     userError: null,
    //   };
    // case AUTH_ACTION.signInError:
    //   return {
    //     ...state,
    //     user: null,
    //     userIsPending: false,
    //     userError: action.error,
    //   };
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

  const signIn = useCallback(values => {
    dispatch({ type: AUTH_ACTION.getAuthToken });

    request('v1/user/login', {
      method: HTTP_METHOD.post,
      body: JSON.stringify(values),
    }).then(user => {});
  }, []);

  const signOut = useCallback(() => {
    request('v1/user/logout', {
      method: HTTP_METHOD.post,
    });
  }, []);

  const ctx = useMemo(() => {
    return {
      ...state,

      signIn,
      signOut,
      signUp: console.error,
    };
  }, [signIn, signOut]);

  return <AuthCtx.Provider value={ctx}>{children}</AuthCtx.Provider>;
}
