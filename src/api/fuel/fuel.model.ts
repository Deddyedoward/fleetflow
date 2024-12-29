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
export class Fuel {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    vehicle_id: string;

    @Column()
    driver_id: string;

    @Column()
    transaction_date: string;

    @Column()
    fuel_type: string;

    @Column()
    quantity: string;

    @Column()
    cost: string;

    @Column()
    location: string;

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