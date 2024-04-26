import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTransferDTO } from './dto';
import { TransferService } from './transfer.service';

@Controller('transfer')
export class TransferController {
  constructor(private readonly transferService: TransferService) {}

  @Post('create')
  createTransfers(@Body() dto: CreateTransferDTO) {
    return this.transferService.createTransfer(dto);
  }

  @Get('get')
  getTransfers() {
    return this.transferService.getTransfers();
  }
}
