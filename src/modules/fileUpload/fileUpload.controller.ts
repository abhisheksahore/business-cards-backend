import { Body, Controller, Get, Headers, Post, Res, UseGuards } from '@nestjs/common';
import { File } from './file.decorator';
import { UploadGuard } from './fileupload.gaurd';
@Controller()
export class AppController {
  constructor() { }

  @Post("upload")
    @UseGuards(UploadGuard)
    uploadFile(@File() file) {
    console.log(file); // logs MultipartFile from "fastify-multipart"
    return "File uploaded"
}

}
