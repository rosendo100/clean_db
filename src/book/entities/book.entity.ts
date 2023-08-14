import { Author } from '../../author/entities';
import { Genre } from '../../genre/entities';

export class Book {

  title: string;

  author: Author;

  genre: Genre;

  publishDate: Date;
}
