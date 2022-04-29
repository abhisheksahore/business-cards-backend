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
exports.CardController = void 0;
const common_1 = require("@nestjs/common");
const card_service_1 = require("./card.service");
const getcard_dto_1 = require("./dto/getcard.dto");
const changeStatus_dto_1 = require("./dto/changeStatus.dto");
const cardDto_1 = require("./dto/cardDto");
const checkSlug_dto_1 = require("./dto/checkSlug.dto");
const editCardDto_1 = require("./dto/editCardDto");
const vcardJs = require("vcards-js");
const vcard_dto_1 = require("./dto/vcard.dto");
let CardController = class CardController {
    constructor(cardService) {
        this.cardService = cardService;
    }
    async getCard(query, res) {
        let id = query.id;
        let viewCount = query.isCount ? query.isCount : false;
        let response = await this.cardService.getCard(id, viewCount);
        if (response['status'] == 'success') {
            return res.status(200).send(response);
        }
        else {
            return res.status(400).send(response);
        }
    }
    async getAllCards(res) {
        let response = await this.cardService.getAllCards();
        if (response['status'] == 'success') {
            return res.status(200).send(response);
        }
        else {
            return res.status(400).send(response);
        }
    }
    async changeStatus(body, res) {
        console.log(body);
        let response = await this.cardService.changeCardStatus(body.id, body.published);
        if (response['status'] == 'success') {
            return res.status(200).send(response);
        }
        else {
            return res.status(400).send(response);
        }
    }
    async createCard(body, res) {
        let data = {
            Name: body.Name,
            BusinessName: body.BusinessName ? body.BusinessName : '',
            genderPronouns: body.genderPronouns ? body.genderPronouns : '',
            jobTitle: body.jobTitle ? body.jobTitle : '',
            businessDescription: body.businessDescription ? body.businessDescription : '',
            cardName: body.cardName ? body.cardName : '',
            DescribeYourself: body.DescribeYourself ? body.DescribeYourself : '',
            ProfilePicture: body.ProfilePicture ? body.ProfilePicture : '',
            coverPhoto: body.coverPhoto ? body.coverPhoto : '',
            Logo: body.Logo ? body.Logo : '',
            PrimaryButtons: body.PrimaryButtons ? body.PrimaryButtons : [],
            socialMedia: body.socialMedia ? body.socialMedia : [],
            commerce: body.commerce ? body.commerce : [],
            Telegram: body.Telegram ? body.Telegram : '',
            Call: body.Call ? body.Call : '',
            WhatsApp: body.WhatsApp ? body.WhatsApp : '',
            Mail: body.Mail ? body.Mail : '',
            Website: body.Website ? body.Website : '',
            Location: body.Location ? body.Location : '',
            weChat: body.weChat ? body.weChat : '',
            messenger: body.messenger ? body.messenger : '',
            calendar: body.calendar ? body.calendar : '',
            store: body.store ? body.store : '',
            viber: body.viber ? body.viber : '',
            skype: body.skype ? body.skype : '',
            facebook: body.facebook ? body.facebook : '',
            instagram: body.instagram ? body.instagram : '',
            youtube: body.youtube ? body.youtube : '',
            twitter: body.twitter ? body.twitter : '',
            vimeo: body.vimeo ? body.vimeo : '',
            twitch: body.twitch ? body.twitch : '',
            linkedin: body.linkedin ? body.linkedin : '',
            snapchat: body.snapchat ? body.snapchat : '',
            reddit: body.reddit ? body.reddit : '',
            tiktok: body.tiktok ? body.tiktok : '',
            pinterest: body.pinterest ? body.pinterest : '',
            spotify: body.spotify ? body.spotify : '',
            behance: body.behance ? body.behance : '',
            discord: body.discord ? body.discord : '',
            cashapp: body.cashapp ? body.cashapp : '',
            paypal: body.paypal ? body.paypal : '',
            stripe: body.stripe ? body.stripe : '',
            googleBusinessProfile: body.googleBusinessProfile ? body.googleBusinessProfile : '',
            bingBusinessProfile: body.bingBusinessProfile ? body.bingBusinessProfile : '',
            amazonStore: body.amazonStore ? body.amazonStore : '',
            eBayStore: body.eBayStore ? body.eBayStore : '',
            yelp: body.yelp ? body.yelp : '',
            SaveToContact: body.SaveToContact ? body.SaveToContact : '',
            logoBackgroundColor: body.logoBackgroundColor ? body.logoBackgroundColor : '',
            mainBackgroundColor: body.mainBackgroundColor ? body.mainBackgroundColor : '',
            buttonBackgroundColor: body.buttonBackgroundColor ? body.buttonBackgroundColor : '',
            cardBackgroundColor: body.cardBackgroundColor ? body.cardBackgroundColor : '',
            fontColor: body.fontColor ? body.fontColor : '',
            font: body.font ? body.font : '',
            ProFeaturesList: body.ProFeaturesList ? body.ProFeaturesList : [],
            published: body.published ? body.published : false,
            uid: '',
            viewCount: 0,
            cardSlug: body.cardSlug,
            contactHeading: body.contactHeading,
            socialMediaHeading: body.socialMediaHeading,
            commerceHeading: body.commerceHeading
        };
        let response = await this.cardService.createCard(data);
        if (response['status'] == 'success') {
            return res.status(200).send(response);
        }
        else {
            return res.status(400).send(response);
        }
    }
    async deleteCard(query, res) {
        let response = await this.cardService.deleteCard(query.id);
        if (response['status'] == 'success') {
            return res.status(200).send(response);
        }
        else {
            return res.status(400).send(response);
        }
    }
    async editCard(query, body, res) {
        let data = {
            Name: body.Name,
            BusinessName: body.BusinessName ? body.BusinessName : '',
            genderPronouns: body.genderPronouns ? body.genderPronouns : '',
            jobTitle: body.jobTitle ? body.jobTitle : '',
            businessDescription: body.businessDescription ? body.businessDescription : '',
            cardName: body.cardName ? body.cardName : '',
            DescribeYourself: body.DescribeYourself ? body.DescribeYourself : '',
            ProfilePicture: body.ProfilePicture ? body.ProfilePicture : '',
            coverPhoto: body.coverPhoto ? body.coverPhoto : '',
            Logo: body.Logo ? body.Logo : '',
            PrimaryButtons: body.PrimaryButtons ? body.PrimaryButtons : [],
            socialMedia: body.socialMedia ? body.socialMedia : [],
            commerce: body.commerce ? body.commerce : [],
            Telegram: body.Telegram ? body.Telegram : '',
            Call: body.Call ? body.Call : '',
            WhatsApp: body.WhatsApp ? body.WhatsApp : '',
            Mail: body.Mail ? body.Mail : '',
            Website: body.Website ? body.Website : '',
            Location: body.Location ? body.Location : '',
            weChat: body.weChat ? body.weChat : '',
            messenger: body.messenger ? body.messenger : '',
            calendar: body.calendar ? body.calendar : '',
            store: body.store ? body.store : '',
            viber: body.viber ? body.viber : '',
            skype: body.skype ? body.skype : '',
            facebook: body.facebook ? body.facebook : '',
            instagram: body.instagram ? body.instagram : '',
            youtube: body.youtube ? body.youtube : '',
            twitter: body.twitter ? body.twitter : '',
            vimeo: body.vimeo ? body.vimeo : '',
            twitch: body.twitch ? body.twitch : '',
            linkedin: body.linkedin ? body.linkedin : '',
            snapchat: body.snapchat ? body.snapchat : '',
            reddit: body.reddit ? body.reddit : '',
            tiktok: body.tiktok ? body.tiktok : '',
            pinterest: body.pinterest ? body.pinterest : '',
            spotify: body.spotify ? body.spotify : '',
            behance: body.behance ? body.behance : '',
            discord: body.discord ? body.discord : '',
            cashapp: body.cashapp ? body.cashapp : '',
            paypal: body.paypal ? body.paypal : '',
            stripe: body.stripe ? body.stripe : '',
            googleBusinessProfile: body.googleBusinessProfile ? body.googleBusinessProfile : '',
            bingBusinessProfile: body.bingBusinessProfile ? body.bingBusinessProfile : '',
            amazonStore: body.amazonStore ? body.amazonStore : '',
            eBayStore: body.eBayStore ? body.eBayStore : '',
            yelp: body.yelp ? body.yelp : '',
            SaveToContact: body.SaveToContact ? body.SaveToContact : '',
            logoBackgroundColor: body.logoBackgroundColor ? body.logoBackgroundColor : '',
            mainBackgroundColor: body.mainBackgroundColor ? body.mainBackgroundColor : '',
            buttonBackgroundColor: body.buttonBackgroundColor ? body.buttonBackgroundColor : '',
            cardBackgroundColor: body.cardBackgroundColor ? body.cardBackgroundColor : '',
            fontColor: body.fontColor ? body.fontColor : '',
            font: body.font ? body.font : '',
            ProFeaturesList: body.ProFeaturesList ? body.ProFeaturesList : [],
            contactHeading: body.contactHeading,
            socialMediaHeading: body.socialMediaHeading,
            commerceHeading: body.commerceHeading
        };
        let response = await this.cardService.editCard(query.id, data);
        if (response['status'] == 'success') {
            return res.status(200).send(response);
        }
        else {
            return res.status(400).send(response);
        }
    }
    async checkSlug(query, res) {
        let response = await this.cardService.checkSlugExist(query.slug);
        return res.status(200).send({
            status: response
        });
    }
    async vcard(query, res) {
        let vCard = vcardJs();
        vCard.firstName = query.name;
        vCard.email = query.email;
        vCard.cellPhone = query.phone;
        res.type('text/vcard').send(vCard.getFormattedString());
    }
};
__decorate([
    (0, common_1.Get)('getCard'),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [getcard_dto_1.GetCardDto, Object]),
    __metadata("design:returntype", Promise)
], CardController.prototype, "getCard", null);
__decorate([
    (0, common_1.Get)('getAllCards'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CardController.prototype, "getAllCards", null);
__decorate([
    (0, common_1.Put)('changeStatus'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [changeStatus_dto_1.ChangeStatusDto, Object]),
    __metadata("design:returntype", Promise)
], CardController.prototype, "changeStatus", null);
__decorate([
    (0, common_1.Post)('createCard'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cardDto_1.CardDto, Object]),
    __metadata("design:returntype", Promise)
], CardController.prototype, "createCard", null);
__decorate([
    (0, common_1.Put)('deleteCard'),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [getcard_dto_1.GetCardDto, Object]),
    __metadata("design:returntype", Promise)
], CardController.prototype, "deleteCard", null);
__decorate([
    (0, common_1.Put)('editCard'),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [getcard_dto_1.GetCardDto, editCardDto_1.EditCardDto, Object]),
    __metadata("design:returntype", Promise)
], CardController.prototype, "editCard", null);
__decorate([
    (0, common_1.Get)('checkSlug'),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [checkSlug_dto_1.CheckSlugDto, Object]),
    __metadata("design:returntype", Promise)
], CardController.prototype, "checkSlug", null);
__decorate([
    (0, common_1.Get)('vcard'),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [vcard_dto_1.VcardDtoDto, Object]),
    __metadata("design:returntype", Promise)
], CardController.prototype, "vcard", null);
CardController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [card_service_1.CardService])
], CardController);
exports.CardController = CardController;
//# sourceMappingURL=card.controller.js.map