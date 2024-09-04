import { Module } from '@nestjs/common';
import { SaloonForWomenController } from './salon-for-women.controller';
import { SaloonForWomenService } from './salon-for-women.service';

@Module({
  imports: [],
  controllers: [SaloonForWomenController],
  providers: [SaloonForWomenService],
})
export class SaloonForWomenModule {}
