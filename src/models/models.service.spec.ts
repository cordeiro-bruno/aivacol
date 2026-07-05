import { Test, TestingModule } from '@nestjs/testing';
import { ModelsService } from './models.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Model } from './entities/model.entity';
import { repository } from '../../test/repository';

describe('ModelsService', () => {
  let service: ModelsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ModelsService,
        {
          provide: getRepositoryToken(Model),
          useValue: repository,
        },
      ],
    }).compile();

    service = module.get<ModelsService>(ModelsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
