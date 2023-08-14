import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IDataServices } from '../../../core';
import { TypeORMGenericRepository } from './typeorm-generic-repository';
import {
  Author,
  Book,
  Genre,
} from './model';

@Injectable()
export class TypeORMDataServices
  implements IDataServices, OnModuleInit {
  authors: TypeORMGenericRepository<Author>;
  books: TypeORMGenericRepository<Book>;
  genres: TypeORMGenericRepository<Genre>;

  constructor(
    @InjectRepository(Author)
    private readonly AuthorRepository: Repository<Author>,
    @InjectRepository(Book)
    private readonly BookRepository: Repository<Book>,
    @InjectRepository(Genre)
    private readonly GenreRepository: Repository<Genre>,
  ) { }

  onModuleInit() {
    this.authors = new TypeORMGenericRepository<Author>(this.AuthorRepository);
    this.books = new TypeORMGenericRepository<Book>(this.BookRepository);
    this.genres = new TypeORMGenericRepository<Genre>(this.GenreRepository);
  }
}
