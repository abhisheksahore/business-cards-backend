import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsBoolean, IsMobilePhone, IsArray, IsOptional } from 'class-validator';

export class CardDto {

    @ApiProperty({
        description: 'User Id of user',
        default: '',
        required: false
    })
    @IsString()
    @IsOptional()
    uid: string;

    @ApiProperty({
        description: 'Name of user',
        default: '',
        required: true
    })
    @IsString()
    Name: string;

    @ApiProperty({
        description: 'BusinessName of user',
        default: '',
        required: false
    })
    @IsString()
    @IsOptional()
    BusinessName: string;

    @ApiProperty({
        description: 'Gender of user',
        default: '',
        required: false
    })
    @IsString()
    @IsOptional()
    genderPronouns: string;

    @ApiProperty({
        description: 'Job of user',
        default: '',
        required: false
    })
    @IsString()
    @IsOptional()
    jobTitle: string;

    @ApiProperty({
        description: 'Business description',
        default: '',
        required: false
    })
    @IsString()
    @IsOptional()
    businessDescription: string;

    @ApiProperty({
        description: 'Card Name',
        default: '',
        required: true
    })
    @IsString()
    cardName: string;

    @ApiProperty({
        description: 'About user',
        default: '',
        required: false
    })
    @IsString()
    @IsOptional()
    DescribeYourself: string;

    @ApiProperty({
        description: 'pic name',
        default: '',
        required: false
    })
    @IsString()
    @IsOptional()
    ProfilePicture: string;

    @ApiProperty({
        description: 'cover pic ',
        default: '',
        required: false
    })
    @IsString()
    @IsOptional()
    coverPhoto: string;

    @ApiProperty({
        description: 'Logo name',
        default: '',
        required: false
    })
    @IsString()
    @IsOptional()
    Logo: string;

    @ApiProperty({
        description: 'primary buttons',
        default: [],
        required: false
    })
    @IsArray()
    @IsOptional()
    PrimaryButtons: any;

    @ApiProperty({
        description: 'Social media',
        default: [],
        required: false
    })
    @IsArray()
    @IsOptional()
    socialMedia: any;

    @ApiProperty({
        description: 'Commerce options',
        default: [],
        required: false
    })
    @IsArray()
    @IsOptional()
    commerce: any;

    @ApiProperty({
        description: 'Telegram Link',
        default: '',
        required: false
    })
    @IsString()
    @IsOptional()
    Telegram: string;


    @ApiProperty({
        description: 'Phone Number',
        default: '',
        required: false
    })
    @IsString()
    @IsOptional()
    Call: string;

    @ApiProperty({
        description: 'WhatsApp Number',
        default: '',
        required: false
    })
    @IsString()
    @IsOptional()
    WhatsApp: string;

    @ApiProperty({
        description: 'Mail ID',
        default: '',
        required: false
    })
    @IsString()
    @IsOptional()
    Mail: string;

    @ApiProperty({
        description: 'Website Link',
        default: '',
        required: false
    })
    @IsString()
    @IsOptional()
    Website: string;

    @ApiProperty({
        description: 'Location of user',
        default: '',
        required: false
    })
    @IsString()
    @IsOptional()
    Location: string;

    @ApiProperty({
        description: 'Wechat id of user',
        default: '',
        required: false
    })
    @IsString()
    @IsOptional()
    weChat: string;

    @ApiProperty({
        description: 'Messenger id of user',
        default: '',
        required: false
    })
    @IsString()
    @IsOptional()
    messenger: string;

    @ApiProperty({
        description: 'date',
        default: '',
        required: false
    })
    @IsString()
    @IsOptional()
    calendar: string;

    @ApiProperty({
        description: 'store of user',
        default: '',
        required: false
    })
    @IsString()
    @IsOptional()
    store: string;

    @ApiProperty({
        description: 'viber of user',
        default: '',
        required: false
    })
    @IsString()
    @IsOptional()
    viber: string;

    @ApiProperty({
        description: 'skype of user',
        default: '',
        required: false
    })
    @IsString()
    @IsOptional()
    skype: string;

