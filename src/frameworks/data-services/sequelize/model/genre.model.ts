import { Model, Column, DataType, Table } from 'sequelize-typescript';

@Table({ tableName: 'genres' })
export class Genre extends Model<Genre> {
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
  name!: string;
}
