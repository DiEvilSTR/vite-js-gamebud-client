import './PageFooter.css';

import { Link } from 'react-router-dom';

import logo from '/src/assets/brand/logo.svg';

export function PageFooter() {
  return (
    <div className="page__footer">
      <div className="page__footer section__padding">
        <div className="page__footer-links">
          <div className="page__footer-links_logo">
            <img src={logo} alt="" />

            <p>Tokyo, All Right Reserved</p>
          </div>

          <div className="page__footer-links_div">
            <h4>Company</h4>

            <p>
              <Link to="/about">About us</Link>
            </p>

            <p>
              <Link to="/">Homepage</Link>
            </p>
          </div>
          <div className="page__footer-links_div">
            <h4>Get in touch</h4>

            <p>
              <Link to="/">Facebook</Link>
            </p>

            <p>
              <Link to="/">Instagram</Link>
            </p>

            <p>
              <Link to="/">GitHub</Link>
            </p>
          </div>
        </div>

        <div className="page__footer-copyright">
          <p>@2024 GameBud. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
