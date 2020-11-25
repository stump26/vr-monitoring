import React from 'react'
import apolloClient from '@vr-monitoring/shared/App/apolloClient'
import {PagesMenagerCtxProvider} from '@vr-monitoring/hooks/Contexts/usePagesMenagerCtx'
import {ModalCtxProvier} from '@vr-monitoring/hooks/Contexts/useModalCtx'
import { ApolloProvider } from '@apollo/client'
import {CameraCtxProvier} from '@vr-monitoring/hooks/Contexts/useCameraCtx'

const Providers: React.FC = ({ children }) => {
  return (
    <ApolloProvider client={apolloClient}>
      <PagesMenagerCtxProvider>
        <CameraCtxProvier>
          <ModalCtxProvier>
          {children}
          </ModalCtxProvier>
        </CameraCtxProvier>
      </PagesMenagerCtxProvider>
    </ApolloProvider>
  )
}

export default Providers
