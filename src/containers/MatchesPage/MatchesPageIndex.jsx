import './MatchesPageIndex.css';

import { Page } from '/src/components';
import { PageHeader } from '/src/components';
import { ChatWindow } from '/src/components/ChatWindow'; // Ensure correct path
import { MatchesList } from '/src/components/MatchesList'; // Ensure correct path

export function MatchesPageIndex() {
  return (
    <>
      <Page header={<PageHeader />}>
        <div className="matches_page__hero section__padding">
          <MatchesList />
          <ChatWindow />
        </div>
      </Page>
    </>
  );
}
