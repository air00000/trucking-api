import {IsString} from 'class-validator';

export class CreateTransferDTO {
  @IsString()
  from: string;
  @IsString()
  to: string;
  @IsString()
  description: string;
  @IsString()
  cost: string;
  @IsString()
  responsible: string;
}

