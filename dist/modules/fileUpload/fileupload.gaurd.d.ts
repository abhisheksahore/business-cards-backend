import { CanActivate, ExecutionContext } from "@nestjs/common";
import { ConstantsService } from "../shared/constant.service";
export declare class UploadGuard implements CanActivate {
    private readonly constants;
    constructor(constants: ConstantsService);
    canActivate(ctx: ExecutionContext): Promise<boolean>;
    checkType(type: any): boolean;
}
