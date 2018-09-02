// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-index-js": preferDefault(require("/Users/sarahmeyer/Desktop/Projects/weddingSite/src/pages/index.js")),
  "component---src-templates-post-js": preferDefault(require("/Users/sarahmeyer/Desktop/Projects/weddingSite/src/templates/post.js")),
  "component---cache-dev-404-page-js": preferDefault(require("/Users/sarahmeyer/Desktop/Projects/weddingSite/.cache/dev-404-page.js"))
}

