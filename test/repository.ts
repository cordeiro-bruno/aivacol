import { DataSource } from 'typeorm';
import { Brand } from '../src/brands/entities/brand.entity';
import { Model } from '../src/models/entities/model.entity';
import { User } from '../src/users/entities/user.entity';
import { Vehicle } from '../src/vehicles/entities/vehicle.entity';

export const repository = {
  create: jest.fn().mockImplementation((object: Promise<any>) => {
    return object;
  }),
  save: jest.fn(),
  find: jest.fn(),
  findOneBy: jest.fn(),
  update: jest.fn(),
  delete: jest.fn(),
};

export const dataSource = new DataSource({
  type: 'better-sqlite3',
  database: ':memory:',
  dropSchema: true,
  entities: [Brand, Model, User, Vehicle],
  synchronize: true,
});
