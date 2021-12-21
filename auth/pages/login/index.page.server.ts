// import type { PageContextBuiltIn } from 'vite-plugin-ssr'

// export { onBeforeRender }

// async function onBeforeRender(pageContext: PageContextBuiltIn) {
//   const { name } = pageContext.routeParams
//   const pageProps = { name }

//   // await delay(1000).then(() => console.log('ran on server'));

//   return {
//     pageContext: {
//       pageProps,
//     },
//   }
// }

// function delay(time) {
//   return new Promise(resolve => setTimeout(resolve, time));
// }