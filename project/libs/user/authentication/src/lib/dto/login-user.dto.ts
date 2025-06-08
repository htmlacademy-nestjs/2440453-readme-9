import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";

export class LoginUserDto {
    @ApiProperty({
        description: 'User Email',
        example: 'example@space.ru'
    })
    @Expose()
    public email: string;
    @ApiProperty({
        description: 'User Password',
        maximum: 20,
        minimum: 6,
        example: 'tRyEkF3nmV'
    })
    @Expose()
    public password: string;
}