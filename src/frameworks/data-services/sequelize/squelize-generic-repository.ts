import { Model, FindOptions, CreateOptions, UpdateOptions } from 'sequelize';
import { IGenericRepository } from '../../../core';

export class SequelizeGenericRepository<T extends Model<T, T>> implements IGenericRepository<T> {
  private readonly _model: typeof Model & { new (): T };

  constructor(model: typeof Model & { new (): T }) {
    this._model = model;
  }

  getAll(): Promise<T[]> {
    return this._model.findAll();
  }

  get(id: number): Promise<T | null> {
    return this._model.findByPk(id);
  }

  create(item: any): Promise<T> {
    return this._model.create(item);
  }

  async update(id: string | number, item: any): Promise<T | null> {
    const existingItem = await this._model.findByPk(id);
    if (!existingItem) {
      return null;
    }
    await existingItem.update(item as any);
    return existingItem;
  }
}
