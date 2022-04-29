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
exports.EditCardDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const toBoolean_1 = require("../../../common/toBoolean");
class EditCardDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Name of user',
        default: '',
        required: true
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], EditCardDto.prototype, "Name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'BusinessName of user',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EditCardDto.prototype, "BusinessName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Gender of user',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EditCardDto.prototype, "genderPronouns", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Job of user',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EditCardDto.prototype, "jobTitle", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Business description',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EditCardDto.prototype, "businessDescription", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Card Name',
        default: '',
        required: true
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], EditCardDto.prototype, "cardName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'About user',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EditCardDto.prototype, "DescribeYourself", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'pic name',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EditCardDto.prototype, "ProfilePicture", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'cover pic ',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EditCardDto.prototype, "coverPhoto", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Logo name',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EditCardDto.prototype, "Logo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'primary buttons',
        default: [],
        required: false
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], EditCardDto.prototype, "PrimaryButtons", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Social media',
        default: [],
        required: false
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], EditCardDto.prototype, "socialMedia", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Commerce options',
        default: [],
        required: false
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], EditCardDto.prototype, "commerce", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Telegram Link',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EditCardDto.prototype, "Telegram", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Phone Number',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EditCardDto.prototype, "Call", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'WhatsApp Number',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EditCardDto.prototype, "WhatsApp", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Mail ID',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EditCardDto.prototype, "Mail", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Website Link',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EditCardDto.prototype, "Website", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Location of user',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EditCardDto.prototype, "Location", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Wechat id of user',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EditCardDto.prototype, "weChat", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Messenger id of user',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EditCardDto.prototype, "messenger", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'date',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EditCardDto.prototype, "calendar", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'store of user',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EditCardDto.prototype, "store", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'viber of user',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EditCardDto.prototype, "viber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'skype of user',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EditCardDto.prototype, "skype", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'facebook of user',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EditCardDto.prototype, "facebook", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'facebook of user',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EditCardDto.prototype, "instagram", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'youtube of user',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EditCardDto.prototype, "youtube", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'twitter of user',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EditCardDto.prototype, "twitter", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'vimeo of user',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EditCardDto.prototype, "vimeo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'twitch of user',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EditCardDto.prototype, "twitch", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'linkedin of user',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EditCardDto.prototype, "linkedin", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'snapchat of user',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EditCardDto.prototype, "snapchat", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'reddit of user',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EditCardDto.prototype, "reddit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'tiktok of user',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EditCardDto.prototype, "tiktok", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'pintrest of user',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EditCardDto.prototype, "pinterest", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'spotify of user',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EditCardDto.prototype, "spotify", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'behnance of user',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EditCardDto.prototype, "behance", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'discord of user',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EditCardDto.prototype, "discord", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'cashapp of user',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EditCardDto.prototype, "cashapp", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'paypal of user',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EditCardDto.prototype, "paypal", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'stripe of user',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EditCardDto.prototype, "stripe", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'google business account of user',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EditCardDto.prototype, "googleBusinessProfile", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'bing business profile of user',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EditCardDto.prototype, "bingBusinessProfile", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'amazon store of user',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EditCardDto.prototype, "amazonStore", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ebay store of user',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EditCardDto.prototype, "eBayStore", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'yelp account of user',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EditCardDto.prototype, "yelp", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'save to contact',
        default: false,
        required: false
    }),
    (0, class_validator_1.IsBoolean)(),
    (0, toBoolean_1.ToBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], EditCardDto.prototype, "SaveToContact", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Logo Background ',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EditCardDto.prototype, "logoBackgroundColor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Background Color',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EditCardDto.prototype, "mainBackgroundColor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Button Background',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EditCardDto.prototype, "buttonBackgroundColor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Card Background',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EditCardDto.prototype, "cardBackgroundColor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Font Color',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EditCardDto.prototype, "fontColor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Font used',
        default: '',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EditCardDto.prototype, "font", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Pro Features',
        default: [],
        required: false
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], EditCardDto.prototype, "ProFeaturesList", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Unique card slug',
        default: '',
        required: true
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], EditCardDto.prototype, "contactHeading", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Unique card slug',
        default: '',
        required: true
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], EditCardDto.prototype, "socialMediaHeading", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Unique card slug',
        default: '',
        required: true
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], EditCardDto.prototype, "commerceHeading", void 0);
exports.EditCardDto = EditCardDto;
//# sourceMappingURL=editCardDto.js.map