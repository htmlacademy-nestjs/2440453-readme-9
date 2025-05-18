import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateUserDto } from "../dto/create-user.dto";
import { ChangeUserPasswordDto } from "../dto/change-user-password.dto";
import { LoginUserDto } from "../dto/login-user.dto";

@Controller('auth')
export class AuthenticationController {
    @Get('/login')
    public async validateUser(@Body() dto : LoginUserDto) {
        //findbylogin,
        //checkPass
        //if checkPass() then return true else false
        return;
    }
    @Post('/registration')
    public async createUser(@Body() dto : CreateUserDto) {
        return;
    }
    @Post('/passchange')
    public async changeUserPassword(@Body() dto : ChangeUserPasswordDto) {
        return;
    }
}