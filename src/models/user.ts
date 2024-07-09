import { PrimaryGeneratedColumn, Column, Entity, Timestamp } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  mobile: string;

  @Column()
  role: string;

  @Column()
  active: boolean;

  @Column()
  token: string;

  @Column()
  expire_token: string;

  @Column("bool")
  verify: boolean;

  @Column("timestamp")
  createdAt: string;

  @Column("timestamp")
  updatedAt: string;
}
