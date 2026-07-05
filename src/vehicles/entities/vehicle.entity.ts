import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Model } from '../../models/entities/model.entity';
import { AppEntity } from '../../entities/app.entity';

@Entity()
export class Vehicle extends AppEntity {
  @Column({
    unique: true,
  })
  license_plate!: string;

  @Column({
    unique: true,
  })
  chassis!: string;

  @Column({
    unique: true,
  })
  renavam!: string;

  @Column()
  year!: number;

  @ManyToOne(() => Model, (model) => model.id)
  @JoinColumn({ name: 'model_id' })
  model_id!: string;
}
