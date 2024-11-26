export const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const getImageUrl = (path: string) => {
    if (path.startsWith('/uploads')) {
        return `${SERVER_URL}${path}`;
    }

    return path;
};
