import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class FormGuest {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
