import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { TypeOrmModule } from '@nestjs/typeorm';
import { IDataServices } from '../../../core';
import {
  Author,
  Book,
  Genre,
} from './model';
import { TypeORMDataServices } from './typeorm-data-services.service';


@Module({
  imports: [
    TypeOrmModule.forFeature([Author, Book, Genre]),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './database.sqlite',
      entities: [Author, Book, Genre],
      synchronize: true,
    })
  ],
  providers: [
    {
      provide: IDataServices,
      useClass: TypeORMDataServices,
    },
  ],
  exports: [IDataServices],
})
export class TypeORMDataServicesModule {
  constructor(
    private readonly configService: ConfigService,
  ) {
  }
}
