import { Module } from '@nestjs/common';
import { SharedModule } from '../shared/shared.module';
import { FileUploadController } from './fileUpload.controller';
import { FileUploadService } from './fileupload.service';

@Module({
  imports:[SharedModule],
  controllers: [FileUploadController],
  providers: [FileUploadService],
  exports:[FileUploadService]
})
export class FileUploadModule {}