import { PageHeader } from './PageHeader';
import { PageFooter } from './PageFooter';
import './Page.css';

export function Page({ children, leftSidebar }) {
  return (
    <div className="page">
      <header>
        <PageHeader />
      </header>

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
