import { ObjectType, Field } from '@nestjs/graphql';
import { FormGuest } from 'src/form-guest/entities/form-guest.entity';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Guest {
  
  @Field(() => String, { description: 'Unique identifier for the guest' })
  @PrimaryGeneratedColumn("uuid")
  id: string;  // Debe ser `string`, no `String` (ya que `String` es un objeto en JavaScript)

  @Field(() => String)
  @Column()
  firstName: string;  // Cambiado de `Fname` a `firstName` para seguir la convención camelCase

  @Field(() => String)
  @Column()
  lastName: string;  // Cambiado de `Lname` a `lastName`

  @Field(() => String)
  @Column({ unique: true })  // Asegura que los correos no se repitan
  email: string;

  
  @OneToMany(() => FormGuest, (formGuest) => formGuest.guest, { cascade: true })
  formGuests: FormGuest[];

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
