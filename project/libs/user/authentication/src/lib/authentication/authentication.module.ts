import { Module } from '@nestjs/common';
import { AuthenticationController } from './authentication.controler';

@Module({
  controllers: [AuthenticationController],
  providers: [],
  exports: [],
})
export class AuthenticationModule {}
