import { Injectable } from '@nestjs/common';
import { CreateFormUserInput } from './dto/create-form-user.input';
import { UpdateFormUserInput } from './dto/update-form-user.input';
import { InjectRepository } from '@nestjs/typeorm';
import { FormUser } from './entities/form-user.entity';
import { Repository } from 'typeorm';
import { User } from 'src/auth/entities/user.entity';

@Injectable()
export class FormUserService {

  constructor(
    @InjectRepository(FormUser)
    private readonly formUserRepository: Repository<FormUser>
  ) {}

/**
 * The function creates a new form user based on the input data and saves it using an async operation.
 * @param {CreateFormUserInput} createFormUserInput - The `createFormUserInput` parameter is likely an
 * object containing the input data needed to create a new `FormUser` entity. This input data could
 * include properties such as the user's name, email, age, or any other relevant information required
 * to create a new user in the system.
 * @returns The `create` method is returning a Promise that resolves to a `FormUser` object.
 */
  async create(createFormUserInput: CreateFormUserInput):Promise<FormUser> {
    const formUser = this.formUserRepository.create(createFormUserInput);
    return await this.formUserRepository.save(formUser);
  }

/**
 * The `findAll` function asynchronously retrieves all `FormUser` entities with their related `form`
 * and `user` entities.
 * @returns The `findAll` method is returning a Promise that resolves to an array of `FormUser`
 * objects. The `FormUser` objects are retrieved from the `formUserRepository` with the specified
 * relations to include the `form` and `user` entities.
 */
  async findAll(): Promise<FormUser[]> {
    return await this.formUserRepository.find({
      relations: ['form', 'user'],
    });
  }

/**
 * This function finds all form users associated with a specific user.
 * @param {User} user - The `user` parameter in the `findAllByUser` method is an object of type `User`.
 * It is used to filter the results of the query to find all `FormUser` entities associated with the
 * specified user. The method retrieves all `FormUser` entities where the `user` property
 * @returns An array of FormUser objects that are associated with the specified User object. The
 * FormUser objects are retrieved from the formUserRepository based on the user's id and include the
 * 'form' and 'user' relations.
 */
  async findAllByUser(user: User): Promise<FormUser[]> {
    return await this.formUserRepository.find({
      where: { user: { id: user.id } }, 
      relations: ['form', 'user'],
    });
  }

/**
 * The `findOne` function retrieves a single `FormUser` entity based on the provided `id`, including
 * related `form`, `user`, `components`, and `component` entities.
 * @param {string} id - The `id` parameter is a string that represents the unique identifier of a
 * `FormUser` entity. It is used to query the database and retrieve a specific `FormUser` record based
 * on its ID.
 * @returns The `findOne` method is returning a Promise that resolves to either a `FormUser` object or
 * `null`. The method is querying the `formUserRepository` for a specific record based on the provided
 * `id`, and it includes relations to `form`, `user`, `components`, and `components.component`.
 */
  async findOne(id: string): Promise<FormUser | null> {
    return await this.formUserRepository.findOne({
      where: { id },
      relations: ['form', 'user', "components", "components.component"],
    });
  }
  

  update(id: number, updateFormUserInput: UpdateFormUserInput) {
    return `This action updates a #${id} formUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} formUser`;
  }
}
