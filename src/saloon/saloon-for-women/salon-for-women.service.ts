import { Injectable } from "@nestjs/common";
import { InjectModel } from "@m8a/nestjs-typegoose";
import { ReturnModelType } from "@typegoose/typegoose";
import { SaloonForWoMenSchema } from "./saloon-for-women.schema";
import saloonForWomen from "./saloon-for-women.json";

@Injectable()
export class SaloonForWomenService {
  constructor(
    @InjectModel(SaloonForWoMenSchema)
    private readonly saloonForWoMenModel: ReturnModelType<
      typeof SaloonForWoMenSchema
    >
  ) {}

  async getSaloonDataForWomen() {
    const data = saloonForWomen.map(({ name, image, description }) => ({
      name,
      image,
      description,
    }));
    const womenData = await this.saloonForWoMenModel.create({ data });
    return womenData;
  }
}
