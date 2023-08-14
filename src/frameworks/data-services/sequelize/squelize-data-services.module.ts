import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { SequelizeModule } from '@nestjs/sequelize';
import { IDataServices } from '../../../core';
import {
  Author,
  Book,
  Genre,
} from './model';
import { SequelizeDataServices } from './squelize-data-services.service';

@Module({
  imports: [
    SequelizeModule.forFeature([Author, Book, Genre]),
    ConfigModule, // Agregar el módulo de configuración
    SequelizeModule.forRootAsync({
      imports: [ConfigModule], // Importar el módulo de configuración
      useFactory: (configService: ConfigService) => ({
        dialect: 'sqlite',
        storage: './data.db', // Obtener la ruta al archivo de la base de datos SQLite de la configuración
        models: [Author, Book, Genre].map(model => model.name), // Obtener los nombres de los modelos como cadenas de texto
        synchronize: true,
      }),
      inject: [ConfigService], // Inyectar ConfigService aquí
    }),
  ],
  providers: [
    {
      provide: IDataServices,
      useClass: SequelizeDataServices,
    },
  ],
  exports: [IDataServices],
})
export class SequelizeDataServicesModule {
  constructor(
    private readonly configService: ConfigService,
  ) {}
}
