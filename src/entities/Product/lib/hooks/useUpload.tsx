import { ChangeEvent, useCallback, useMemo, useRef } from 'react';
import { useFiles } from './useUploadFiles';

interface UploadProps {
    onChange: (value: string[]) => void;
    // onChangePlus: (value: FormData) => void;
}

export function useUpload(props: UploadProps) {
    const { onChange } = props;
    const { uploadFiles, isUploading } = useFiles(onChange);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            const selectedFiles = event.target.files;
            if (selectedFiles) {
                const fileArray = Array.from(selectedFiles);

                const formData = new FormData();
                fileArray.forEach((file) => formData.append('files', file));
                // const previewUrls = fileArray.map((file) => URL.createObjectURL(file));

                uploadFiles(formData);
            }
        },
        [uploadFiles],
    );

    const handleButtonClick = useCallback(() => {
        fileInputRef.current?.click();
    }, [fileInputRef]);

    return useMemo(
        () => ({
            handleButtonClick,
            fileInputRef,
            handleFileChange,
            isUploading,
        }),
        [handleButtonClick, fileInputRef, handleFileChange, isUploading],
    );
}
