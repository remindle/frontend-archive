import React from 'react';

import Button from './Button';

const RemoteButton = React.lazy(() => import('auth/Button'));

const App: React.FC = () => (
  <div>
    <h1>hello from container</h1>
    <Button />
    <React.Suspense fallback="Loading remote button">
      <RemoteButton />
    </React.Suspense>
  </div>
)

export default App;