import { Body, Controller, Post } from '@nestjs/common';
import { LoginDto } from '../dtos/req/login.dto';
import { AuthService } from '../services/auth.service';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { ExcludePasswordDto } from '../dtos/res/exclude-password.dto';

@Serialize(ExcludePasswordDto)
@Controller('auth')
export class AuthController {
  constructor(private authSrv: AuthService) {}
  @Post('login')
  async login(@Body() body: LoginDto) {
    return await this.authSrv.login(body);
  }
}
