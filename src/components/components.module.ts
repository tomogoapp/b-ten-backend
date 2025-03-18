import { Module } from '@nestjs/common';
import { ComponentsService } from './components.service';
import { ComponentsResolver } from './components.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Component } from './entities/component.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Component]), // Import the Component entity
    AuthModule
  ],
  providers: [ComponentsResolver, ComponentsService],
})
export class ComponentsModule {}
