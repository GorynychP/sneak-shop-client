export const stringifyFilter = <T>(filters: T) => {
    const params: Record<string, string> = {};
    if (!filters) return;
    Object.keys(filters).forEach((key) => {
        const value = filters[key as keyof T];
        if (value !== undefined && value !== null) {
            params[key] = String(value); // Приведение значений к строкам
        }
    });
    return params;
};
