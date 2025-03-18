import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { FormsService } from './forms.service';
import { Form } from './entities/form.entity';
import { CreateFormInput } from './dto/create-form.input';
import { UpdateFormInput } from './dto/update-form.input';
import { Auth, GetUser } from 'src/auth/decorators';
import { User } from 'src/auth/entities/user.entity';
import { FormUserService } from 'src/form-user/form-user.service';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/guards/gql-auth.guard';

@Resolver(() => Form)
export class FormsResolver {
  constructor(
    private readonly formsService: FormsService,
    //private readonly formUserService: FormUserService
  ) {}

/**
 * This TypeScript function creates a form using input data and the current user, returning specific
 * form details along with the username of the creator.
 * @param {CreateFormInput} createFormInput - The `createFormInput` parameter in the `createForm`
 * method is of type `CreateFormInput`. It is an input object that likely contains data needed to
 * create a form, such as the form's name, description, and other relevant information.
 * @param {User} user - The `createForm` function you provided is an asynchronous function that creates
 * a form based on the input received and the user who initiated the form creation. The function takes
 * two parameters:
 * @returns The `createForm` function is returning an object with the properties `id`, `name`,
 * `description`, `createdAt`, and `createdBy`. The values for `id`, `name`, `description`, and
 * `createdAt` are obtained from the result of the `createForm` method call from the `formsService`.
 * The `createdBy` property is set to the `username` of the `user
 */
  @Mutation(() => Form)
  @UseGuards(GqlAuthGuard)
  @Auth()
  async createForm(
    @Args('createFormInput') createFormInput: CreateFormInput,
    @GetUser() user:User
  ): Promise<any> {

    const { id,name,description,createdAt } = await this.formsService.create(createFormInput,user);

    return {
      id,
      name,
      description,
      createdAt,
      createdBy: user.username
    }
  }

  @Query(() => Form, { name: 'form' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.formsService.findOne(id);
  }

  @Mutation(() => Form)
  updateForm(@Args('updateFormInput') updateFormInput: UpdateFormInput) {
    return this.formsService.update(updateFormInput.id, updateFormInput);
  }

  @Mutation(() => Form)
  removeForm(@Args('id', { type: () => Int }) id: number) {
    return this.formsService.remove(id);
  }
}
