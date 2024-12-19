import { Repository } from 'typeorm';
import db from '@config/db';
import { User } from '../models/User';

class UserRepository {
    private repository: Repository<User>;

    constructor() {
        this.repository = db.getRepository(User);
    }

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

    public async find() {
        return this.repository.find();
    }

    public async createOne(payload: any) {
        return this.repository.insert(payload);
    }
}

export default UserRepository;
