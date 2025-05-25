import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { ChangeUserPasswordDto } from '../dto/change-user-password.dto';
import { LoginUserDto } from '../dto/login-user.dto';
import { AuthenticationService } from './authentication.service';

@Controller('auth')
export class AuthenticationController {

    constructor (
        private readonly authService : AuthenticationService
    ) {}

    @Get('/login')
    public async validateUser(@Body() dto : LoginUserDto) {
        const user = await this.authService.verifyUser(dto);
        return user.toPOJO();
    }
    @Post('/registration')
    public async createUser(@Body() dto : CreateUserDto) {
        const user = await this.authService.register(dto);
        return user.toPOJO();
    }
    @Post('/passchange')
    public async changeUserPassword(@Body() dto : ChangeUserPasswordDto) {
        const user = await this.authService.changeUserPassword(dto);
        return user.toPOJO();
    }
}