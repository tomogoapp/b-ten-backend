import { CreateGuestInput } from './create-guest.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateGuestInput extends PartialType(CreateGuestInput) {
  @Field(() => Int)
  id: number;
}
