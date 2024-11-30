import { useMutation } from '@tanstack/react-query';
import { fileService } from '../../services/file.service';
import { useMemo } from 'react';
import toast from 'react-hot-toast';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useFiles = (onChange: { (value: string[]): void }) => {
    const { mutate: uploadFiles, isPending: isUploading } = useMutation({
        mutationKey: ['upload files'],
        mutationFn: (formData: FormData) => fileService.upload(formData),
        onSuccess(data) {
            onChange(data.map((file) => file.url));
        },
        onError() {
            toast.error('Ошибка при загрузки файлов');
        },
    });

    return useMemo(() => ({ uploadFiles, isUploading }), [uploadFiles, isUploading]);
};
