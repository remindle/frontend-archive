import { createBrowserHistory } from 'history';
import React, { lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

const AuthLazy = lazy(() => import('./components/AuthApp'));

const history = createBrowserHistory();

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    if (isSignedIn) {
      history.push('/dashboard');
    }
  }, [isSignedIn]);

  return (
    <BrowserRouter>
      <Suspense fallback="Loading...">
        <Routes>
          <Route
            path="auth/*"
            element={
              <AuthLazy onLogin={async () => setIsSignedIn(true)} history={history} />
            }
          />
          {/* <Route
            path="dashboard"
            element={!isSignedIn ? <Navigate to="/" /> : <DashboardLazy />}
          /> */}
          <Route path="*" element={<Navigate to="auth" />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
