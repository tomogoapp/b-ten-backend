import { Module } from '@nestjs/common';
import { GuestService } from './guest.service';
import { GuestResolver } from './guest.resolver';

@Module({
  providers: [GuestResolver, GuestService],
})
export class GuestModule {}
