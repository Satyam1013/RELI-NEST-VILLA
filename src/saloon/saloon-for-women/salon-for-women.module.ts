import { Module } from "@nestjs/common";
import { SaloonForWomenController } from "./salon-for-women.controller";
import { SaloonForWomenService } from "./salon-for-women.service";
import { MongooseModule } from "@nestjs/mongoose";
import { SaloonForWoMenSchema } from "./saloon-for-women.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: "SaloonForWoMen", schema: SaloonForWoMenSchema },
    ]),
  ],
  controllers: [SaloonForWomenController],
  providers: [SaloonForWomenService],
})
export class SaloonForWomenModule {}
