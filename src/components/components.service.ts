import { Injectable } from '@nestjs/common';
import { CreateComponentInput } from './dto/create-component.input';
import { UpdateComponentInput } from './dto/update-component.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Component } from './entities/component.entity';

@Injectable()
export class ComponentsService {

  constructor(
    @InjectRepository(Component)
    private componentRepository: Repository<Component>,
  ) {}

  async create(createComponentInput: CreateComponentInput) {
    const save = await this.componentRepository.create(createComponentInput);
    return this.componentRepository.save(save);
  }

  findAll() {
    return `This action returns all components`;
  }

  findOne(id: number) {
    return `This action returns a #${id} component`;
  }

  update(id: number, updateComponentInput: UpdateComponentInput) {
    return `This action updates a #${id} component`;
  }

  remove(id: number) {
    return `This action removes a #${id} component`;
  }
}
