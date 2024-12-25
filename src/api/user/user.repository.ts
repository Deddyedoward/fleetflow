import { Repository } from 'typeorm';
import { User } from './user.model';
import db from '../../config/db';

class UserRepository {
    public async findByEmail(email: string) {
        const users = await db
                .createQueryBuilder(User, "users")
                .select(["users.id", "users.first_name", "users.last_name", "users.email", "users.password"])
                .leftJoinAndSelect("users.roles", "role")
                .leftJoinAndSelect("role.permissions", "permission")
                .where("users.email = :email", {email})
                .getOne();

        return users;

    }

    public async findById(id: string) {
        const users = await db
                .createQueryBuilder(User, "users")
                .select(["users.id", "users.first_name", "users.last_name", "users.email", "users.password"])
                .leftJoinAndSelect("users.roles", "role")
                .leftJoinAndSelect("role.permissions", "permission")
                .where("users.id = :id", {id})
                .getOne();

        return users;

    }

    public async createOne(payload: any) {
        return await db.createQueryBuilder()
                       .insert()
                       .into(User)
                       .values(payload)
                       .execute()
    }
}

export default UserRepository;
