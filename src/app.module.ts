import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { SaloonForWomenModule } from "./saloon/saloon-for-women/salon-for-women.module";
import { TypegooseModule } from "@m8a/nestjs-typegoose";

@Module({
  imports: [
    TypegooseModule.forRoot(
      "mongodb+srv://satyambanwale786:satyam786@villa.njlqb.mongodb.net/villa"
    ),
    SaloonForWomenModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
