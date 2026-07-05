import { Injectable } from '@nestjs/common';
import { CreateModelDto } from './dto/create-model.dto';
import { UpdateModelDto } from './dto/update-model.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Model } from './entities/model.entity';

@Injectable()
export class ModelsService {
  constructor(
    @InjectRepository(Model)
    private modelsRepository: Repository<Model>,
  ) {}

  async create(createModelDto: CreateModelDto, req?): Promise<Model> {
    const model = this.modelsRepository.create(createModelDto);
    if (req) {
      model.created_by = req.user.sub;
    }
    return await this.modelsRepository.save(model);
  }

  findAll(): Promise<Model[]> {
    return this.modelsRepository.find();
  }

  findOne(id: string) {
    return this.modelsRepository.findOneBy({ id });
  }

  async update(
    id: string,
    updateModelDto: UpdateModelDto,
  ): Promise<UpdateResult> {
    return await this.modelsRepository.update(id, updateModelDto);
  }

  async remove(id: string): Promise<DeleteResult> {
    return await this.modelsRepository.delete(id);
  }
}
