// generic-repository.interface.ts
export abstract class IGenericRepository<T> {
  abstract getAll(): Promise<T[]>;

  abstract get(id: number | string): Promise<T | null>;

  abstract create(item: T): Promise<T>;

  abstract update(id: number | string, item: T);
}
