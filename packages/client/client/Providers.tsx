import React from 'react'
import apolloClient from '@vr-monitoring/shared/App/apolloClient'
import {PagesMenagerCtxProvider} from '@vr-monitoring/hooks/Contexts/usePagesMenagerCtx'
import {ModalCtxProvier} from '@vr-monitoring/hooks/Contexts/useModalCtx'
import { ApolloProvider } from '@apollo/client'


const Providers: React.FC = ({ children }) => {
  return (
    <ApolloProvider client={apolloClient}>
      <PagesMenagerCtxProvider>
        <ModalCtxProvier>
        {children}
        </ModalCtxProvier>
      </PagesMenagerCtxProvider>
    </ApolloProvider>
  )
}

export default Providers
