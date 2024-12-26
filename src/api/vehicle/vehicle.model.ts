import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Vehicle {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    vehicle_name: string;

    @Column()
    vehicle_type: string;

    @Column()
    fuel_type: string;

    @Column()
    license_plate: string;

    @Column()
    group: string;

    @Column()
    vin: string;

    @Column()
    year: string;

    @Column()
    status: string;

    @CreateDateColumn() 
    createdDate: Date; 
    
    @UpdateDateColumn() 
    updatedDate: Date; 
    
    @DeleteDateColumn() 
    deletedDate: Date;
}