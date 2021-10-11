import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty({ example: 'Anderson Severino Sebastião Moura' })
  name: string;
  @ApiProperty({ example: 'andersonsever@creativeinteriores.com.br' })
  email: string;
  @ApiProperty({ example: '55987640532' })
  phone: string;
  @ApiProperty({ example: '12345' })
  password: string;
}
