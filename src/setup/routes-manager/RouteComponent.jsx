import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Main, SignIn } from '/src/pages';

export function RouteComponent() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </Router>
  );
}