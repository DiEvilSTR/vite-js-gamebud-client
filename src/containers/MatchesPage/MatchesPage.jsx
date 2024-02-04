import { Route, Routes } from 'react-router-dom';

import { AuthRequired } from '/src/components';

import { MatchesPageIndex } from './MatchesPageIndex';

export function MatchesPage() {
  return (
    <AuthRequired>
      <Routes>
        <Route index element={<MatchesPageIndex />} />
      </Routes>
    </AuthRequired>
  );
}
