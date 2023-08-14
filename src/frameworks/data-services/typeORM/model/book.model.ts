import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Author, Genre } from '.';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  title: string;

  @ManyToOne(() => Author, { eager: true })
  author: Author;

  @ManyToOne(() => Genre, { eager: true })
  genre: Genre;

  @Column()
  publishDate: Date;
}