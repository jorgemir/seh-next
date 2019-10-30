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
  exportPathMap: async function() {
    // pages we know about beforehand
    const paths = {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/contact': { page: '/contact' }
    }
    // dynamic, data-generated pages
    const content = await jdown('content') // assumes some markdown files in a `/content` folder, with frontmatter that offers a slug
    const posts = [] // build up array of objects for the top level list
    Object.entries(content).forEach(([filename, fileContent]) => {
      
      // the filename becomes the slug
      paths[`/hotel-rooms/${filename}`] = { page: '/hotel-rooms/[slug]', query: { 
          slug: filename, 
          ...fileContent 
        } 
      }
    })
    console.log('paths: ', paths);
    return paths
  }
})
