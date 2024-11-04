import { useAppSelector } from '@/shared/model';

export function useLocalFavorites() {
    const localFavorites = useAppSelector((state) => state.favorites.favorites);
    const favorites = localFavorites || [];
    return { favorites };
}
