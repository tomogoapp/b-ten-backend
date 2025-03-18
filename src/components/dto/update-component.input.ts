import { CreateComponentInput } from './create-component.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateComponentInput extends PartialType(CreateComponentInput) {
  @Field(() => Int)
  id: number;
}
