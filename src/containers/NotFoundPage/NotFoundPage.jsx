import { Page } from '/src/components';
import { PageHeader } from '/src/components/Page/PageHeader';

import './NotFoundPage.css';

export function NotFoundPage() {
  return (
    <Page header={<PageHeader />}>
      <div className="not-found-page__hero section__padding">
        <div className="not-found-page__hero-content">
          <h1 className="gradient__text">Oops!</h1>
          <p>The page you’re looking for can’t be found.</p>
          <button onClick={() => window.history.back()}>Go Back</button>
        </div>
      </div>
    </Page>
  );
}
