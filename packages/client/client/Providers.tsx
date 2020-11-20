import React from 'react'
import apolloClient from '@vr-monitoring/shared/app/apolloClient'
import { ApolloProvider } from '@apollo/client'


const Providers: React.FC = ({ children }) => {
  return (
    <ApolloProvider client={apolloClient}>
      {children}
    </ApolloProvider>
  )
}

export default Providers
