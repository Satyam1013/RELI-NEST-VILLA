import { SaloonForWomenService } from "./salon-for-women.service";
export declare class SaloonForWomenController {
    private readonly saloonForWomenService;
    constructor(saloonForWomenService: SaloonForWomenService);
    getSaloonDataForWomen(): Promise<(import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, import("./saloon-for-women.schema").SaloonForWoMenSchema> & Omit<import("./saloon-for-women.schema").SaloonForWoMenSchema & {
        _id: import("mongoose").Types.ObjectId;
    }, "typegooseName"> & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction)[]>;
}
