
import { ApiProperty } from "@nestjs/swagger";
import { IsString } from 'class-validator';

export class CreateQrDto {
   
    @ApiProperty({
        description: 'slug url',
        default: '',
        required: true
    })
    @IsString()
    slug: string;

}
