import { memo } from 'react';
import clsx from 'clsx';
import './Switch.scss';

type T_switch = 'login' | 'register';
interface SwitchProps {
    className?: string;
    activeTab: T_switch;
    setActiveTab: (tab: T_switch) => void;
}

export const Switch = memo(({ className, activeTab, setActiveTab }: SwitchProps) => {
    return (
        <div className={clsx('switch', [className])}>
            <input
                type="checkbox"
                checked={activeTab === 'register'}
                onChange={() => setActiveTab(activeTab === 'login' ? 'register' : 'login')}
                id="toggle"
                className="toggleCheckbox"
            />
            <label htmlFor="toggle" className="toggleContainer">
                <div>Вход</div>
                <div>Регистрация</div>
            </label>
        </div>
    );
});
