import { Body, Controller, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { FastifyReply } from 'fastify';
import { SignupEmailDto } from './dto/signupEmail.dto';

@Controller()
export class AuthController {


  constructor(private readonly authService: AuthService) { }

  @Post('signupByEmail')
  async signup(@Body() body: SignupEmailDto, @Res() res: FastifyReply) {
    let response = await this.authService.signupWithEmail({
      name: body.name,
      email: body.email,
      password: body.password
    });
    return res.status(200).send(response);

    // if (response['status'] == 'success') {
    //   return res.status(200).send(response);
    // } else {
    //   return res.status(400).send(response);
    // }

  }

}
