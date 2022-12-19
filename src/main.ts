import { Logger, VersioningType } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get<ConfigService>(ConfigService);
  const port = config.get('app.port');
  const options = new DocumentBuilder()
    .setTitle('Users server microservice')
    .setDescription(
      'This micro service is meant to manage user authentication and authorization',
    )
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('documentation', app, document);

  app.enableVersioning({
    type: VersioningType.URI,
  });
  Logger.log(`🚀 Application is running on port ${port}`);
  await app.listen(3000);
}
bootstrap();
