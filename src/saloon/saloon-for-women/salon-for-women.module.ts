import { Module } from "@nestjs/common";
import { TypegooseModule } from "@m8a/nestjs-typegoose";
import { SaloonForWomenController } from "./salon-for-women.controller"; 
import { SaloonForWomenService } from "./salon-for-women.service";
import { SaloonForWoMenSchema } from "./saloon-for-women.schema";

@Module({
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: SaloonForWoMenSchema,
        schemaOptions: { collection: "saloonForWomen" },
      },
    ]),
  ],
  controllers: [SaloonForWomenController],
  providers: [SaloonForWomenService],
})
export class SaloonForWomenModule {}
