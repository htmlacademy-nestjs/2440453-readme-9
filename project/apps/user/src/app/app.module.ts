import { Module } from '@nestjs/common';
import { ReadmeUserModule } from '@project/readme-user';
import { AuthenticationModule } from '@project/authentication';

@Module({
  imports: [
    ReadmeUserModule,
    AuthenticationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
