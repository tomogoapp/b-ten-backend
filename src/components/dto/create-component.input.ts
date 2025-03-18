import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateComponentInput {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  type: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  style: string;
}
