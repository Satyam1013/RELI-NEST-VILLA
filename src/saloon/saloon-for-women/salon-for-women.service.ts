import { Injectable } from "@nestjs/common";

@Injectable()
export class SaloonForWomenService {
  getHello(): string {
    return "Hello World!";
  }
}
