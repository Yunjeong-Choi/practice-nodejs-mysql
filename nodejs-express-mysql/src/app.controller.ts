import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// 경로와 액션 설정해주는 곳
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
