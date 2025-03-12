// entity 클래스: 해당 애플리케이션에서 관리되는 하나의 데이터를 나타내는 것

import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'Users' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' }) // TODO: varchar와 varchar2의 차이점?
  serviceId: string;

  @Column({ type: 'varchar' })
  password: string;

  @Column({ type: 'varchar' })
  nickname: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn({ nullable: true })
  updatedAt: Date;

  @DeleteDateColumn({ nullable: true })
  deletedAt: Date;
}

// export class User {
//   id: number; // TODO: AI 설정. 나중에는 난수?, uuid 발급
//   serviceId: string;
//   password: string;
//   nickname: string;
//   createdAt: Date;
//   updatedAt?: Date;
// }
