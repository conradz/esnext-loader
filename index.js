var esnext = require('esnext');
var loaderUtils = require('loader-utils');

module.exports = function(content) {
    if (this.cacheable)
        this.cacheable();

    var options = loaderUtils.parseQuery(this.query);
    Object.keys(options).forEach(function(key) {
        var value = options[key];
        if (value === 'false')
            options[key] = false;
    });

    options.sourceFileName = this.resourcePath;
    options.sourceMapName = this.resourcePath + '.map';

    var result = esnext.compile(content, options);

    var cb = this.async();
    if (!cb)
        return result.code;

    cb(null, result.code, result.map);
};
