import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PORT } from './config';
import { successLog } from './utils/functions/log';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(PORT, async () => {
    successLog(` ----- Server is listening at port ${PORT} -----`);
  });
}
bootstrap();
