'use strict';

const join = require('path').join;
const test = require('tape').test;
const Fly = require('fly');

const dir = join(__dirname, 'fixtures');
const tmp = join(__dirname, 'tmp');

test('fly-htmlmin', t => {
	t.plan(3);

	const fly = new Fly({
		plugins: [{
			func: require('../')
		}],
		tasks: {
			a: function * () {
				// #1
				yield this.source(`${dir}/foo.html`).htmlmin().target(tmp);
				const str1 = yield this.$.read(`${tmp}/foo.html`, 'utf8');
				t.equal(str1, '<p title="blah" id="moo">foo</p>\n', 'minify html, without config');

				// #2
				yield this.source(`${dir}/foo.html`).htmlmin({removeAttributeQuotes: 1}).target(tmp);
				const str2 = yield this.$.read(`${tmp}/foo.html`, 'utf8');
				t.equal(str2, '<p title=blah id=moo>foo</p>\n', 'minify html, with config');
			}
		}
	});

	t.ok('htmlmin' in fly, 'attach `htmlmin()` plugin to fly');

	fly.start('a');
});
