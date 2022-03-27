import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsString, IsBoolean, IsOptional } from 'class-validator';
import { ToBoolean } from "src/common/toBoolean";

export class GetCardDto {
    @ApiProperty({
        description: 'Card id',
        default: '',
        required: true
    })
    @IsString()
    id: string;

    @ApiProperty({
        description: 'increase count or not',
        default: false,
        required: false
    })
    @IsBoolean()
    @ToBoolean()
    @IsOptional()
    isCount: boolean;
}