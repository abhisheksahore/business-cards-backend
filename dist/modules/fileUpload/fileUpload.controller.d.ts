import { FastifyReply } from 'fastify';
import { FileUploadService } from './fileupload.service';
import { SignedUrlDto } from './dto/signedUrl.dto';
export declare class FileUploadController {
    private readonly fileUploadService;
    constructor(fileUploadService: FileUploadService);
    uploadFile(files: any, res: FastifyReply): Promise<never>;
    getUrl(body: SignedUrlDto, res: FastifyReply): Promise<never>;
    deleteFiles(body: SignedUrlDto, res: FastifyReply): Promise<never>;
}
