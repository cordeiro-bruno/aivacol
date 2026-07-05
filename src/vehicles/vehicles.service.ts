import { Injectable } from '@nestjs/common';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Vehicle } from './entities/vehicle.entity';

@Injectable()
export class VehiclesService {
  constructor(
    @InjectRepository(Vehicle)
    private vehicleRepository: Repository<Vehicle>,
  ) {}

  async create(createVehicleDto: CreateVehicleDto, req?): Promise<Vehicle> {
    const vehicle = this.vehicleRepository.create(createVehicleDto);
    if (req) {
      vehicle.created_by = req.user.sub;
    }
    return await this.vehicleRepository.save(vehicle);
  }

  findAll(): Promise<Vehicle[]> {
    return this.vehicleRepository.find();
  }

  findOne(id: string): Promise<Vehicle | null> {
    return this.vehicleRepository.findOneBy({ id });
  }

  async update(
    id: string,
    updateVehicleDto: UpdateVehicleDto,
  ): Promise<UpdateResult> {
    return await this.vehicleRepository.update(id, updateVehicleDto);
  }

  async remove(id: string): Promise<DeleteResult> {
    return await this.vehicleRepository.delete(id);
  }
}
