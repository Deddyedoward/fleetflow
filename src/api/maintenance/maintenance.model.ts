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
export class Maintenance {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    vehicle_id: string;

    @Column()
    maintenance_type: string;

    @Column()
    frequency: string;

    @Column()
    next_service_date: string;

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