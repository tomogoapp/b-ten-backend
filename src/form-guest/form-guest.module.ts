import { Module } from '@nestjs/common';
import { FormGuestService } from './form-guest.service';
import { FormGuestResolver } from './form-guest.resolver';

@Module({
  providers: [FormGuestResolver, FormGuestService],
})
export class FormGuestModule {}
