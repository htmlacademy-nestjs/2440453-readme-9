import { Entity } from '@project/shared-types';
export interface Repository<T extends Entity> {
    findById(id: T['id']): Promise<T>|null;
    deleteById(id: T['id']): Promise<void>;
    save(entity: T): Promise<void>;
    update(entity: T): Promise<void>;
}