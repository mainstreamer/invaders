 module.exports = {
  devServer: {
    watchContentBase: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
           options: {
              presets: [
          /*
            To get tree shaking working, we need the `modules: false` below.
            https://goo.gl/4vZBSr - 2ality blog mentions that the issue is caused
            by under-the-hood usage of `transform-es2015-modules-commonjs`.
            https://goo.gl/sBmiwZ - A comment on the above post shows that we
            can use `modules: false`.
            https://goo.gl/aAxYAq - `babel-preset-env` documentation.
          */
          [
            '@babel/preset-env',
            {
              targets: {
                browsers: [
                  'last 2 versions'
                ]
              },
              modules: false // Needed for tree shaking to work.
            }
          ],
          // '@babel/preset-env', // https://goo.gl/aAxYAq
          '@babel/preset-react' // https://goo.gl/4aEFV3
        ],

        // https://goo.gl/N9gaqc - List of Babel plugins.
        plugins: [
          '@babel/plugin-proposal-class-properties' // https://goo.gl/TE6TyG
        ]
        }
      }
      }
    ]
  }
};
