import { PageContext } from './types';

export { getPageDescription }

function getPageDescription(pageContext: PageContext): string {
  const description =
    // For static descriptions (defined in the `export { documentProps }` of the page's `.page.js`)
    (pageContext.pageExports.documentProps || {}).description ||
    // For dynamic descriptions (defined in the `export addContextProps()` of the page's `.page.server.js`)
    (pageContext.documentProps || {}).description ||
    'App'
  return description
}
