module.exports = {
    entry: './test.js',
    output: {
        filename: 'test.output.js'
    },

    module: {
        loaders: [
            { test: /\.js$/, loader: './' }
        ]
    }
};
