import { AuthProvider } from 'react-auth-kit';
import './App.css'

import { RouteComponent } from '/src/setup';

function App() {
  return (
    <AuthProvider authType = {'cookie'}
                  authName={'_auth'}
                  cookieDomain={window.location.hostname}
                  cookieSecure={window.location.protocol === "https:"}>
        <RouteComponent />
    </AuthProvider>
  );
}

export default App;