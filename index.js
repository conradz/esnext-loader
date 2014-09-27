var esnext = require('esnext');
var loaderUtils = require('loader-utils');

function compileOptions(query, options) {
    Object.keys(query).forEach(function (name) {
        options[name] = query[name];
    });

    return options;
}

module.exports = function(content) {
    if (this.cacheable)
        this.cacheable();

    var query = loaderUtils.parseQuery(this.query);

    var result = esnext.compile(content, compileOptions(query, {
        sourceFileName: this.resourcePath,
        sourceMapName: this.resourcePath + '.map'
    }));

    var cb = this.async();
    if (!cb)
        return result.code;

    cb(null, result.code, result.map);
};
