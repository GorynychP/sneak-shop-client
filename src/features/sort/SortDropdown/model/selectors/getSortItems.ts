import {} from '@/shared/const/router';
// import { DropdownItem } from '@/shared/ui/Popups/ui/Dropdown/Dropdown';
import { ListBoxItem } from '@/shared/ui/Popups/ui/ListBox/ListBox';

type Sort = 'rating' | 'price' | '-price' | 'new' | '-new';
interface SortItem extends ListBoxItem<string> {
    value: string;
    sortProperty: Sort;
}
export const getSortItems = () => {
    const sortItemsList: SortItem[] = [
        {
            // key: 1,
            value: 'Сначала дорогие',
            content: 'Сначала дорогие',
            sortProperty: 'price',
        },
        {
            // key: 2,
            value: 'Сначала дешевые',
            content: 'Сначала дешевые',
            sortProperty: '-price',
        },
        {
            // key: 3,
            value: 'Сначала новые',
            content: 'Сначала новые',
            sortProperty: 'new',
        },
        {
            // key: 4,
            value: 'Сначала старые',
            content: 'Сначала старые',
            sortProperty: '-new',
        },
        {
            // key: 5,
            value: 'Сначала популярные',
            content: 'Сначала популярные',
            sortProperty: 'rating',
        },
    ];
    return sortItemsList;
};
