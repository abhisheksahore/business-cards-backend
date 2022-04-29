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
exports.UploadGuard = void 0;
const common_1 = require("@nestjs/common");
const constant_service_1 = require("../shared/constant.service");
let UploadGuard = class UploadGuard {
    constructor(constants) {
        this.constants = constants;
    }
    async canActivate(ctx) {
        const req = ctx.switchToHttp().getRequest();
        let files = req.raw['files'];
        if (!files) {
            throw new common_1.BadRequestException({
                status: 'error',
                message: "file not found"
            });
        }
        else {
            files = files['files'];
        }
        let totalSize = 0;
        if (!files[0]) {
            totalSize += files.size / (1024 * 1024);
            req['incomingFiles'] = [files];
        }
        else {
            for (let file of files) {
                totalSize += file.size / (1024 * 1024);
            }
            req['incomingFiles'] = files;
        }
        if (totalSize > 30) {
            throw new common_1.BadRequestException({
                status: 'error',
                message: "Cannot use files more than 30 mb"
            });
        }
        return true;
    }
    checkType(type) {
        let skip = this.constants.allowedTypes();
        let check = true;
        for (let skipType of skip) {
            if (!type.includes(skipType)) {
                check = false;
                break;
            }
        }
        return check;
    }
};
UploadGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [constant_service_1.ConstantsService])
], UploadGuard);
exports.UploadGuard = UploadGuard;
//# sourceMappingURL=fileupload.gaurd.js.map