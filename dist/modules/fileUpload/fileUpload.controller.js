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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUploadController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const file_decorator_1 = require("./file.decorator");
const fileupload_gaurd_1 = require("./fileupload.gaurd");
const fileupload_service_1 = require("./fileupload.service");
const signedUrl_dto_1 = require("./dto/signedUrl.dto");
let FileUploadController = class FileUploadController {
    constructor(fileUploadService) {
        this.fileUploadService = fileUploadService;
    }
    async uploadFile(files, res) {
        let response = await this.fileUploadService.uploadFiles(files);
        if (response['status'] == 'success') {
            return res.status(200).send(response);
        }
        else {
            return res.status(400).send(response);
        }
    }
    async getUrl(body, res) {
        let urls = body.urls;
        let response = await this.fileUploadService.getFileUrl(urls);
        if (response['status'] == 'success') {
            return res.status(200).send(response);
        }
        else {
            return res.status(400).send(response);
        }
    }
    async deleteFiles(body, res) {
        let urls = body.urls;
        let response = await this.fileUploadService.deleteFiles(urls);
        if (response['status'] == 'success') {
            return res.status(200).send(response);
        }
        else {
            return res.status(400).send(response);
        }
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, common_1.UseGuards)(fileupload_gaurd_1.UploadGuard),
    __param(0, (0, file_decorator_1.Files)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], FileUploadController.prototype, "uploadFile", null);
__decorate([
    (0, common_1.Post)('getImageUrl'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [signedUrl_dto_1.SignedUrlDto, Object]),
    __metadata("design:returntype", Promise)
], FileUploadController.prototype, "getUrl", null);
__decorate([
    (0, common_1.Post)('deletefiles'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [signedUrl_dto_1.SignedUrlDto, Object]),
    __metadata("design:returntype", Promise)
], FileUploadController.prototype, "deleteFiles", null);
FileUploadController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [fileupload_service_1.FileUploadService])
], FileUploadController);
exports.FileUploadController = FileUploadController;
//# sourceMappingURL=fileUpload.controller.js.map