import './App.css';

import { StrictMode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { AuthProvider, OverlayContainer, OverlayProvider } from './components';
import { Router } from './Router';

const queryClient = new QueryClient();

export function App() {
  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <OverlayProvider>
            <Router />

            <OverlayContainer />
          </OverlayProvider>
        </AuthProvider>
      </QueryClientProvider>
    </StrictMode>
  );
}
