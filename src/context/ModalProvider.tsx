'use client'

import { useReducer, createContext, ReactNode, Dispatch, useContext } from 'react'

export type ModalState = {
  isOpen: boolean
  modal: string
}

type Action = { type: 'OPEN' } | { type: 'CLOSE' } | { type: 'CHANGE_DEFAULT'; payload: string }

type ToggleDispatch = Dispatch<Action>

export const ModalStateContext = createContext<ModalState | null>(null)
export const ModalSetterContext = createContext<ToggleDispatch | null>(null)

// reducer
function reducer(state: ModalState, action: Action): ModalState {
  switch (action.type) {
    case 'OPEN':
      return {
        ...state,
        isOpen: true,
      }
    case 'CLOSE':
      return {
        ...state,
        isOpen: false,
      }
    case 'CHANGE_DEFAULT':
      return {
        ...state,
        modal: action.payload,
      }
    default:
      throw new Error('unhandled action')
  }
}

export function ModalProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, { isOpen: false, modal: 'default' })

  return (
    <ModalStateContext.Provider value={state}>
      <ModalSetterContext.Provider value={dispatch}>{children}</ModalSetterContext.Provider>
    </ModalStateContext.Provider>
  )
}
