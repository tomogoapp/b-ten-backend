import { Test, TestingModule } from '@nestjs/testing';
import { FormGuestService } from './form-guest.service';

describe('FormGuestService', () => {
  let service: FormGuestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FormGuestService],
    }).compile();

    service = module.get<FormGuestService>(FormGuestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
