import { useContext } from 'react';

import { AuthCtx } from '/src/components/Auth/AuthCtx';
import './PageHeader.css';

import logo from '/src/assets/brand/logo.svg';

function Menu() {
  return (
    <>
      <p>
        <a className="page__header-nav_item" href="#myprofile">
          My profile
        </a>
      </p>
      <p>
        <a className="page__header-nav_item" href="#fgamebud">
          Find GameBud
        </a>
      </p>
      <p>
        <a className="page__header-nav_item" href="#likes">
          Likes
        </a>
      </p>
      <p>
        <a className="page__header-nav_item" href="#matches">
          Matches
        </a>
      </p>
    </>
  );
}

export function PageHeader() {
  const { user } = useContext(AuthCtx); // Use the AuthCtx to get the user

  return (
    <div className="page__header">
      <div className="page__header-links">
        <div className="page__header-links_logo">
          <img src={logo} alt="logo" />
        </div>

        {user && (
          <nav className="page__header-links_container">
            <Menu />
          </nav>
        )}
      </div>
    </div>
  );
}
