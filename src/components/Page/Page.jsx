import './Page.css';

import { PageFooter } from './PageFooter';

export function Page({ header, children, leftSidebar }) {
  return (
    <div className="page">
      {header && <header className="page-header">{header}</header>}

      <main className="page-main">
        {leftSidebar && <aside className="page-left_sidebar">{leftSidebar}</aside>}

        <div className="page-main_content">{children}</div>
      </main>

      <footer>
        <PageFooter />
      </footer>
    </div>
  );
}
