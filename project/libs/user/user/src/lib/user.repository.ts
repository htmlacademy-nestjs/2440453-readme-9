import { UserEntity } from './user.entity';
import { BaseMemoryRepository } from '@project/data-access';
import { UserFactory } from './user.factory';


export class UserRepository extends BaseMemoryRepository<UserEntity> {
    constructor (entityFactory: UserFactory) {
        super(entityFactory);

    }
}