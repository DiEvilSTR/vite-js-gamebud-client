import { Route, Routes } from 'react-router-dom';

import { AuthRequired } from '/src/components';

import { GameBudPageIndex } from './GameBudPageIndex';

export function GameBudPage() {
  return (
    <AuthRequired>
      <Routes>
        <Route index element={<GameBudPageIndex />} />

        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </AuthRequired>
  );
}
