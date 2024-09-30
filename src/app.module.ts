import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { SaloonForWomenModule } from "./saloon/saloon-for-women/salon-for-women.module";
import { TypegooseModule } from "@m8a/nestjs-typegoose";
import { OrdersModule } from "./orders/orders.module";
import { SaloonForMenModule } from "./saloon/saloon-for-men/salon-for-men.module";

@Module({
  imports: [
    TypegooseModule.forRoot(
      "mongodb+srv://satyambanwale786:satyam786@villa.njlqb.mongodb.net/villa"
    ),
    SaloonForMenModule,
    SaloonForWomenModule,
    OrdersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
