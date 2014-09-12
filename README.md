# esnext-loader

[Webpack](http://webpack.github.io) loader for [esnext](https://github.com/esnext/esnext)

## Usage

Just use the `esnext` loader to automatically transpile ES6 code.

    npm install --save-dev esnext-loader

Then in any file:

    require('esnext!./file.js');

## Example Configuration

Example `webpack.config.js` file that automatically compiles all `.js` files using `esnext`. See the [webpack loader documentation](http://webpack.github.io/docs/using-loaders.html) for more information.

```js
module.exports = {
    module: {
        loaders: [
            { test: /\.js$/, loader: 'esnext' }
        ]
    }
};
```
