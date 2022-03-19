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
        required: false
    })
    @IsString()
    @IsOptional()
    cardName: string;

    @ApiProperty({
        description: 'Card url',
        default: '',
        required: false
    })
    @IsString()
    @IsOptional()
    cardUrl: string;

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
    PrimaryButtons: Array<any>;

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
        description: 'Pro Features',
        default: [],
        required: false
       
    })
    @IsArray()
    @IsOptional()
    ProFeaturesList: Array<any>;

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