import { InputType, Int, Field } from '@nestjs/graphql';
import { User } from 'src/auth/entities/user.entity';

@InputType()
export class CreateFormUserInput {
  @Field(() => String)
  formId: string; 

  @Field(() => String)
  user: User;
}
