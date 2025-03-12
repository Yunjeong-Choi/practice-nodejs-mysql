// 모듈: 기능 단위로 애플리케이션을 쪼개놓은 단위
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UserEntity } from './users/entities/user.entity';

// @ (= 데코레이터): 일반적으로 클래스나 메서드에 어떤 정보를 추가해줄 때 많이 활용되는 것
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.PORT || ''),
      username: process.env.DB_USER_NAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [UserEntity],
      synchronize: process.env.ENV === 'development', // 프로덕션에서는 true로 하면 절대 안됨. 앱과 db 스키마 사이의 차이를 확인하고 자동으로 db 스키마를 동기화하는 기능
    }),
    UsersModule,
  ], // 해당 모듈이 의존하고 있는 다른 모듈 나열
  controllers: [AppController], // HTTP 요청을 받아서 응답을 보내는 컨트롤러 클래스 나열
  providers: [AppService], // 컨트롤러가 사용하는 다양한 일반 클래스(주로 서비스 클래스) 나열
})
// NestJS가 일종의 IoC(Inversion of Control) 컨테이너 역할을 하면서 DI(Dependency Injection)을 통해 여러 모듈을 엮어줌
export class AppModule {}

// 참고자료: https://www.daleseo.com/nestjs/
