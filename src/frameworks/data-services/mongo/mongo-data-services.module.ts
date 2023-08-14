import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { MongooseModule } from '@nestjs/mongoose';
import { IDataServices } from '../../../core';
import {
  Author,
  AuthorSchema,
  Book,
  BookSchema,
  Genre,
  GenreSchema,
} from './model';
import { MongoDataServices } from './mongo-data-services.service';
import { DATA_BASE_CONFIGURATION } from '../../configuration';

console.log("🚀 ~ DB:", process.env.CLEAN_NEST_MONGO_CONNECTION_STRING)
console.log("🚀 ~ file: mongo-data-services.module.ts:16 ~ DATA_BASE_CONFIGURATION:", DATA_BASE_CONFIGURATION.mongoConnectionString)


@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Author.name, schema: AuthorSchema },
      { name: Book.name, schema: BookSchema },
      { name: Genre.name, schema: GenreSchema },
    ]),
    MongooseModule.forRoot(DATA_BASE_CONFIGURATION.mongoConnectionString, {
      dbName: 'custom_db_name',}),
  ],
  providers: [
    {
      provide: IDataServices,
      useClass: MongoDataServices,
    },
  ],
  exports: [IDataServices],
})
export class MongoDataServicesModule {
  constructor(
    private readonly configService: ConfigService,
  ) {
  }
}
