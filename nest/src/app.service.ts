// service: 일반적으로 비즈니스 로직을 수행하는 역할

import { Injectable } from '@nestjs/common';

// @Injectable() 데코레이터가 붙어있는 클래스는 NestJS가 인스턴스를 생성하여 다른 클래스에 생성자를 통해 주입을 해줄 수 있음
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
