import { Entity, Column } from 'typeorm';
import { AppEntity } from '../../entities/app.entity';

@Entity()
export class Brand extends AppEntity {
  @Column({
    unique: true,
  })
  name!: string;
}