    @ApiProperty({
        description: 'facebook of user',
        default: '',
        required: false
    })
    @IsString()
    @IsOptional()
    facebook: string;

    @ApiProperty({
        description: 'facebook of user',
        default: '',
        required: false
    })
    @IsString()
    @IsOptional()
    instagram: string;    

    @ApiProperty({
        description: 'youtube of user',
        default: '',
        required: false
    })
    @IsString()
    @IsOptional()
    youtube: string;

    @ApiProperty({
        description: 'twitter of user',
        default: '',
        required: false
    })
    @IsString()
    @IsOptional()
    twitter: string;

    @ApiProperty({
        description: 'vimeo of user',
        default: '',
        required: false
    })
    @IsString()
    @IsOptional()
    vimeo: string;

    @ApiProperty({
        description: 'twitch of user',
        default: '',
        required: false
    })
    @IsString()
    @IsOptional()
    twitch: string;

    @ApiProperty({
        description: 'linkedin of user',
        default: '',
        required: false
    })
    @IsString()
    @IsOptional()
    linkedin: string;

    @ApiProperty({
        description: 'snapchat of user',
        default: '',
        required: false
    })
    @IsString()
    @IsOptional()
    snapchat: string;

    @ApiProperty({
        description: 'reddit of user',
        default: '',
        required: false
    })
    @IsString()
    @IsOptional()
    reddit: string;

    @ApiProperty({
        description: 'tiktok of user',
        default: '',
        required: false
    })
    @IsString()
    @IsOptional()
    tiktok: string;

    @ApiProperty({
        description: 'pintrest of user',
        default: '',
        required: false
    })
    @IsString()
    @IsOptional()
    pinterest: string;

    @ApiProperty({
        description: 'spotify of user',
        default: '',
        required: false
    })
    @IsString()
    @IsOptional()
    spotify: string;

    @ApiProperty({
        description: 'behnance of user',
        default: '',
        required: false
    })
    @IsString()
    @IsOptional()
    behance: string;

    @ApiProperty({
        description: 'discord of user',
        default: '',
        required: false
    })
    @IsString()
    @IsOptional()
    discord: string;


    @ApiProperty({
        description: 'cashapp of user',
        default: '',
        required: false
    })
    @IsString()
    @IsOptional()
    cashapp: string;

    @ApiProperty({
        description: 'paypal of user',
        default: '',
        required: false
    })
    @IsString()
    @IsOptional()
    paypal: string;

    @ApiProperty({
        description: 'stripe of user',
        default: '',
        required: false
    })
    @IsString()
    @IsOptional()
    stripe: string;

    @ApiProperty({
        description: 'google business account of user',
        default: '',
        required: false
    })
    @IsString()
    @IsOptional()
    googleBusinessProfile: string;

    @ApiProperty({
        description: 'bing business profile of user',
        default: '',
        required: false
    })
    @IsString()
    @IsOptional()
    bingBusinessProfile: string;

    @ApiProperty({
        description: 'amazon store of user',
        default: '',
        required: false
    })
    @IsString()
    @IsOptional()
    amazonStore: string;

    @ApiProperty({
        description: 'ebay store of user',
        default: '',
        required: false
    })
    @IsString()
    @IsOptional()
    eBayStore: string;

    @ApiProperty({
        description: 'yelp account of user',
        default: '',
        required: false
    })
    @IsString()
    @IsOptional()
    yelp: string;

    @ApiProperty({
        description: 'Pro Features',
        default: [],
        required: false

    })
    @IsArray()
    @IsOptional()
    ProFeaturesList: any;

    @ApiProperty({
        description: 'Card live or not',
        default: false,
        required: false
    })
    @IsBoolean()
    @IsOptional()
    published: boolean;

    @ApiProperty({
        description: 'View count of card',
        default: 0,
        required: false
    })
    @IsString()
    @IsOptional()
    viewCount: number;

    @ApiProperty({
        description: 'Unique card slug',
        default: '',
        required: true
    })
    @IsString()
    cardSlug: string;

}