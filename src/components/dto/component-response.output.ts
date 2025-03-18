import { InputType, Int, Field, ObjectType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';
import { Component } from '../entities/component.entity';

@ObjectType()
export class ComponentResponse {
  @Field(() => String)
  message: string;

  @Field(() => Component, { nullable: true })
  component?: Component;
}
