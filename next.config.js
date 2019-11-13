const withCSS = require('@zeit/next-css')
const jdown = require('jdown')
const marked = require('marked');

const renderer = new marked.Renderer();
const slugger = new marked.Slugger();

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
    const content = await jdown('./content/events', {
        fileInfo: true,
        markdown: {renderer},
      }
    )

    const paths = []
    Object.entries(content).forEach(([filename, fileContent]) => {

      const titleSlug = slugger.slug(fileContent.title)

      // the filename becomes the slug
      paths[`/${fileContent.category}/${titleSlug}`] = { 
        page: `/${fileContent.category}/[slug]`, 
        query: { 
          slug: titleSlug, 
          ...fileContent 
        } 
      }
    })
    
    return {
      ...defaultPathMap,
      ...paths
    }
  }
})