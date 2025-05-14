import { Body, Controller, Get, Post } from "@nestjs/common";
import { createUserDto } from "../dto/create-user.dto";
import { changeUserPassword } from "../dto/change-user-password.dto";
import { loginUserDto } from "../dto/login-user.dto";

@Controller('auth')
export class AuthenticationController {
    @Get('/login')
    public async validateUser(@Body() dto : loginUserDto) {
        //findbylogin,
        //checkPass
        //if checkPass() then return true else false
        return;
    }
    @Post('/registration')
    public async createUser(@Body() dto : createUserDto) {
        return;
    }
    @Post('/passchange')
    public async changeUserPassword(@Body() dto : changeUserPassword) {
        return;
    }
}