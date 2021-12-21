export type PageProps = {}
// The `pageContext` that are available in both on the server-side and browser-side
export type PageContext = {
  Page: (pageProps: PageProps) => React.ReactElement
  pageProps: PageProps
  pageExports: {
    documentProps?: {
      title?: string,
      description?: string
    }
  }
  urlPathname: string
  documentProps?: {
    title?: string
    description?: string
  }
}
