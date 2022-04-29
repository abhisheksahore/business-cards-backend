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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const signupEmail_dto_1 = require("./dto/signupEmail.dto");
const googleSignin_dto_1 = require("./dto/googleSignin.dto");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async signup(body, res) {
        let response = await this.authService.signupWithEmail({
            name: body.name,
            email: body.email,
            password: body.password
        });
        if (response['status'] == 'success') {
            return res.status(200).send(response);
        }
        else {
            return res.status(400).send(response);
        }
    }
    async googleSignIn(body, res) {
        let response = await this.authService.signInUsingToken(body.accessToken);
        if (response['status'] == 'success') {
            return res.status(200).send(response);
        }
        else {
            return res.status(400).send(response);
        }
    }
    async userDetails(res) {
        let response = await this.authService.getUserDetails();
        if (response['status'] == 'success') {
            return res.status(200).send(response);
        }
        else {
            return res.status(400).send(response);
        }
    }
};
__decorate([
    (0, common_1.Post)('signupByEmail'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [signupEmail_dto_1.SignupEmailDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signup", null);
__decorate([
    (0, common_1.Post)('googleSignIn'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [googleSignin_dto_1.GoogleSignInDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "googleSignIn", null);
__decorate([
    (0, common_1.Get)('getUserDetails'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "userDetails", null);
AuthController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map