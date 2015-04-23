var fs = require('fs')
var path = require('path')

var test = require('tape')
var rimraf = require('rimraf')

var tmpr = require('../')

test('test tempdir creation', function (t) {
  t.plan(4)
  tmpr(function (err, tmpdir) {
    t.error(err, 'tempdir should be created without error')
    t.ok(path.isAbsolute(tmpdir), 'valid path')
    fs.stat(tmpdir, function (err, stats) {
      t.error(err, 'the folder should stat without error')
      rimraf(tmpdir, function (err) {
        t.error(err, 'test dir cleaned up')
      })
    })
  })
})
