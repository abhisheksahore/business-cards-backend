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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const admin = require("firebase-admin");
const auth_gaurd_1 = require("../../auth.gaurd");
const allCollections_1 = require("../../common/collections/allCollections");
const common_service_1 = require("../../common/common.service");
const db_helpers_1 = require("../../common/helpers/db.helpers");
const core_1 = require("@nestjs/core");
let AuthService = class AuthService {
    constructor(dbHelper, gaurdService, request) {
        this.dbHelper = dbHelper;
        this.gaurdService = gaurdService;
        this.request = request;
    }
    async signupWithEmail(data) {
        if (!(0, common_service_1.validEmail)(data.email)) {
            return {
                status: "error",
                message: 'Invalid email!'
            };
        }
        if (!data.name) {
            data.name = data.email.split('@')[0];
        }
        let auth = admin.auth();
        try {
            let userDetail = await auth.createUser({
                email: data.email,
                emailVerified: false,
                password: data.password,
                displayName: data.name,
                disabled: false,
            });
            await this.dbHelper.updateById(allCollections_1.UsersCollection, userDetail.uid, {
                usedData: 0,
                totalCards: 0,
                email: data.email,
                displayName: data.name,
            });
            return {
                status: 'success',
                message: 'user added successfully',
            };
        }
        catch (err) {
            return {
                status: 'error',
                message: err.message
            };
        }
    }
    async signInUsingToken(accessToken) {
        let tokenRes = await this.gaurdService.verifyGoogleToken(accessToken);
        if (tokenRes['status'] === 'error') {
            return tokenRes;
        }
        else {
            let user = await this.dbHelper.getDataById(allCollections_1.UsersCollection, tokenRes['uid']);
            if (user['status'] === 'error') {
                await this.dbHelper.addById(allCollections_1.UsersCollection, tokenRes['uid'], {
                    usedData: 0,
                    totalCards: 0,
                    email: tokenRes['email'],
                    displayName: tokenRes['name'],
                });
                return {
                    status: 'success',
                    message: 'user added successfully',
                };
            }
            return {
                status: 'success',
                message: 'user already exist',
            };
        }
    }
    async getUserDetails() {
        let uid = this.request.headers.uid;
        if (!uid) {
            return {
                status: 'error',
                message: 'user not authenticated'
            };
        }
        try {
            let userData = await this.dbHelper.getDataById(allCollections_1.UsersCollection, uid.toString());
            return {
                status: 'success',
                data: userData
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
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, common_1.Inject)(core_1.REQUEST)),
    __metadata("design:paramtypes", [db_helpers_1.DBHelper,
        auth_gaurd_1.AuthGuard, Object])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map