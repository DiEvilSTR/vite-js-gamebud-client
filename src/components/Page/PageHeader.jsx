import './Page.css';

export function PageHeader() {
  return <div className="page_header">
    <div className="page_header-logo">
        <img src="page_header-logo_img" alt="LOGO" />
    </div>

    <nav className="page_header-nav">
        <a className="page_header-nav_item page_header-nav_item--active" href="#">Link 1</a>
        <a className="page_header-nav_item" href="#">Link 2</a>
        <a className="page_header-nav_item" href="#">Link 3</a>
    </nav>
  </div>;
}
