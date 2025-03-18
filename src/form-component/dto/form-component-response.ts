import { InputType, Int, Field, ObjectType } from '@nestjs/graphql';
import { FormComponent } from '../entities/form-component.entity';
import { IsOptional } from 'class-validator';

@ObjectType()
export class FormComponentResponse {
  @Field(() => String, { description: 'Message' })
  message: string;

  @Field(() => FormComponent, { nullable: true })
  @IsOptional()
  formComponent?: FormComponent;
}
