import { Controller, Get } from "@nestjs/common";
import { SaloonForMenService } from "./salon-for-men.service";

@Controller()
export class SaloonForMenController {
  constructor(private readonly SaloonForMenService: SaloonForMenService) {}

  @Get()
  getHello(): string {
    return this.SaloonForMenService.getHello();
  }
}
