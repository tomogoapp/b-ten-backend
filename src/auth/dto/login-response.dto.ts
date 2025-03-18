import { ObjectType, Field } from '@nestjs/graphql';
import { User } from '../entities/user.entity';

@ObjectType()
export class LoginResponseDTO {
  @Field(() => String) // 👈 Ahora GraphQL no fallará con null
  token: string;

  @Field(() => String)
  message?: string;

  @Field(() => User)
  user: User;

  @Field(() => Boolean)
  success: boolean

}

@ObjectType()
export class UserResponseDTO{
  @Field(() => String)
  message: string;

  @Field(() => User)
  user: User;

  @Field(() => Boolean)
  success: boolean
}