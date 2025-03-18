import { ObjectType, Field, Int } from '@nestjs/graphql';
import { BeforeInsert, BeforeSoftRemove, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Guest {
  @Field(() => String, { description: 'Example field (placeholder)' })
  @PrimaryGeneratedColumn("uuid")
  id: String;

  @Field(() => String)
  @Column()
  f_name: string;

  @Field(() => String)
  @Column()
  l_name: string;

  @Field(() => String)
  @Column()
  email: string;

  @Field(() => Date)
  @Column({ nullable: true })
  createdAt?: Date;
  
  @Field(() => Date)
  @Column({ nullable: true })
  updatedAt?: Date;

  @Field(() => Date)
  @Column({ nullable: true })
  deletedAt?: Date;

  @Field(() => Date)
  @Column({ nullable: true })
  createdBy?: Date;

  @BeforeInsert()
  setCreatedAt() {
    const currentDate = new Date();
    this.createdAt = currentDate;
  };

  @BeforeUpdate()
  setUpdatedAt() {
    this.updatedAt = new Date();
  };

  @BeforeSoftRemove()
  setDeletedAt() {
    this.deletedAt = new Date();
  };
}
