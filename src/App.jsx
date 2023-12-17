import { StrictMode } from 'react';

import { AuthProvider } from './components';
import { Router } from './Router';

import './App.css';

export function App() {
  return (
    <StrictMode>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </StrictMode>
  );
}
