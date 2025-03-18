import { InputType, Int, Field } from '@nestjs/graphql';
import { IsArray, IsNumber, IsOptional, IsString } from 'class-validator';

@InputType()
export class CreateFormComponentInput {
  @Field(() => String)
  @IsString()
  formUserId: string; 

  @Field(() => String)
  @IsString()
  componentId: string; 

  @Field(() => String)
  @IsString()
  question: string;

  @Field(() => Number)
  @IsOptional()
  @IsNumber()
  value?: number;  // Opcional, ya que en la entidad es nullable

  @Field(() => [String], { nullable: true }) // Array de strings
  @IsOptional()
  @IsArray()
  @IsString({ each: true })  // Asegura que cada elemento sea un string
  options?: string[];
}
