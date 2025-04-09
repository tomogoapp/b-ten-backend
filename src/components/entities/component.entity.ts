import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@ObjectType()
@Entity()
/* This TypeScript class defines a Component with various properties such as id, type, isPublished,
defaultSettings, createdAt, updatedAt, and deletedAt. */
export class Component {
  @Field(() => String)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field(() => String)
  @Column()
  type: string;

  @Field(() => Boolean)
  @Column({default: false})
  isPublished?: boolean;

  @Field(() => JSON, { nullable: true })
  @Column('jsonb', { nullable: true })
  defaultSettings?: Record<string, any>; 

  @Field(() => Date)
  @CreateDateColumn()
  createdAt: Date;
  
  @Field(() => Date,{ nullable: true })
  @UpdateDateColumn({ nullable: true })
  updatedAt?: Date;

  @Field(() => Date,{ nullable: true })
  @DeleteDateColumn({ nullable: true })
  deletedAt?: Date;

}
