import { Injectable, OnModuleInit } from '@nestjs/common';
import { Sequelize } from 'sequelize';
import { IDataServices } from '../../../core';
import { SequelizeGenericRepository } from './squelize-generic-repository';
import { Author, Book, Genre } from './model';

@Injectable()
export class SequelizeDataServices implements IDataServices, OnModuleInit {
  authors: SequelizeGenericRepository<Author>;
  books: SequelizeGenericRepository<Book>;
  genres: SequelizeGenericRepository<Genre>;

  constructor(private readonly sequelize: Sequelize) {}

  async onModuleInit() {
    this.authors = new SequelizeGenericRepository<Author>(Author);
    this.books = new SequelizeGenericRepository<Book>(Book);
    this.genres = new SequelizeGenericRepository<Genre>(Genre);

    await this.sequelize.sync({ force: true }); // Sincronizar modelos con la base de datos (opcional)
  }
}
