import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class User extends Model {
  @Column
  firstName: string;

  @Column
  secondName: string;

  @Column
  email: string;

  @Column
  phone: number;

  @Column
  password: string;

  @Column
  role: string;
}
