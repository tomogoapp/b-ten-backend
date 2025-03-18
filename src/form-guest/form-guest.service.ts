import { Injectable } from '@nestjs/common';
import { CreateFormGuestInput } from './dto/create-form-guest.input';
import { UpdateFormGuestInput } from './dto/update-form-guest.input';

@Injectable()
export class FormGuestService {
  create(createFormGuestInput: CreateFormGuestInput) {
    return 'This action adds a new formGuest';
  }

  findAll() {
    return `This action returns all formGuest`;
  }

  findOne(id: number) {
    return `This action returns a #${id} formGuest`;
  }

  update(id: number, updateFormGuestInput: UpdateFormGuestInput) {
    return `This action updates a #${id} formGuest`;
  }

  remove(id: number) {
    return `This action removes a #${id} formGuest`;
  }
}
