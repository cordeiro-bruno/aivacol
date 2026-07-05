import { Injectable } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Brand } from './entities/brand.entity';

@Injectable()
export class BrandsService {
  constructor(
    @InjectRepository(Brand)
    private brandsRepository: Repository<Brand>,
  ) {}

  async create(createBrandDto: CreateBrandDto, req?): Promise<Brand> {
    const brand = this.brandsRepository.create(createBrandDto);
    if (req) {
      brand.created_by = req.user.sub;
    }
    return await this.brandsRepository.save(brand);
  }

  findAll(): Promise<Brand[]> {
    return this.brandsRepository.find();
  }

  findOne(id: string): Promise<Brand | null> {
    return this.brandsRepository.findOneBy({ id });
  }

  async update(
    id: string,
    updateBrandDto: UpdateBrandDto,
  ): Promise<UpdateResult> {
    return await this.brandsRepository.update(id, updateBrandDto);
  }

  async remove(id: string): Promise<DeleteResult> {
    return await this.brandsRepository.delete(id);
  }
}
