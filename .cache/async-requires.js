// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-index-js": () => import("/Users/sarahmeyer/Desktop/Projects/weddingSite/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-templates-post-js": () => import("/Users/sarahmeyer/Desktop/Projects/weddingSite/src/templates/post.js" /* webpackChunkName: "component---src-templates-post-js" */),
  "component---cache-dev-404-page-js": () => import("/Users/sarahmeyer/Desktop/Projects/weddingSite/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */)
}

exports.data = () => import("/Users/sarahmeyer/Desktop/Projects/weddingSite/.cache/data.json")

