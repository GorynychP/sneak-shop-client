import { ImagePlus } from 'lucide-react';

import { Button } from '../../../../../../shared/ui/Button';
import cls from './ImageUpload.module.scss';
import clsx from 'clsx';
import { useUpload } from '../../../../lib/hooks/useUpload';
import { getImageUrl } from '@/shared/lib/utils/format/getImageUrl';

interface ImageUploadProps {
    isDisabled: boolean;
    onChange: (value: string[]) => void;
    value: string[];
}

export function ImageUpload({ isDisabled, onChange, value }: ImageUploadProps) {
    const { handleButtonClick, isUploading, fileInputRef, handleFileChange } = useUpload(onChange);
    return (
        <div className={cls.ImageUpload}>
            <div className={cls.imageContainer}>
                {value?.map((url) => {
                    return (
                        <div key={url} className={cls.image_wrapper}>
                            <img src={getImageUrl(url)} alt="Картинка" />
                        </div>
                    );
                })}
            </div>
            <Button
                type="button"
                theme="reset"
                disabled={isDisabled || isUploading}
                onClick={handleButtonClick}
                className={clsx(cls.upload, {
                    'mt-4': value.length,
                })}
            >
                <ImagePlus />
                Загрузить картинки
            </Button>
            <input
                type="file"
                multiple
                className="visually-hidden"
                ref={fileInputRef}
                onChange={handleFileChange}
                disabled={isDisabled}
            />
        </div>
    );
}
