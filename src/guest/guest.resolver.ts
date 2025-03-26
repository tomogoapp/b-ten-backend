import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { GuestService } from './guest.service';
import { Guest } from './entities/guest.entity';
import { CreateGuestInput } from './dto/create-guest.input';
import { UpdateGuestInput } from './dto/update-guest.input';
import { ResponseGuest } from './dto/response-guest';

@Resolver(() => Guest)
export class GuestResolver {
  constructor(private readonly guestService: GuestService) {}

  @Mutation(() => ResponseGuest)
  async createGuest(@Args('createGuestInput') createGuestInput: CreateGuestInput): Promise<ResponseGuest> {
    
    const result = await this.guestService.create(createGuestInput);

    if(!result){
      throw new Error('Guest not created');
    }
    
    return {
      guest: result,
      message: 'Guest created successfully'
    };
  }

  @Query(() => [Guest], { name: 'guest' })
  findAll() {
    return this.guestService.findAll();
  }

  @Query(() => Guest, { name: 'guest' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.guestService.findOne(id);
  }

  @Mutation(() => Guest)
  updateGuest(@Args('updateGuestInput') updateGuestInput: UpdateGuestInput) {
    return this.guestService.update(updateGuestInput.id, updateGuestInput);
  }

  @Mutation(() => Guest)
  removeGuest(@Args('id', { type: () => Int }) id: number) {
    return this.guestService.remove(id);
  }
}
