import { useCallback, useState } from 'react';

export function useOpenModal() {
    const [isOpenModal, setIsOpenModal] = useState(false);

    const onCloseModal = useCallback(() => {
        setIsOpenModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsOpenModal(true);
    }, []);

    return {
        isOpenModal,
        onCloseModal,
        onShowModal,
    };
}
