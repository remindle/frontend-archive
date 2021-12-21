import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { escapeInject } from 'vite-plugin-ssr';

import logoUrl from '../assets/logo.svg';
import Layout from '../layout/Layout';
import { getPageDescription } from './getPageDescription';
import { getPageTitle } from './getPageTitle';

import type { PageContext } from "./types";
import type { PageContextBuiltIn } from "vite-plugin-ssr";
export { render };
export { passToClient };

const passToClient = ["pageProps", "documentProps"];

function render(pageContext: PageContextBuiltIn & PageContext) {
  const { Page, pageProps } = pageContext;
  const stream = ReactDOMServer.renderToNodeStream(
    <Layout pageContext={pageContext}>
      <Page {...pageProps} />
    </Layout>
  );

  const title = getPageTitle(pageContext);
  const description = getPageDescription(pageContext);

  return escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="${logoUrl}" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${description}" />
        <title>${title}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" data-crossorigin />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter:300,400|Sen:400,700|DM+Sans:300,500,700&amp;subset=latin"/>
      </head>
      <body>
        <div id="app">${stream}</div>
      </body>
    </html>`;
}
