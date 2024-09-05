import { Controller, Get } from "@nestjs/common";
import { SaloonForWomenService } from "./salon-for-women.service";

@Controller('women')
export class SaloonForWomenController {
  constructor(private readonly saloonForWomenService: SaloonForWomenService) {}

  @Get('saloon')
  getSaloonDataForWomen() {
    return this.saloonForWomenService.getSaloonDataForWomen();
  }
}
