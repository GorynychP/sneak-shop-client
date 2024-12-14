import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { fileService } from '../../services/file.service';
import { useMemo } from 'react';

export const useDeleteFiles = () => {
    const { mutate: deleteFiles, isPending } = useMutation({
        mutationKey: ['delete files'],
        mutationFn: async (urls: string[]) => await fileService.delete(urls),
        onSuccess: () => {
            toast.success('Файлы очищены');
        },
        onError: () => {
            toast.error('Ошибка при удалении файлов');
        },
    });

    return useMemo(() => ({ deleteFiles, isPending }), [deleteFiles, isPending]);
};
