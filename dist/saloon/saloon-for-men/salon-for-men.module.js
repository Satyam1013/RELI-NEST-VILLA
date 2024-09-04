"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaloonForMenModule = void 0;
const common_1 = require("@nestjs/common");
const salon_for_men_service_1 = require("./salon-for-men.service");
const salon_for_men_controller_1 = require("./salon-for-men.controller");
let SaloonForMenModule = class SaloonForMenModule {
};
exports.SaloonForMenModule = SaloonForMenModule;
exports.SaloonForMenModule = SaloonForMenModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [salon_for_men_controller_1.SaloonForMenController],
        providers: [salon_for_men_service_1.SaloonForMenService],
    })
], SaloonForMenModule);
//# sourceMappingURL=salon-for-men.module.js.map