import { useContext } from 'react'
import { ModalStateContext, ModalSetterContext } from '@/context/ModalProvider'
import { ModalContentType } from '@/components/modal/ModalContainer'

// Modal state custom hook
export function useModalState() {
  const state = useContext(ModalStateContext)
  if (!state) throw new Error('Cannot find ModalProvider')
  return state
}

// Modal Dispatch custom hook
export function useModalDispatch() {
  const dispatch = useContext(ModalSetterContext)

  function openModal(modal: keyof ModalContentType) {
    if (!dispatch) throw new Error('Cannot find ModalProvider')
    dispatch({ type: 'OPEN' })
    dispatch({ type: 'CHANGE', payload: modal })
  }
  function closeModal() {
    if (!dispatch) throw new Error('Cannot find ModalProvider')
    dispatch({ type: 'CLOSE' })
  }

  return { openModal, closeModal }
}
