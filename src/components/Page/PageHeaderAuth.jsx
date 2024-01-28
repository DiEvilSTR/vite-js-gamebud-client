import './PageHeader.css';

import { Logo } from '/src/components/Logo';

export function PageHeaderAuth() {
  return (
    <div className="page__header">
      <div className="page__header-links">
        <div className="page__header-links_logo">
          <Logo />
        </div>
      </div>
    </div>
  );
}
