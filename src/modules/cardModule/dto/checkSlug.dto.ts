import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsBoolean, IsMobilePhone, IsArray } from 'class-validator';

export class CheckSlugDto {
    @ApiProperty({
        description: 'Card slug',
        default: '',
        required: true
    })
    @IsString()
    slug: string;

}