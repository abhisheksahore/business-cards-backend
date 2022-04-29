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
exports.CardDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const toBoolean_1 = require("../../../common/toBoolean");
class CardDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'User Id of user',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CardDto.prototype, "uid", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Name of user',
        default: '',
        required: true
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CardDto.prototype, "Name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'BusinessName of user',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CardDto.prototype, "BusinessName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Gender of user',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CardDto.prototype, "genderPronouns", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Job of user',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CardDto.prototype, "jobTitle", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Business description',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CardDto.prototype, "businessDescription", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Card Name',
        default: '',
        required: true
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CardDto.prototype, "cardName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'About user',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CardDto.prototype, "DescribeYourself", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'pic name',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CardDto.prototype, "ProfilePicture", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'cover pic ',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CardDto.prototype, "coverPhoto", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Logo name',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CardDto.prototype, "Logo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'primary buttons',
        default: [],
        required: false
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], CardDto.prototype, "PrimaryButtons", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Social media',
        default: [],
        required: false
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], CardDto.prototype, "socialMedia", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Commerce options',
        default: [],
        required: false
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], CardDto.prototype, "commerce", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Telegram Link',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CardDto.prototype, "Telegram", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Phone Number',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CardDto.prototype, "Call", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'WhatsApp Number',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CardDto.prototype, "WhatsApp", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Mail ID',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CardDto.prototype, "Mail", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Website Link',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CardDto.prototype, "Website", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Location of user',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CardDto.prototype, "Location", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Wechat id of user',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CardDto.prototype, "weChat", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Messenger id of user',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CardDto.prototype, "messenger", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'date',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CardDto.prototype, "calendar", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'store of user',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CardDto.prototype, "store", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'viber of user',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CardDto.prototype, "viber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'skype of user',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CardDto.prototype, "skype", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'facebook of user',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CardDto.prototype, "facebook", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'facebook of user',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CardDto.prototype, "instagram", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'youtube of user',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CardDto.prototype, "youtube", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'twitter of user',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CardDto.prototype, "twitter", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'vimeo of user',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CardDto.prototype, "vimeo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'twitch of user',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CardDto.prototype, "twitch", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'linkedin of user',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CardDto.prototype, "linkedin", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'snapchat of user',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CardDto.prototype, "snapchat", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'reddit of user',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CardDto.prototype, "reddit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'tiktok of user',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CardDto.prototype, "tiktok", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'pintrest of user',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CardDto.prototype, "pinterest", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'spotify of user',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CardDto.prototype, "spotify", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'behnance of user',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CardDto.prototype, "behance", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'discord of user',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CardDto.prototype, "discord", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'cashapp of user',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CardDto.prototype, "cashapp", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'paypal of user',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CardDto.prototype, "paypal", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'stripe of user',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CardDto.prototype, "stripe", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'google business account of user',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CardDto.prototype, "googleBusinessProfile", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'bing business profile of user',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CardDto.prototype, "bingBusinessProfile", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'amazon store of user',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CardDto.prototype, "amazonStore", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ebay store of user',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CardDto.prototype, "eBayStore", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'yelp account of user',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CardDto.prototype, "yelp", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'save to contact',
        default: false,
        required: false
    }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    (0, toBoolean_1.ToBoolean)(),
    __metadata("design:type", Boolean)
], CardDto.prototype, "SaveToContact", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Logo Background ',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CardDto.prototype, "logoBackgroundColor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Background Color',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CardDto.prototype, "mainBackgroundColor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Button Background',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CardDto.prototype, "buttonBackgroundColor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Card Background',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CardDto.prototype, "cardBackgroundColor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Font Color',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CardDto.prototype, "fontColor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Font used',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CardDto.prototype, "font", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Pro Features',
        default: [],
        required: false
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], CardDto.prototype, "ProFeaturesList", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Card live or not',
        default: false,
        required: false
    }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    (0, toBoolean_1.ToBoolean)(),
    __metadata("design:type", Boolean)
], CardDto.prototype, "published", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'View count of card',
        default: 0,
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CardDto.prototype, "viewCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Unique card slug',
        default: '',
        required: true
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CardDto.prototype, "cardSlug", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Unique card slug',
        default: '',
        required: true
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CardDto.prototype, "contactHeading", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Unique card slug',
        default: '',
        required: true
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CardDto.prototype, "socialMediaHeading", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Unique card slug',
        default: '',
        required: true
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CardDto.prototype, "commerceHeading", void 0);
exports.CardDto = CardDto;
//# sourceMappingURL=cardDto.js.map