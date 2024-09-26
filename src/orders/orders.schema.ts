import { prop } from "@typegoose/typegoose";

export class OrdersSchema {
  @prop({ required: true })
  image: string;

  @prop({ required: true })
  title: string;

  @prop()
  description: string
}
