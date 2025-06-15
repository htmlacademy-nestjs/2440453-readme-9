import { Module } from '@nestjs/common';
import { AuthenticationController } from './authentication.controller';
import { ReadmeUserModule } from '@project/readme-user';
import { AuthenticationService } from './authentication.service';

@Module({
  imports: [ReadmeUserModule],
  controllers: [AuthenticationController],
  providers: [AuthenticationService],
})
export class AuthenticationModule {}
