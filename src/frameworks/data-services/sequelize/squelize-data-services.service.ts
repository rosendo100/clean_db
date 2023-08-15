import { Injectable, OnModuleInit } from '@nestjs/common';
import { Sequelize } from 'sequelize';
import { IDataServices, IGenericRepository } from '../../../core';
import { SequelizeGenericRepository } from './squelize-generic-repository'; // Adjust the import path as needed
import { Author, Book, Genre } from './model';

@Injectable()
export class SequelizeDataServices implements IDataServices, OnModuleInit {
  authors: IGenericRepository<Author>;
  books: IGenericRepository<Book>;
  genres: IGenericRepository<Genre>;

  constructor(private readonly sequelize: Sequelize) {}

  async onModuleInit() {
    this.authors = new SequelizeGenericRepository<Author>(Author);
    this.books = new SequelizeGenericRepository<Book>(Book);
    this.genres = new SequelizeGenericRepository<Genre>(Genre);

    await this.sequelize.sync({ force: true });
  }
}