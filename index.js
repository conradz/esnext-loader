var esnext = require('esnext');

module.exports = function(content) {
    if (this.cacheable)
        this.cacheable();

    var result = esnext.compile(content, {
        sourceFileName: this.resourcePath,
        sourceMapName: 'map.json'
    });

    var cb = this.async();
    if (!cb)
        return result.code;

    cb(null, result.code, result.map);
};
