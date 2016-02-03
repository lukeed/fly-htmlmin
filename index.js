const minify = require('html-minifier').minify

module.exports = function () {
  this.filter('htmlmin', (data, options) => {
    options = options || {}
    return minify(data.toString(), options)
  })
}
