import { Route, Routes } from 'react-router-dom';

import { SignUpPage } from './SignUpPage';

export function SignPage() {
  return (
    <Routes>
      <Route index element={<SignUpPage />} />
    </Routes>
  );
}
