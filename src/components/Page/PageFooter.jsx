import logo from '/src/assets/brand/logo.svg';
import './PageFooter.css';

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
              <a href="#home">About us</a>
            </p>
            <p>
              <a href="#home">Homepage</a>
            </p>
          </div>
          <div className="page__footer-links_div">
            <h4>Get in touch</h4>
            <p>
              <a href="#home">Facebook</a>
            </p>
            <p>
              <a href="#home">Instagram</a>
            </p>
            <p>
              <a href="#home">GitHub</a>
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
