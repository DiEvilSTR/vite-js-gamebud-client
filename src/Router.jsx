import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { GameBudPage, HomePage, MatchesPage, NotFoundPage } from './containers';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gamebuds" element={<GameBudPage />} />
        <Route path="/matches" element={<MatchesPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
