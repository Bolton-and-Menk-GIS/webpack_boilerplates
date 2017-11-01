var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './src/main.js',
  output: {
    filename: './dist/[name].bundle.js',
    publicPath: './',
    // the bundled output will be loaded by the Dojo AMD loader
    // that is included in the ArcGIS API for JavaScript
    libraryTarget: 'amd'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test:/\.(s*)css$/,
        use:['style-loader','css-loader', 'sass-loader']
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity
    })
  ],
  externals: [
    function(context, request, callback) {
      // exclude any esri or dojo modules from the bundle
      // these are included in the ArcGIS API for JavaScript
      // and its Dojo loader will pull them from its own build output
      if (/^dojo/.test(request) ||
          /^dojox/.test(request) ||
          /^dijit/.test(request) ||
          /^esri/.test(request) ||
          // ordinarily you would only need to speficy the above prefixes,
          // but because we include a third-party Dojo module in this example
          // we need to add it's package to the list of prefixes to exclude
          /^bootstrap/.test(request)
      ) {
        return callback(null, 'amd ' + request);
      }
      callback();
    }
  ],
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
