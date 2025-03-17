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

/**
 * exception은 시스템에 에러가 있다는 의미니까 싫어하는 사람도 있음
 * 그런 사람들은 message를 return해줌
 * exception은 무시하고 빠져나가는 역할을 함. 그렇기 때문에 로직 짤때 조심해야함
 * controller에 붙어있는 경에는 error를 뱉고 재사용하는 곳(db 조회하는 곳)에서는 return
 * 에러를 누가 통제할 것인가?
 */
