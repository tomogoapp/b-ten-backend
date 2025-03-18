import { Module } from '@nestjs/common';
import { FormUserService } from './form-user.service';
import { FormUserResolver } from './form-user.resolver';
import { Type } from 'class-transformer';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FormUser } from './entities/form-user.entity';
import { AuthModule } from 'src/auth/auth.module';

/* The FormUserModule class is a TypeScript module that provides FormUserResolver and FormUserService
as providers. */
@Module({
  providers: [FormUserResolver, FormUserService],
  imports: [
    TypeOrmModule.forFeature([FormUser]),
    AuthModule
  ],
  exports:[FormUserService]
})
export class FormUserModule {}
