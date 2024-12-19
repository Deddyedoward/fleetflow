import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "./User";
import { Permission } from "./Permission";

@Entity()
export class Role {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @CreateDateColumn() 
  created_at: Date; 
  
  @UpdateDateColumn() 
  updated_at: Date;

  @ManyToMany(() => User, user => user.roles) 
  users: User[];

  @ManyToMany(() => Permission, permission => permission.roles) 
  @JoinTable() 
  permissions!: Permission[];
}
