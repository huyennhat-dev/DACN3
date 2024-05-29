// ModalContext.tsx
import { IconX } from '@tabler/icons-react';
import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

interface ModalContextType {
    showModal: (content: ReactNode) => void;
    hideModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [modalContent, setModalContent] = useState<ReactNode | null>(null);

    const showModal = useCallback((content: ReactNode) => {
        setModalContent(content);
    }, []);

    const hideModal = useCallback(() => {
        setModalContent(null);
    }, []);

    return (
        <ModalContext.Provider value={{ showModal, hideModal }}>
            {children}
            {modalContent && (
                <div className="fixed inset-0 z-999999 flex items-center justify-center bg-black/40">
                    <div className="relative app-modal bg-white p-4 rounded shadow-lg">

                        <div onClick={hideModal} className='absolute top-3 right-3 cursor-pointer'>
                            <IconX strokeWidth={1.5} size={20} />
                        </div>
                        {modalContent}
                    </div>
                </div>
            )}
        </ModalContext.Provider>
    );
};

export const useModal = (): ModalContextType => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
};
