import '../styles/index.css';
import './layout.css';

import React, { useEffect } from 'react';

import { MoonIcon } from '../components/icons/Moon';
import useDarkMode from '../hooks/useDarkMode';
import { Link } from '../renderer/Link';
import { PageContext } from '../renderer/types';
import { PageContextProvider } from '../renderer/usePageContext';
import Header from './Header';

function Layout({
  children,
  pageContext,
}: {
  children: React.ReactNode;
  pageContext: PageContext;
}) {
  const [darkMode, toggleDarkMode] = useDarkMode();

  useEffect(() => {
    //
  }, [darkMode]);

  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <div className="flex flex-col min-h-screen text-center bg-white dark:bg-tetriary-dark dark:text-white">
          <Header />
          <Content>{children}</Content>
        </div>
      </PageContextProvider>
    </React.StrictMode>
  );
}

function Content({ children }: { children: React.ReactNode }) {
  return (
    <main id="page-content" className="flex flex-col flex-grow justify-center">
      {children}
    </main>
  );
}

export default Layout;
