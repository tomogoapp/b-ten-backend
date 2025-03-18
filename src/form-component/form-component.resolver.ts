import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { FormComponentService } from './form-component.service';
import { FormComponent } from './entities/form-component.entity';
import { CreateFormComponentInput } from './dto/create-form-component.input';
import { UpdateFormComponentInput } from './dto/update-form-component.input';
import { FormComponentResponse } from './dto/form-component-response';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/guards/gql-auth.guard';
import { Auth } from 'src/auth/decorators';

@Resolver(() => FormComponent)
export class FormComponentResolver {
  constructor(
    private readonly formComponentService: FormComponentService
  ) {}

/**
 * This TypeScript function creates a form component based on the input provided and returns a response
 * indicating the success or failure of the creation process.
 * @param {CreateFormComponentInput} createFormComponentInput - The `createFormComponentInput`
 * parameter is of type `CreateFormComponentInput`, which is likely an input object containing data
 * needed to create a form component. This input object is used as an argument in the
 * `createFormComponent` method to create a new form component using the `formComponentService`. The
 * @returns A FormComponentResponse object is being returned, which includes a message indicating the
 * success of the form component creation and the form component itself.
 */
  @Mutation(() => FormComponentResponse,{ name: 'createFormComponent' })
  @UseGuards(GqlAuthGuard)
  @Auth()
  async createFormComponent(
    @Args('createFormComponentInput') 
    createFormComponentInput: CreateFormComponentInput
  ):Promise <FormComponentResponse> {
    const formComponent = await this.formComponentService.create(createFormComponentInput);

    if(!formComponent){  
      throw new Error('FormComponent creation failed');
    }

    return {
      message: 'FormComponent created successfully',
      formComponent
    };
  }

  @Query(() => [FormComponent], { name: 'formComponent' })
  findAll() {
    return this.formComponentService.findAll();
  }

  @Query(() => FormComponent, { name: 'formComponent' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.formComponentService.findOne(id);
  }

  @Mutation(() => FormComponent)
  updateFormComponent(@Args('updateFormComponentInput') updateFormComponentInput: UpdateFormComponentInput) {
    return this.formComponentService.update(updateFormComponentInput.id, updateFormComponentInput);
  }

  @Mutation(() => FormComponent)
  removeFormComponent(@Args('id', { type: () => Int }) id: number) {
    return this.formComponentService.remove(id);
  }
}
