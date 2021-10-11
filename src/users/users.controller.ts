import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserDto } from './dtos/user.dto';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @ApiOperation({ summary: 'Publica um evento no topico do kafka' })
  @ApiResponse({ status: 202, description: 'Accepted' })
  @HttpCode(202)
  @Post('publish')
  @ApiBody({ type: UserDto })
  async create(@Body() user: UserDto): Promise<any> {
    return await this.userService.sendEvent(user);
  }
}
