import { Module } from '@nestjs/common';
import { AuthenticationController } from './authentication.controler';
import { UserModule } from '@project/user';
import { AuthenticationService } from './authentication.service';

@Module({
  imports: [UserModule],
  controllers: [AuthenticationController],
  providers: [AuthenticationService],
})
export class AuthenticationModule {}
