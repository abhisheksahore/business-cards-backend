import { ApiProperty } from "@nestjs/swagger";
import {IsString} from 'class-validator';
export class GoogleSignInDto {
    @ApiProperty({
        description: 'email or phone',
        default: "",
        required:true
    })
    @IsString()
    accessToken: string;

}