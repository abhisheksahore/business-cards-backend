"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharedModule = void 0;
const common_1 = require("@nestjs/common");
const auth_gaurd_1 = require("../../auth.gaurd");
const db_helpers_1 = require("../../common/helpers/db.helpers");
const fileupload_service_1 = require("../fileUpload/fileupload.service");
const constant_service_1 = require("./constant.service");
let SharedModule = class SharedModule {
};
SharedModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        providers: [constant_service_1.ConstantsService, db_helpers_1.DBHelper, auth_gaurd_1.AuthGuard, fileupload_service_1.FileUploadService],
        exports: [constant_service_1.ConstantsService, db_helpers_1.DBHelper, auth_gaurd_1.AuthGuard, fileupload_service_1.FileUploadService],
        imports: [],
        controllers: [],
    })
], SharedModule);
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map