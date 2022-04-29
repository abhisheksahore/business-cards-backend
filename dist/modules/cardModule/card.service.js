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
exports.CardService = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const db_helpers_1 = require("../../common/helpers/db.helpers");
const allCollections_1 = require("../../common/collections/allCollections");
var qr = require('qrcode');
const admin = require("firebase-admin");
const auth_gaurd_1 = require("../../auth.gaurd");
const fileupload_service_1 = require("../fileUpload/fileupload.service");
let CardService = class CardService {
    constructor(request, dbHelper, authGaurd, fileUploadService) {
        this.request = request;
        this.dbHelper = dbHelper;
        this.authGaurd = authGaurd;
        this.fileUploadService = fileUploadService;
    }
    async getCard(id, viewCount) {
        if (!id) {
            return {
                status: "error",
                message: 'No id found'
            };
        }
        let bySlug = false;
        let card = await this.dbHelper.getDataById(allCollections_1.CardCollection, id);
        if (card['status'] === 'error') {
            if (card['message'] === 'invalid id') {
                card = (await this.dbHelper.getData(allCollections_1.CardCollection, {
                    cardSlug: id
                }))[0];
                bySlug = true;
                if (!card) {
                    return {
                        status: 'error',
                        message: 'invalid id or slug'
                    };
                }
            }
        }
        let token = this.request.headers['token'] ? this.request.headers['token'].toString() : '';
        let res = await this.authGaurd.verifyGoogleToken(token);
        let uid = '';
        if (res['uid']) {
            uid = res['uid'];
        }
        if (!card.published && (!uid || card.uid !== uid)) {
            return {
                status: 'error',
                message: 'Card is not published by user'
            };
        }
        if (viewCount && card.published && (card.uid !== uid)) {
            await this.dbHelper.updateById(allCollections_1.CardCollection, card.id, {
                viewCount: card.viewCount + 1
            });
        }
        card = await this.changeCardImagesToUrl(card);
        return {
            status: 'success',
            data: card
        };
    }
    async changeCardImagesToUrl(card) {
        if (card.Logo) {
            card.Logo = {
                name: card.Logo,
                url: ''
            };
            let url = await this.fileUploadService.getFileUrl([card.Logo.name]);
            if (url['status'] === 'success') {
                card.Logo = {
                    name: card.Logo.name,
                    url: url.urls[0]
                };
            }
        }
        if (card.ProfilePicture) {
            card.ProfilePicture = {
                name: card.ProfilePicture,
                url: ''
            };
            let url = await this.fileUploadService.getFileUrl([card.ProfilePicture.name]);
            if (url['status'] === 'success') {
                card.ProfilePicture = card.ProfilePicture = {
                    name: card.ProfilePicture.name,
                    url: url.urls[0]
                };
            }
        }
        if (card.coverPhoto) {
            card.coverPhoto = {
                name: card.coverPhoto,
                url: ''
            };
            let url = await this.fileUploadService.getFileUrl([card.coverPhoto.name]);
            if (url['status'] === 'success') {
                card.coverPhoto = card.coverPhoto = {
                    name: card.coverPhoto.name,
                    url: url.urls[0]
                };
            }
        }
        for (let ele of card.ProFeaturesList) {
            if (ele.image) {
                let url = await this.fileUploadService.getFileUrl([ele.image]);
                if (url['status'] === 'success') {
                    ele.image = {
                        name: ele.image,
                        url: url.urls[0]
                    };
                }
            }
            if (ele.images) {
                let url = await this.fileUploadService.getFileUrl(ele.images);
                if (url['status'] === 'success') {
                    ele.images = ele.images.map((e, i) => {
                        return {
                            name: e,
                            url: url.urls[i]
                        };
                    });
                }
            }
        }
        return card;
    }
    async getAllCards() {
        let uid = this.request.headers.uid;
        if (!uid) {
            return {
                status: 'error',
                message: 'user not found'
            };
        }
        let cards = await this.dbHelper.getData(allCollections_1.CardCollection, { uid: uid.toString() });
        if (cards['status'] === 'error') {
            return cards;
        }
        return {
            status: 'success',
            data: cards
        };
    }
    async changeCardStatus(id, published) {
        try {
            await this.dbHelper.updateById(allCollections_1.CardCollection, id, { published });
            return {
                status: 'success',
                message: 'Updated Successfully'
            };
        }
        catch (err) {
            return {
                status: 'error',
                message: err.message
            };
        }
    }
    async createCard(data) {
        let uid = this.request.headers.uid;
        if (!uid) {
            return {
                status: 'error',
                message: 'user not found'
            };
        }
        let userDetails = await this.dbHelper.getDataById(allCollections_1.UsersCollection, uid.toString());
        if (userDetails['status'] === 'error') {
            return {
                status: 'error',
                message: 'User not found'
            };
        }
        if (userDetails['totalCards'] === 2) {
            return {
                status: 'error',
                message: 'User can have max of 2 cards'
            };
        }
        if (await this.checkSlugExist(data.cardSlug)) {
            return {
                status: 'error',
                message: 'Slug already exist'
            };
        }
        try {
            data.uid = uid.toString();
            data.qr = (await this.createQR(process.env.APP_URL + data.cardSlug)).data;
            let cardId = await this.dbHelper.addRow(allCollections_1.CardCollection, Object.assign(Object.assign({}, data), { createdAt: Date.now(), updatedAt: Date.now() }));
            await this.dbHelper.updateById(allCollections_1.UsersCollection, uid.toString(), { totalCards: userDetails['totalCards'] + 1 });
            return {
                status: 'success',
                message: 'data added successfully',
                id: cardId
            };
        }
        catch (err) {
            return {
                status: 'error',
                message: err.message
            };
        }
    }
    async deleteCard(id) {
        let uid = this.request.headers.uid;
        if (!uid) {
            return {
                status: 'error',
                message: 'user not found'
            };
        }
        try {
            let userDetails = await this.dbHelper.getDataById(allCollections_1.UsersCollection, uid.toString());
            if (userDetails['status'] === 'error') {
                return {
                    status: 'error',
                    message: 'User not found'
                };
            }
            let card = await this.dbHelper.getDataById(allCollections_1.CardCollection, id);
            if (card['status'] === 'error' || card.uid !== uid) {
                return {
                    status: 'error',
                    message: 'card not found with this user'
                };
            }
            else {
                await this.dbHelper.deleteById(allCollections_1.CardCollection, id);
                await this.dbHelper.updateById(allCollections_1.UsersCollection, uid.toString(), { totalCards: userDetails['totalCards'] - 1 });
            }
            return {
                status: 'success',
                message: 'card deleted successfully'
            };
        }
        catch (err) {
            return {
                status: "error",
                message: err.message
            };
        }
    }
    async editCard(id, data) {
        try {
            await this.dbHelper.updateById(allCollections_1.CardCollection, id, Object.assign(Object.assign({}, data), { updatedAt: Date.now() }));
            return {
                status: 'success',
                message: 'Updated Successfully'
            };
        }
        catch (err) {
            return {
                status: 'error',
                message: err.message
            };
        }
    }
    async createQR(slug) {
        try {
            let url = await qr.toDataURL(slug);
            const storageRef = admin.storage().bucket(process.env.BUCKET_NAME);
            let name = Date.now() + '.png';
            const fileRef = storageRef.file(name);
            let file = Buffer.from(url.split("base64,")[1], 'base64');
            await fileRef.save(file, {
                public: true,
                contentType: 'image/png'
            });
            return {
                status: 'success',
                data: (await storageRef.file(name).publicUrl()),
            };
        }
        catch (err) {
            return {
                status: 'error',
                message: err.message
            };
        }
    }
    async checkSlugExist(slug) {
        if (!slug) {
            return true;
        }
        let cards = await this.dbHelper.getData(allCollections_1.CardCollection, {
            cardSlug: slug
        });
        console.log(cards);
        if (cards.length > 0) {
            return true;
        }
        return false;
    }
};
CardService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(core_1.REQUEST)),
    __metadata("design:paramtypes", [Object, db_helpers_1.DBHelper,
        auth_gaurd_1.AuthGuard,
        fileupload_service_1.FileUploadService])
], CardService);
exports.CardService = CardService;
//# sourceMappingURL=card.service.js.map