const test = require('tape').test
const minify = require('../')

test('fly-htmlmin', (t) => {
  t.plan(3)

  const content = '<p title="blah" id="moo">foo</p>'
  const options = {removeAttributeQuotes: true}

  minify.call({
    filter: function(name, fn) {
      const result1 = fn(content)
      const result2 = fn(content, options)
      console.log( result1 )

      t.equal(name, 'htmlmin', 'add htmlmin fly filter')
      t.equal(result1, '<p title="blah" id="moo">foo</p>', 'minify html, without config')
      t.equal(result2, '<p title=blah id=moo>foo</p>', 'minify html, with config')
    }
  })
})
