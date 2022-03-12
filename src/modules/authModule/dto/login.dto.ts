import { ApiProperty } from "@nestjs/swagger";
import {IsString} from 'class-validator';
export class LoginDto {
    @ApiProperty({
        description: 'email',
        default: "",
        required:true
    })
    @IsString()
    email: string;

    @ApiProperty({
        description: 'password of user',
        default: "",
        required:true
    })
    @IsString()
    password : string;

}