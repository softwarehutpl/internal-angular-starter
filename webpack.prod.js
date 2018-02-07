const { AngularCompilerPlugin } = require('@ngtools/webpack');
const { PurifyPlugin } = require('@angular-devkit/build-optimizer');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const merge = require('webpack-merge');
const common = require('./webpack.common.js');


module.exports = merge(common, {
  plugins: [
    new AngularCompilerPlugin({
      "mainPath": "main.ts",
      "platform": 0,
      "hostReplacementPaths": {
        "environments/environment.ts": "environments/environment.prod.ts"
      },
      "sourceMap": false,
      "tsConfigPath": "src/tsconfig.app.json",
      "compilerOptions": {}
    }),
    new PurifyPlugin(),
    new UglifyJsPlugin({
      "test": /\.js$/i,
      "extractComments": false,
      "sourceMap": false,
      "cache": false,
      "parallel": false,
      "uglifyOptions": {
        "output": {
          "ascii_only": true,
          "comments": false,
          "webkit": true
        },
        "ecma": 5,
        "warnings": false,
        "ie8": false,
        "mangle": {
          "safari10": true
        },
        "compress": {
          "comparisons": false,
          "pure_getters": true,
          "passes": 3
        }
      }
    })
  ]
});
