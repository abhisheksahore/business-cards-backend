import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { trimCharsStart } from 'lodash/fp'
import { ConstantsService } from './modules/shared/constant.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private reflector: Reflector,
    private readonly constant: ConstantsService,
  ) {
  }
  async canActivate(context: ExecutionContext): Promise<boolean> {

    const request = context.switchToHttp().getRequest();

    return true
    if (this.constant.skipAuth().includes(trimCharsStart('/', request.routerPath))) {
      // profiler.end();
      return true;
    }

    if (!request.headers || !request.headers.token) {
      throw new UnauthorizedException({
        status: false,
        error: 'Invalid token',
      });
    }

    const token = request.headers.token;
    console.log(token);
    return true;
  }
}
