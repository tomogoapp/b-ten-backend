import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ComponentsService } from './components.service';
import { Component } from './entities/component.entity';
import { CreateComponentInput } from './dto/create-component.input';
import { UpdateComponentInput } from './dto/update-component.input';
import { Auth } from 'src/auth/decorators';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/guards/gql-auth.guard';
import { ComponentResponse } from './dto/component-response.output';

@Resolver(() => Component)
export class ComponentsResolver {
  constructor(private readonly componentsService: ComponentsService) {}

  @Mutation(() => ComponentResponse,{ name: 'createComponent' })
  @UseGuards(GqlAuthGuard)
  @Auth()
  async createComponent(
    @Args('createComponentInput') 
    createComponentInput: CreateComponentInput
  ): Promise<ComponentResponse> {
    const component = await this.componentsService.create(createComponentInput);

    if(!component){  
      throw new Error('Component creation failed');
    }

    return {
      message: 'Component created successfully',
      component
    };
  }

  @Query(() => [Component], { name: 'components' })
  findAll() {
    return this.componentsService.findAll();
  }

  @Query(() => Component, { name: 'component' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.componentsService.findOne(id);
  }

  @Mutation(() => Component)
  updateComponent(@Args('updateComponentInput') updateComponentInput: UpdateComponentInput) {
    return this.componentsService.update(updateComponentInput.id, updateComponentInput);
  }

  @Mutation(() => Component)
  removeComponent(@Args('id', { type: () => Int }) id: number) {
    return this.componentsService.remove(id);
  }
}
