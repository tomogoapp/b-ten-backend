import { Injectable } from '@nestjs/common';
import { CreateGuestInput } from './dto/create-guest.input';
import { UpdateGuestInput } from './dto/update-guest.input';
import { Repository } from 'typeorm';
import { Guest } from './entities/guest.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class GuestService {

  constructor(

    @InjectRepository(Guest)
    private readonly guestRepository: Repository<Guest>

  ) {}


/**
 * The function creates a new guest using the input data and saves it to the repository, throwing an
 * error if the guest is not created.
 * @param {CreateGuestInput} createGuestInput - The `createGuestInput` parameter is an input object
 * that contains the data needed to create a new guest. This data could include information such as the
 * guest's name, contact details, and any other relevant details required for creating a guest entry in
 * the system. The `createGuestInput` object is
 * @returns The `create` method is returning the result of saving the guest entity in the database
 * after creating it.
 */
  async create(createGuestInput: CreateGuestInput) {

    const result = this.guestRepository.create(createGuestInput);

    if(!result){
      throw new Error('Guest not created');
    };

    return await this.guestRepository.save(result);
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
