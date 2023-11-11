import { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'

import logo from '/src/assets/brand/logo.svg'
import './navbar.css'

const Menu = () => (
  <>
    <p><a href="#myprofile">My profile</a></p>
    <p><a href="#fgamebud">Find GameBud</a></p>
    <p><a href="#likes">Likes</a></p>
    <p><a href="#matches">Matches</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='gamebud__navbar'>
      <div className='gamebud__navbar-links'>
        <div className='gamebud__navbar-links_logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='gamebud__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='gamebud__navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      <div className='gamebud__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='gamebud__navbar-menu_container scale-up-center'>
            <div className='gamebud__navbar-menu_container-links'>
              <Menu />
            </div>
            <div className='gamebud__navbar-menu_container-links-sign'>
              <p>Sign in</p>
              <button type='button'>Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar