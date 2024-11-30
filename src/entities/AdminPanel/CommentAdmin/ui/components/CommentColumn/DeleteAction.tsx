import { Trash2 } from 'lucide-react';
import { useDeleteComment } from '../../../api/hooks/useDeleteComment';

export const DeleteActionComment = ({ id }: { id: string }) => {
    const { deleteComment } = useDeleteComment(id);
    const handleDelete = async () => {
        const confirmed = confirm('Вы уверены, что хотите удалить этот комментарий?');
        if (confirmed) {
            try {
                deleteComment();
                console.log(`Комментарий с ID ${id} удалён`);
            } catch (error) {
                console.error('Ошибка при удалении комментария:', error);
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
