import { 
    Column, 
    CreateDateColumn, 
    DeleteDateColumn, 
    Entity, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn, 
    VersionColumn
} from "typeorm";

@Entity()
export class Driver {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column()
    email: string;

    @Column()
    phone_number: string;

    @Column()
    license_number: string;

    @Column()
    date_birth: string;

    @Column()
    hire_date: string;

    @Column()
    address: string;

    @Column()
    status: string;

    @VersionColumn()
    version: number;

    @CreateDateColumn() 
    createdDate: Date; 
    
    @UpdateDateColumn() 
    updatedDate: Date; 
    
    @DeleteDateColumn() 
    deletedDate: Date;
}