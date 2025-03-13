import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';

@Module({
  // forFeature: 현재 스콥에 어떤 repository를 등록할 것인지 정의하는 것
  imports: [TypeOrmModule.forFeature([UserEntity])],
  exports: [TypeOrmModule], // TODO: 이거슨 뭐고..
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
