import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateFormGuestInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
