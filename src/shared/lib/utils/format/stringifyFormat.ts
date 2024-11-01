export const stringifyFilter = <T>(filters: T) => {
    const params: Record<string, string | string[]> = {};
    if (!filters) return;
    Object.keys(filters).forEach((key) => {
        const value = filters[key as keyof T];
        if (value !== undefined && value !== null) {
            if (Array.isArray(value)) {
                // Для массива создаем повторяющиеся параметры
                params[key] = value.map(String); // Преобразуем каждый элемент в строку
            } else {
                params[key] = String(value); // Преобразование в строку для остальных типов
            } // Приведение значений к строкам
        }
    });
    return params;
};
