import { Field, ObjectType } from "@nestjs/graphql";
import { IsOptional, IsString } from "class-validator";
import { User } from "src/auth/entities/user.entity";
import { Form } from "src/forms/entities/form.entity";

@ObjectType()
export class FormUserResponseOutput {
  @Field()
  @IsString()
  id: string;

  @Field(() => Form, { nullable: true })
  @IsOptional()
  form?: Form;

  @Field(() => User, { nullable: true })
  @IsOptional()
  user?: User;
}