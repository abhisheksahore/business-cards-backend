import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ConstantsService } from './modules/shared/constant.service';
export declare class AuthGuard implements CanActivate {
    private reflector;
    private readonly constant;
    constructor(reflector: Reflector, constant: ConstantsService);
    canActivate(context: ExecutionContext): Promise<boolean>;
    verifyGoogleToken(token: string): Promise<import("firebase-admin/auth").DecodedIdToken | {
        status: string;
        message: any;
    }>;
}
