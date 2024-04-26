import {Body, Controller, Get, Post} from '@nestjs/common';
import {TransferService} from "./transfer.service";
import {CreateTransferDTO} from "./dto";


@Controller('transfers')
export class TransferController {
  constructor(private readonly transferService: TransferService) {}

  @Post('create')
  createTransfers(@Body() dto: CreateTransferDTO){
    return this.transferService.createTransfer(dto)
  }

  @Get('get')
  getTransfers() {
    return this.transferService.getTransfers();
  }
}
