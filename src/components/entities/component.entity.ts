import { ObjectType, Field, Int } from '@nestjs/graphql';
import { BeforeInsert, BeforeSoftRemove, BeforeUpdate, Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Component {
  @Field(() => String, { description: 'Example field (placeholder)' })
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field(() => String)
  @Column()
  type: string;

  @Field(() => String)
  @Column()
  style: string;

  @Field(() => Boolean)
  @Column({default: false})
  isPublished?: boolean;

  @Field(() => Date)
  @CreateDateColumn()
  createdAt?: Date;
  
  @Field(() => Date)
  @UpdateDateColumn()
  updatedAt?: Date;

  @Field(() => Date,{ nullable: true })
  @DeleteDateColumn()
  deletedAt?: Date;

}
4