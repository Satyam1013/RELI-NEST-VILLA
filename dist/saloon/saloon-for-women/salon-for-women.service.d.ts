import { ReturnModelType } from "@typegoose/typegoose";
import { SaloonForWoMenSchema } from "./saloon-for-women.schema";
export declare class SaloonForWomenService {
    private readonly saloonForWoMenModel;
    constructor(saloonForWoMenModel: ReturnModelType<typeof SaloonForWoMenSchema>);
    getSaloonDataForWomen(): Promise<(import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, SaloonForWoMenSchema> & Omit<SaloonForWoMenSchema & {
        _id: import("mongoose").Types.ObjectId;
    }, "typegooseName"> & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction)[]>;
}
