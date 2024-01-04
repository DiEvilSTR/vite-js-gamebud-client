import { useContext } from 'react';
import { AuthCtx, Page } from '/src/components';

export function HomePageIndex() {
  // const auth = useContext(AuthCtx);
  // const query = useQuery('todos', getTodos);

  return (
    <Page>
      <h1>Home Page</h1>
    </Page>
  );
}
