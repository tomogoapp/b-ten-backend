import { Test, TestingModule } from '@nestjs/testing';
import { FormGuestResolver } from './form-guest.resolver';
import { FormGuestService } from './form-guest.service';

describe('FormGuestResolver', () => {
  let resolver: FormGuestResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FormGuestResolver, FormGuestService],
    }).compile();

    resolver = module.get<FormGuestResolver>(FormGuestResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
