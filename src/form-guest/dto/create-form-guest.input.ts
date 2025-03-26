import { InputType, Int, Field } from '@nestjs/graphql';
import { IsInt, IsUUID } from 'class-validator';
import { Form } from 'src/forms/entities/form.entity';
import { Guest } from 'src/guest/entities/guest.entity';

@InputType()
export class CreateFormGuestInput {

  @Field(() => String)
  @IsUUID()
  formId: string;

  @Field(() => String)
  @IsUUID()
  guestId: string;

  @Field(() => Int)
  @IsInt()
  score: number;


}
