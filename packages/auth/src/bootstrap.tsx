import './bootstrap.css';

import { BrowserHistory, createBrowserHistory, createMemoryHistory } from 'history';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

type Options = {
  defaultHistory: BrowserHistory;
  onLogin?: () => void;
  onNavigate?: () => void;
  initialPath?: string;
};

type Path = {
  pathname: string;
};

const mount = (
  el: HTMLElement | null,
  { onLogin = () => {}, onNavigate, defaultHistory, initialPath = '' }: Options,
) => {
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath],
    });

  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDOM.render(<App onLogin={onLogin} history={history} />, el);

  return {
    onParentNavigate({ pathname: nextPathname }: Path) {
      const { pathname } = history.location;
      console.log('navigated to pathname: ', pathname);

      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    },
  };
};

// If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.getElementById('auth-app-dev-root');

  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}

// We are running through container
// and we should export the mount function
export { mount };
