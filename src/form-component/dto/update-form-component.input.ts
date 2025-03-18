import { IsArray, IsNumber, IsOptional, IsString } from 'class-validator';
import { CreateFormComponentInput } from './create-form-component.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateFormComponentInput extends PartialType(CreateFormComponentInput) {

  @Field(() => Int)
  id: number;

  @Field(() => String)
  @IsString()
  question: string;

  @Field(() => Number)
  @IsOptional()
  @IsNumber()
  value?: number;  // Opcional, ya que en la entidad es nullable

  @Field(() => [String], { nullable: true }) // Array de strings
  @IsArray()
  @IsString({ each: true })  // Asegura que cada elemento sea un string
  options?: string[];
}
