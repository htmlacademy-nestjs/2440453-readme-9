import {Entity, StorableEntity, AuthUser} from '@project/shared-types';
import { compare, genSalt, hash} from 'bcrypt';
import { SALT_ROUNDS } from './user.constant';


export class UserEntity extends Entity implements StorableEntity<AuthUser> {
    public email: string;
    public fullName: string;
    public dateOfBirth: Date;
    public profileImage: string;
    public passwordHash: string;

    constructor (user?: AuthUser) {
        super();
        this.populate(user);
    }

    public populate (user?: AuthUser) : void {
        if (! user) {
            return;
        }

        this.id = user.id ?? '';
        this.fullName = user.fullName;
        this.dateOfBirth = user.dateOfBirth;
        this.profileImage = user.profileImage;
        this.email = user.email;
        this.passwordHash = user.passwordHash;
    }

    public toPOJO(): AuthUser {
        return {
            id: this.id,
            email: this.email,
            fullName: this.fullName,
            dateOfBirth: this.dateOfBirth,
            profileImage: this.profileImage,
            passwordHash: this.passwordHash,
        }
    }

    public async setPassword(password: string): Promise<UserEntity> {
        const salt = await genSalt(SALT_ROUNDS);
        this.passwordHash = await hash(password, salt);
        return this;
    }

    public async comparePassword(password: string) : Promise<boolean> {
        return compare(password, this.passwordHash)
    }

}