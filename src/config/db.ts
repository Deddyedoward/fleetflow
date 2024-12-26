import { DataSource } from 'typeorm';
import { Permission } from '../api/permission';
import { Role } from '../api/role';
import { User } from '../api/user/user.model';
import { Vehicle } from '../api/vehicle/vehicle.model';
// import entities


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
        Permission,
        Vehicle
    ],
});

export default db;
