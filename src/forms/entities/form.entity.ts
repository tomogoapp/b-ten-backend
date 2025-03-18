import { ObjectType, Field, Int } from '@nestjs/graphql';
import { FormUser } from 'src/form-user/entities/form-user.entity';
import { BeforeInsert, BeforeUpdate, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Form {
  @Field(() => String, { description: 'Form id' })
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field(() => String, { description: 'Form name' })
  @Column()
  name: string;

  @Field(() => String, { description: 'Form descriptions',nullable: true })
  @Column()
  description?: string;

  @Field(() => Boolean, { description: 'Form descriptions', defaultValue: false })
  @Column({ default: false })
  isPublished?: Boolean;

  @OneToMany(() => FormUser, (formUser) => formUser.form)
  users: FormUser[];

  @Field({ nullable: true })
  @Column({ nullable: true })
  createdAt?: Date;
  
  @Field({ nullable: true })
  @Column({ nullable: true })
  updatedAt?: Date;

  @Field({ nullable: true })
  @Column({ nullable: true })
  createdBy?: String;

  @BeforeInsert()
  setCreatedAt() {
    const currentDate = new Date();
    this.createdAt = currentDate;
  };

  @BeforeUpdate()
  setUpdatedAt() {
    this.updatedAt = new Date();
  };  


}
