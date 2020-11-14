export const getSvgLoaderConfig = () => ({
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              plugins: ['@babel/plugin-transform-arrow-functions', '@babel/plugin-transform-block-scoping', '@babel/plugin-transform-destructuring'],
            },
          },
          {
            loader: 'react-svg-loader',
            query: {
              svgo: {
                // svgo options
                plugins: [{ removeTitle: true }],
                floatPrecision: 2,
              },
            },
          },
        ],
      },
    ],
  },
})
