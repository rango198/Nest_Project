import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { CookieService } from './cookie.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtServive: JwtService) { }


  canActivate(
    context: ExecutionContext) {
    const req = context.switchToHttp().getRequest() as Request;
    const token = req.cookies[CookieService.tokenKey]

    if (!token) {
      throw new UnauthorizedException();
    }
    try {
      const sessionInfo = this.jwtServive.verifyAsync(token, { secret: process.env.JWT_SECRET })

      req['session'] = sessionInfo
    } catch {
      throw new UnauthorizedException()


    }
    return true;
  }
}
