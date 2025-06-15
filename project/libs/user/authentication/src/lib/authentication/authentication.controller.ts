import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { ChangeUserPasswordDto } from '../dto/change-user-password.dto';
import { LoginUserDto } from '../dto/login-user.dto';
import { AuthenticationService } from './authentication.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthenticationUserStatus } from './authentication.constant';
import { LoggedUserRdo } from '../rdo/logged-user.rdo';
import { UserRdo } from '../rdo/user.rdo';

@ApiTags('authentication')
@Controller('auth')
export class AuthenticationController {
    constructor (
        private readonly authService : AuthenticationService
    ) {}

    @ApiResponse({
        status: HttpStatus.OK,
        description: AuthenticationUserStatus.UserLogged,
        type: LoggedUserRdo,
    })
    @ApiResponse({
        status: HttpStatus.UNAUTHORIZED,
        description: AuthenticationUserStatus.LoginError,
    })
    @Post('/login')
    public async login(@Body() dto : LoginUserDto) {
        const user = await this.authService.verifyUser(dto);
        return user.toPOJO();
    }

    @ApiResponse({
        status: HttpStatus.CREATED,
        description: AuthenticationUserStatus.UserCreated,
        type: UserRdo,
    })
    @ApiResponse({
        status: HttpStatus.CONFLICT,
        description: AuthenticationUserStatus.UserExist,
    })
    @Post('/registration')
    public async register(@Body() dto : CreateUserDto) {
        const user = await this.authService.register(dto);
        return user.toPOJO();
    }

    @ApiResponse({
        status: HttpStatus.OK,
        description: AuthenticationUserStatus.PasswordChanged,
        type: UserRdo,
    })
    @ApiResponse({
        status: HttpStatus.UNAUTHORIZED,
        description: AuthenticationUserStatus.IncorrectPassword,
    })
    @Post('/passchange')
    public async passChange(@Body() dto : ChangeUserPasswordDto) {
        const user = await this.authService.changeUserPassword(dto);
        return user.toPOJO();
    }
}