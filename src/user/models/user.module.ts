import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class UserEntity extends Model {
  @Column
  firstName: string;

  @Column
  secondName: string;

  @Column
  email: string;

  @Column
  phone: string;

  @Column
  password: string;

  @Column
  role: string;
}
