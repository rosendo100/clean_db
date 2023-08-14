import { FindOneOptions, FindOptionsWhere, Repository } from 'typeorm';
import { IGenericRepository } from '../../../core';

export class TypeORMGenericRepository<T> implements IGenericRepository<T> {
  private _repository: Repository<T>;
  constructor(repository: Repository<T>) {
    this._repository = repository;
  }

  getAll(): Promise<T[]> {
    return this._repository.find();
  }

  get(id: number): Promise<T | null> {
    return this._repository.findOne({
        [id]: id
    });
  }

  create(item: T): Promise<T> {
    return this._repository.save(item);
  }

  async update(id: any, item: T): Promise<T | null> {
    console.log("🚀 ~ file: typeorm-generic-repository.ts:24 ~ TypeORMGenericRepository<T> ~ update ~ id:", id)
    const existingItem = await this._repository.findOne(id);
    if (!existingItem) {
      return null;
    }
    const updatedItem = { ...existingItem, ...item };
    return this._repository.save(updatedItem);
  }
}
