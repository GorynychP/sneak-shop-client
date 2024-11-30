import { Trash2 } from 'lucide-react';

export const DeleteAction = ({ id }: { id: string }) => {
    const handleDelete = async () => {
        const confirmed = confirm('Вы уверены, что хотите удалить этого пользователя?');
        if (confirmed) {
            try {
                console.log(`User с ID ${id} удалён`);
            } catch (error) {
                console.error('Ошибка при удалении пользователя:', error);
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
