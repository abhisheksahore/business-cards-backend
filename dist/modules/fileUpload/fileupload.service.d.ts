export declare class FileUploadService {
    constructor();
    uploadFiles(files: any): Promise<{
        status: string;
        data: any[];
        message?: undefined;
    } | {
        status: string;
        message: any;
        data?: undefined;
    }>;
    getFileUrl(filenames: string[]): Promise<{
        status: string;
        message: string;
        urls?: undefined;
    } | {
        status: string;
        urls: any[];
        message?: undefined;
    }>;
    uploadFileToFirebase(file: any): Promise<any>;
    deleteFiles(filenames: string[]): Promise<{
        status: string;
        message: any;
    }>;
}
