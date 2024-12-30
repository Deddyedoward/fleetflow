import { DataSource } from 'typeorm';
import { Permission } from '../api/permission';
import { Role } from '../api/role';
import { User } from '../api/user/user.model';
import { Vehicle } from '../api/vehicle/vehicle.model';
import { Driver } from '../api/driver/driver.model';
import { Fuel } from '../api/fuel/fuel.model';
import { Maintenance } from '../api/maintenance/maintenance.model';
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
        Vehicle,
        Driver,
        Fuel,
        Maintenance
    ],
});

export default db;
