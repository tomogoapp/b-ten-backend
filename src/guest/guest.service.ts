import { Injectable } from '@nestjs/common';
import { CreateGuestInput } from './dto/create-guest.input';
import { UpdateGuestInput } from './dto/update-guest.input';

@Injectable()
export class GuestService {
  create(createGuestInput: CreateGuestInput) {
    return 'This action adds a new guest';
  }

  findAll() {
    return `This action returns all guest`;
  }

  findOne(id: number) {
    return `This action returns a #${id} guest`;
  }

  update(id: number, updateGuestInput: UpdateGuestInput) {
    return `This action updates a #${id} guest`;
  }

  remove(id: number) {
    return `This action removes a #${id} guest`;
  }
}
