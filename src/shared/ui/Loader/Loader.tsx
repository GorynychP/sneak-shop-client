import clsx from 'clsx';

interface LoaderProps {
    className?: string;
}

export const Loader = ({ className }: LoaderProps) => {
    return <div className={clsx('loader', [className])}></div>;
};
