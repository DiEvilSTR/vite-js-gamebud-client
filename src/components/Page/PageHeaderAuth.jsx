import './PageHeader.css';

import logo from '/src/assets/brand/logo.svg';

export function PageHeaderAuth() {
  return (
    <div className="page__header">
      <div className="page__header-links">
        <div className="page__header-links_logo">
          <img src={logo} alt="logo" />
        </div>
      </div>
    </div>
  );
}
