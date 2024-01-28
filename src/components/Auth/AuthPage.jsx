import './AuthPage.css';

import { Link } from 'react-router-dom';

import { Logo } from '/src/components/Logo';

export function AuthPage({ children }) {
  return (
    <div className="auth_page">
      <header className="auth_page-header">
        <Link to="/">
          <Logo />
        </Link>
      </header>

      <main className="auth_page-main">{children}</main>
    </div>
  );
}
