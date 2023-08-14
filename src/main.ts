import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config';
async function bootstrap() {
  //dotenv.config();
  console.log("🚀 ~ file: main.ts:6 ~ bootstrap ~ app:", process.env.CLEAN_NEST_MONGO_CONNECTION_STRING)
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
