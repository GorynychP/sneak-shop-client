import { axiosWithAuth } from '@/shared/api/api.interceptors';

export interface I_File {
    url: string;
    name: string;
}

class FileService {
    async upload(file: FormData, folder?: string) {
        const { data } = await axiosWithAuth<I_File[]>({
            url: '/files',
            method: 'POST',
            data: file,
            params: {
                folder,
            },
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        return data;
    }
    async delete(files: string[], folder?: string) {
        await axiosWithAuth({
            url: '/files',
            method: 'DELETE',
            data: files,
            params: {
                folder,
            },
        });
    }
}

export const fileService = new FileService();
