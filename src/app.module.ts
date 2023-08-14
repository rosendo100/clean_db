import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import {
  AppController,
} from './app.controller';
import { DataServicesModule } from './frameworks/data-services';

import { BookUseCasesModule } from './book/book.module';
import { AuthorUseCasesModule } from './author/author.module';
import { GenreUseCasesModule } from './genre/genre.module';

import { CrmServicesModule } from './services/crm-services/crm-services.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true
    }),
    DataServicesModule,
    BookUseCasesModule,
    AuthorUseCasesModule,
    GenreUseCasesModule,
    CrmServicesModule,
  ],
  controllers: [
    AppController
  ],
  providers: [],
})
export class AppModule {}
