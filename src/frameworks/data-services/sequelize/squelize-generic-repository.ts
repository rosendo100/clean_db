// sequelize-generic-repository.ts
import { Model, ModelCtor } from 'sequelize';
import { IGenericRepository } from 'src/core';

export class SequelizeGenericRepository<T extends Model> implements IGenericRepository<T> {
  constructor(private readonly model: ModelCtor<T>) {}

  async getAll(): Promise<T[]> {
    return this.model.findAll();
  }

  async get(id: number | string): Promise<T | null> {
    return this.model.findByPk(id);
  }

  async create(item: any): Promise<T> {
    return this.model.create(item);
  }

  async update(id: number, item: Partial<T>): Promise<T | null> {
    const existingItem = await this.model.findByPk(id);
    if (!existingItem) {
      return null;
    }

    try {
      await existingItem.update(item);
      return existingItem;
    } catch (error) {
      // Manejar el error de actualización aquí
      console.error('Error during update:', error);
      return null;
    }
  }
}
