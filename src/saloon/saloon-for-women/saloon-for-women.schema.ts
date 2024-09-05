import { prop } from "@typegoose/typegoose";

export class SaloonForWoMenSchema {
  @prop({ required: true })
  image: string;

  @prop({ required: true })
  name: string;

  @prop()
  description: string;
}
