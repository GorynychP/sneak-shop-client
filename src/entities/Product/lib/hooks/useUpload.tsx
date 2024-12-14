import { useCallback, useMemo, useRef } from 'react';
import { useUploadFiles } from './useUploadFiles';

interface UploadProps {
    onChange: (value: string[]) => void;
}

export function useUpload(props: UploadProps) {
    const { onChange } = props;
    const { uploadFiles, isUploading } = useUploadFiles(onChange);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = useCallback(
        (files: File[]) => {
            if (files) {
                const fileArray = Array.from(files);

                const formData = new FormData();
                fileArray.forEach((file) => formData.append('files', file));
                // const previewUrls = fileArray.map((file) => URL.createObjectURL(file));

                uploadFiles(formData);
            }
        },
        [uploadFiles],
    );
    // const handleFileChange = useCallback(
    //     (event: ChangeEvent<HTMLInputElement>) => {
    //         const selectedFiles = event.target.files;
    //         if (selectedFiles) {
    //             const fileArray = Array.from(selectedFiles);

    //             const formData = new FormData();
    //             fileArray.forEach((file) => formData.append('files', file));
    //             // const previewUrls = fileArray.map((file) => URL.createObjectURL(file));

    //             uploadFiles(formData);
    //         }
    //     },
    //     [uploadFiles],
    // );

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
