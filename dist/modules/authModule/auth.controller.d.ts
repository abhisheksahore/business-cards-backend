import { AuthService } from './auth.service';
import { FastifyReply } from 'fastify';
import { SignupEmailDto } from './dto/signupEmail.dto';
import { GoogleSignInDto } from './dto/googleSignin.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signup(body: SignupEmailDto, res: FastifyReply): Promise<never>;
    googleSignIn(body: GoogleSignInDto, res: FastifyReply): Promise<never>;
    userDetails(res: FastifyReply): Promise<never>;
}
