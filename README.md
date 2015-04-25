# tmpr

[![release][release-image]][release-url]
[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]
[![coverage][coverage-image]][coverage-url]
[![david][david-image]][david-url]
[![stability][stability-image]][stability-url]

[release-image]: https://img.shields.io/github/release/bcomnes/node-tmpr.svg?style=flat-square
[release-url]: https://github.com/bcomnes/node-tmpr/releases/latest
[npm-image]: https://img.shields.io/npm/v/tmpr.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/tmpr
[travis-image]: https://img.shields.io/travis/bcomnes/node-tmpr.svg?style=flat-square
[travis-url]: https://travis-ci.org/bcomnes/node-tmpr
[coverage-image]: https://img.shields.io/codeclimate/coverage/github/bcomnes/node-tmpr.svg?style=flat-square
[coverage-url]: https://codeclimate.com/github/bcomnes/node-tmpr
[david-image]: https://img.shields.io/david/bcomnes/node-tmpr.svg?style=flat-square
[david-url]: https://david-dm.org/bcomnes/node-tmpr
[stability-image]: https://img.shields.io/badge/stability-2%20--%20unstable-yellow.svg?style=flat-square
[stability-url]: https://nodejs.org/api/documentation.html#documentation_stability_index

Creates a temorary directory and then gives you the path to it.  `mkdirp`(`os.tmpdir` + `crypto.randomBytes`), tests, and possibly a few other conerns.

![demo](https://cdn.rawgit.com/bcomnes/node-tmpr/master/tmpr.gif)

# Install

```
$ npm i tmpr -g
```

## API

```js
var tmpr = require('tmpr')

tmpr(function(err, path) {
  console.log('Temp dir created at ' + path)
})
```

## References

- https://iojs.org/api/os.html#os_os_tmpdir
- https://iojs.org/api/crypto.html#crypto_crypto_randombytes_size_callback
- https://github.com/substack/node-mkdirp
- https://github.com/isaacs/rimraf

> [ogd] bret: require('os').tmpdir

> [ogd] i use that with require('mkdirp') and require('rimraf') a lot

> [ogd] bret: usually like ~~(Math.random() * 1000000) + Date.now()

> [ogd] could also do require('crypto').randomBytes(16).toString('hex')

> -- [#pdxnode](irc://chat.us.freenode.net/pdxnode) [2015-03-02 09:51:02]
