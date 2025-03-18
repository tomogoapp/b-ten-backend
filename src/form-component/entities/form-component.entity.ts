import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Component } from 'src/components/entities/component.entity';
import { FormUser } from 'src/form-user/entities/form-user.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class FormComponent {
  @Field(() => String, { description: 'Example field (placeholder)' })
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field(() => String)
  @Column({ nullable: true })
  formUserId: string;

  @Field(() => FormUser)
  @ManyToOne(() => FormUser, (formUser) => formUser.components, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'formUserId' })
  formUser: FormUser;

  @Field(() => String)
  @Column()
  componentId: string;

  @Field(() => Component)
  @ManyToOne(() => Component, (component) => component.id, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'componentId' })
  component: Component;

  @Field(() => String)
  @Column()
  question: string;

  @Field(() => String)
  @Column({nullable:true})
  image?: string;

  @Field(() => [String], { nullable: true }) 
  @Column("text", { array: true, nullable: true })
  options?: string[];

  @Field(() => Number)
  @Column({ nullable: true })
  value: number;


  // @Field(() => FormUser)
  // @ManyToOne(() => FormUser, (formUser) => formUser.components, { onDelete: "CASCADE" })
  // @JoinColumn({ name: "formUserId" })
  // formUser: FormUser;

  
}
