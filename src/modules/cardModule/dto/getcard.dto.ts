import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsBoolean, IsOptional } from 'class-validator';

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
    @IsOptional()
    isCount: boolean;
}