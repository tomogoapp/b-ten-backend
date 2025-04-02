import { Module } from '@nestjs/common';
import { FormGuestService } from './form-guest.service';
import { FormGuestResolver } from './form-guest.resolver';
import { GuestModule } from 'src/guest/guest.module';
import { FormsModule } from 'src/forms/forms.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FormGuest } from './entities/form-guest.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([FormGuest]),
    GuestModule,
    FormsModule
  ],
  providers: [FormGuestResolver, FormGuestService],
  exports: [FormGuestService],
})
export class FormGuestModule {}
