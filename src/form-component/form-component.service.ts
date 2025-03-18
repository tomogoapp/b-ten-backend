import { Injectable } from '@nestjs/common';
import { CreateFormComponentInput } from './dto/create-form-component.input';
import { UpdateFormComponentInput } from './dto/update-form-component.input';
import { InjectRepository } from '@nestjs/typeorm';
import { FormComponent } from './entities/form-component.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FormComponentService {

  constructor(
    @InjectRepository(FormComponent)
    private formComponentRepository: Repository<FormComponent>,
  ) {}

/**
 * The function `create` takes a `CreateFormComponentInput` object, logs it, creates a new form
 * component using the input, saves it, and returns the saved form component.
 * @param {CreateFormComponentInput} createFormComponentInput - The `createFormComponentInput`
 * parameter is an object that contains the data needed to create a form component. It likely includes
 * properties such as the component type, label, options, validation rules, and any other relevant
 * information required to define the form component. This input is used to create a new form component
 * @returns The `create` method is returning the result of calling
 * `this.formComponentRepository.save(save)`.
 */
  async create(createFormComponentInput: CreateFormComponentInput) {

    const save = await this.formComponentRepository.create(createFormComponentInput);

    return this.formComponentRepository.save(save);
    
  }

  findAll() {
    return `This action returns all formComponent`;
  }

  findOne(id: number) {
    return `This action returns a #${id} formComponent`;
  }

  update(id: number, updateFormComponentInput: UpdateFormComponentInput) {
    return `This action updates a #${id} formComponent`;
  }

  remove(id: number) {
    return `This action removes a #${id} formComponent`;
  }
}
