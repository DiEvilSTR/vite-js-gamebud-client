import { Route, Routes } from 'react-router-dom';

import { AuthRequired } from '/src/components';

import { HomePageIndex } from './HomePageIndex';

export function HomePage() {
  return (
    <AuthRequired>
      <Routes>
        <Route index element={<HomePageIndex />} />

        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </AuthRequired>
  );
}
