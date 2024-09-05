"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaloonForWomenService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_typegoose_1 = require("@m8a/nestjs-typegoose");
const saloon_for_women_schema_1 = require("./saloon-for-women.schema");
const saloon_for_women_json_1 = __importDefault(require("./saloon-for-women.json"));
let SaloonForWomenService = class SaloonForWomenService {
    constructor(saloonForWoMenModel) {
        this.saloonForWoMenModel = saloonForWoMenModel;
    }
    async getSaloonDataForWomen() {
        const data = saloon_for_women_json_1.default.map(({ name, image, description }) => ({
            name,
            image,
            description,
        }));
        const womenData = await this.saloonForWoMenModel.create();
        return womenData;
    }
};
exports.SaloonForWomenService = SaloonForWomenService;
exports.SaloonForWomenService = SaloonForWomenService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_typegoose_1.InjectModel)(saloon_for_women_schema_1.SaloonForWoMenSchema)),
    __metadata("design:paramtypes", [Object])
], SaloonForWomenService);
//# sourceMappingURL=salon-for-women.service.js.map