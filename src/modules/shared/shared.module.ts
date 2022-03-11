
import { Global, Module } from "@nestjs/common";
import { ConstantsService } from "./constant.service";

@Global()
@Module({
    providers:[ConstantsService],
    exports:[ConstantsService],
    imports:[],
    controllers:[],
})

export class SharedModule { }