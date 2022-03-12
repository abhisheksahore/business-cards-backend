
import { Global, Module } from "@nestjs/common";
import { DBHelper } from "src/common/helpers/db.helpers";
import { ConstantsService } from "./constant.service";

@Global()
@Module({
    providers: [ConstantsService, DBHelper],
    exports: [ConstantsService, DBHelper],
    imports: [],
    controllers: [],
})

export class SharedModule { }