import { ObjectType, Field } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, JoinColumn, OneToMany } from 'typeorm';
import { Form } from 'src/forms/entities/form.entity'; // Suponiendo que tienes una entidad Form
import { User } from 'src/auth/entities/user.entity'; // Suponiendo que tienes una entidad User
import { FormComponent } from 'src/form-component/entities/form-component.entity';

@ObjectType()
@Entity()
export class FormUser {
  @Field(() => String, { description: 'Unique identifier for the FormUser' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => String)
  @Column({ nullable: true })
  formId: string; 

  @Field(() => Form, { nullable: true })
  @ManyToOne(() => Form, (form) => form.id, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'formId' })
  form: Form;

  @Field(() => String)
  @Column({ nullable: true })
  userId: string;

  @Field(() => User, { nullable: true })
  @ManyToOne(() => User, (user) => user.id, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user: User;

  @Field(() => [FormComponent], { nullable: true })
  @OneToMany(() => FormComponent, (component) => component.formUser)
  components?: FormComponent[];
}