import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { TransferEntity } from './models/transfer.module';
import { CreateTransferDTO } from './dto';

@Injectable()
export class TransferService {
  constructor(
    @InjectModel(TransferEntity)
    private readonly transferRepository: typeof TransferEntity,
  ) {}

  async createTransfer(dto): Promise<CreateTransferDTO> {
    const newTransfer = {
      from: dto.from,
      to: dto.to,
      description: dto.description,
      cost: dto.cost,
      responsible: dto.responsible,
    };
    await this.transferRepository.create(newTransfer);
    return dto;
  }

  async getTransfers(): Promise<TransferEntity[]> {
    return this.transferRepository.findAll();
  }
}
