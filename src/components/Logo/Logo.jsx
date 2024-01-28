import './Logo.css';

import logo from '/src/assets/brand/logo.svg';

export function Logo() {
  return <img className="logo" src={logo} alt="GameBud" />;
}
