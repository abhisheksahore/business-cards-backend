import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsString, IsBoolean, IsMobilePhone, IsArray } from 'class-validator';
import { ToBoolean } from "src/common/toBoolean";

export class ChangeStatusDto {
    @ApiProperty({
        description: 'Card id',
        default: '',
        required: true
    })
    @IsString()
    id: string;

    @ApiProperty({
        description: 'Card status',
        default: false,
        required: true
    })
    @IsBoolean()
    @ToBoolean()
    published: boolean;

}