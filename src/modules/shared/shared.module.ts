
import { Global, Module } from "@nestjs/common";
import { AuthGuard } from "src/auth.gaurd";
import { DBHelper } from "src/common/helpers/db.helpers";
import { FileUploadService } from "../fileUpload/fileupload.service";
import { ConstantsService } from "./constant.service";

@Global()
@Module({
    providers: [ConstantsService, DBHelper,AuthGuard,FileUploadService],
    exports: [ConstantsService, DBHelper,AuthGuard,FileUploadService],
    imports: [],
    controllers: [],
})

export class SharedModule { }