import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // TODO: SWAGGER는 어떻게 사용하는 걸까? 이걸 사용한 결과는 어떻게 보는거지?
  const config = new DocumentBuilder()
    .setTitle('Users API')
    .setDescription('The is a sample REST API')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3030, () => {
    console.log(
      'Express server listening on port ' + (process.env.PORT ?? 3030),
    );
  });
}
bootstrap();

/* ORM(Object Relational Mapping): 객체-관계 매핑
- 객체와 관계형 데이터 데이터베이스의 데이터를 자동으로 매핑(연결)해주는 것
- Persistant API라고도 할 수 있음
- 필요성
  - 객체 지향 프로그래밍은 클래스를 하용, 관계형 데이터베이스는 테이블을 사용
  - 객체 모델과 관계형 모델 간에 불일치 발생
  - ORM을 통해 객체 간의 관계를 바탕으로 SQL을 자동으로 생성하여 불일치를 해결함
- 장점
  - 객체를 통해 간접적으로 데이터베이스 데이터를 다룬다.
  - SQL Query가 아닌 직관적인 코드(메서드)로 데이터를 조작할 수 있어 개발자가 객체모델로 프로그래밍하는 데 집중할 수 있도록 도와줌

*/
