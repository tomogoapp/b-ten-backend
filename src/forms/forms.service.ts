import { Inject, Injectable } from '@nestjs/common';
import { CreateFormInput } from './dto/create-form.input';
import { UpdateFormInput } from './dto/update-form.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Form } from './entities/form.entity';
import { FormUser } from 'src/form-user/entities/form-user.entity';
import { FormUserService } from 'src/form-user/form-user.service';
import { User } from 'src/auth/entities/user.entity';

@Injectable()
export class FormsService {

  constructor(
    @InjectRepository(Form)
    private readonly formRepository: Repository<Form>,
    
    @InjectRepository(FormUser)  // Agregamos correctamente la inyección
    private readonly formUserRepository: Repository<FormUser>, 
    
    private readonly formUserService: FormUserService

  ) {}
  
/**
 * The function creates a form using input data, saves it to the database, associates it with a user,
 * and returns the saved form.
 * @param {CreateFormInput} createFormInput - The `createFormInput` parameter is an object that
 * contains the input data needed to create a form. It likely includes properties such as form title,
 * description, fields, and any other relevant information required to define the form's structure.
 * @param {User} user - The `user` parameter in the `create` method represents the user who is
 * associated with the form being created. This user will be linked to the form through a relationship
 * in the database.
 * @returns The `create` method is returning the saved form object (`savedForm`).
 */
  async create(createFormInput: CreateFormInput,user:User): Promise<Form> {

    const form = this.formRepository.create(createFormInput); // No necesita 'await'
    const savedForm = await this.formRepository.save(form); // Aquí sí necesita 'await'

    if(!savedForm){
      throw new Error('Form not created');
    }

    const formUser = {
      formId: savedForm.id,
      user: user
    };

    // Crear relación Form-Usuario
    await this.formUserService.create(formUser);

    return savedForm;
  }

  async findAll() {
    return await this.formRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} form`;
  }

  update(id: number, updateFormInput: UpdateFormInput) {
    return `This action updates a #${id} form`;
  }

  remove(id: number) {
    return `This action removes a #${id} form`;
  }
}
