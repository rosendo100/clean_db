import { Model, Table, Column, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Author, Genre } from '.';

@Table({ tableName: 'books' })
export class Book extends Model<Book> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  title!: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  publishDate!: Date;

  @ForeignKey(() => Author)
  @Column
  authorId!: number;

  @BelongsTo(() => Author, { foreignKey: 'authorId', as: 'author', onDelete: 'CASCADE' })
  author!: Author;

  @ForeignKey(() => Genre)
  @Column
  genreId!: number;

  @BelongsTo(() => Genre, { foreignKey: 'genreId', as: 'genre', onDelete: 'CASCADE' })
  genre!: Genre;
}
