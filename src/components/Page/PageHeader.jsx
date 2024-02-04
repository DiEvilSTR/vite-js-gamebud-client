import './PageHeader.css';

import { useContext, useState } from 'react';
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';

import { AuthCtx, SignInModal } from '/src/components/Auth';
import { ButtonColored, ButtonOutlined } from '/src/components/Button';
import { Logo } from '/src/components/Logo';
import { useBool } from '/src/hooks';

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
  const { signOut, user, userIsPending } = useContext(AuthCtx); // Use the AuthCtx to get the user

  const [signInModalIsVisible, openSignInModal, closeSignInModal] = useBool(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <div className="page__header">
        <div className="page__header-links">
          <div className="page__header-links_logo">
            <Link to="/">
              <Logo />
            </Link>
          </div>

          {user && (
            <div className="page__header-links_container">
              <Menu />
            </div>
          )}
          {user ? (
            <div className="page__header-sign">
              <ButtonColored onClick={signOut} pending={userIsPending}>
                Logout
              </ButtonColored>
            </div>
          ) : (
            <div className="page__header-sign">
              <ButtonOutlined onClick={openSignInModal} pending={userIsPending}>
                Sign in
              </ButtonOutlined>

              {/* <ButtonColored onClick={openSignUpModal}>Sign up</ButtonColored> */}
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
                  <ButtonColored onClick={signOut} pending={userIsPending}>
                    Logout
                  </ButtonColored>
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
                <ButtonOutlined onClick={openSignInModal} pending={userIsPending}>
                  Sign in
                </ButtonOutlined>

                {/* <ButtonColored onClick={openSignUpModal}>Sign up</ButtonColored> */}
              </div>
            )}
          </div>
        )}
      </div>

      <SignInModal onClose={closeSignInModal} opened={signInModalIsVisible} />

      {/* <SignUpModal onClose={closeSignUpModal} opened={signUpModalIsVisible} /> */}
    </>
  );
}
