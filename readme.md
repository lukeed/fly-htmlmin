# fly-htmlmin [![][travis-badge]][travis-link][![npm package][npm-ver-link]][npm-pkg-link]

> Minify HTML with Fly.

## Install

```
npm install --save-dev fly-htmlmin
```

## Usage

```js
exports.default = function * () {
  yield this.source('src/*.html')
    .htmlmin({
      removeComments: false
    })
    .target('dist');
}
```

## API

### .htmlmin(options)

This plugin offers no unique options. 

However, it has a number of [default settings](config.js) that you may override.

Please see [HTML-Minifier's Options](https://github.com/kangax/html-minifier#options-quick-reference) for a full list of available options.

## License

MIT © [Luke Edwards](https://lukeed.com)

[npm-pkg-link]: https://www.npmjs.org/package/fly-htmlmin
[npm-ver-link]: https://img.shields.io/npm/v/fly-htmlmin.svg?style=flat-square
[travis-link]:  https://travis-ci.org/lukeed/fly-htmlmin
[travis-badge]: http://img.shields.io/travis/lukeed/fly-htmlmin.svg?style=flat-square
