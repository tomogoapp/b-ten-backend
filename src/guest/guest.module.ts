import { Module } from '@nestjs/common';
import { GuestService } from './guest.service';
import { GuestResolver } from './guest.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Guest } from './entities/guest.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Guest]),
  ],
  providers: [GuestResolver, GuestService],
  exports: [
    GuestService,
    TypeOrmModule
  ],
})
export class GuestModule {}
