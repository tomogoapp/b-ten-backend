import { Module } from '@nestjs/common';
import { FormsService } from './forms.service';
import { FormsResolver } from './forms.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Form } from './entities/form.entity';
import { AuthModule } from 'src/auth/auth.module';
import { FormUserModule } from 'src/form-user/form-user.module';
import { FormUser } from 'src/form-user/entities/form-user.entity';
import { FormUserService } from 'src/form-user/form-user.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Form,FormUser]),
    AuthModule,
    FormUserModule
  ],
  exports: [TypeOrmModule, FormsModule],
  providers: [FormsResolver, FormsService,FormUserService],
})
export class FormsModule {}
