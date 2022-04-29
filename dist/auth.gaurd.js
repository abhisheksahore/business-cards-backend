"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const fp_1 = require("lodash/fp");
const constant_service_1 = require("./modules/shared/constant.service");
const auth_1 = require("firebase-admin/auth");
let AuthGuard = class AuthGuard {
    constructor(reflector, constant) {
        this.reflector = reflector;
        this.constant = constant;
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        if (this.constant.skipAuth().includes((0, fp_1.trimCharsStart)('/', request.routerPath))) {
            return true;
        }
        if (!request.headers || !request.headers.token) {
            throw new common_1.UnauthorizedException({
                status: 'error',
                error: 'No token found',
            });
        }
        const token = request.headers.token;
        let userDetails = await this.verifyGoogleToken(token);
        if (userDetails['status'] === 'error') {
            throw new common_1.UnauthorizedException({
                status: 'error',
                error: userDetails['message'],
            });
        }
        request.headers.uid = userDetails['uid'];
        return true;
    }
    async verifyGoogleToken(token) {
        try {
            let x = await (0, auth_1.getAuth)()
                .verifyIdToken(token);
            return x;
        }
        catch (error) {
            return {
                status: 'error',
                message: error.message
            };
        }
    }
};
AuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector,
        constant_service_1.ConstantsService])
], AuthGuard);
exports.AuthGuard = AuthGuard;
//# sourceMappingURL=auth.gaurd.js.map