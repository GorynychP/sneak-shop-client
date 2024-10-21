import {} from '@/shared/constants/router';
// import { DropdownItem } from '@/shared/ui/Popups/ui/Dropdown/Dropdown';
import { ListBoxItem } from '@/shared/ui/Popups/ui/ListBox/ListBox';

interface SortItem extends ListBoxItem<string> {
    value: string;
    sortProperty: 'asc' | 'desc';
}
export const getSortItems = () => {
    const sortItemsList: SortItem[] = [
        {
            // key: 1,
            value: 'Сначала дорогие',
            content: 'Сначала дорогие',
            sortProperty: 'asc',
        },
        {
            // key: 2,
            value: 'Сначала дешевые',
            content: 'Сначала дешевые',
            sortProperty: 'desc',
        },
        {
            // key: 3,
            value: 'Сначала новые',
            content: 'Сначала новые',
            sortProperty: 'asc',
        },
        {
            // key: 4,
            value: 'Сначала старые',
            content: 'Сначала старые',
            sortProperty: 'desc',
        },
        // {
        //     // key: 5,
        //     value: 'Сначала популярные',
        //     content: 'Сначала популярные',
        //     sortProperty: 'rating',
        // },
    ];
    return sortItemsList;
};
