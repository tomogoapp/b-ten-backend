import { InputType, Int, Field, ObjectType } from '@nestjs/graphql';
import { IsOptional, IsString } from 'class-validator';
import { User } from 'src/auth/entities/user.entity';
import { FormUser } from '../entities/form-user.entity';

@ObjectType()
export class FormObject {

  @Field(() => String)
  @IsString()
  message: string

  @Field(() => FormUser, { nullable: true })
  @IsOptional()
  formUser?: FormUser;
}
