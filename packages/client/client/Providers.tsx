import React from 'react'
import apolloClient from '@vr-monitoring/shared/app/apolloClient'
import {PagesMenagerCtxProvider} from '@vr-monitoring/hooks/Contexts/usePagesMenagerCtx'
import { ApolloProvider } from '@apollo/client'


const Providers: React.FC = ({ children }) => {
  return (
    <ApolloProvider client={apolloClient}>
      <PagesMenagerCtxProvider>
        {children}
      </PagesMenagerCtxProvider>
    </ApolloProvider>
  )
}

export default Providers
