import { Entity, Column } from 'typeorm';
import { AppEntity } from '../../entities/app.entity';

@Entity()
export class User extends AppEntity {
  @Column()
  nickname!: string;

  @Column()
  name!: string;

  @Column({
    unique: true,
  })
  email!: string;

  @Column()
  password!: string;
}
