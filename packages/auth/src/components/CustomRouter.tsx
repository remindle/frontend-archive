import { History } from 'history';
import React, { useLayoutEffect, useState } from 'react';
import { BrowserRouterProps, Router } from 'react-router-dom';

interface CustomBrowserRouterProps extends BrowserRouterProps {
  history: History;
}

const CustomRouter = ({ history, ...props }: CustomBrowserRouterProps) => {
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });

  useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router
      {...props}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    />
  );
};

export default CustomRouter;
