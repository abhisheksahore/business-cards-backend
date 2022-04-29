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
exports.FileUploadService = void 0;
const common_1 = require("@nestjs/common");
const admin = require("firebase-admin");
let FileUploadService = class FileUploadService {
    constructor() { }
    async uploadFiles(files) {
        let promises = [];
        for (let file of files) {
            promises.push(this.uploadFileToFirebase(file));
        }
        try {
            let names = await Promise.all(promises);
            return {
                status: 'success',
                data: names
            };
        }
        catch (err) {
            return {
                status: 'error',
                message: err.message
            };
        }
    }
    async getFileUrl(filenames) {
        if (filenames.length === 0) {
            return {
                status: "error",
                message: 'No files found'
            };
        }
        let urls = [];
        for (let filename of filenames) {
            let bucket = admin.storage().bucket(process.env.BUCKET_NAME);
            let oneday = new Date(Date.now() + 24 * 60 * 60 * 1000);
            urls.push((await bucket.file(filename).getSignedUrl({
                action: 'read',
                expires: oneday.getTime()
            }))[0]);
        }
        return {
            status: 'success',
            urls
        };
    }
    async uploadFileToFirebase(file) {
        let filename = Date.now() + file.name;
        let bucket = admin.storage().bucket(process.env.BUCKET_NAME);
        await bucket.file(filename).save(file.data);
        return filename;
    }
    async deleteFiles(filenames) {
        if (filenames.length === 0) {
            return {
                status: "error",
                message: 'No files found '
            };
        }
        let urls = [];
        let promise = [];
        for (let filename of filenames) {
            let bucket = admin.storage().bucket(process.env.BUCKET_NAME);
            promise.push(bucket.file(filename).delete());
        }
        try {
            await Promise.all(promise);
            return {
                status: 'success',
                message: "files deleted successfully"
            };
        }
        catch (err) {
            return {
                status: 'error',
                message: err.message
            };
        }
    }
};
FileUploadService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], FileUploadService);
exports.FileUploadService = FileUploadService;
//# sourceMappingURL=fileupload.service.js.map