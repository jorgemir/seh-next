const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  webpack(config, options) {
    config.module.rules.push(
        {
            test: /\.md$/,
            use: 'frontmatter-markdown-loader'
        }
    )
    return config
  }
})