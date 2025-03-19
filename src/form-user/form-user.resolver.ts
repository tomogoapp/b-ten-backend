import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { FormUserService } from './form-user.service';
import { FormUser } from './entities/form-user.entity';
import { CreateFormUserInput } from './dto/create-form-user.input';
import { UpdateFormUserInput } from './dto/update-form-user.input';
import { Auth, GetUser } from 'src/auth/decorators';
import { User } from 'src/auth/entities/user.entity';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/guards/gql-auth.guard';
import { FormObject } from './dto/form-object';

@Resolver(() => FormUser)
export class FormUserResolver {
  constructor(private readonly formUserService: FormUserService) {}

/**
 * The `findAll` function asynchronously retrieves all form users.
 * @returns An array of `FormUser` objects is being returned.
 */
  @Query(() => [FormUser], { name: 'formList' })
  async findAll(): Promise<FormUser[]> {
    return this.formUserService.findAll();
  }

/**
 * The function `findAllByUser` retrieves all forms associated with a specific user.
 * @param {User} user - The `user` parameter in the `findAllByUser` method is a decorator `@GetUser()`
 * that is used to extract the user object from the request. It is of type `User`, which represents the
 * user making the request. This user object is then used to fetch all form users associated
 * @returns The `findAllByUser` method is returning a Promise that resolves to an array of `FormUser`
 * objects.
 */
  @Query(() => [FormUser], { name: 'formListByUser' })
  @UseGuards(GqlAuthGuard)
  @Auth()
  async findAllByUser(
    @GetUser() user: User
  ): Promise<FormUser[]> {
    
    return this.formUserService.findAllByUser(user);
  }

/**
 * This function takes an ID as an argument and returns the corresponding user from the
 * formUserService.
 * @param {number} id - The `findOne` function takes an argument `id` of type `number`. This function
 * is used to find a user by their ID in the `formUserService`.
 * @returns The `findOne` method is returning the result of calling the `findOne` method of the
 * `formUserService` with the `id` parameter passed to it.
 */
  @Query(() => FormObject, { name: 'formUser' })
  async findOne(@Args('id', { type: () => String }) id: string): Promise<FormObject> {
    const formUser = await this.formUserService.findOne(id);

    if (!formUser) {
      throw new Error("FormUsersss not found");
    }

    return {
      message: "FormUser found successfully",
      formUser,
    };
  }

  @Mutation(() => FormUser)
  updateFormUser(@Args('updateFormUserInput') updateFormUserInput: UpdateFormUserInput) {
    return this.formUserService.update(updateFormUserInput.id, updateFormUserInput);
  }

  @Mutation(() => FormUser)
  removeFormUser(@Args('id', { type: () => Int }) id: string) {
    return this.formUserService.remove(id);
  }
}
