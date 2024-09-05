import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { SaloonForWoMenSchema } from "./saloon-for-women.schema";
import { ReturnModelType } from "@typegoose/typegoose";
import saloonDataForWomen from "./saloon-for-women.json";

@Injectable()
export class SaloonForWomenService {
  constructor(
    @InjectModel("SaloonForWoMen")
    private readonly saloonForWoMenModel: ReturnModelType<
      typeof SaloonForWoMenSchema
    >
  ) {}
  async getSaloonDataForWomen() {
    const womenData = saloonDataForWomen.map(
      ({ image, name, description }) => ({ image, name, description })
    );
    console.log('womenData: ', womenData)
    const data = await this.saloonForWoMenModel.create({
      name: "SaloonForWoMen",
    });
  }
}
