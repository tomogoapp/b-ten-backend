import { ObjectType, Field, Int } from '@nestjs/graphql';
import { FormGuest } from 'src/form-guest/entities/form-guest.entity';
import { FormUser } from 'src/form-user/entities/form-user.entity';
import { BeforeInsert, BeforeUpdate, Column, Entity, OneToMany, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Form {
  @Field(() => String, { description: 'Form id' })
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field(() => String, { description: 'Form name' })
  @Column()
  name: string;

  @Field(() => String, { description: 'Form description', nullable: true })
  @Column({ nullable: true })
  description?: string;

  @Field(() => Boolean, { description: 'Is the form published?', defaultValue: false })
  @Column({ default: false })
  isPublished?: Boolean;

  // Relación con usuarios que han interactuado con el formulario
  @OneToMany(() => FormUser, (formUser) => formUser.form)
  users: FormUser[];

  // Relación con invitados que han respondido el formulario
  @OneToMany(() => FormGuest, (formGuest) => formGuest.form, { cascade: true })
  formGuests: FormGuest[];

  @Field(() => Date, { nullable: true })
  @CreateDateColumn()
  createdAt?: Date;
  
  @Field({ nullable: true })
  @Column({ nullable: true })
  updatedAt?: Date;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  createdBy?: string;

  @BeforeInsert()
  setCreatedAt() {
    this.createdAt = new Date();
  };

  @BeforeUpdate()
  setUpdatedAt() {
    this.updatedAt = new Date();
  };  
}

