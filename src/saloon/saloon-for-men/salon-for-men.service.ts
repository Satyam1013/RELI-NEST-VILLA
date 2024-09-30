import { Injectable } from '@nestjs/common';

@Injectable()
export class SaloonForMenService {
  getHello(): string {
    return 'Hello MOTO!';
  }
}
