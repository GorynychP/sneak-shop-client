import { Trash2 } from 'lucide-react';
import { useDeleteProduct } from '../../../lib/hooks/useDeleteProduct';

export const DeleteAction = ({ id }: { id: string }) => {
    const { deleteProduct } = useDeleteProduct();

    const handleDelete = async () => {
        const confirmed = confirm('Вы уверены, что хотите удалить продукт?');
        if (confirmed) {
            try {
                deleteProduct(id);
                console.log(`Продукт с ID ${id} удалён`);
            } catch (error) {
                console.error('Ошибка при удалении продукта:', error);
            }
        }
    };

    return (
        <div
            style={{ display: 'flex', justifyContent: 'flex-start', width: '100%' }}
            onClick={handleDelete}
            className="center gap-min"
        >
            <Trash2 />
            Удалить
        </div>
    );
};
