import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsEmpty } from "class-validator"

export class SignUpBodyDto {

  @ApiProperty({
    example: 'testing@gmail.com'
  })
  @IsEmail()
  email: string

  @ApiProperty({
    example: '12345'
  })
  @IsEmpty()
  password: string
}

export class SignInBodyDto {

  @ApiProperty({
    example: 'test@gmail.com'
  })
  @IsEmail()
  email: string

  @ApiProperty({
    example: '1234'
  })
  password: string
}

export class GetSessionInfoDto {
  @ApiProperty()
  id: string

  @ApiProperty()
  email: string

  @ApiProperty()
  "iat": number

  @ApiProperty()
  "exp": number
}