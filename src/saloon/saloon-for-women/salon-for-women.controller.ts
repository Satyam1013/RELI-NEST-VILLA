import { Controller, Get } from "@nestjs/common";
import { SaloonForWomenService } from "./salon-for-women.service";

@Controller()
export class SaloonForWomenController {
  constructor(private readonly SaloonForWomenService: SaloonForWomenService) {}

  @Get()
  getHello(): string {
    return this.SaloonForWomenService.getSaloonDataForWomen();
  }
}
