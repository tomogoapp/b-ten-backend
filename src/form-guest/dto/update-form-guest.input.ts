import { CreateFormGuestInput } from './create-form-guest.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateFormGuestInput extends PartialType(CreateFormGuestInput) {
  @Field(() => Int)
  id: number;
}
