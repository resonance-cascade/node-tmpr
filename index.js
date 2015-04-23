var crypto = require('crypto')
var path = require('path')
var ostmp = require('os').tmpdir()

var mkdirp = require('mkdirp')

module.exports = tmpr

function tmpr (cb) {
  var tmpName = crypto.randomBytes(16).toString('hex')
  var dir = path.join(ostmp, tmpName)
  mkdirp(dir, function (err) {
    cb(err, dir)
  })
}
