import { Author } from '../../author/entities';
import { Book } from '../../book/entities';
import { Genre } from '../../genre/entities';

import { IGenericRepository } from './generic-repository.abstract';

export abstract class IDataServices {
  abstract authors: IGenericRepository<Author>;
  abstract books: IGenericRepository<Book>;
  abstract genres: IGenericRepository<Genre>;
}
