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
exports.ConstantsService = void 0;
const common_1 = require("@nestjs/common");
let ConstantsService = class ConstantsService {
    constructor() {
        this.ENVIRONMENT = '';
        this.ENVIRONMENT = process.env.ENV.toLowerCase();
    }
    skipAuth() {
        let skip = ['user/auth/signupByEmail', 'user/auth/googleSignIn', 'user/card/getCard', 'user/card/vcard'];
        return skip;
    }
    allowedTypes() {
        let types = [];
        return types;
    }
};
ConstantsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], ConstantsService);
exports.ConstantsService = ConstantsService;
//# sourceMappingURL=constant.service.js.map