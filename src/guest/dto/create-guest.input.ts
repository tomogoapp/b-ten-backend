import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateGuestInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
