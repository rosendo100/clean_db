import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { IDataServices } from '../../../core';
import { Author, Book, Genre } from './model';
import { SequelizeDataServices } from './squelize-data-services.service'; // Fixed typo
import { Sequelize } from 'sequelize';

@Module({
  imports: [
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        dialect: 'sqlite',
        storage: './data.sqlite',
        autoLoadModels: true, // Use this option to automatically load models
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    SequelizeModule.forFeature([Author, Book, Genre]),
  ],
  providers: [
    {
      provide: Sequelize,
      useFactory: (configService: ConfigService) => {
        return new Sequelize({
          dialect: 'sqlite',
          storage: './data.db',
        });
      },
      inject: [ConfigService],
    },
    {
      provide: IDataServices,
      useClass: SequelizeDataServices,
    },
  ],
  exports: [IDataServices],
})
export class SequelizeDataServicesModule {}
