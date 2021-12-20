// import { mount } from 'auth_app/AuthApp';
import { History } from 'history';
import React, { lazy, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

type Options = {
  onLogin: () => {};
  history: History;
};

type Path = {
  pathname: string;
};

const { mount } = await import('auth/Bootstrap');
const Button = lazy(() => import('home/Button'));

const AuthApp = ({ onLogin, history }: Options) => {
  const ref = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: location.pathname,
      onNavigate: ({ pathname: nextPathname }: Path) => {
        const { pathname } = history.location;

        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
      onLogin,
    });

    history.listen(onParentNavigate);
  }, []);

  return (
    <div ref={ref}>
      <Button />
    </div>
  );
};

export default AuthApp;
