import React, { ReactNode, useEffect, useMemo, useState } from 'react';
import { Theme } from '@/shared/constants/theme';
import { ThemeContext } from '@/shared/lib/context/ThemeContext';
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/constants/localStorage';

interface ThemeProviderProps {
    children: ReactNode;
    initialTheme?: Theme;
}

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, initialTheme }) => {
    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

    useEffect(() => {
        document.body.className = theme;
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
    }, [theme]);
    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme],
    );
    return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};
