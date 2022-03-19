import { Body, Controller, Get, Headers, Post, Req, Res, UseGuards } from '@nestjs/common';
import { ApiConsumes } from '@nestjs/swagger';
import { Files } from './file.decorator';
import { UploadGuard } from './fileupload.gaurd';
import { FastifyReply } from 'fastify';
import { FileUploadService } from './fileupload.service';
import { SignedUrlDto } from './dto/signedUrl.dto';
@Controller()
export class FileUploadController {
    constructor(
        private readonly fileUploadService: FileUploadService
    ) { }

    @Post()
    @ApiConsumes('multipart/form-data')
    @UseGuards(UploadGuard)
    async uploadFile(@Files() files, @Res() res: FastifyReply) {

        let response = await this.fileUploadService.uploadFiles(files);

        if (response['status'] == 'success') {
            return res.status(200).send(response);
        } else {
            return res.status(400).send(response);
        }
    }

    @Post('getImageUrl')
    async getUrl(@Body() body:SignedUrlDto, @Res() res: FastifyReply) {
        let urls = body.urls;

        let response = await this.fileUploadService.getFileUrl(urls);

        if (response['status'] == 'success') {
            return res.status(200).send(response);
        } else {
            return res.status(400).send(response);
        }

    }


    @Post('deletefiles')
    async deleteFiles(@Body() body:SignedUrlDto, @Res() res: FastifyReply) {
        let urls = body.urls;
        
        let response = await this.fileUploadService.deleteFiles(urls);

        if (response['status'] == 'success') {
            return res.status(200).send(response);
        } else {
            return res.status(400).send(response);
        }

    }


}
