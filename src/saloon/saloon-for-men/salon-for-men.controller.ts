import { Controller, Get } from "@nestjs/common";
import { SaloonForMenService } from "./salon-for-men.service";

@Controller('men')
export class SaloonForMenController {
  constructor(private readonly SaloonForMenService: SaloonForMenService) {}

  @Get('saloon')
  getHello(): string {
    return this.SaloonForMenService.getHello();
  }
}
