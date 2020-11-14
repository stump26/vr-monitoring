import React from 'react'

type CreateCtx<A> = readonly [() => A, React.ProviderExoticComponent<React.ProviderProps<A | undefined>>]

function createCtx<A>(): CreateCtx<A> {
  const ctx = React.createContext<A | undefined>(undefined)
  function useCtx(): A {
    const c = React.useContext(ctx)
    if (!c) throw new Error('useCtx must be inside a Provider with a value')
    return c
  }
  return [useCtx, ctx.Provider] as const
}
export default createCtx
