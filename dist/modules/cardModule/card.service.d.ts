import { FastifyRequest } from "fastify";
import { DBHelper } from 'src/common/helpers/db.helpers';
import * as admin from 'firebase-admin';
import { AuthGuard } from 'src/auth.gaurd';
import { FileUploadService } from '../fileUpload/fileupload.service';
export declare class CardService {
    private readonly request;
    private readonly dbHelper;
    private readonly authGaurd;
    private readonly fileUploadService;
    constructor(request: FastifyRequest, dbHelper: DBHelper, authGaurd: AuthGuard, fileUploadService: FileUploadService);
    getCard(id: any, viewCount: any): Promise<{
        status: string;
        message: string;
        data?: undefined;
    } | {
        status: string;
        data: admin.firestore.DocumentData;
        message?: undefined;
    }>;
    changeCardImagesToUrl(card: any): Promise<any>;
    getAllCards(): Promise<any>;
    changeCardStatus(id: string, published: boolean): Promise<{
        status: string;
        message: any;
    }>;
    createCard(data: any): Promise<{
        status: string;
        message: string;
        id: string | {
            status: string;
            message: any;
        };
    } | {
        status: string;
        message: any;
        id?: undefined;
    }>;
    deleteCard(id: string): Promise<{
        status: string;
        message: any;
    }>;
    editCard(id: any, data: any): Promise<{
        status: string;
        message: any;
    }>;
    createQR(slug: any): Promise<{
        status: string;
        data: string;
        message?: undefined;
    } | {
        status: string;
        message: any;
        data?: undefined;
    }>;
    checkSlugExist(slug: string): Promise<boolean>;
}
