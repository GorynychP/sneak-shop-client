import { ImagePlus } from 'lucide-react';

import { Button } from '../../../../../../shared/ui/Button';
import cls from './ImageUpload.module.scss';
import clsx from 'clsx';
import { useUpload } from '../../../../lib/hooks/useUpload';
import { useDeleteFiles } from '../../../../lib/hooks/useDeleteFiles';
import { getImageUrl } from '@/shared/lib/utils/format/getImageUrl';
import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { HStack } from '@/shared/ui/Stack';

interface ImageUploadProps {
    isDisabled: boolean;
    onChange: (value: string[]) => void;
    value: string[];
}

export function ImageUpload({ isDisabled, onChange, value }: ImageUploadProps) {
    const { handleFileChange, isUploading } = useUpload({
        onChange,
    });
    const { deleteFiles } = useDeleteFiles();

    // const [previews, setPreviews] = useState<
    //     { urlBuffer: string | ArrayBuffer | null; name: string; key: number }[]
    // >([]);

    const onDrop = useCallback(
        (acceptedFiles: File[]) => {
            handleFileChange(acceptedFiles);
            // acceptedFiles.forEach((file) => {
            //     const reader = new FileReader();
            //     reader.onload = () => {
            //         if (reader.result === null) return;
            //         setPreviews((prev) => [
            //             ...prev,
            //             { urlBuffer: reader.result, name: file.name, key: Math.random() * Date.now() },
            //         ]);
            //     };
            //     reader.readAsDataURL(file);
            // });
        },
        [handleFileChange],
    );

    const { getRootProps, getInputProps, open } = useDropzone({
        onDrop,
        noClick: true,
        maxFiles: 4,
    });
    const onClear = () => {
        // setPreviews([]);
        if (value.length === 0) return;
        deleteFiles(value);
        onChange([]);
    };

    return (
        <div>
            <div className={cls.imageContainer}>
                {value.map((url) => {
                    return (
                        <div key={url} className={cls.image_wrapper}>
                            <img src={getImageUrl(url)} alt="Картинка" />
                        </div>
                    );
                })}
            </div>
            <div {...getRootProps()} className={cls.ImageUpload}>
                <input {...getInputProps()} className="visually-hidden" disabled={isDisabled} />
                <HStack gap="12">
                    <Button
                        type="button"
                        theme="reset"
                        disabled={isDisabled || isUploading || value.length > 0}
                        onClick={open}
                        className={clsx(cls.upload)}
                    >
                        <ImagePlus />
                        Загрузить картинки
                    </Button>
                    <Button
                        disabled={isDisabled || isUploading || value.length === 0}
                        type="button"
                        theme="filled"
                        onClick={onClear}
                        className={clsx(cls.upload)}
                    >
                        Удалить изображения
                    </Button>
                </HStack>
            </div>
        </div>
    );
}
