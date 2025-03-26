import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Form } from 'src/forms/entities/form.entity';
import { Guest } from 'src/guest/entities/guest.entity';
import { Column, CreateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@ObjectType()
export class FormGuest {
  @Field(() => String)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => Form)
  @Column()
  form: Form;

  @Field(() => Guest)
  @Column()
  guest: Guest;

  @Field(() => Int)
  @Column()
  score: number;

  @Field(() => Date)
  @CreateDateColumn()
  createdAt: Date;  // No necesita `nullable: true`, se genera automáticamente

  @Field(() => Date)
  @UpdateDateColumn()
  updatedAt: Date;

  @Field(() => Date, { nullable: true })
  @DeleteDateColumn()
  deletedAt?: Date;

}
