import { memo, useEffect, useState } from 'react';
import clsx from 'clsx';
import cls from './AuthModal.module.scss';
import { Modal } from '@/shared/ui/Modal';
import { useOpenModal } from '../../lib/hooks/useOpenModal';
import AccountImage from '@/shared/assets/icon/account.svg';
import { LoginForm } from '../LoginForm/LoginForm';
import { Switch } from './components/Switch/Switch';
import { RegisterForm } from '../RegisterForm/RegisterForm';
import { VStack } from '@/shared/ui/Stack';

interface AuthModalProps {
    className?: string;
    active?: 'login' | 'register';
}

export const AuthModal = memo(({ className, active = 'login' }: AuthModalProps) => {
    const { isOpenModal, onCloseModal, onShowModal } = useOpenModal();
    const [activeTab, setActiveTab] = useState<'login' | 'register'>(active);

    useEffect(() => {
        setActiveTab(active);
    }, [isOpenModal]);

    const isLogin = activeTab === 'login' ? true : false;

    return (
        <div style={{ cursor: 'pointer' }} onClick={onShowModal} className="header-right-block-link">
            <img width={26} height={28} src={AccountImage} alt="account" />
            {isOpenModal && (
                <Modal isOpen={isOpenModal} onClose={onCloseModal}>
                    <VStack gap="32" max className={clsx(cls.AuthModal, [className])}>
                        <Switch activeTab={activeTab} setActiveTab={setActiveTab} />
                        {isLogin ? (
                            <LoginForm onClick={onCloseModal} />
                        ) : (
                            <RegisterForm onClick={onCloseModal} />
                        )}
                    </VStack>
                </Modal>
            )}
        </div>
    );
});
