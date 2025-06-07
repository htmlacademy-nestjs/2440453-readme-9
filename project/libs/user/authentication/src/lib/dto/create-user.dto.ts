import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";

export class CreateUserDto {
    @ApiProperty({
        description: 'User Email',
        example: 'example@space.ru'
    })
    @Expose()
    public email: string;
    @ApiProperty({
        description: 'User password',
        example: 'Eiujlhlfs0o',
        minimum: 6,
        maximum: 20
    })
    @Expose()
    public password: string;
        @ApiProperty({
        description: 'User full Name',
        example: 'Иванов Иван'
    })
    @Expose()
    public fullName: string;
    @ApiProperty({
        description: 'User Date of Birth',
        example: '1990-05-23'
    })
    @Expose()
    public dateOfBirth : Date;
        @ApiProperty({
        description: 'User avatar path',
        example: '/images/user.png'
    })
    @Expose()
    public profileImage: string;
}