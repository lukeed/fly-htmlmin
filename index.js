const minify = require('html-minifier').minify

module.exports = function () {
  this.filter('htmlmin', (data, options = {}) => {
    return minify(data.toString(), options)
  })
}
