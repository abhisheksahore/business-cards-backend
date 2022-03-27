
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsBoolean, IsOptional } from 'class-validator';
import { ToBoolean } from "src/common/toBoolean";

export class CreateQrDto {
   
    @ApiProperty({
        description: 'slug url',
        default: '',
        required: true
    })
    @IsBoolean()
    @ToBoolean()
    @IsOptional()
    slug: string;
}
