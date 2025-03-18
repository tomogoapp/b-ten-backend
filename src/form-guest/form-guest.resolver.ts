import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { FormGuestService } from './form-guest.service';
import { FormGuest } from './entities/form-guest.entity';
import { CreateFormGuestInput } from './dto/create-form-guest.input';
import { UpdateFormGuestInput } from './dto/update-form-guest.input';

@Resolver(() => FormGuest)
export class FormGuestResolver {
  constructor(private readonly formGuestService: FormGuestService) {}

  @Mutation(() => FormGuest)
  createFormGuest(@Args('createFormGuestInput') createFormGuestInput: CreateFormGuestInput) {
    return this.formGuestService.create(createFormGuestInput);
  }

  @Query(() => [FormGuest], { name: 'formGuest' })
  findAll() {
    return this.formGuestService.findAll();
  }

  @Query(() => FormGuest, { name: 'formGuest' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.formGuestService.findOne(id);
  }

  @Mutation(() => FormGuest)
  updateFormGuest(@Args('updateFormGuestInput') updateFormGuestInput: UpdateFormGuestInput) {
    return this.formGuestService.update(updateFormGuestInput.id, updateFormGuestInput);
  }

  @Mutation(() => FormGuest)
  removeFormGuest(@Args('id', { type: () => Int }) id: number) {
    return this.formGuestService.remove(id);
  }
}
