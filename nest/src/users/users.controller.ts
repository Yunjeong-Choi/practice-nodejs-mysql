import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // nest만의 마법가루(문법)을 잘 숙지해야함 > 공식문서 꼼꼼히 보기
  @Post()
  async create(@Body() user: CreateUserDto) {
    // res.send(), res.json()의 역할을 대신하고 있음
    return await this.usersService.create(user);
  }

  // 태성님은 restful api를 지"양"함
  // 현재 사내코드에는 혼재되어있음
  @Get()
  async findAll() {
    return await this.usersService.findAll();
  }

  // TODO: 여러개 나오면 안되는데 이상함
  // 일단 여기에 진입하는지부터 확인 (레이어를 구분한 이유)
  // @Get('/') // 이렇게 만들면 findAll이랑 경로중복
  // async findOne(@Query('id') id: string) {
  //   console.log('id', id);
  //   return await this.usersService.findOne(+id); // +id의 +는 문자열을 숫자로 변환하는 역할
  // }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.usersService.findOne(+id); // +id의 +는 문자열을 숫자로 변환하는 역할
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
