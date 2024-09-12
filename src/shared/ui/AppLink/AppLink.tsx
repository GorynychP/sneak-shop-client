import { ReactNode, FC, forwardRef, ForwardedRef } from 'react';
import clsx from 'clsx';
import cls from './AppLink.module.scss';
import { LinkProps, NavLink } from 'react-router-dom';

export type AppLinkTheme = 'primary' | 'secondary';

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
    children?: ReactNode;
    activeClassName?: string;
}

export const AppLink: FC<AppLinkProps> = forwardRef(
    (props: AppLinkProps, ref: ForwardedRef<HTMLAnchorElement>) => {
        const { to, className, children, theme = 'primary', activeClassName = '', ...otherProps } = props;
        return (
            <NavLink
                to={to}
                ref={ref}
                className={({ isActive }) =>
                    clsx(cls.AppLink, { [activeClassName]: isActive }, [className, cls[theme]])
                }
                {...otherProps}
            >
                {children}
            </NavLink>
        );
    },
);
