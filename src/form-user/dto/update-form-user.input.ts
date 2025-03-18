import { CreateFormUserInput } from './create-form-user.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateFormUserInput extends PartialType(CreateFormUserInput) {
  @Field(() => Int)
  id: number;
}
