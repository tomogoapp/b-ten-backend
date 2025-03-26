import { IsUUID } from 'class-validator';
import { CreateFormGuestInput } from './create-form-guest.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateFormGuestInput extends PartialType(CreateFormGuestInput) {

  @Field(() => String)
  @IsUUID()
  id: string;
  
  @Field(() => Int)
  score: number;
}
