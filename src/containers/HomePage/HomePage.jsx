import { Route, Routes } from 'react-router-dom';

import { HomePageIndex } from './HomePageIndex';

export function HomePage() {
  return (
    <Routes>
      <Route index element={<HomePageIndex />} />

      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  );
}
