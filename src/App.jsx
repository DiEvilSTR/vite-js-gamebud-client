import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Main } from '/src/pages';
import { SignIn } from '/src/pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;