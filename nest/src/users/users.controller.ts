import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() user: CreateUserDto) {
    // res.send(), res.json()의 역할을 대신하고 있음
    return await this.usersService.create(user);
  }

  @Get()
  async findAll() {
    return await this.usersService.findAll();
  }

  // TODO: 여러개 나오면 안되는데 이상함
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.usersService.findOne(+id); // +id의 +는 문자열을 숫자로 변환하는 ㅕㅇㄱ할
  }

  // TODO: not found 에러
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return await this.usersService.update(+id, updateUserDto);
  }

  // TODO: not found 에러
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.usersService.remove(+id);
  }
}
