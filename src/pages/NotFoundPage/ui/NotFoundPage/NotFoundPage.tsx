import clsx from 'clsx';
import cls from './NotFoundPage.module.scss';
import { useNavigate } from 'react-router-dom';

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
    const navigate = useNavigate();
    const backNavigate = () => {
        navigate('/');
    };
    return (
        <div className={clsx(cls.NotFoundPage, [className])}>
            Страница не найдена
            <button onClick={backNavigate}>Вернуться на главную </button>
        </div>
    );
};
