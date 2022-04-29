import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsBoolean, IsMobilePhone, IsArray, IsOptional } from 'class-validator';

export class VcardDtoDto {
    @ApiProperty({
        description: 'name',
        default: '',
        required: true
    })
    @IsString()
    name: string;

    @ApiProperty({
        description: 'email',
        default: '',
        required: false
    })
    @IsString()
    @IsOptional()
    email: string;


    @ApiProperty({
        description: 'phone',
        default: '',
        required: true
    })
    @IsString()
    phone: string;

}