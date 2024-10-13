import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { Theme } from '../../../constants/theme';

interface UseThemeResult {
    changeTheme: () => void;
    theme: Theme;
}
/**
 * Хук меняющий тему
 * @returns
 */
export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);
    const changeTheme = () => {
        let newTheme: Theme;
        switch (theme) {
            case Theme.DARK:
                newTheme = Theme.LIGHT;
                break;
            case Theme.LIGHT:
                newTheme = Theme.DARK;
                break;
            default:
                newTheme = Theme.LIGHT;
        }
        setTheme?.(newTheme);
        // localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return {
        theme: theme || Theme.LIGHT,
        changeTheme,
    };
}
