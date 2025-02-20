import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { envs } from './config/env.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');

  app.enableCors({ origin: envs.clientUrl });

  await app.listen(envs.port);
}

bootstrap().then();
