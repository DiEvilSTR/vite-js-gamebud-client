import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RequireAuth } from 'react-auth-kit'

import { Main, SignIn } from '/src/pages';

const RouteComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route
          path="/sign-out"
          element={
            <RequireAuth loginpath="/sign-in">
              
            </RequireAuth>} 
        />
      </Routes>
    </Router>
  );
};

export default RouteComponent;