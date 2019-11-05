const withCSS = require('@zeit/next-css')
const jdown = require('jdown')

module.exports = withCSS({
  webpack(config, options) {
    config.module.rules.push(
        {
            test: /\.md$/,
            use: 'frontmatter-markdown-loader'
        }
    )
    return config
  },
  exportPathMap: async function(defaultPathMap) {
    const content = await jdown('./content/events')
    const paths = []
    Object.entries(content).forEach(([filename, fileContent]) => {

      const trimmedName = filename.substring(0, filename.length - 3)

      // the filename becomes the slug
      paths[`/blog/post/${trimmedName}`] = { 
        page: `/${fileContent.category}/[slug]`, 
        query: { 
          slug: trimmedName, 
          ...fileContent 
        } 
      }
    })
    console.log('paths: ',paths);
    return {
      ...defaultPathMap,
      ...paths
    }
  }
})