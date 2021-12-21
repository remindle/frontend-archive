import React from 'react';
import ReactDOM from 'react-dom';
import { getPage } from 'vite-plugin-ssr/client';
import { useClientRouter } from 'vite-plugin-ssr/client/router';

import Layout from '../layout/Layout';
import { getPageTitle } from './getPageTitle';

import type { PageContext } from "./types";
import type { PageContextBuiltInClient } from "vite-plugin-ssr/client/router";
const { hydrationPromise } = useClientRouter({
  render(pageContext: PageContextBuiltInClient & PageContext) {
    const { Page, pageProps } = pageContext;
    const page = (
      <Layout pageContext={pageContext}>
        <Page {...pageProps} />
      </Layout>
    );

    const container = document.getElementById("app");
    if (pageContext.isHydration) {
      ReactDOM.hydrate(page, container);
    } else {
      ReactDOM.render(page, container);
    }

    document.title = getPageTitle(pageContext);
  },
  // If we use Vue, we set `ensureHydration: true` to avoid "Hydration Mismatch" errors.
  // If we use React, we leave `ensureHydration: false` for a slight performance boost.
  ensureHydration: false,
  //
  onTransitionStart,
  onTransitionEnd,
});

hydrationPromise.then(() => {
  console.log("Hydration finished; page is now interactive.");
});

function onTransitionStart() {
  console.log("Page transition start");

  document.querySelector("#page-content")!.classList.add("page-transition");
}
function onTransitionEnd() {
  console.log("Page transition end");

  document.querySelector("#page-content")!.classList.remove("page-transition");
}
