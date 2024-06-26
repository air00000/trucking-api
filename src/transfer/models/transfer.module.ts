import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class TransferEntity extends Model {
  @Column
  from: string;
  @Column
  to: string;
  @Column
  description: string;
  @Column
  cost: string;
  @Column
  responsible: string;
}
