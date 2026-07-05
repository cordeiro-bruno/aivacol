import { Test, TestingModule } from '@nestjs/testing';
import { VehiclesService } from './vehicles.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Vehicle } from './entities/vehicle.entity';
import { AuthGuard } from '../auth/auth.guard';
import { MockAuthGuard } from '../auth/mock.auth.guard';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { dataSource } from '../../test/repository';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';

describe('VehiclesService', () => {
  let service: VehiclesService;
  let repository;
  const vehicle: CreateVehicleDto = {
    license_plate: 'ABC1D23',
    chassis: '12345678901234567',
    renavam: '12345678901',
    year: 2026,
  };
  let vehicle_id;

  beforeAll(async () => {
    await dataSource.initialize();
    repository = dataSource.getRepository(Vehicle);
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        VehiclesService,
        {
          provide: getRepositoryToken(Vehicle),
          useValue: repository,
        },
      ],
    })
      .overrideProvider(AuthGuard)
      .useClass(MockAuthGuard)
      .compile();
    service = module.get<VehiclesService>(VehiclesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a new vehicle', async () => {
    const result = await service.create(vehicle);
    expect(result.license_plate === vehicle.license_plate);
  });

  it('should find all vehicles', async () => {
    const result = await service.findAll();
    vehicle_id = result[0].id;
    expect(result[0].license_plate === vehicle.license_plate);
  });

  it('should find a vehicle', async () => {
    const result = await service.findOne(vehicle_id);
    expect(result?.license_plate === vehicle.license_plate);
  });

  it('should update a vehicle', async () => {
    const update = new UpdateVehicleDto();
    update.license_plate = 'ABC1234';
    await service.update(vehicle_id, update);
    const result = await service.findOne(vehicle_id);
    expect(result?.license_plate === update.license_plate);
  });

  it('should remove a vehicle', async () => {
    await service.remove(vehicle_id);
    const result = await service.findAll();
    expect(result[0]).toBe(undefined);
  });
});
