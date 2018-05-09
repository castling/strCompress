var Deflate = require('deflate-js')

module.exports.compress = function(str) {
  return Deflate.deflate(Array.prototype.map.call(str,c=>c.charCodeAt(0))).join(',')
}

module.exports.decompress = function(comp) {
  return Deflate.inflate(comp.split(',')).map(i=>String.fromCharCode(i)).join('')
}
