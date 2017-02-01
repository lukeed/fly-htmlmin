'use strict';

const {join} = require('path');
const test = require('tape');
const Fly = require('fly');

const dir = join(__dirname, 'fixtures');
const tmp = join(__dirname, 'tmp');

test('fly-htmlmin', t => {
	t.plan(3);

	const fly = new Fly({
		plugins: [
			require('../'),
			require('fly-clear')
		],
		tasks: {
			* foo(f) {
				// #1
				yield f.source(`${dir}/foo.html`).htmlmin().target(tmp);
				const str1 = yield f.$.read(`${tmp}/foo.html`, 'utf8');
				t.equal(str1, '<p title=blah id=moo>foo</p>', 'via defaults; minify html');

				// #2
				yield f.source(`${dir}/foo.html`).htmlmin({removeAttributeQuotes: 0}).target(tmp);
				const str2 = yield f.$.read(`${tmp}/foo.html`, 'utf8');
				t.equal(str2, '<p title="blah" id="moo">foo</p>', 'via config; minify html');

				yield f.clear(tmp);
			}
		}
	});

	t.ok('htmlmin' in fly.plugins, 'attach `htmlmin()` plugin to fly');

	fly.start('foo');
});
