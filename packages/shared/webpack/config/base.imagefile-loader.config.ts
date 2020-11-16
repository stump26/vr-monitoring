export const getImageFileLoaderConfig = () => ({
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: require.resolve('file-loader'),
          },
        ],
      },
    ],
  },
})
