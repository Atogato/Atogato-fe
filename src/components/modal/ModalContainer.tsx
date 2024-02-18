'use client'

import DefaultModal from './DefaultModal'
import { useModalState } from '@/hooks/modal/useModal'
import ApplicationModal from './ApplicationModal'

type ModalContentType = {
  default: ({ ...props }: { [x: string]: any }) => React.JSX.Element | undefined;
  application: ({ ...props }: { [x: string]: any }) => React.JSX.Element | undefined;
};

export const MODAL_CONTENT_TYPES:ModalContentType  = {
  default: DefaultModal,
  application: ApplicationModal,
}

export default function ModalContainer() {
  const { isOpen, modal } = useModalState()
  const Modal = MODAL_CONTENT_TYPES[modal as keyof ModalContentType]

  return (
    <>
      <Modal
        className="fixed left-1/2 top-1/2 z-50 flex h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 flex-col justify-center bg-white text-center"
        isOpen={isOpen}
      />
    </>
  )
}
