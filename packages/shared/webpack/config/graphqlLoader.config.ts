export const getGraphqlLoader = () => ({
  module: {
    rules: [
      {
        test: /\.(gql)$/,
        loader: 'graphql-tag/loader',
      },
    ],
  },
})
