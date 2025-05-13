import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { changeUserPassword } from "./dto/change-user-password.dto";

@Controller('auth')
export class AuthenticationController {
    @Get('/login')
    public validateUser() {
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
    public async changeUserPassword(@Body() dto : changeUserPassword) {
        return;
    }
}