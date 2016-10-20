'use strict';

const minify = require('html-minifier').minify;

module.exports = function () {
	this.plugin('htmlmin', {}, function * (file, opts) {
		opts = opts || {};
		const min = minify(file.data.toString(), opts);
		file.data = new Buffer(min);
	});
};
