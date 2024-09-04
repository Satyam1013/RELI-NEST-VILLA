import { Module } from "@nestjs/common";
import { SaloonForMenService } from "./salon-for-men.service";
import { SaloonForMenController } from "./salon-for-men.controller";

@Module({
  imports: [],
  controllers: [SaloonForMenController],
  providers: [SaloonForMenService],
})
export class SaloonForMenModule {}
