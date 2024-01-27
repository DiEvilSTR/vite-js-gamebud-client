import { useContext, useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

import { ButtonColored, ButtonOutlined } from '/src/components/Button';
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
  const [toggleMenu, setToggleMenu] = useState(false);
  const { user } = useContext(AuthCtx); // Use the AuthCtx to get the user

  return (
    <div className="page__header">
      <div className="page__header-links">
        <div className="page__header-links_logo">
          <img src={logo} alt="logo" />
        </div>

        {user && (
          <div className="page__header-links_container">
            <Menu />
          </div>
        )}
        {user ? (
          <div className="page__header-sign">
            <ButtonColored to="/logout">Logout</ButtonColored>
          </div>
        ) : (
          <div className="page__header-sign">
            <ButtonOutlined to="/sign-in">Sign in</ButtonOutlined>
            <ButtonColored to="/sign-up">Sign up</ButtonColored>
          </div>
        )}
      </div>
      {/* Mobile menu */
      /* If the user is logged in, show the menu, otherwise show the sign in/up buttons */}
      {user ? (
        <div className="page__header-menu">
          {toggleMenu ? (
            <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          ) : (
            <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
          )}
          {toggleMenu && (
            <div className="page__header-menu_container scale-up-center">
              <div className="page__header-menu_container-links">
                <Menu />
              </div>
              <div className="page__header-menu_container-links-sign">
                <ButtonColored to="/logout">Logout</ButtonColored>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="page__header-menu-unauthorized">
          {toggleMenu ? (
            <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          ) : (
            <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
          )}
          {toggleMenu && (
            <div className="page__header-menu_container scale-up-center">
              <ButtonOutlined to="/sign-in">Sign in</ButtonOutlined>
              <ButtonColored to="/sign-up">Sign up</ButtonColored>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
