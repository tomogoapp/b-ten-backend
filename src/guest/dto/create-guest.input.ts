import { InputType, Int, Field } from '@nestjs/graphql';
import { IsEmail, IsString, Length } from 'class-validator';

@InputType()
export class CreateGuestInput {

  @Field(() => String)
  @IsString()
  @Length(2, 50) // Limita la longitud del nombre
  firstName: string;

  @Field(() => String)
  @IsString()
  @Length(2, 50)
  lastName: string;

  @Field(() => String)
  @IsEmail()
  email: string;
  
}
