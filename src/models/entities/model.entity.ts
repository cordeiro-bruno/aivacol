import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
// import { User } from '../../users/entities/user.entity';
import { Brand } from '../../brands/entities/brand.entity';
import { AppEntity } from '../../entities/app.entity';

@Entity()
export class Model extends AppEntity {
  // @PrimaryGeneratedColumn('uuid')
  // id!: string;

  @Column()
  name!: string;

  @ManyToOne(() => Brand, (brand) => brand.id)
  @JoinColumn({ name: 'brand_id' })
  brand_id!: string;

  // @CreateDateColumn()
  // created_at!: string;

  // @UpdateDateColumn()
  // updated_at!: string;

  // @ManyToOne(() => User, (user) => user.id)
  // @JoinColumn({ name: 'created_by' })
  // created_by!: string;
}
