import { SaloonForWoMenSchema } from "./saloon-for-women.schema";
import { ReturnModelType } from "@typegoose/typegoose";
export declare class SaloonForWomenService {
    private readonly saloonForWoMenModel;
    constructor(saloonForWoMenModel: ReturnModelType<typeof SaloonForWoMenSchema>);
    getSaloonDataForWomen(): Promise<void>;
}
