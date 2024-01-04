import { PageHeader } from './PageHeader';
import './Page.css';

export function Page({ children, footer, leftSidebar, rightSidebar }) {
  return <div className="page">
    <header className="page-header">
      <PageHeader />
    </header>

    <main className="page-main">
      {leftSidebar && (
        <aside className="page-left_sidebar">{leftSidebar}</aside>
      )}

      <div className="page-main_content">{children}</div>

      {rightSidebar && (
        <aside className="page-right_sidebar">{rightSidebar}</aside>
      )}

    </main>

    {footer && (
      <footer className="page-footer">{footer}</footer>
    )}
  </div>;
}
