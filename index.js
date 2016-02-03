const assign = require('object-assign')
const minify = require('html-minifier').minify

module.exports = function () {
  return this.filter('htmlmin', (data, options = {}) => {
    return assign({ ext: '.html'}, minify(data.toString(), options))
  })
}
