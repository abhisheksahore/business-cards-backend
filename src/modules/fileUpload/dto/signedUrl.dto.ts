import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsBoolean, IsMobilePhone, IsArray } from 'class-validator';

export class SignedUrlDto {
    @ApiProperty({
        description: 'file names array',
        default: [],
        required: true
    })
    @IsArray()
    urls: string[];

}