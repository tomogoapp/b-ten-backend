import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { FormGuestService } from './form-guest.service';
import { FormGuest } from './entities/form-guest.entity';
import { CreateFormGuestInput } from './dto/create-form-guest.input';
import { UpdateFormGuestInput } from './dto/update-form-guest.input';
import { ResponseFormGuest } from './dto/response-form-guest.output';
import { ResponseFormsList } from './dto/response-forms-list.output';

@Resolver(() => FormGuest)
export class FormGuestResolver {
  constructor(private readonly formGuestService: FormGuestService) {}

/**
 * This function creates a form guest asynchronously using the input provided.
 * @param {CreateFormGuestInput} createFormGuestInput - The `createFormGuestInput` parameter is of type
 * `CreateFormGuestInput`, which is likely an input object containing the data needed to create a guest
 * form. This input object may include fields such as guest information, preferences, and any other
 * relevant details required for creating a form for a guest. The
 * @returns The `createFormGuest` method is returning a Promise that resolves to a `ResponseFormGuest`
 * object.
 */
  @Mutation(() => ResponseFormGuest)
  async createFormGuest(@Args('createFormGuestInput') createFormGuestInput: CreateFormGuestInput): Promise<ResponseFormGuest> {
    return await this.formGuestService.create(createFormGuestInput);
  }

  @Query(() => ResponseFormsList, { name: 'formGuestAll' })
  async findAll(
    @Args('guestId', { type: () => String }) guestId: string
  ): Promise<ResponseFormsList> {
    return this.formGuestService.findAll(guestId);
  }

/**
 * This TypeScript function asynchronously finds and returns a guest using their ID.
 * @param {string} guestId - The `findOne` method is an asynchronous function that takes a `guestId`
 * parameter of type `String`. It returns a `Promise` that resolves to a `ResponseFormGuest` object.
 * The `guestId` parameter is used to find a specific guest in the `formGuestService` by
 * @returns The `findOne` method is returning a Promise that resolves to a `ResponseFormGuest` object.
 */
  // @Query(() => ResponseFormsList, { name: 'formGuest' })
  // async findOne(
  //   @Args('guestId', { type: () => String }) guestId: string
  // ): Promise<ResponseFormsList> {
  //   return await this.formGuestService.findOne(guestId);
  // }

  @Mutation(() => FormGuest)
  updateFormGuest(@Args('updateFormGuestInput') updateFormGuestInput: UpdateFormGuestInput) {
    //return this.formGuestService.update(updateFormGuestInput.id, updateFormGuestInput);
  }

  @Mutation(() => FormGuest)
  removeFormGuest(@Args('id', { type: () => Int }) id: number) {
    return this.formGuestService.remove(id);
  }
}
