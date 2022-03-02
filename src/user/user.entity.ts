import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

enum Gender {
  MALE,
  FEMALE,
}

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column('enum', { enum: Gender })
  gender: Gender;
}
