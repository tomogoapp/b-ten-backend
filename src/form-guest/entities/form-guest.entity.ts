import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Form } from 'src/forms/entities/form.entity';
import { Guest } from 'src/guest/entities/guest.entity';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@ObjectType()
@Entity()
export class FormGuest {
  @Field(() => String)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => String)
  @Column()
  formId: string;

  @Field(() => Form)
  @ManyToOne(() => Form, (form) => form.formGuests, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'formId' })
  form: Form;

  @Field(() => String)
  @Column()
  guestId: string;

  @Field(() => Guest)
  @ManyToOne(() => Guest, (guest) => guest.formGuests, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'guestId' })
  guest: Guest;

  @Field(() => Int, { nullable: true })
  @Column({ nullable: true })
  score: number;

  @Field(() => Date)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => Date)
  @UpdateDateColumn()
  updatedAt: Date;

  @Field(() => Date, { nullable: true })
  @DeleteDateColumn()
  deletedAt?: Date;
}