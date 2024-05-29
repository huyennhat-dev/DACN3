import { IconX } from '@tabler/icons-react'
import React, { ReactNode } from 'react'



const ModalComponent = ({ children, hideModal }: { children: ReactNode, hideModal: () => void }) => {
  return (
    <>
      <div
        className="fixed inset-0 z-999 flex items-center justify-center ">
        <div
          onClick={hideModal}
          className='absolute bottom-0 top-0 left-0 right-0  bg-black/60' />
        <div className="absolute app-modal bg-white p-4 rounded shadow-lg">
          <div onClick={hideModal} className='absolute top-3 right-3 cursor-pointer'>
            <IconX strokeWidth={1.5} size={20} />
          </div>
          {children}
        </div>
      </div>
    </>
  )
}

export default ModalComponent
