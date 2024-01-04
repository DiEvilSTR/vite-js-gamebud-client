import { StrictMode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query'

import { AuthProvider } from './components';
import { Router } from './Router';

import './App.css';

const queryClient = new QueryClient()

export function App() {
  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Router />
        </AuthProvider>
      </QueryClientProvider>
    </StrictMode>
  );
}
