import { Injectable } from '@nestjs/common';
import { CreateFormGuestInput } from './dto/create-form-guest.input';
import { UpdateFormGuestInput } from './dto/update-form-guest.input';
import { ResponseFormGuest } from './dto/response-form-guest.output';
import { InjectRepository } from '@nestjs/typeorm';
import { FormGuest } from './entities/form-guest.entity';
import { Repository } from 'typeorm';
import { UUID } from 'crypto';
import { ResponseFormsList } from './dto/response-forms-list.output';

@Injectable()
export class FormGuestService {

  constructor(
    @InjectRepository(FormGuest)
    private readonly formGuestRepository: Repository<FormGuest>,
  ) {}


/**
 * Creates a new FormGuest entry if it does not already exist.
 * 
 * This function checks whether a guest is already associated with a specific form.
 * If the guest is already linked to the form, an error is thrown.
 * Otherwise, it creates and saves a new FormGuest entry.
 * 
 * @param {CreateFormGuestInput} createFormGuestInput - The input data containing formId, guestId, and score.
 * @returns {Promise<ResponseFormGuest>} A response object with formId, guestId, score, and a success message.
 * @throws {Error} If the guest is already linked to the form or if the creation process fails.
 */
  async create(createFormGuestInput: CreateFormGuestInput): Promise<ResponseFormGuest> {
    // Check if the guest is already associated with the form
    const existingFormGuest = await this.formGuestRepository.findOne({
      where: {
        formId: createFormGuestInput.formId,
        guestId: createFormGuestInput.guestId,
      },
    });

    if (existingFormGuest) {
      throw new Error('The guest already exists in the form');
    }

    // Create a new form guest entry
    const formGuest = this.formGuestRepository.create(createFormGuestInput);
    const savedFormGuest = await this.formGuestRepository.save(formGuest);

    if (!savedFormGuest) {
      throw new Error('FormGuest not created');
    }

    // Return success response
    return {
      formId: savedFormGuest.formId,
      guestId: savedFormGuest.guestId,
      score: savedFormGuest.score,
      message: 'FormGuest created successfully',
    };
  }

  async findAll(guestId: string): Promise<ResponseFormsList> {
    const formGuests = await this.formGuestRepository.find({
      where: { guestId: guestId },
      relations: ['form','guest'], // Asegurar que 'form' está disponible
    });

    if (!formGuests || formGuests.length === 0) {
      throw new Error('FormGuest not found');
    }

    // Extraer solo los formularios asociados a cada FormGuest
    const forms = formGuests.map((fg) => fg.form);
    const guest = formGuests[0].guest; // Todos tienen el mismo guestId, así que tomamos el primero

    console.log('formGuests:', formGuests);

    return {
      forms,
      guest,
      message: `Forms associated with guest #${guestId}`,
    };
  }

/**
 * The function `findOne` retrieves a formGuest by guestId and ensures that the forms property is an
 * array before returning it along with a message.
 * @param {string} guestId - The `guestId` parameter is a string that represents the unique identifier
 * of a guest. It is used to find a specific form guest in the database based on this identifier.
 * @returns An object is being returned with two properties: "forms" and "message". The "forms"
 * property contains an array of forms from the formGuest object, or an empty array if no forms are
 * found. The "message" property contains a string indicating that the action returns a specific
 * formGuest identified by the guestId.
 */
  findOne(guestId: string){
    return this.formGuestRepository.findOne({
      where: { guestId: guestId },
      relations: ['forms','guest'], // Asegúrate de que 'forms' sea una relación válida
    }).then((formGuest) => {
      if (!formGuest) {
        throw new Error('FormGuest not found');
      }

      // Asegurar que 'forms' sea un array
      const forms = Array.isArray(formGuest.form) ? formGuest.form : [];

      return {
        forms,
        message: `This action returns a #${guestId} formGuest`,
      };
    });
  }

  update(id: number, updateFormGuestInput: UpdateFormGuestInput) {
    return {message:`This action updates a #${id} formGuest`};
  }

  remove(id: number) {
    return `This action removes a #${id} formGuest`;
  }
}
