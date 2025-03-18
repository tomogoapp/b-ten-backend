import { Module } from '@nestjs/common';
import { FormComponentService } from './form-component.service';
import { FormComponentResolver } from './form-component.resolver';
import { FormUserModule } from 'src/form-user/form-user.module';
import { ComponentsModule } from 'src/components/components.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FormComponent } from './entities/form-component.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([FormComponent]),
    FormUserModule,
    ComponentsModule,
    AuthModule,
  ],
  providers: [FormComponentResolver, FormComponentService],
})
export class FormComponentModule {}
