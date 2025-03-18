import { ObjectType, Field, Int } from '@nestjs/graphql';
import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Role {
  @Field(() => String, { description: 'Role Id' })
  @PrimaryGeneratedColumn('uuid')
  id: String;

  @Field(() => String, { description: 'Role Name' })
  @Column()
  name: String;
  
  @Field(() => String, { description: 'Role Description' })
  @Column()
  description: String;

  @Field(() => String, { description: 'Role Permissions' })
  @Column()
  permissions: String;  

  @Field(() => String, { description: 'Role Created Date' })
  @Column({ nullable: true })
  createdDate?: Date;  

  @Field(() => String, { description: 'Role Updated Date' })
  @Column({ nullable: true })
  updatedDate?: Date;

  @Field(() => String, { description: 'Role Created By' })
  @Column({ nullable: true })
  createdBy?: Date;

  @BeforeInsert()
  setCreatedAt() {
    const currentDate = new Date();
    this.createdDate = currentDate;
  }

  @BeforeUpdate()
  setUpdatedAt() {
    this.updatedDate = new Date();
  }

}
