import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsBoolean, IsMobilePhone, IsArray, IsOptional } from 'class-validator';

export class GetCardHeaderDto {
    @ApiProperty({
        description: 'user id',
        default: '',
        required: true
    })
    @IsString()
    uid: string;

}