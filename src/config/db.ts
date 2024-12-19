import { DataSource } from 'typeorm';

import { User } from '../models/User';
import { Role } from '@models/Role';
import { Permission } from '@models/Permission';
import { UserRole } from '@models/UserRole';

const db = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'mypass',
    synchronize: true,
    database: 'linktouch',
    logging: false,
    entities: [
        User,
        Role,
        Permission
    ],
});

export default db;
