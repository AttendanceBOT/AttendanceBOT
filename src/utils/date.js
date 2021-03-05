"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateFormat = void 0;
const inversify_1 = require("inversify");
const date_fns_1 = require("date-fns");
const locale_1 = require("date-fns/locale");
let DateFormat = class DateFormat {
    dateFR() {
        return date_fns_1.format(new Date(), 'dd/MM/yyyy HH:mm:ss', { locale: locale_1.fr });
    }
    monthAPI() {
        return date_fns_1.format(new Date(), 'M');
    }
    dayAPI() {
        return date_fns_1.format(new Date(), 'd');
    }
};
DateFormat = __decorate([
    inversify_1.injectable()
], DateFormat);
exports.DateFormat = DateFormat;
//# sourceMappingURL=date.js.map